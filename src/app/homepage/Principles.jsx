"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const principles = [
  {
    id: "ecosystem",
    title: "Ecosystem Approach",
    description:
      "Adoption of an integrated ecosystem approach to conserving and managing forest resources, paying particular attention to ecologically fragile areas.",
    icon: "/icons/ecosystem.png",
    background: "/images/uniform.jpg",
  },
  {
    id: "public-good",
    title: "Public Good",
    description:
      "Taking into consideration the multiple roles played by forests, ownership must serve a common good for present and future generations.",
    icon: "/icons/public-relation.png",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "sustainable",
    title: "Sustainable Forest Management",
    description:
      "Sustainable management of forest resources to yield social, economic, and ecological goods and services for current and future generations.",
    icon: "/icons/conservation.png",
    background: "/images/plant_tree.jpg",
  },
];

const coreValues = [
  {
    id: "teamwork",
    icon: "/icons/teamwork.png",
    title: "TEAMWORK",
    description:
      "The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing and mentoring.",
     background: "/images/MangroveboatinGazi.jpg" // Placeholder background
  },
  {
    id: "results",
    icon: "/icons/results.png",
    title: "RESULTS ORIENTED",
    description:
      "The Service will pursue timely attainment of targeted results at all levels.",
     background: "/images/MangroveboatinGazi.jpg", // Placeholder background
  },
  {
    id: "integrity",
    icon: "/icons/integrity.png",
    title: "INTEGRITY",
    description:
      "The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business.",
     background: "/images/MangroveboatinGazi.jpg" // Placeholder background
  },
  {
    id: "scientific",
    icon: "/icons/scientific.png",
    title: "SCIENTIFIC PRINCIPLES AND PROFESSIONALISM",
    description:
      "Decision making and practice will be based on current scientific knowledge and best practice.",
     background: "/images/MangroveboatinGazi.jpg" // Placeholder background
  },
  {
    id: "creativity",
    icon: "/icons/creativity.png",
    title: "CREATIVITY AND INNOVATION",
    description:
      "The Service will encourage and reward creativity and innovativeness in work performance among staff.",
    background: "/images/MangroveboatinGazi.jpg" // Placeholder background
  },
];

const PrinciplesAndValues = () => {
  const [activeSection, setActiveSection] = useState("principles"); // Toggle between principles and values
  const [activePrincipleTab, setActivePrincipleTab] = useState("ecosystem"); // For principles
  const [activeValueTab, setActiveValueTab] = useState("teamwork"); // For values
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0); // For principles slider
  const [currentValueIndex, setCurrentValueIndex] = useState(0); // For values slider
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true on client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide effect for both sections on small screens
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (isSmallScreen) {
      const interval = setInterval(() => {
        if (activeSection === "principles") {
          setCurrentPrincipleIndex((prevIndex) =>
            prevIndex === principles.length - 1 ? 0 : prevIndex + 1
          );
        } else if (activeSection === "values") {
          setCurrentValueIndex((prevIndex) =>
            prevIndex === coreValues.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [activeSection]);

  // Update active tabs when slider indices change
  useEffect(() => {
    if (activeSection === "principles") {
      setActivePrincipleTab(principles[currentPrincipleIndex].id);
    } else if (activeSection === "values") {
      setActiveValueTab(coreValues[currentValueIndex].id);
    }
  }, [currentPrincipleIndex, currentValueIndex, activeSection]);

  const activePrinciple = principles.find((p) => p.id === activePrincipleTab);
  const activeValue = coreValues.find((v) => v.id === activeValueTab);

  if (!isMounted) {
    return null; // Prevent server-side rendering mismatch
  }

  return (
    <section
    
    >
      {/* Header with Tabs */}
      <div className=" text-white  h-16 sm:h-20 flex items-center justify-center shadow-lg z-10">
        <div className="flex gap-6">
          <div
            className={`cursor-pointer text-xl sm:text-3xl font-extrabold uppercase ${
              activeSection === "principles"
                ? "underline underline-offset-4 decoration-white decoration-4"
                : "text-gray-500 hover:text-white"
            }`}
            onClick={() => {
              setActiveSection("principles");
              setActivePrincipleTab("ecosystem");
              setCurrentPrincipleIndex(0);
            }}
          >
            Guiding Principles
          </div>
          <div
            className={`cursor-pointer text-xl sm:text-3xl font-extrabold uppercase ${
              activeSection === "values"
                ? "underline underline-offset-4 decoration-white decoration-4"
                : "text-gray-500 hover:text-white"
            }`}
            onClick={() => {
              setActiveSection("values");
              setActiveValueTab("teamwork");
              setCurrentValueIndex(0);
            }}
          >
            Core Values
          </div>
        </div>
      </div>

      {/* Content Area */}
      {activeSection === "principles" && (
        <div
          className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center text-white p-4 sm:p-6 flex flex-col justify-center transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${activePrinciple.background})`,
          }}
        >
          {/* Principle Tabs (Visible on larger screens) */}
          <div className="hidden sm:block mb-8">
            <div className="flex flex-row gap-6 pl-6">
              {principles.map((principle) => (
                <div
                  key={principle.id}
                  className={`cursor-pointer text-lg font-semibold uppercase ${
                    activePrincipleTab === principle.id
                      ? "underline underline-offset-4 decoration-white decoration-4 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setActivePrincipleTab(principle.id);
                    setCurrentPrincipleIndex(
                      principles.findIndex((p) => p.id === principle.id)
                    );
                  }}
                >
                  {principle.title}
                </div>
              ))}
            </div>
          </div>

          {/* Principle Content */}
          <div className="flex items-start gap-3 sm:gap-4 max-w-full sm:max-w-2xl pl-0 sm:pl-6">
            <Image
              src={activePrinciple.icon}
              alt={activePrinciple.title}
              width={32}
              height={32}
              className="sm:w-[40px] sm:h-[40px]"
              style={{ filter: "brightness(0) invert(1)" }}
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
      )}

      {activeSection === "values" && (
        <div
          className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center text-white p-4 sm:p-6 flex flex-col justify-center transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${activeValue.background})`,
          }}
        >
          {/* Value Tabs (Visible on larger screens) */}
          <div className="hidden sm:block mb-8">
            <div className="flex flex-row gap-6 pl-6">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className={`cursor-pointer text-lg font-semibold uppercase ${
                    activeValueTab === value.id
                      ? "underline underline-offset-4 decoration-white decoration-4 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveValueTab(value.id);
                    setCurrentValueIndex(
                      coreValues.findIndex((v) => v.id === value.id)
                    );
                  }}
                >
                  {value.title}
                </div>
              ))}
            </div>
          </div>

          {/* Value Content */}
          <div className="flex items-start gap-3 sm:gap-4 max-w-full sm:max-w-2xl pl-0 sm:pl-6">
            <Image
              src={activeValue.icon}
              alt={activeValue.title}
              width={32}
              height={32}
              className="sm:w-[40px] sm:h-[40px]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="animate-fade-in">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 uppercase">
                {activeValue.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {activeValue.description}
              </p>
            </div>
          </div>
        </div>
      )}

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
    </section>
  );
};

export default PrinciplesAndValues;