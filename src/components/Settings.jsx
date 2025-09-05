// src/components/Settings.jsx
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi"; // ✅ Import icons

const Settings = () => {
  const { darkMode, setDarkMode } = useTheme();

  const [settings, setSettings] = useState({
    notifications: true,
    newsletter: false,
    darkMode: false,
    autoSave: true,
  });

  useEffect(() => {
    setSettings((prev) => ({ ...prev, darkMode }));
  }, [darkMode]);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "darkMode") {
      setDarkMode(checked);
      setSettings((prev) => ({ ...prev, darkMode: checked }));
      return;
    }

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Settings
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Preferences
        </h3>

        <div className="space-y-4">
          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Email Notifications
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive updates about your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Newsletter
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive our monthly newsletter
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={settings.newsletter}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          {/* ✅ Dark Mode with Icons */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Dark Mode
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Switch to dark theme
              </p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Auto Save */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Auto Save
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Automatically save changes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="autoSave"
                checked={settings.autoSave}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Account
          </h3>
          <button className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
