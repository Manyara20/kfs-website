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
    <section className="py-24 px-8">
      <h2 className="text-3xl font-semibold text-center text-black mb-10">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto border border-gray-300 rounded-lg overflow-hidden p-8">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border border-gray-300 bg-[#1f5d2f] text-white hover:bg-green-50 hover:text-black transition-colors w-full h-full"
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