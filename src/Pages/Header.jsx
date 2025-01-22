import React, { useState } from 'react';
import Logo from "../Images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className=" w-full bg-[#E6F2EF] z-50 top-0 shadow-md font-['Orbitron'] fixed m-0 p-0">
        <div className="flex justify-between items-center h-24 px-6 md:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img src={Logo} alt="Logo" className="h-20 w-20 md:h-24 md:w-24" />
            </a>
            <a href="/" className="ml-3 text-darkblue text-xl md:text-2xl font-bold font-orbitron">
              Dhwani EXIM
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 text-lg font-medium font-orbitron">
            <li>
              <a href="/" className="hover:bg-lightgreen px-4 py-2 rounded-full">Home</a>
            </li>
            <li>
              <a href="/product" className="hover:bg-lightgreen px-4 py-2 rounded-full">Products</a>
            </li>
            <li>
              <a href="#about" className="bg-lightgreen px-4 py-2 rounded-full">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-lightgreen px-4 py-2 rounded-full">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl text-darkblue focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-aliceblue py-6 space-y-4 font-orbitron">
            <li>
              <a href="/" onClick={toggleMobileMenu} className="hover:bg-lightgreen px-4 py-2 rounded-full">
                Home
              </a>
            </li>
            <li>
              <a href="/product" onClick={toggleMobileMenu} className="hover:bg-lightgreen px-4 py-2 rounded-full">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMobileMenu} className="hover:bg-lightgreen px-4 py-2 rounded-full">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMobileMenu} className="bg-lightgreen px-4 py-2 rounded-full">
                About
              </a>
            </li>
          </ul>
        )}
      </nav>

      <hr className="mt-24" />
    </>
  );
};

export default Header;
