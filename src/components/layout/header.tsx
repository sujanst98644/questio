import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white px-6 py-3 flex flex-col items-center">
      <main className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">Questio</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full max-w-md px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Post Question
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition">
            Sign Up / Login
          </button>
        </div>
      </main>
    </header>
  );
};

export default Header;
