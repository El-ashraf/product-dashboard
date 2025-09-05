// src/components/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import { Heart, Loader2, ArrowLeft, Check } from "lucide-react";
import { isInCart } from "../utils/cartHelpers";

const ProductDetail = ({ addToCart, cart }) => {
  const { productId } = useParams();
  const product = productsData.products.find(
    (p) => p.id === parseInt(productId)
  );
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 font-medium inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setAddingToCart(true);
    addToCart({ ...product, quantity });
    setTimeout(() => setAddingToCart(false), 500);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const inCart = isInCart(cart, product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* ✅ Product Image */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center p-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* ✅ Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{product.name}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
          <div className="mt-4 flex items-center">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>
            {inCart && (
              <span className="ml-4 inline-flex items-center text-green-600 text-sm font-medium">
                <Check className="w-4 h-4 mr-1" /> In Cart
              </span>
            )}
          </div>
          <p
            className={`mt-2 ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* ✅ Quantity + Add to Cart */}
          <div className="flex items-center mt-8">
            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg">
              <button
                className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="px-4 py-2 text-gray-800 dark:text-gray-100">{quantity}</span>
              <button
                className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <button
              onClick={() => !inCart && handleAddToCart()}
              disabled={!product.inStock || addingToCart}
              className={`ml-4 px-6 py-3 rounded-lg font-medium flex-1 ${
                product.inStock
                  ? inCart
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-300 cursor-not-allowed"
              }`}
            >
              {addingToCart ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                  Adding...
                </>
              ) : product.inStock ? (
                inCart ? "In Cart" : "Add to Cart"
              ) : (
                "Out of Stock"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
