"use client";

import React from "react";
import Image from "next/image";

const coreValues = [
  {
    icon: "/icons/teamwork.png",
    title: "TEAMWORK",
    description:
      "The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing and mentoring.",
  },
  {
    icon: "/icons/results.png",
    title: "RESULTS ORIENTED",
    description:
      "The Service will pursue timely attainment of targeted results at all levels.",
  },
  {
    icon: "/icons/integrity.png",
    title: "INTEGRITY",
    description:
      "The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business.",
  },
  {
    icon: "/icons/scientific.png",
    title: "SCIENTIFIC PRINCIPLES AND PROFESSIONALISM",
    description:
      "Decision making and practice will be based on current scientific knowledge and best practice.",
  },
  {
    icon: "/icons/creativity.png",
    title: "CREATIVITY AND INNOVATION",
    description:
      "The Service will encourage and reward creativity and innovativeness in work performance among staff.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="bg-[#e6f5e6] py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Centered Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-[#0E2E0E]">
          Our Core Values
        </h2>
      </div>

      {/* Core Values Card Container */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border border-gray-300 bg-[#1f5d2f] text-white hover:bg-green-50 hover:text-black transition-colors w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(20%-1.2rem)] h-96"
          >
            <div className="mb-4">
              <Image src={value.icon} alt={value.title} width={60} height={60} />
            </div>
            <h3 className="text-xl font-medium text-white hover:text-black">{value.title}</h3>
            <p className="text-base mt-3">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;