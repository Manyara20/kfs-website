"use client";

import React from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function ParticipatoryForestManagementPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Placeholder download function (replace with actual file paths or logic)
  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
    // Example: window.open("/path/to/file.pdf", "_blank");
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

        {/* Social Icons */}
        <div className="absolute top-8 left-8 flex flex-col gap-4 z-20">
          {[
            { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
            { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
            { name: "YouTube", icon: "M22.54 6.42A2.78 2.78 0 0020 4.5C18.88 4 12 4 12 4s-6.88 0-8 1.5A2.78 2.78 0 001.46 6.42 29.94 29.94 0 000 12a29.94 29.94 0 001.46 5.58A2.78 2.78 0 004 19.5c1.12 1.5 8 1.5 8 1.5s6.88 0 8-1.5a2.78 2.78 0 002.54-1.92A29.94 29.94 0 0024 12a29.94 29.94 0 00-1.46-5.58zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" },
            { name: "Instagram", icon: "M12 2.16c3.21 0 3.58.01 4.85.07 1.27.06 2.14.26 2.9.56.78.3 1.44.71 2.1 1.37.66.66 1.07 1.32 1.37 2.1.3.76.5 1.63.56 2.9.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.06 1.27-.26 2.14-.56 2.9-.3.78-.71 1.44-1.37 2.1-.66.66-1.32 1.07-2.1 1.37-.76.3-1.63.5-2.9.56-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.27-.06-2.14-.26-2.9-.56-.78-.3-1.44-.71-2.1-1.37-.66-.66-1.07-1.32-1.37-2.1-.3-.76-.5-1.63-.56-2.9-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.06-1.27.26-2.14.56-2.9.3-.78.71-1.44 1.37-2.1.66-.66 1.32-1.07 2.1-1.37.76-.3 1.63-.5 2.9-.56 1.27-.06 1.64-.07 4.85-.07M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" },
          ].map((social, index) => (
            <button
              key={index}
              className="bg-white bg-opacity-90 text-[#0D3C00] p-2 rounded-full hover:bg-[#0D3C00] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label={`Visit our ${social.name} page`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={social.icon} />
              </svg>
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-2xl w-full relative z-10 border border-white/30 rounded-xl"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] text-shadow-md mb-6 leading-tight tracking-wide">
            Participatory Forest Management
          </h1>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            Kenya is endowed with a wide range of forest ecosystems ranging from montane rainforests, savannah woodlands, dry forests, and coastal forests and mangroves. The current forest cover of 7.2% of the land area of the country is still below the constitutional requirement of 10%. These forests have high species richness and endemism, which has made the country be classified as mega diverse. They rank high as the country’s natural asset, due to their environmental, life-supporting functions, and the provision of diverse goods and services.
          </p>

          <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Strategic Objective</h2>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            The Participatory Forest Management strategic objective is to enhance conservation, sustainable management, and utilization of forests by improving livelihoods in rural areas, conserving biodiversity while enhancing people’s livelihoods, and ensuring the sustainable use of forests.
          </p>

          <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Policy Goal & Objectives</h2>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            The overall policy goal of Participatory Forest Management is sustainable development, management, utilization, and conservation of forest resources and equitable sharing of accrued benefits for the present and future generations of the forest-adjacent communities and citizens at large.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4 text-[#0D3C00] text-base font-medium hover:from-[#C8E6C9] hover:to-[#A5D6A7] hover:-translate-y-1 hover:shadow-md transition-all">
              Increase and maintain tree and forest cover of at least ten percent of the land area of Kenya.
            </li>
          </ul>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Resources</h2>
            <ul className="space-y-2">
              {[
                { name: "Forest Management Agreements Register", size: "338.06 KB" },
                { name: "Forest Management Plans", size: "4.00 KB" },
              ].map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4 hover:from-[#C8E6C9] hover:to-[#A5D6A7] hover:-translate-y-1 hover:shadow-md transition-all"
                >
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
                    <div>
                      <p className="text-[#0D3C00] font-medium">{file.name}</p>
                      <p className="text-[#555] text-sm">1 file(s) {file.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(file.name)}
                    className="bg-[#0f5a28] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#388e3c] hover:shadow-md transition-all"
                  >
                    Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}