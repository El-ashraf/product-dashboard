// src/components/Analytics.jsx
import React from 'react';

const Analytics = () => {
  // Mock data for charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [65, 59, 80, 81, 56, 55]
  };
  
  const categoryData = [
    { name: 'Audio', value: 25, color: 'bg-indigo-500' },
    { name: 'Accessories', value: 40, color: 'bg-green-500' },
    { name: 'Wearables', value: 20, color: 'bg-yellow-500' },
    { name: 'Displays', value: 15, color: 'bg-red-500' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-indigo-600">$24,568</p>
          <p className="text-sm text-green-600">+12.5% from last month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-600">112</p>
          <p className="text-sm text-green-600">+8 new this month</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Orders</h3>
          <p className="text-3xl font-bold text-indigo-600">284</p>
          <p className="text-sm text-green-600">+24% from last month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Sales Overview</h3>
          <div className="h-64 flex items-end space-x-2">
            {salesData.values.map((value, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-indigo-500 rounded-t-md"
                  style={{ height: `${value}%` }}
                ></div>
                <span className="text-xs mt-2 dark:text-gray-300">{salesData.labels[index]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Products by Category</h3>
          <div className="space-y-3">
            {categoryData.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm dark:text-gray-300">{category.name}</span>
                  <span className="text-sm font-medium dark:text-gray-100">{category.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${category.color} h-2 rounded-full`}
                    style={{ width: `${category.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
