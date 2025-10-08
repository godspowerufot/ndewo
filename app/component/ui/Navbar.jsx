"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="relative w-full px-5 bg-black text-white md:bg-transparent md:text-black z-50">
        <div className="flex justify-between items-center px-4 py-4 md:py-6">
          <div className="text-2xl font-bold">Ndewo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a href="/" className="hover:underline cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="/experience" className="hover:underline cursor-pointer">
                The Ndewo Experience
              </a>
            </li>
            <li>
              <a href="/vision" className="hover:underline cursor-pointer">
                Our Vision
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline cursor-pointer">
                Catalogue
              </a>
            </li>
          </ul>

          {/* Enroll Button (Desktop) */}
          <button className="hidden md:block bg-white text-black border border-orange-500 rounded-full px-5 py-2 hover:bg-orange-100 transition-colors duration-300">
            ENROLL NOW
          </button>

          {/* Hamburger (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu - Full Screen Slide In */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gradient-to-br from-[#3C4220] via-[#4a5228] to-[#3C4220] z-[56] transition-transform duration-700 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-8">
          <ul className="flex flex-col items-center text-center space-y-10 w-full">
            <li
              className={`transition-all duration-700 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
            >
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-light hover:text-yellow-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li
              className={`transition-all duration-700 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
            >
              <a
                href="/experience"
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-light hover:text-yellow-300 transition-colors duration-300"
              >
                The Ndewo Experience
              </a>
            </li>
            <li
              className={`transition-all duration-700 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              <a
                href="/vision"
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-light hover:text-yellow-300 transition-colors duration-300"
              >
                Our Vision
              </a>
            </li>
            <li
              className={`transition-all duration-700 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
            >
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-light hover:text-yellow-300 transition-colors duration-300"
              >
                Catalogue
              </a>
            </li>
            <li
              className={`transition-all duration-700 mt-8 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            >
              <button className="bg-white text-[#3C4220] px-8 py-4 rounded-full text-xl font-semibold w-full max-w-xs hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg">
                ENROLL NOW
              </button>
            </li>
          </ul>
        </div>

        {/* Close Button in Menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white focus:outline-none hover:text-yellow-300 transition-colors duration-300"
        >
          <X size={36} strokeWidth={2} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
