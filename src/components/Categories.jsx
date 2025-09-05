// src/components/Categories.jsx
import React, { useState } from 'react';
import productsData from '../data/products.json';
import { handleImageError } from '../utils/placeholder';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const products = Array.isArray(productsData.products) ? productsData.products : [];
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category).filter(Boolean)))];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Product Categories</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory} 
          <span className="text-gray-500 dark:text-gray-400 ml-2">({filteredProducts.length} items)</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-16 h-16 object-cover rounded-md mr-4"
                  onError={(e) => handleImageError(e, 64, 64, product.name)}
                />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">{product.name}</h4>
                  <p className="text-indigo-600 font-semibold">${product.price}</p>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
