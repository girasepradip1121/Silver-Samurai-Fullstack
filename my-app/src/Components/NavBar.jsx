"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-gray-200 py-2 px-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-[150px] h-[60px]">
          <img src="/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/product"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            Product
          </Link>
          <Link
            to="/service"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-[#EC268F] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-[#EC268F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link to="/" className="text-black py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-[#EC268F] transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/product"
              className="text-black hover:text-[#EC268F] transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Product
            </Link>
            <Link
              to="/service"
              className="text-black hover:text-[#EC268F] transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-black hover:text-[#EC268F] transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-[#EC268F] transition-colors duration-300 py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
