"use client"; // Required for useState and useEffect in Next.js App Router

import React, { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0); // For slider on small screens

  // Auto-slide effect for small screens
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === principles.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, []);

  // Update activeTab when currentIndex changes (for slider)
  useEffect(() => {
    setActiveTab(principles[currentIndex].id);
  }, [currentIndex]);

  const activePrinciple = principles.find((p) => p.id === activeTab);

  return (
    <>
      {/* Header */}
      <div className="bg-white rounded-t-3xl h-16 sm:h-20 flex items-center justify-center shadow-lg z-10">
        <h2 className="text-xl sm:text-3xl text-black font-extrabold uppercase">
          Guiding Principles
        </h2>
      </div>

      {/* Main Section with Dynamic Background and Gradient */}
      <div
        className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center text-white p-4 sm:p-6 flex flex-col justify-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${activePrinciple.background})`,
        }}
      >
        {/* Tabs (Visible on larger screens) */}
        <div className="hidden sm:block mb-8">
          <div className="flex flex-row gap-6 pl-6">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className={`cursor-pointer text-lg font-semibold uppercase ${
                  activeTab === principle.id
                    ? "underline underline-offset-4 decoration-white decoration-4 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(principle.id)}
              >
                {principle.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content (Slider on small screens, static on larger screens) */}
        <div className="flex items-start gap-3 sm:gap-4 max-w-full sm:max-w-2xl pl-0 sm:pl-6">
          <Image
            src={activePrinciple.icon}
            alt={activePrinciple.title}
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px]"
            style={{ filter: "brightness(0) invert(1)" }} // Makes icon white
          />
          <div className="animate-fade-in">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 uppercase">
              {activePrinciple.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {activePrinciple.description}
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default GuidingPrinciples;