"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use any icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full px-5  bg-black text-white md:bg-transparent md:text-black">
      <div className="flex justify-between items-center px-4 py-4 md:py-6">
        <div className="text-2xl font-bold">Kaábo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link href="#" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:underline">
              The Káàbò Experience
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Catalogue
            </Link>
          </li>
        </ul>

        {/* Enroll Button (Desktop) */}
        <button className="hidden md:block bg-white text-black border border-orange-500 rounded-full px-5 py-2 hover:bg-orange-100">
          ENROLL NOW
        </button>

        {/* Hamburger (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-green-600 text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center text-center space-y-6 py-6 px-4">
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              The Káàbò Experience
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Our Vision
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Catalogue
            </Link>
          </li>
          <li>
            <button className="bg-white text-green-600 px-4 py-2 rounded-full w-full max-w-xs">
              ENROLL NOW
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
