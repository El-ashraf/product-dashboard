// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Sales", value: "$12,340", change: "+12%" },
    { title: "Orders", value: "1,240", change: "+8%" },
    { title: "Products", value: "320", change: "+5%" },
    { title: "Customers", value: "890", change: "+10%" },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        📊 Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 sm:p-5 hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">{stat.title}</h2>
            <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
              {stat.value}
            </p>
            <span className="text-green-600 text-xs sm:text-sm">
              {stat.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
