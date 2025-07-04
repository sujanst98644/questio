import { PlusIcon, Search, SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white px-5 py-2 flex flex-col items-center sticky top-0 border-b border-gray-400">
      <main className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[30%]">
          <span className="text-xl font-bold text-blue-600">Questio</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-between px-4 w-[70%]">
          <div className="w-full max-w-prose px-3 py-2 border  rounded-full flex gap-2 bg-slate-200">
            <SearchIcon/>
            <input
            type="text"
            placeholder="Search questions..."
            className="px-2 focus:outline-none w-full"
            
          />
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:bg-slate-200 text-black px-4 py-2 rounded-full transition font-semibold flex flex-row gap-1 tracking-wide">
              <PlusIcon/> Post
            </button>
            <button className="border px-4 py-2 rounded-full bg-[#D93900] text-white font-semibold">
              Login
            </button>
          </div>
        </div>

        {/* Actions */}
      </main>
    </header>
  );
};

export default Header;
