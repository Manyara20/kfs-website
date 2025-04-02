"use client";

import React from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function CustomerFeedbackPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-2xl w-full relative z-10 border border-white/30 rounded-xl"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] text-shadow-md mb-6 leading-tight tracking-wide">
            Customer Feedback
          </h1>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Resources</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4 hover:from-[#C8E6C9] hover:to-[#A5D6A7] hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-[#0D3C00]"
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
                  <p className="text-[#0D3C00] font-medium">Forest Management Survey</p>
                </div>
                <a
                  href="https://www.surveymonkey.com/r/NCPZPGG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f5a28] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#388e3c] hover:shadow-md transition-all"
                >
                  Take Survey
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}