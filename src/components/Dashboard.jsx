import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Sales", value: "$12,340", change: "+12%" },
    { title: "Orders", value: "1,240", change: "+8%" },
    { title: "Products", value: "320", change: "+5%" },
    { title: "Customers", value: "890", change: "+10%" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📊 Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 text-sm">{stat.title}</h2>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <span className="text-green-600 text-sm">{stat.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
