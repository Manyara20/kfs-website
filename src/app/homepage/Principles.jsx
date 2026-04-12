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
    title: "Teamwork",
    description:
      "The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing and mentoring.",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "results",
    icon: "/icons/results.png",
    title: "Results Oriented",
    description: "The Service will pursue timely attainment of targeted results at all levels.",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "integrity",
    icon: "/icons/integrity.png",
    title: "Integrity",
    description:
      "The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business.",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "scientific",
    icon: "/icons/scientific.png",
    title: "Scientific Principles & Professionalism",
    description:
      "Decision making and practice will be based on current scientific knowledge and best practice.",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "creativity",
    icon: "/icons/creativity.png",
    title: "Creativity & Innovation",
    description:
      "The Service will encourage and reward creativity and innovativeness in work performance among staff.",
    background: "/images/MangroveboatinGazi.jpg",
  },
];

const PrinciplesAndValues = () => {
  const [activeSection, setActiveSection] = useState("principles");
  const [activePrincipleTab, setActivePrincipleTab] = useState("ecosystem");
  const [activeValueTab, setActiveValueTab] = useState("teamwork");
  const [currentPrincipleIndex, setCurrentPrincipleIndex] = useState(0);
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (!isSmallScreen) return;

    const interval = setInterval(() => {
      if (activeSection === "principles") {
        setCurrentPrincipleIndex((prev) =>
          prev === principles.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentValueIndex((prev) =>
          prev === coreValues.length - 1 ? 0 : prev + 1
        );
      }
    }, 5_000);
    return () => clearInterval(interval);
  }, [activeSection, isMounted]);

  useEffect(() => {
    if (activeSection === "principles") {
      setActivePrincipleTab(principles[currentPrincipleIndex].id);
    } else {
      setActiveValueTab(coreValues[currentValueIndex].id);
    }
  }, [currentPrincipleIndex, currentValueIndex, activeSection]);

  const activePrinciple = principles.find((p) => p.id === activePrincipleTab);
  const activeValue = coreValues.find((v) => v.id === activeValueTab);

  if (!isMounted) return null;

  return (
    <section className="bg-white">
      {/* Section Toggle Header */}
      <div className="bg-white h-16 sm:h-20 flex items-center justify-center shadow border-b border-gray-100">
        <div className="flex gap-8">
          {["principles", "values"].map((section) => (
            <button
              key={section}
              className={`text-lg sm:text-2xl font-extrabold uppercase tracking-wide transition-colors duration-200 ${
                activeSection === section
                  ? "text-kfs-dark underline underline-offset-4 decoration-kfs-accent decoration-4"
                  : "text-gray-400 hover:text-kfs-accent"
              }`}
              onClick={() => {
                setActiveSection(section);
                if (section === "principles") {
                  setActivePrincipleTab("ecosystem");
                  setCurrentPrincipleIndex(0);
                } else {
                  setActiveValueTab("teamwork");
                  setCurrentValueIndex(0);
                }
              }}
            >
              {section === "principles" ? "Guiding Principles" : "Core Values"}
            </button>
          ))}
        </div>
      </div>

      {/* Principles Content */}
      {activeSection === "principles" && activePrinciple && (
        <div
          className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center flex flex-col justify-center p-6 sm:p-10 transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.5)), url(${activePrinciple.background})`,
          }}
        >
          {/* Principle Tabs */}
          <div className="hidden sm:flex gap-6 mb-8">
            {principles.map((p) => (
              <button
                key={p.id}
                className={`text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  activePrincipleTab === p.id
                    ? "text-kfs-dark underline underline-offset-4 decoration-kfs-accent decoration-4"
                    : "text-gray-500 hover:text-kfs-accent"
                }`}
                onClick={() => {
                  setActivePrincipleTab(p.id);
                  setCurrentPrincipleIndex(principles.findIndex((x) => x.id === p.id));
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Active Principle */}
          <div className="flex items-start gap-4 max-w-2xl animate-fade-in-up">
            <Image
              src={activePrinciple.icon}
              alt={activePrinciple.title}
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-wide text-kfs-dark">
                {activePrinciple.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {activePrinciple.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Core Values Content */}
      {activeSection === "values" && activeValue && (
        <div
          className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center flex flex-col justify-center p-6 sm:p-10 transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.82), rgba(0,0,0,0.1)), url(${activeValue.background})`,
          }}
        >
          {/* Value Tabs */}
          <div className="hidden sm:flex gap-6 mb-8 flex-wrap">
            {coreValues.map((v) => (
              <button
                key={v.id}
                className={`text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  activeValueTab === v.id
                    ? "text-white underline underline-offset-4 decoration-kfs-accent decoration-4"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  setActiveValueTab(v.id);
                  setCurrentValueIndex(coreValues.findIndex((x) => x.id === v.id));
                }}
              >
                {v.title}
              </button>
            ))}
          </div>

          {/* Active Value */}
          <div className="flex items-start gap-4 max-w-2xl animate-fade-in-up">
            <Image
              src={activeValue.icon}
              alt={activeValue.title}
              width={40}
              height={40}
              className="flex-shrink-0 brightness-0 invert"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-wide text-white">
                {activeValue.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {activeValue.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PrinciplesAndValues;
