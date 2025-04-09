"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io"; // Updated to match DFCMPage
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function StrategyPartnershipsPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const departments = [
    "Department of Partnerships and Resource Mobilization",
    "Department of Enterprise and Marketing",
    "Department of Planning, M&E and Performance Management",
    "Department of Quality Assurance",
  ];

  useEffect(() => {
    setIsVisible(true); // Fade-in effect on load
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize)); // Limit between 12px and 20px
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Updated duration to match DFCMPage
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Page Container */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 w-full mx-auto relative z-10 border border-white/30 rounded-none" // Updated to match DFCMPage (removed rounded-xl)
          style={{ maxWidth: "900px" }} // Updated from max-w-2xl to 900px to match DFCMPage
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <h1 className="text-[1.8rem] font-bold text-[#0f5a28] mb-8 leading-[1.3] tracking-[0.5px] capitalize">
            Directorate of Strategy, Partnerships & Resource Mobilization
          </h1>
          <p className="text-[0.9rem] text-[#000] leading-[1.8] mb-8" style={{ wordSpacing: "0.15rem" }}>
            The Directorate is responsible for guiding the organization in setting the Strategic direction to take in the execution of her mandate in order to succeed. It guides in establishing priorities and developing corporate strategies which are harmonized with the National Development plans. It ensures that the Service uses current technologies in Forest management and complies with the quality Management standards.
          </p>
          <p className="text-[0.9rem] text-[#000] leading-[1.8] mb-8" style={{ wordSpacing: "0.15rem" }}>
            The directorate will also guide the Service in the implementation of quality management systems under ISO and risk-based strategies. It is further responsible for managing partnerships and mobilizing resources for the Service’ core programmes operations.
          </p>
          <p className="text-[0.9rem] text-[#000] leading-[1.8] mb-8" style={{ wordSpacing: "0.15rem" }}>
            It executes this mandate through the following Departments:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Updated gap to 1.5rem (gap-6) */}
            {departments.map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] text-white p-6 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 capitalize" // Updated padding to 1.5rem (p-6), hover effects to match DFCMPage
              >
                <span className="text-[0.85rem] leading-[1.6]" style={{ wordSpacing: "0.1rem" }}>
                  {dept}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[0.9rem] text-[#000] leading-[1.8] mt-2" style={{ wordSpacing: "0.15rem" }}>
            Explore our ongoing efforts and updates below.
          </p>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-20"> {/* Updated gap to space-y-2 to match DFCMPage */}
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" /> {/* Updated icon to match DFCMPage */}
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" /> {/* Updated icon to match DFCMPage */}
          </button>
        </div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}