"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function DocumentsArchivePage() {
  const archiveDocuments = [
    { title: "Readiness Preparation Proposal (R-PP) Assessment Note", size: "13 MB", link: "#" },
    { title: "KFS Strategic Plan 2014 – 2017", size: "10 MB", link: "#" },
    { title: "Forest Products Market Analysis and Enterprise Development", size: "1 MB", link: "#" },
    { title: "Forests Conservation and Management Bill, 2014 (26-2-2014)", size: "689 KB", link: "#" },
    { title: "Natural Resource Management Project (NRMP) – Resettlement Policy Framework", size: "2 MB", link: "#" },
    { title: "Forests Act, 2005", size: "270 KB", link: "#" },
    { title: "Forest Policy, 2014 (Revised 20-2-2014)", size: "254 KB", link: "#" },
    { title: "Private Forest Registration Form For Forest Officers", size: "113 KB", link: "#" },
    { title: "Private Forest Registration Form For Forest Owners", size: "89 KB", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Page Container */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative overflow-hidden"
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

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto py-12 px-4 relative z-10">
          {/* Header Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-lg tracking-wide">
            Documents Archive
          </h1>

          {/* Documents Section */}
          <div>
            {archiveDocuments.map((doc, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-95 rounded-xl p-6 flex justify-between items-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6 md:flex-row flex-col gap-4"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
              >
                {/* Document Info */}
                <div className="flex items-center gap-6 flex-1">
                  {/* File Icon (SVG replacement for MUI Icon) */}
                  <svg
                    className="w-9 h-9 text-[#0f5a28] flex-shrink-0"
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
                  {/* Document Text */}
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-[#0f5a28] leading-tight">{doc.title}</h2>
                    <p className="text-sm text-[#666] mt-2">1 file(s) {doc.size}</p>
                  </div>
                </div>

                {/* Download Button */}
                <Link href={doc.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="bg-[#0f5a28] text-white py-2.5 px-7 rounded-lg text-sm font-medium hover:bg-[#1b7d3a] hover:scale-103 transition-all min-w-[120px]">
                    Download
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}