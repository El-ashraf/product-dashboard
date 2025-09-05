// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productsData from "./data/products.json"; // ✅ Import products.json

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Categories from "./components/Categories";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

// ✅ Only keep Dashboard
import Dashboard from "./components/Dashboard";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // ✅ Update quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
      toast.info(`${product.name} Already in cart 🛒`);
    } else {
      // ✅ Add new product with default quantity = 1
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
      toast.success(`${product.name} added to cart ✅`);
    }
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
      toast.warn("Removed from favorites ❤️‍🩹");
    } else {
      setFavorites([...favorites, productId]);
      toast.success("Added to favorites ❤️");
    }
  };

  return (
    <Router>
      {/* ✅ Added dark mode support here */}
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header cart={cart} />
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              {/* ✅ Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* ✅ Product pages */}
              <Route
                path="/products"
                element={
                  <ProductList
                    products={productsData.products}
                    addToCart={addToCart}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                    cart={cart}
                  />
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <ProductDetail
                    products={productsData.products}
                    addToCart={addToCart}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                    cart={cart}
                  />
                }
              />

              {/* ✅ Other sections */}
              <Route path="/categories" element={<Categories />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>

        {/* Toast container will look good in both modes */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" // ✅ adapts to dark/light automatically
        />
      </div>
    </Router>
  );
}

export default App;
