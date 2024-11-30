import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imagePath = require("../assets/images/logo-white.webp");
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="flex items-center justify-between p-5 text-white relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src={imagePath} alt="Logo" className="h-12 mr-8" />
          </div>

          {/* Menu Items */}
          <nav className="hidden lg:flex space-x-6 justify-center items-center">
            <a href="/other/membership" className="hover:text-blue-400">Membership</a>
            <a href="/other/upcoming-events" className="hover:text-blue-400">Events</a>
            <a href="#benefits" className="hover:text-blue-400">Benefits</a>
            <a href="#partnership" className="hover:text-blue-400">Partnership</a>
          </nav>

          {/* Right Side - Search Icon and Buttons */}
          <div className="flex items-center justify-center space-x-4">
            {/* Sliding Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className={`absolute top-0 h-full right-[20px] ${
                  isSearchOpen ? 'w-48 px-2 py-1' : 'w-0'
                } bg-white text-black placeholder-gray-500 rounded-l transition-all duration-300 ease-in-out focus:outline-none`}
                style={{
                  overflow: 'hidden',
                  opacity: isSearchOpen ? 1 : 0,
                }}
              />
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white focus:outline-none relative"
              >
                <FaSearch />
              </button>
            </div>

            {/* Login and Signup Buttons */}
            <button className="px-6 py-2 rounded-full bg-[#c44569] uppercase">Login</button>
            <button className="px-6 py-2 bg-transparent border-[2px]
             border-[#c44569] rounded-full uppercase"><Link to={"/member-details"}>Signup</Link></button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
