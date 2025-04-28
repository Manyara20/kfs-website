"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function GreenZonesProjectPage() {
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
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-white/95 p-12 max-w-[900px] w-full relative z-10 border border-white/30"
        >
          <h1
            className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mb-8 text-[1.8rem] leading-[1.3] tracking-[0.5px] capitalize"
            style={{ fontSize: `${fontSize}px` }}
          >
            Green Zones Development Support Project
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            The Green Zones Development Support Project aims to promote conservation
            and sustainable management of forest resources while improving the
            livelihoods of communities living around forests.
          </p>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            It focuses on the following key areas:
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            <div
              className="bg-[#1a3c34] p-6 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-md"
              style={{ fontSize: `${fontSize * 0.85}px` }}
            >
              <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                Afforestation and Reforestation Programs
              </span>
            </div>
            <div
              className="bg-[#1a3c34] p-6 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-md"
              style={{ fontSize: `${fontSize * 0.85}px` }}
            >
              <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                Community Empowerment and Livelihood Support
              </span>
            </div>
            <div
              className="bg-[#1a3c34] p-6 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-md"
              style={{ fontSize: `${fontSize * 0.85}px` }}
            >
              <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                Watershed Management and Soil Conservation
              </span>
            </div>
            <div
              className="bg-[#1a3c34] p-6 transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-md"
              style={{ fontSize: `${fontSize * 0.85}px` }}
            >
              <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                Sustainable Agroforestry Practices
              </span>
            </div>
          </div>
        </motion.div>

        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
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