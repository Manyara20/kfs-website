"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function KFSDivisionsPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const departments = [
    "Economics Department",
    "Inventory Department",
    "Roads and Infrastructure Department",
    "Reforestation Department",
    "Sawmill Department",
  ];

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
          className="absolute inset-0 bg-no-repeat opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
         className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30">
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            Plantation Divion: Managing Kenya's Forests
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            The Plantation Division of the Kenya Forest Service (KFS) is responsible for managing
            all plantations across the country and coordinating tree planting through the PELIS
            programme, as mandated by the Forest Conservation and Management Act 2016.
          </p>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            This division ensures sustainable forest management and supports Kenya’s goal of
            increasing forest cover, executed through the following departments:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
            {departments.map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                style={{ fontSize: `${fontSize * 0.85}px` }}
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                  {dept}
                </span>
              </li>
            ))}
          </ul>

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