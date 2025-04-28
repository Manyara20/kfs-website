"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function CorporateServicesPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      
      {/* Main Content */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 bg-repeat opacity-5"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leaf.png')" }}
        ></div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative bg-white/95 border border-white/30 p-12 max-w-4xl w-full z-10"
        >
          {/* Title */}
          <h1 className="font-bold text-3xl text-[#0f5a28] mb-8 capitalize leading-snug tracking-wide">
            Corporate Service
          </h1>

          {/* Description */}
          <p className="text-black text-[0.9rem] leading-relaxed space-y-6 mb-6">
            Corporate Service Directorate is established to ensure prudent utilization of financial resources, aligning human resources strategy of the organization, infrastructure management, leveraging on ICT technology and enhancing the image and communication of the organization.
          </p>
          <p className="text-black text-[0.9rem] leading-relaxed space-y-6 mb-6">
            It executes this mandate through the following departments:
          </p>

          {/* Department List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <p className="font-medium text-[0.85rem] leading-6 tracking-wide capitalize">
                Department of Finance and Accounts
              </p>
            </div>
            <div className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <p className="font-medium text-[0.85rem] leading-6 tracking-wide capitalize">
                Department of Human Resource Management
              </p>
            </div>
            <div className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <p className="font-medium text-[0.85rem] leading-6 tracking-wide capitalize">
                Department of Administration and Infrastructure Development
              </p>
            </div>
            <div className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <p className="font-medium text-[0.85rem] leading-6 tracking-wide capitalize">
                Department of Information Communication Technology
              </p>
            </div>
            <div className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <p className="font-medium text-[0.85rem] leading-6 tracking-wide capitalize">
                Department of Corporate Communication
              </p>
            </div>
          </div>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}
