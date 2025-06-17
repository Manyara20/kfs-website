"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function ForesterMagazinePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const magazines = [
    {
      title: "Field Manual for Biophysical Forest Resources Assessment in Kenya",
      fileSize: "1.5 MB",
      link: "/Documents/Forester-January-June-2024-1.pdf",
    },
    {
      title: "Field Manual for Tree Volume and Biomass Modelling",
      fileSize: "1.2 MB",
      link: "/Documents/Forester-by-KFS-Issue-35.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
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
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            The Forester Magazine
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Biannual Forestry Magazine of the Kenya Forest Service
          </p>

          <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-[1.5rem] mb-4 capitalize">
            Welcome to the latest edition of our biannual forestry magazine.
          </h2>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            As we reflect on the past six months, we’re proud to share the significant strides
            made in Kenya’s forestry sector. In this issue, we spotlight several key events and
            initiatives that underscore our commitment to sustainable forest management and
            conservation.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap
            that will guide our efforts in the coming years to enhance forest cover and promote
            sustainable utilization of forest resources.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            We also bring you highlights from the International Day of Forests celebrations, where
            we joined the global community in recognizing the vital role forests play in our lives
            and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an
            initiative that saw thousands of Kenyans come together to green our nation.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            This edition also features news on various Memoranda of Understanding signed with
            partner organizations, strengthening our collaborative efforts in forest conservation
            and management.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            These stories reflect our ongoing dedication to Kenya’s forests and the communities
            that depend on them. We hope this issue informs and inspires you to join us in our
            mission to protect and nurture our precious forest resources.
          </p>
          <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-[1.5rem] mb-4 capitalize">
            Happy reading!
          </h2>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Anne Kaari, ‘ndc‘ (K)
          </p>

          <div className="flex flex-col gap-6 mt-8">
            {magazines.map((magazine, index) => (
              <div
                key={index}
                className="bg-white squared-lg p-4 shadow-md relative"
                style={{ backgroundColor: '#0f5a28' }}
              >
                <div className="bg-white squared-lg p-6">
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-6 h-6 text-[#0f5a28]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="square"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-[#0f5a28] font-medium text-lg capitalize">
                        {magazine.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        1 file(s) {magazine.fileSize}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={magazine.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f5a28] text-white py-2 px-6 squared-lg text-sm mt-4 inline-block hover:bg-[#2e5b4f] transition-all duration-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
}