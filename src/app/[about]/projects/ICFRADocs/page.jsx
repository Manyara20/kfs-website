"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function ICFRADocumentsPage() {
  const documents = [
    {
      title: "Field Manual for Biophysical Forest Resources Assessment in Kenya",
      fileSize: "1.5 MB",
      link: "/documents/field-manual-biophysical-forest-resources-assessment.pdf",
    },
    {
      title: "Field Manual for Tree Volume and Biomass Modelling",
      fileSize: "1.2 MB",
      link: "/documents/field-manual-tree-volume-biomass-modelling.pdf",
    },
    {
      title: "Field Manual for LiDAR Assisted Estimation of Forest Resources in Kenya",
      fileSize: "2.0 MB",
      link: "/documents/field-manual-lidar-assisted-estimation.pdf",
    },
    {
      title: "Technical Report on Sampling Design Simulations for National Forest Resources Assessment in Kenya",
      fileSize: "1.8 MB",
      link: "/documents/technical-report-sampling-design-simulations.pdf",
    },
    {
      title: "Proposal for National Forest Resources Assessment in Kenya (NFRA) Technical Report on the Pilot Inventory",
      fileSize: "2.5 MB",
      link: "/documents/proposal-nfra-technical-report-pilot-inventory.pdf",
    },
    {
      title: "Manual for Preparation and Organic Carbon Analyses from Forest Soil and Mangrove Sediment Samples",
      fileSize: "1.3 MB",
      link: "/documents/manual-organic-carbon-analyses.pdf",
    },
    {
      title: "Technical Report on LiDAR Assisted Estimation of Forest Resources in Kenya",
      fileSize: "2.0 MB",
      link: "/documents/technical-report-lidar-assisted-estimation.pdf",
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
        <div className="max-w-6xl mx-auto p-12 relative z-10">
          <h1 className="font-['Peugeot',sans-serif] font-bold text-5xl text-white text-center mb-12 drop-shadow-md">
            IC-FRA Operating Documents
          </h1>
          <div>
            {documents.map((document, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-95 rounded-xl p-6 flex justify-between items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl mb-6 md:flex-row flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="flex items-center gap-4">
                  <IoDocumentTextOutline className="text-[#0f5a28] text-4xl" />
                  <div>
                    <h2 className="font-['Peugeot',sans-serif] font-semibold text-xl text-[#0f5a28] mb-1">
                      {document.title}
                    </h2>
                    <p className="font-['Peugeot',sans-serif] text-sm text-gray-600">
                      1 file(s) {document.fileSize}
                    </p>
                  </div>
                </div>
                <Link href={document.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0f5a28] text-white font-['Peugeot',sans-serif] text-sm py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-md transition-all">
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