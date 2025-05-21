"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import Image from 'next/image';


export default function GreenZonesProjectPage() {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    "Forest conservation and livelihood support for climate change resilience.",
    "Community Empowerment and Livelihood Support",
    "Sustainable and inclusive value chain development.",
    "Project management and coordination.",
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
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            GREEN ZONES DEVELOPMENT SUPPORT PROJECT PHASE 2
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The African Development Bank Board approved Green Zones Development Support Project (GZDSP II) Phase II on 3rd December 2019.
            Kenya Forest Service undertook this intricate initiative to not only rehabilitate degraded forests but also ensure that forested
            lands are conserved and protected in a sustainable manner.The project has three main components namely;
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
          <section className="mt-12 mb-12">
                    <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4">GreenZones II photo gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          src: '/images/gz/GT1.jpg',
                          alt: 'Scenic waterfall in Karura Forest',
                          caption: 'Farmer Fish pond ',
                        },
                        {
                          src: '/images/Eco-tourism/KaruraForest/Yellow-breasted-Apalis_Karura-Forest-scaled.jpg',
                          alt: 'Bird watching in Karura Forest',
                          caption: 'Bird watching in Karura Forest',
                        },
                        {
                          src: '/images/Eco-tourism/KaruraForest/Karura+Forest+Cave.jpeg',
                          alt: 'Mau Mau caves in Karura Forest',
                          caption: 'Mau Mau caves in Karura Forest',
                        },
                        {
                          src: '/images/gz/GT1.jpg',
                          alt: 'Scenic waterfall in Karura Forest',
                          caption: 'Farmer Fish pond ',
                        },
                        {
                          src: '/images/Eco-tourism/KaruraForest/Yellow-breasted-Apalis_Karura-Forest-scaled.jpg',
                          alt: 'Bird watching in Karura Forest',
                          caption: 'Bird watching in Karura Forest',
                        },
                        {
                          src: '/images/Eco-tourism/KaruraForest/Karura+Forest+Cave.jpeg',
                          alt: 'Mau Mau caves in Karura Forest',
                          caption: 'Mau Mau caves in Karura Forest',
                        },
                      ].map((image, index) => (
                        <div key={index} className="relative h-64  overflow-hidden">
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
        </motion.div>
        
      </div>
      <FooterBottom />
    </div>
  );
}