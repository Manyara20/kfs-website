"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle, IoMdAdd, IoMdRemove } from "react-icons/io";
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-2xl w-full relative z-10 border border-white/30 rounded-xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          style={{ fontSize: `${fontSize}px` }}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] mb-6 leading-tight tracking-wide">
            Directorate of Strategy, Partnerships & Resource Mobilization
          </h1>
          <p className="text-lg text-[#000] leading-relaxed mb-6">
            The Directorate is responsible for guiding the organization in setting the Strategic direction to take in the execution of her mandate in order to succeed. It guides in establishing priorities and developing corporate strategies which are harmonized with the National Development plans. It ensures that the Service uses current technologies in Forest management and complies with the quality Management standards.
          </p>
          <p className="text-lg text-[#000] leading-relaxed mb-6">
            The directorate will also guide the Service in the implementation of quality management systems under ISO and risk-based strategies. It is further responsible for managing partnerships and mobilizing resources for the Service’ core programmes operations.
          </p>
          <p className="text-lg text-[#000] leading-relaxed mb-6">
            It executes this mandate through the following Departments:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] text-white p-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {dept}
              </li>
            ))}
          </ul>
          <p className="text-lg text-[#000] leading-relaxed mt-6">
            Explore our ongoing efforts and updates below.
          </p>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] text-white p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Increase font size"
          >
            <IoMdAdd className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] text-white p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Decrease font size"
          >
            <IoMdRemove className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}