"use client"; // Required for useState in Next.js App Router

import React, { useState } from "react";
import Image from "next/image";

const principles = [
  {
    id: "ecosystem",
    title: "Ecosystem Approach",
    description:
      "Adoption of an integrated ecosystem approach to conserving and managing forest resources, paying particular attention to ecologically fragile areas.",
    icon: "/icons/public-service.png",
    background: "/images/Melia-nursery.jpg",
  },
  {
    id: "public-good",
    title: "Public Good",
    description:
      "Taking into consideration the multiple roles played by forests, ownership must serve a common good for present and future generations.",
    icon: "/icons/public-service.png",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "sustainable",
    title: "Sustainable Forest Management",
    description:
      "Sustainable management of forest resources to yield social, economic, and ecological goods and services for current and future generations.",
    icon: "/icons/public-service.png",
    background: "/images/MangroverehabilitationTudor.jpg",
  },
];

const GuidingPrinciples = () => {
  const [activeTab, setActiveTab] = useState("ecosystem"); // Default to first tab

  const activePrinciple = principles.find((p) => p.id === activeTab);

  return (
    <>
      {/* Header */}
      <div className="bg-white rounded-t-3xl h-20 flex items-center justify-center shadow-lg z-10">
        <h2 className="text-3xl text-black font-extrabold">Guiding Principles</h2>
      </div>

      {/* Main Section with Dynamic Background and Gradient */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center text-white p-6 flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${activePrinciple.background})`,
        }}
      >
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-row gap-6 pl-6">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className={`cursor-pointer text-lg font-semibold uppercase ${
                  activeTab === principle.id
                    ? "underline underline-offset-4 decoration-[#0D3C00] decoration-4 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(principle.id)}
              >
                {principle.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex items-start gap-4 max-w-2xl pl-6">
          <Image
            src={activePrinciple.icon}
            alt={activePrinciple.title}
            width={40}
            height={40}
            style={{ filter: "brightness(0) invert(1)" }} // Makes icon white
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 uppercase">
              {activePrinciple.title}
            </h3>
            <p className="text-base">{activePrinciple.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidingPrinciples;