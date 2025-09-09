import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../Context/AuthProvider";
import logo from "../assets/image.png";
import Logout from "./Logout";

const Navbar = () => {
  const [user] = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex bg-white opacity-95 h-[70px] w-full justify-between items-center px-4 md:px-10 fixed top-0 left-0 right-0 z-20 shadow-lg shadow-[#c3e5eb]">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 mr-1" />
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
          Tranquilo
        </h1>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8 text-[#1DCD9F]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <ul className="flex space-x-6">
          <ScrollLink
            to="Features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="HowItWork"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            How It Works
          </ScrollLink>
          <RouterLink
            to="/feedback"
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            Feedback
          </RouterLink>
        </ul>
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex space-x-4">
        {!user ? (
          <RouterLink
            to="/login"
            className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F] transition duration-300"
          >
            Login
          </RouterLink>
        ) : (
          <Logout />
        )}
        <RouterLink
          to="/chat"
          className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer transition duration-300 hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F]"
        >
          Get Started
        </RouterLink>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-6 bg-white shadow-lg absolute top-[70px] left-0 w-full z-30">
          <ScrollLink
            to="Features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="HowItWork"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </ScrollLink>
          <RouterLink
            to="/feedback"
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Feedback
          </RouterLink>

          {/* Auth for Mobile */}
          {/* {!user ? (
            <RouterLink
              to="/login"
              className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F] transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </RouterLink>
          ) : (
            <Logout />
          )} */}
          {/* <RouterLink
            to="/chat"
            className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer transition duration-300 hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F]"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </RouterLink> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
