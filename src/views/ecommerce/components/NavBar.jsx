import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50" alt="AgriBUS logo" className="h-10" />
        <h1 className="ml-2 text-2xl font-bold text-green-500">AgriBUS</h1>
      </div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <i className="fas fa-bell text-gray-500"></i>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-700">Thierry Muna</span>
        <i className="fas fa-caret-down text-gray-500"></i>
      </div>
    </nav>
  );
};

export default NavBar;
