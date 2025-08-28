import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { ThemeContext } from "../context/theme"; // Import only ThemeContext, UiThemeProvider is for wrapping

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 z-20 w-full px-5 transition-colors duration-300 bg-white shadow-sm dark:bg-gray-800 dark:shadow-lg">
      <div className="container flex items-center justify-between py-4 mx-auto">
        {/* Name/Logo on the left */}
        <h1 className="text-lg text-black dark:text-white">Viraj </h1>

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
            <li className="text-2xl text-black cursor-pointer dark:text-yellow-400" onClick={toggleTheme}>
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
            <li className="text-2xl text-black cursor-pointer dark:text-yellow-400" onClick={toggleTheme}>
              {theme === "light" ? <MdOutlineLightMode /> : <MdDarkMode />}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
