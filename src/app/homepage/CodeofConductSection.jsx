"use client";
import React, { useState } from "react";
import Link from "next/link";

const objectives = [
  {
    title: "KRA 1: Forest and Tree Cover Expansion for Climate Mitigation and Adaptation",
    details: [
      "1.1 Increase the National Tree Cover from 13% to 21.03% in 5 years towards 30% by 2032.",
      "1.2 Increase the National Forest Cover from 8.3% to 10% in 5 years towards 10% by 2030.",
    ],
  },
  {
    title: "KRA 2: Conservation and Protection of Forests for Climate Change Resilience",
    details: [
      "2.1 Strengthen enforcement capacity in forest protection and secure corporate assets.",
      "2.2 Improve governance for sustainable forest management.",
      "2.3 Strengthen climate change actions and response capacities.",
      "2.4 Reverse degradation of Mangrove ecosystems for climate mitigation.",
    ],
  },
  {
    title: "KRA 3: Economic Development and Livelihood Improvement",
    details: [
      "3.1 Strengthen nature-based enterprises for improving livelihoods and climate resilience.",
      "3.2 Develop commercial forest plantations on public, community, and private lands.",
      "3.3 Collaborate with private sectors for climate finance and carbon project development.",
    ],
  },
  {
    title: "KRA 4: Organizational Capacity Building and Collaboration",
    details: [
      "4.1 Promote operational efficiency and effectiveness to deliver on mandate.",
      "4.2 Strengthen partnerships and increase resource mobilization capacity.",
    ],
  },
];

const CodeOfConductSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDetails = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#0D3C00] py-10 px-4 md:px-16">
      {/* Starry Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px),radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px),radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] opacity-30 z-0"
        style={{
          backgroundSize: "50px 50px, 30px 30px, 20px 20px",
          backgroundPosition: "0 0, 15px 15px, 25px 25px",
        }}
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Left: About KFS */}
        <div className="flex items-center">
          <div className="mx-auto mt-4 md:mt-8 p-6">
            <h5 className="text-[#e6f5e6] text-xl md:text-2xl font-bold uppercase text-center">
              About Kenya Forest Service
            </h5>
            <p className="text-white text-lg mt-4">
              In carrying out its mandate, the functions of KFS include among others:
            </p>
            <p className="text-white text-lg mt-4">
              1. Conserve, protect and manage all Public Forests
            </p>
            <p className="text-white text-lg mt-4">
              2. Prepare and implement management plans for all public forests, and, where requested, assist in preparation of management plans for community forests or private forests in consultation with the relevant owners
            </p>
            <p className="text-white text-lg mt-4">
              3. Receive and consider applications for licenses or permits in relation to forest resources or management of forests or any other relevant matter in accordance with the Act
            </p>
            <div className="flex justify-center mt-6">
              <Link href="/about/learnmore">
                <button className="text-white border border-[#4A7C12] bg-[#0D3C00] hover:bg-white hover:text-[#4A7C12] px-4 py-2 transition-colors duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Strategic Objectives */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-center text-[#e6f5e6] uppercase">
            Strategic Objectives
          </h3>
          <p className="text-2xl mb-6 text-center text-white">
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision.
          </p>

          <div className="flex flex-col gap-4">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[#0D3C00] text-white border-4 border-white rounded-md hover:bg-white hover:border-[#15803d] hover:text-[#0D3C00] transition-all duration-300 cursor-pointer group"
                onClick={() => toggleDetails(index)}
              >
                <h6 className="text-lg font-semibold">{item.title}</h6>

                {/* Large Screens: Hover to show details */}
                <div className="hidden md:block">
                  <div className="mt-2 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[1000px] transition-all duration-300">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-base mt-2">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Small Screens: Click to toggle details */}
                <div className="block md:hidden">
                  <div
                    className={`mt-2 overflow-hidden transition-all duration-300 ${
                      openIndexes.includes(index)
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-base mt-2">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CodeOfConductSection;