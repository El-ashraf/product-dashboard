/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const StoreContext = createContext(undefined);

/**
 * Holds the shopping state shared by the catalog, product detail and header.
 * Lives above the router so it survives navigation between the marketing
 * pages and the dashboard.
 */
export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = useCallback((product) => {
    const quantity = product.quantity || 1;
    let alreadyPresent = false;

    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      alreadyPresent = Boolean(existing);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...current, { ...product, quantity }];
    });

    if (alreadyPresent) {
      toast.info(`${product.name} quantity updated`);
    } else {
      toast.success(`${product.name} added to the order`);
    }
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((current) => current.filter((item) => item.id !== productId));
  }, []);

  const toggleFavorite = useCallback((productId, productName) => {
    let wasFavorite = false;

    setFavorites((current) => {
      wasFavorite = current.includes(productId);
      return wasFavorite
        ? current.filter((id) => id !== productId)
        : [...current, productId];
    });

    const label = productName || "Item";
    if (wasFavorite) {
      toast.info(`${label} removed from your shortlist`);
    } else {
      toast.success(`${label} saved to your shortlist`);
    }
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      cartCount,
      cartTotal,
      favorites,
      addToCart,
      removeFromCart,
      toggleFavorite,
    }),
    [cart, cartCount, cartTotal, favorites, addToCart, removeFromCart, toggleFavorite]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside a StoreProvider");
  return context;
};
