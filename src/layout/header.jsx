import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/theme"; // Import only ThemeContext, UiThemeProvider is for wrapping
import { fadeIn } from "../motion/motion";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header
     variants={fadeIn('down',0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    
     className="fixed top-0 left-0 z-20 w-full px-5 transition-colors duration-300 bg-white shadow-sm dark:bg-gray-800 dark:shadow-lg">
      <div className="container flex items-center justify-between py-4 mx-auto">
        {/* Name/Logo on the left */}
        <div className="flex items-center gap-3">
          {/* logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-3 h-3 transition-opacity bg-blue-600 rounded-full opacity-75 hover:opacity-100"></div>
            <div className="w-3 h-3 -ml-2 transition-opacity bg-red-500 rounded-full opacity-100 hover:opacity-75"></div>
          </div>
        <h1 className="text-lg text-black dark:text-white">Viraj </h1>
        </div>

        {/* Navigation menu on the right */}
        <nav>
          <ul className="items-center hidden gap-8 md:flex ">
            {/* Added dark:text-white to navigation links */}
            <li className="font-semibold text-black dark:text-white text-button-p">
              <a href="#home">Home</a>
            </li>
            <li className="font-semibold text-black dark:text-white text-button-p">
              <a href="#skill">Skills</a>
            </li>
            <li className="font-semibold text-black dark:text-white text-button-p">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-semibold text-black dark:text-white text-button-p">
              <a href="#about">About</a>
            </li>
            {/* Dark mode toggle icon */}
            <li
              className="text-2xl text-black cursor-pointer dark:text-yellow-400"
              onClick={toggleTheme}
            >
              {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
            </li>
          </ul>
        </nav>

        {/* mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className="text-black dark:text-white md:hidden focus:outline-none"
        >
          {IsOpen ? <RiCloseFill size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {IsOpen && (
        <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full mt-10 space-y-8 transition-colors duration-300 bg-white dark:bg-gray-900 md:hidden">
          <ul className="space-y-8 text-center">
            {/* Added dark:text-white to mobile navigation links */}
            <li className="font-semibold text-black text-button-p dark:text-white">
              <a onClick={() => setIsOpen(false)} href="#home">
                Home
              </a>
            </li>
            <li className="font-semibold text-black text-button-p dark:text-white">
              <a onClick={() => setIsOpen(false)} href="#about">
                About
              </a>
            </li>
            <li className="font-semibold text-black text-button-p dark:text-white">
              <a onClick={() => setIsOpen(false)} href="#skills">
                Skills
              </a>
            </li>
            <li className="font-semibold text-black text-button-p dark:text-white">
              <a onClick={() => setIsOpen(false)} href="#contact">
                Contact
              </a>
            </li>
            {/* Dark mode toggle for mobile menu */}
            <li
              className="text-2xl text-black cursor-pointer dark:text-yellow-400"
              onClick={toggleTheme}
            >
              {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
