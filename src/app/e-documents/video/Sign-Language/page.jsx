"use client";

import React from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const SignLanguageServiceCharter = () => {
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

        {/* Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-2xl w-full relative z-10 border border-white/30"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] text-shadow-md mb-6 leading-tight tracking-wide">
            Sign Language Service Charter
          </h1>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            Kenya Forest Service (KFS) is committed to providing accessible services to all, including individuals with hearing impairments. Our Sign Language Service Charter ensures effective communication and inclusion in all our service delivery points.
          </p>
          <p className="text-lg text-[#333] leading-relaxed mb-6">Watch Our Sign Language Charter Video:</p>
          <div className="w-full">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/KvN91WesnzA"
              title="Sign Language Service Charter"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
};

export default SignLanguageServiceCharter;