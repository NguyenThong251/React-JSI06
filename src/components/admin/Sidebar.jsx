import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaUsers, FaCog } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="min-h-screen w-64 bg-gray-800 text-gray-200 shadow-lg">
      <div className="flex items-center justify-center py-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {/* Dashboard Link */}
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaHome className="w-5 h-5 mr-3" />
              Dashboard
            </NavLink>
          </li>

          {/* Products Link */}
          <li>
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaBox className="w-5 h-5 mr-3" />
              Products
            </NavLink>
          </li>

          {/* Users Link */}
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaUsers className="w-5 h-5 mr-3" />
              Users
            </NavLink>
          </li>

          {/* Settings Link */}
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaCog className="w-5 h-5 mr-3" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
