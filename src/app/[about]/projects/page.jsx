"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import Image from "next/image";

export default function projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const overviewSections = [
    "Forest conservation and livelihood support for climate change resilience.",
    "Community Empowerment and Livelihood Support",
    "Sustainable and inclusive value chain development.",
    "Project management and coordination.",
  ];

  const galleryImages = [
    {
      src: "/images/gz/GT1.jpg",
      alt: "Farmer Fish pond",
      caption: "Farmer Fish pond",
    },
    {
      src: "/images/Eco-tourism/KaruraForest/Yellow-breasted-Apalis_Karura-Forest-scaled.jpg",
      alt: "Bird watching in Karura Forest",
      caption: "Bird watching in Karura Forest",
    },
    {
      src: "/images/Eco-tourism/KaruraForest/Karura+Forest+Cave.jpeg",
      alt: "Mau Mau caves in Karura Forest",
      caption: "Mau Mau caves in Karura Forest",
    },
  ];

  const icfraDocuments = [
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

  const ntpcDocuments = [
    {
      title: "National Tree Planting Campaign",
      fileSize: "2 MB",
      link: "/path/to/ic-fra-report-2024.pdf",
    },
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />

      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('/images/background-template/background.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mb-8 text-[2.2rem] leading-[1.3] capitalize">
            Green Zones Development Support Project Phase 2
          </h1>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            {[
              { id: "overview", title: "Overview" },
              { id: "icfra", title: "IC-FRA Documents" },
              { id: "ntpc", title: "NTPC" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-[1rem] capitalize ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#0f5a28] text-[#0f5a28]"
                    : "text-[#333] hover:text-[#0f5a28]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-4">
                The African Development Bank Board approved the Green Zones Development Support Project (GZDSP II) on 3rd December 2019. Kenya Forest Service undertook this initiative to rehabilitate degraded forests and protect forested lands sustainably.
              </p>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-8">
                It focuses on the following key areas:
              </p>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
                {overviewSections.map((section, index) => (
                  <li
                    key={index}
                    className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                  >
                    <span className="text-white text-[0.95rem] leading-[1.6] capitalize block">
                      {section}
                    </span>
                  </li>
                ))}
              </ul>

              <section className="mt-12 mb-12">
                <h2 className="text-[#0f5a28] text-2xl mb-4 font-bold">
                  GreenZones II Photo Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative h-64 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={225}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                      <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* IC-FRA Tab */}
          {activeTab === "icfra" && (
            <div className="text-[#333] text-[1rem] leading-[1.8]">
              <h2 className="text-2xl font-bold text-[#0f5a28] mb-8 text-center">
                IC-FRA Operating Documents
              </h2>
              {icfraDocuments.map((document, index) => (
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
                      <h2 className="font-semibold text-xl text-[#0f5a28] mb-1">
                        {document.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        1 file(s) {document.fileSize}
                      </p>
                    </div>
                  </div>
                  <Link href={document.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#0f5a28] text-white text-sm py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-md transition-all">
                      Download
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* NTPC Tab */}
          {activeTab === "ntpc" && (
            <div className="text-[#333] text-[1rem] leading-[1.8]">
              <h2 className="text-2xl font-bold text-[#0f5a28] mb-8 text-center">
                National Tree Planting Campaign (NTPC) Documents
              </h2>
              {ntpcDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  className="bg-white/95 rounded-xl p-6 flex justify-between items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl mb-6 sm:flex-row flex-col gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="flex items-center gap-4">
                    <IoDocumentTextOutline className="text-[#0f5a28] text-4xl" />
                    <div>
                      <h2 className="font-semibold text-xl text-[#0f5a28] mb-1">
                        {document.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        1 file(s) {document.fileSize}
                      </p>
                    </div>
                  </div>
                  <Link href={document.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#0f5a28] text-white text-sm py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-md transition-all">
                      Download
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
}
