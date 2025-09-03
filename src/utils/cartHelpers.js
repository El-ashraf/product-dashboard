// utils/cartHelpers.js
export const isInCart = (cart, productId) => {
  return cart.some(item => item.id === productId);
};
