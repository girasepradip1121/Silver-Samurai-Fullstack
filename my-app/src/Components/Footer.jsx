"use client";
import { Link } from "react-router-dom";

import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#F1F5F9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center w-[150px] h-[60px]">
                <img src="/logo.svg" alt="Logo" />
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              Leading supplier of textile machinery and international trade
              solutions since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-black hover:text-[#EC268F] text-sm"
                >
                  Terms of Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/fb.svg"
                  alt="Facebook"
                  className="w-8 h-8 hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/in.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/insta.svg"
                  alt="Instagram"
                  className="w-8 h-8 hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/x.svg"
                  alt="Twitter"
                  className="w-8 h-8 hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-3">
                Subscribe to our newsletter for updates on new products and
                industry insights.
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded-l-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Vaibhav International. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Design by Godhani Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
