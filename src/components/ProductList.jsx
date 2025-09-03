import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isInCart } from "../utils/cartHelpers";

const ProductList = ({ products, cart, addToCart }) => {
  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // change as needed

  // ✅ Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="space-y-6">
      {/* ✅ Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => {
          const inCart = isInCart(cart, product.id);
          return (
            <div key={product.id} className="bg-white shadow rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-indigo-600 font-bold">${product.price}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm text-indigo-600"
                >
                  View Details
                </Link>
                <button
                  disabled={!product.inStock}
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    product.inStock
                      ? inCart
                        ? "bg-green-600 text-white cursor-default"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock
                    ? inCart
                      ? "In Cart"
                      : "Add to Cart"
                    : "Out of Stock"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
