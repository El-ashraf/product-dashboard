// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ user = { name: "John Doe", role: "Admin", initials: "JD" } }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { title: "Dashboard", path: "/", icon: "📊" },
    { title: "Products", path: "/products", icon: "📦" },
    { title: "Categories", path: "/categories", icon: "🏷️" },
    { title: "Analytics", path: "/analytics", icon: "📈" },
    { title: "Settings", path: "/settings", icon: "⚙️" },
  ];

  // Helper: checks if current path starts with menu path
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white dark:bg-gray-900 shadow-md dark:shadow-none min-h-screen flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Admin Dashboard</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/60 transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-5 flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                to={item.path}
                className={`flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-300 rounded-md mx-2 transition-colors ${
                  isActive(item.path)
                    ? "bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 font-medium"
                    : ""
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center">
        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mr-2">
          <span className="text-indigo-600 font-medium">{user.initials}</span>
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
