// components/CodeOfConductSection.js
"use client"; // This is a Client Component for interactivity

import React from "react";

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
  return (
    <div className="py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Side: Image with Card on Top */}
        <div className="relative w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("/images/about.png")` }}
          >
            <div className="relative z-10 max-w-[80%] mx-auto mt-4 md:mt-8 p-6 bg-transparent">
              <h5
                className="text-[#0D3C00] text-xl md:text-2xl font-bold uppercase text-center"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                About Kenya Forest Service
              </h5>
              <p
                className="text-black text-base mt-4"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                In carrying out its mandate, the functions of KFS include among others:
              </p>
              <p
                className="text-black text-base mt-4"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                1. Conserve, protect and manage all Public Forests
              </p>
              <p
                className="text-black text-base mt-4"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                2. Prepare and implement management plans for all public forests, and, where requested, assist in preparation of management plans for community forests or private forests in consultation with the relevant owners
              </p>
              <p
                className="text-black text-base mt-4"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                3. Receive and consider applications for licenses or permits in relation to forest resources or management of forests or any other relevant matter in accordance with the Act
              </p>
              <div className="flex justify-center mt-4">
                <button
                  className="text-white border border-[#4A7C12] bg-[#0D3C00] hover:bg-white hover:text-[#4A7C12] px-4 py-2 transition-colors duration-300"
                  style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Strategic Objectives */}
        <div>
          <h3
            className="text-3xl font-bold mb-4 text-center text-black uppercase"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            Strategic Objectives
          </h3>
          <p
            className="text-lg mb-6 text-center text-black"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision. The service will therefore focus on the following strategic objectives:
          </p>

          <div className="flex flex-col gap-2">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="w-full p-4 bg-[#16a34a] text-white transition-all duration-300 hover:bg-white hover:border-4 hover:border-[#15803d] hover:text-[#0D3C00] cursor-pointer group"
              >
                <h6
                  className="text-lg font-semibold"
                  style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                >
                  {item.title}
                </h6>
                <div
                  className="mt-1 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[1000px]"
                >
                  {item.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-sm text-[#0D3C00]"
                      style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductSection;