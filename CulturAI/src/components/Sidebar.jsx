import React, { useState } from 'react';
import { FaTachometerAlt, FaBullhorn, FaChartLine, FaFileAlt, FaCog, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-col h-screen bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} p-4 shadow-lg`}>
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="text-teal-400 mb-4 focus:outline-none hover:bg-gray-700 rounded p-2 transition duration-300"
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? '☰' : '✖️'}
      </button>

      {/* Logo or Title */}
      {!isCollapsed && (
        <div className="flex items-center mb-6">
          <h1 className="text-xl font-bold text-teal-400">Marketing</h1>
          <span className="text-xl font-bold text-teal-400 ml-1">Platform</span>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-grow">
        <ul className="space-y-4">
          {[
            { name: 'Dashboard', icon: <FaTachometerAlt className="w-5 h-5" /> },
            { name: 'Campaigns', icon: <FaBullhorn className="w-5 h-5" /> },
            { name: 'Analytics', icon: <FaChartLine className="w-5 h-5" /> },
            { name: 'Reports', icon: <FaFileAlt className="w-5 h-5" /> },
            { name: 'Settings', icon: <FaCog className="w-5 h-5" /> },
          ].map((item, index) => (
            <li 
              key={index} 
              className={`flex items-center space-x-2 rounded-lg p-2 transition duration-300 transform hover:scale-105 ${isCollapsed ? 'justify-center' : 'justify-start'} hover:bg-gray-700`}
            >
              {item.icon}
              {!isCollapsed && (
                <span className="text-lg transition duration-300 transform hover:translate-x-1">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto flex items-center space-x-2 hover:text-teal-400 transition duration-300">
        <FaUserCircle className="w-8 h-8" />
        {!isCollapsed && <span className="text-sm">User Name</span>}
      </div>
      <button className="flex items-center mt-4 space-x-2 text-red-500 hover:text-red-400 transition duration-300">
        <FaSignOutAlt className="w-5 h-5" />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
}

export default Sidebar;
