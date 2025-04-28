"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function ForesterMagazinePage() {
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

  const magazines = [
    {
      title: "Forester January-June 2024",
      fileSize: "31 MB",
      link: "/path/to/forester-jan-jun-2024.pdf",
    },
    {
      title: "Forester July-December 2023",
      fileSize: "58 MB",
      link: "/path/to/forester-jul-dec-2023.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <motion.div
          className="bg-white bg-opacity-95 p-12 max-w-3xl w-full relative z-10 border border-white/30"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          style={{ fontSize: `${fontSize}px` }}
        >
          <h1 className="text-[#0f5a28] font-bold text-3xl text-left mb-8 capitalize tracking-wide leading-relaxed">
            The Forester Magazine
          </h1>
          <p className="text-black text-sm leading-relaxed mb-8">
            Biannual Forestry Magazine of the Kenya Forest Service
          </p>

          <h2 className="text-[#0f5a28] font-bold text-xl mb-4 capitalize">
            Welcome to the latest edition of our biannual forestry magazine.
          </h2>
          <p className="text-black text-sm leading-relaxed mb-8">
            As we reflect on the past six months, we’re proud to share the significant strides
            made in Kenya’s forestry sector. In this issue, we spotlight several key events and
            initiatives that underscore our commitment to sustainable forest management and
            conservation.
          </p>
          <p className="text-black text-sm leading-relaxed mb-8">
            Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap
            that will guide our efforts in the coming years to enhance forest cover and promote
            sustainable utilization of forest resources.
          </p>
          <p className="text-black text-sm leading-relaxed mb-8">
            We also bring you highlights from the International Day of Forests celebrations, where
            we joined the global community in recognizing the vital role forests play in our lives
            and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an
            initiative that saw thousands of Kenyans come together to green our nation.
          </p>
          <p className="text-black text-sm leading-relaxed mb-8">
            This edition also features news on various Memoranda of Understanding signed with
            partner organizations, strengthening our collaborative efforts in forest conservation
            and management.
          </p>
          <p className="text-black text-sm leading-relaxed mb-8">
            These stories reflect our ongoing dedication to Kenya’s forests and the communities
            that depend on them. We hope this issue informs and inspires you to join us in our
            mission to protect and nurture our precious forest resources.
          </p>
          <h2 className="text-[#0f5a28] font-bold text-xl mb-4 capitalize">Happy reading!</h2>
          <p className="text-black text-sm leading-relaxed mb-8">Anne Kaari, ‘ndc‘ (K)</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {magazines.map((magazine, index) => (
              <div
                key={index}
                className="bg-[#1a3c34] p-6 flex justify-between items-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-white font-medium text-sm capitalize leading-relaxed">
                      {magazine.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      1 file(s) {magazine.fileSize}
                    </p>
                  </div>
                </div>
                <Link
                  href={magazine.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f5a28] text-white py-2 px-6 rounded-lg text-sm hover:bg-[#388e3c] hover:shadow-lg transition-all duration-300"
                >
                  Download
                </Link>
              </div>
            ))}
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