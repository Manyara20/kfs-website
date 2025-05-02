"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Helper function
const toProxyUrl = (url) => {
  const kfsBaseUrl = "https://www.kenyaforestservice.org/";
  if (url.startsWith(kfsBaseUrl)) {
    return url.replace(kfsBaseUrl, "/proxy/kfs/");
  }
  return url;
};

export default function FLEAAssessmentPage() {
  const [isVisible, setIsVisible] = useState(false);

  const sections = ["Background", "Objectives", "Methodology", "Results"];

  const imageUrls = [
    toProxyUrl("/images/FLEA-1.jpg"),
    toProxyUrl("/images/FLEA-2.jpg"),
    toProxyUrl("/images/FLEA-3.jpg"),
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          className="bg-white bg-opacity-50 p-12 shadow-lg rounded-none"
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            Forest Landscape and Ecological Assessment (FLEA)
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The Forest Landscape and Ecological Assessment (FLEA) is a strategic initiative by the Kenya Forest Service (KFS) to evaluate the ecological status of forest landscapes across Kenya. Launched under the Forest Conservation and Management Act 2016, FLEA aims to provide a comprehensive understanding of forest health and guide conservation efforts.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            This assessment integrates data on biodiversity, land use, and climate change impacts to support sustainable forest management and policy development.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-8">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative h-48">
                <Image
                  src={url}
                  alt={`FLEA Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  className="border border-gray-200"
                />
              </div>
            ))}
          </div>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Key components of the FLEA initiative include:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
            {sections.map((section, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.95rem] leading-[1.6] capitalize block">
                  {section}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
}