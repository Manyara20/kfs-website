"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWheelchair, FaEnvelope, FaIdBadge, FaTree } from "react-icons/fa";

const FloatingSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState(16); // Default font size in pixels
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isLinksUnderlined, setIsLinksUnderlined] = useState(false);

  // Function to increase text size
  const increaseText = () => {
    setTextSize((prev) => {
      const newSize = Math.min(prev + 2, 24); // Max size 24px
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
  };

  // Function to decrease text size
  const decreaseText = () => {
    setTextSize((prev) => {
      const newSize = Math.max(prev - 2, 12); // Min size 12px
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
  };

  // Function to toggle grayscale
  const toggleGrayscale = () => {
    setIsGrayscale((prev) => {
      const newState = !prev;
      document.body.style.filter = newState ? "grayscale(100%)" : "none";
      return newState;
    });
  };

  // Function to toggle links underline
  const toggleLinksUnderline = () => {
    setIsLinksUnderlined((prev) => {
      const newState = !prev;
      const links = document.getElementsByTagName("a");
      for (let link of links) {
        link.style.textDecoration = newState ? "underline" : "none";
      }
      return newState;
    });
  };

  // Function to reset all accessibility settings
  const resetSettings = () => {
    setTextSize(16);
    setIsGrayscale(false);
    setIsLinksUnderlined(false);
    document.documentElement.style.fontSize = "16px";
    document.body.style.filter = "none";
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      link.style.textDecoration = "none";
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 z-[1000]">
      {/* Accessibility Button with Hover Menu */}
      <div
        className="relative"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <div
          className="bg-[#1f5d2f] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center text-lg sm:text-xl md:text-2xl transition-all duration-300 cursor-pointer hover:bg-[#2a7a3d]"
        >
          <FaWheelchair />
        </div>
        {isMenuOpen && (
          <div className="absolute right-12 sm:right-14 md:right-16 top-0 bg-white border border-gray-300 shadow-lg w-40 sm:w-48 md:w-56 z-[1001]">
            <button
              onClick={increaseText}
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 w-full text-left text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base md:text-lg">🔍</span>
              Increase Text
            </button>
            <button
              onClick={decreaseText}
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 w-full text-left text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base md:text-lg">🔎</span>
              Decrease Text
            </button>
            <button
              onClick={toggleGrayscale}
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 w-full text-left text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base md:text-lg">🖼️</span>
              Grayscale
            </button>
            <button
              onClick={toggleLinksUnderline}
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 w-full text-left text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base md:text-lg">🔗</span>
              Links Underline
            </button>
            <button
              onClick={resetSettings}
              className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 w-full text-left text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="mr-1 sm:mr-2 text-sm sm:text-base md:text-lg">🔄</span>
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Other Sidebar Links */}
      <Link
        href="https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1f5d2f] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:bg-[#2a7a3d]"
      >
        <FaEnvelope />
      </Link>
      <Link
        href="https://enursery.kenyaforestservice.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1f5d2f] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:bg-[#2a7a3d]"
      >
        <FaIdBadge />
      </Link>
      <Link
        href="https://sawmillers.kenyaforestservice.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1f5d2f] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center text-lg sm:text-xl md:text-2xl transition-all duration-300 hover:bg-[#2a7a3d]"
      >
        <FaTree />
      </Link>
    </div>
  );
};

export default FloatingSidebar;