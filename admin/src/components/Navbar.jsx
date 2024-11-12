import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, Search, LogOut, User, Sun, Moon, Settings } from "lucide-react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="h-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 backdrop-blur-md border-b border-blue-200 flex items-center justify-between px-4 sticky top-0 z-40 shadow-sm">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl ml-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-sm bg-white"
          />
          <Search className="absolute left-3 top-2.5 text-blue-500" size={20} />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-xl hover:bg-blue-100/50 transition-all duration-200"
        >
          {isDark ? (
            <Sun className="text-blue-700" size={20} />
          ) : (
            <Moon className="text-blue-700" size={20} />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-xl hover:bg-blue-100/50 transition-all duration-200 relative">
          <Bell className="text-blue-700" size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-3 p-2 rounded-xl hover:bg-blue-100/50 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center shadow-md">
              <User className="text-white" size={18} />
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-800">
                Admin User
              </div>
              <div className="text-xs text-blue-600">admin@example.com</div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white border border-blue-200 py-1 overflow-hidden">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200"
              >
                <Settings size={16} className="mr-2 text-blue-600" />
                Profile Settings
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-200"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
