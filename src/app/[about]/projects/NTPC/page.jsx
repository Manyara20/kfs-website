"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function NTPCDocumentsPage() {
  const documents = [
    {
      title: "National Tree Planting Campaign",
      fileSize: "2 MB",
      link: "/path/to/ic-fra-report-2024.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative overflow-hidden"
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
        <div className="max-w-[1200px] mx-auto p-[3rem_1rem] relative z-10">
          <h1 className="font-['Poppins',sans-serif] font-bold text-5xl text-white text-center mb-12 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] leading-[1.2] tracking-[0.5px]">
            NTPC Documents
          </h1>
          <div>
            {documents.map((document, index) => (
              <motion.div
                key={index}
                className="bg-white/95 rounded-xl p-6 flex justify-between items-center shadow-[0_6px_12px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] mb-6 sm:flex-row flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="flex items-center gap-4">
                  <IoDocumentTextOutline className="text-[#0f5a28] text-[2rem]" />
                  <div>
                    <h2 className="font-['Peugeot',sans-serif] font-semibold text-[1.25rem] text-[#0f5a28]">
                      {document.title}
                    </h2>
                    <p className="font-['Peugeot',sans-serif] font-normal text-sm text-[#666]">
                      1 file(s) {document.fileSize}
                    </p>
                  </div>
                </div>
                <Link href={document.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0f5a28] text-white font-['Peugeot',sans-serif] text-sm py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all">
                    Download 
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}