import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    // Main container for the footer, setting overall background and text color
    <div className="w-full py-8 lg:py-12  sm:px-4 md:px-8 lg:px-[150px] gap-2 flex flex-col bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300">
      <div className="container flex flex-col items-center justify-between gap-4 mx-auto mb-4 md:flex-row md:gap-0 md:mb-0">
        <div className="flex flex-col gap-1 mb-4 text-center md:mb-0 md:text-left">
          <p className="text-black text-hero-p dark:text-white">Viraj Jayakodi</p>
          <p className="text-gray-600 text-button-p dark:text-gray-400">Frontend Developer</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {/* Social icons with dark mode text color */}
          <FiGithub className="w-5 h-5 text-gray-800 cursor-pointer dark:text-white" />
          <FiLinkedin className="w-6 h-5 text-gray-800 cursor-pointer dark:text-white" />
          <FiMail className="w-6 h-5 text-gray-800 cursor-pointer dark:text-white" />
        </div>

        {/* Back to Top button with dark mode styling */}
        <button
          onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
          className="px-2 py-1 mt-3 font-semibold text-black transition-colors duration-300 bg-white border border-gray-400 rounded-lg cursor-pointer text-button-p md:mt-0 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
        >
          Back to Top
        </button>
      </div>

      {/* Horizontal rule with dark mode border color */}
      <hr className="border-gray-300 border-1-b dark:border-gray-700" />

      <div>
        {/* Copyright text with dark mode text color */}
        <p className="text-center text-gray-600 text-button-p dark:text-gray-400 ">
          © 2025 Viraj Jayakodi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
