"use client";
import { useState } from "react";
import Logo from "../../elements/logo/logo";
import NavLinks from "../../elements/NavLinks/NavLinks";
import { NavLinksData } from "../../elements/NavLinks/data";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-5 px-4">
        {/* Start logo */}
        <Logo/>
        {/* End logo */}
        
        {/* Desktop NavLinks */}
        <div className="hidden md:block">
          <NavLinks/>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {NavLinksData.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white text-xl font-bold hover:text-blue-400 transition-all duration-300 hover:tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
