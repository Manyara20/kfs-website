"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function GreenZonesProjectPage() {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    "Afforestation and Reforestation Programs",
    "Community Empowerment and Livelihood Support",
    "Watershed Management and Soil Conservation",
    "Sustainable Agroforestry Practices",
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
      <MainNavBar />
      <TopNavBar />
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
            Green Zones Development Support Project
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The Green Zones Development Support Project aims to promote conservation and sustainable management of forest resources while improving the livelihoods of communities living around forests.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            It focuses on the following key areas:
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