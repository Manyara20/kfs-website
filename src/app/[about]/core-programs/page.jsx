"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function coreprograms() {
  const [activeTab, setActiveTab] = useState("conservation");
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const toProxyUrl = (url) => {
    const kfsBaseUrl = "https://www.kenyaforestservice.org/";
    if (url.startsWith(kfsBaseUrl)) {
      return url.replace(kfsBaseUrl, "/proxy/kfs/");
    }
    return url;
  };

  const tabs = [
    {
      id: "conservation",
      title: "Forest Conservation and Management",
      content: (
        <>
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-2xl leading-[1.3] tracking-[0.5px] capitalize">
            The Directorate of Forest Conservation and Management (DFCM)
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The Directorate of Forest Conservation and Management (DFCM) is established pursuant to the provisions of Forest Conservation and Management Act 2016, section 8(a-o) functions of the Service. The Directorate is responsible for providing advice on policy and legislation development for the forest sector to management.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Central to the mandate of the Directorate is the key objective of executing the provisions of the legislation, technical forest management orders, regulations, and circulars that pertain to sustainable forest conservation and management practices.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            It executes this mandate through the following Departments:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
            {[
              "Department of the Natural Forest Conservation",
              "Department of the Forest Survey & Information Management",
              "Department of the Forest Plantation Management",
              "Department of the Conservation Coordination",
              "Kenya Forestry College - KFC",
              "Department of the Forestry Advisory & County Liaison",
              "Department of the Dryland & private Forest Development",
            ].map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.95rem] leading-[1.6] capitalize block">
                  {dept}
                </span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-8">
            <div className="relative h-48">
              <Image
                src="/images/placeholder-conservation.jpg"
                alt="Forest Conservation Image"
                layout="fill"
                objectFit="cover"
                quality={75}
                className="border border-gray-200"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      id: "plantation",
      title: "Forest Plantation and Management",
      content: (
        <>
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-2xl leading-[1.3] tracking-[0.5px] capitalize">
            Plantation Division: Managing Kenya's Forests
          </h1>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            The Plantation Division of the Kenya Forest Service (KFS) is responsible for managing all plantations across the country and coordinating tree planting through the PELIS programme, as mandated by the Forest Conservation and Management Act 2016.
          </p>
          <p
            className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-8"
            style={{ fontSize: `${fontSize * 0.9}px` }}
          >
            This division ensures sustainable forest management and supports Kenya’s goal of increasing forest cover, executed through the following departments:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
            {[
              "Economics Department",
              "Inventory Department",
              "Roads and Infrastructure Department",
              "Reforestation Department",
              "Sawmill Department",
            ].map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                style={{ fontSize: `${fontSize * 0.85}px` }}
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                  {dept}
                </span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-8">
            <div className="relative h-48">
              <Image
                src="/images/placeholder-plantation.jpg"
                alt="Forest Plantation Image"
                layout="fill"
                objectFit="cover"
                quality={75}
                className="border border-gray-200"
              />
            </div>
          </div>
        </>
      ),
    },
    {
      id: "protection",
      title: "Forest Protection & Security",
      content: (
        <>
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-2xl leading-[1.3] tracking-[0.5px] capitalize">
            Forest Landscape and Ecological Assessment (FLEA)
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The Forest Landscape and Ecological Assessment (FLEA) is a strategic initiative by the Kenya Forest Service (KFS) to evaluate the ecological status of forest landscapes across Kenya. Launched under the Forest Conservation and Management Act 2016, FLEA aims to provide a comprehensive understanding of forest health and guide conservation efforts.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            This assessment integrates data on biodiversity, land use, and climate change impacts to support sustainable forest management and policy development.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Key components of the FLEA initiative include:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
            {["Background", "Objectives", "Methodology", "Results"].map((section, index) => (
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-8">
            {[
              toProxyUrl("/images/FLEA-1.jpg"),
              toProxyUrl("/images/FLEA-2.jpg"),
              toProxyUrl("/images/FLEA-3.jpg"),
            ].map((url, index) => (
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
        </>
      ),
    },
  ];

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
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            Explore the key areas of forest management through the following tabs: Forest Conservation and Management, detailing policy and sustainable practices; Forest Plantation and Management, focusing on plantation oversight and tree planting; and Forest Protection & Security, covering ecological assessments and conservation strategies.
          </p>
          <div className="flex border-b border-gray-200 mb-8">
            {tabs.map((tab) => (
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
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
        </div>
      <FooterBottom />
    </div>
  );
}