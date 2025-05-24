import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../Context/AuthProvider";
import Logout from "./Logout";

const Navbar = () => {
  const [user, setUser] = useAuth();

  return (
    <div className="flex bg-white opacity-95 h-[70px] w-full justify-between items-center px-10 fixed top-0 left-0 right-0 z-20 shadow-lg shadow-[#c3e5eb]">
      <div className="flex items-center">
        <img
          src="./src/assets/image.png"
          alt="Logo"
          className="h-12 w-12 mr-1"
        />
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
          Tranquilo
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="flex space-x-6">
          <ScrollLink
            to="Features"
            smooth="true"
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="HowItWork"
            smooth="true"
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            How It Works
          </ScrollLink>
          <RouterLink
            to="/feedback"
            smooth="true"
            duration={500}
            className="cursor-pointer hover:text-[#1DCD9F] transition duration-300"
          >
            Feedback
          </RouterLink>
        </ul>
      </div>
      <div className="flex space-x-4">
          {!user ? (
            <>
              <RouterLink
                to="/login"
                className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F] transition duration-300"
              >
                Login
              </RouterLink>
            </>
          ) : (
            <Logout /> // when user is logged in, show logout button
          )}
        <RouterLink
          to="/chat"
          className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer transition duration-300 hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F]"
        >
          Get Started
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
