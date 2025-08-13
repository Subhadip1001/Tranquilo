import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <footer className="w-full bg-green-100 py-4 md:py-6 lg:py-8 rounded-t-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#1DCD9F] mb-4">CONTACT INFO</h4>

                    {/* Email Section */}
                    <div className="flex items-start space-x-3 mt-3">
                        <MdEmail className="w-5 h-5 text-[#1DCD9F] mt-1 flex-shrink-0" />
                        <div className="flex flex-col space-y-1">
                            <a href="mailto:tranquilo.1805@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors break-all">
                                tranquilo.1805@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Column for Company Links and Social Media Links */}
                <div className="flex flex-col">
                    {/* Company Links */}
                    <div className="mb-6">
                        <h4 className="text-xl md:text-2xl font-bold text-[#1DCD9F] mb-4">TRANQUILO</h4>
                        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-3 ">
                            <Link to="/" className="w-24 text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors">Home</Link>
                            <Link to="/feedback" className="w-24 text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors">Feedback</Link>
                            <Link to="/privacy-policy" className="w-32 text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#1DCD9F] mb-4">SOCIAL MEDIA</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <span>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-32 flex flex-row gap-2 p-2 text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors">
                                    <FiGithub size={20} />GitHub
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-32 flex flex-row gap-2 p-2 text-sm md:text-base text-gray-700 hover:text-[#1DCD9F] transition-colors">
                                    <FaLinkedinIn size={20} />LinkedIn
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            {/* Footer Bottom */}
            <div className="text-center mt-6">
                <p className="text-sm md:text-base text-gray-700">&copy; 2025 Tranquilo | All rights reserved</p>
            </div>
        </div>
    </footer>
);
};

export default Footer;