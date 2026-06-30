import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu_bar = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#education", label: "Education" },
    { id: "#skills", label: "Skills" },
  ];
  const design_menu =
    "px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50/80 transition-all duration-200";
  const design_menu_mobile =
    "block px-4 py-2.5 rounded-2xl text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 active:bg-indigo-50/50 transition-all duration-200";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-5xl w-[calc(100%-2rem)] rounded-3xl md:rounded-full bg-white/80 backdrop-blur-md border border-gray-100/50 shadow-md px-6 md:px-8 transition-all duration-300">
      <div className="flex justify-between h-16 items-center">
        {/* logo */}
        <div className="flex shrink-0">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-gray-950 hover:opacity-80 transition-opacity"
          >
            <h1>
              Phumrapee
              <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Profile
              </span>
            </h1>
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {menu_bar.map((menu, index) => (
            <a key={index} href={menu?.id} className={design_menu}>
              {menu.label}
            </a>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden pb-4 pt-2 space-y-1 border-t border-gray-100/50 mt-1`}
      >
        {menu_bar.map((menu, index) => (
          <a
            key={index}
            href={menu.id}
            onClick={() => setIsOpen(false)}
            className={design_menu_mobile}
          >
            {menu.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
