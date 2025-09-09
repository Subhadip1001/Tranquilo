import React from "react";
import logo from "../assets/image.png";
import Logout from "./Logout";

const Chat = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.fullname : "User";

  return (
    <div className="bg-green-50 min-h-screen w-full px-4 sm:px-6 lg:px-10 py-20 flex flex-col justify-center items-center gap-6">
      {/* Header with Logo + Logout */}
      <div className="w-full fixed top-4 left-0 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-[100px] lg:w-[100px]"
            src={logo}
            alt="logo"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
            Tranquilo
          </h1>
        </div>

        {/* Logout Button */}
        <div className="hidden sm:block">
          <Logout />
        </div>
      </div>

      {/* Mobile Logout (below header) */}
      <div className="sm:hidden fixed top-4 right-4">
        <Logout />
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col text-center mt-32 sm:mt-40 px-4 gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
          Welcome {userName}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
          Get Started with your Consultation
        </h2>
      </div>

      {/* Get Started Button */}
      <a
        href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/03/16/20250403165630-IPOLXNQ1.json"
        className="mt-6 px-6 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
    </div>
  );
};

export default Chat;
