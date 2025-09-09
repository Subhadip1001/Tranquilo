import React from "react";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-green-100 py-6 md:py-8 lg:py-10 rounded-t-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1DCD9F] mb-4">
              CONTACT INFO
            </h4>

            <div className="flex items-start space-x-3">
              <MdEmail className="w-5 h-5 text-[#1DCD9F] mt-1 flex-shrink-0" />
              <a
                href="mailto:tranquilo.1805@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors break-all"
              >
                tranquilo.1805@gmail.com
              </a>
            </div>
          </div>

          {/* Company Links + Social Media */}
          <div className="flex flex-col space-y-6">
            {/* Company Links */}
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1DCD9F] mb-4">
                TRANQUILO
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Link
                  to="/"
                  className="text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/feedback"
                  className="text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors"
                >
                  Feedback
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#1DCD9F] mb-4">
                SOCIAL MEDIA
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors"
                >
                  <FiGithub size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors"
                >
                  <FaLinkedinIn size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 border-t border-gray-300 pt-4">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">
            &copy; 2025 Tranquilo | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
