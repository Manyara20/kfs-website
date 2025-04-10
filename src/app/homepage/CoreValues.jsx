"use client";

import React, { useEffect, useState } from "react";
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
  // State to ensure rendering happens only on the client to avoid hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Placeholder during server-side rendering to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section className="hidden md:block bg-[#e6f5e6] py-12 sm:py-10 md:py-8 px-8 sm:px-6 md:px-4">
        <div className="text-center mb-12 sm:mb-10 md:mb-8">
          <h2 className="text-5xl sm:text-4xl md:text-3xl font-black text-[#0E2E0E]">
            Our Core Values
          </h2>
        </div>
        <div className="flex md:overflow-x-auto lg:flex-wrap lg:justify-center gap-6 sm:gap-5 md:gap-4 w-full">
          {coreValues.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-12 sm:p-10 md:p-8 border border-gray-300 bg-[#1f5d2f] text-white w-[450px] sm:w-[400px] md:w-[350px] lg:w-[calc(20%-1.2rem)]"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="hidden md:block bg-[#e6f5e6] py-12 sm:py-10 md:py-8 lg:py-6 px-8 sm:px-6 md:px-4 lg:px-2">
      {/* Centered Header */}
      <div className="text-center mb-12 sm:mb-10 md:mb-8 lg:mb-6 xl:mb-4">
        <h2 className="text-6xl sm:text-5xl md:text-4xl lg:text-3xl xl:text-2xl font-black text-[#0E2E0E]">
          Our Core Values
        </h2>
      </div>

      {/* Core Values Card Container */}
      <div className="flex md:overflow-x-auto lg:flex-wrap lg:justify-center gap-6 sm:gap-5 md:gap-4 lg:gap-3 xl:gap-2 w-full pb-4 lg:pb-0">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-12 sm:p-10 md:p-8 lg:p-6 xl:p-4 border border-gray-300 bg-[#1f5d2f] text-white hover:bg-green-50 hover:text-black transition-colors duration-300 w-[450px] sm:w-[400px] md:w-[350px] lg:w-[calc(20%-0.75rem)] xl:w-[calc(20%-0.5rem)] flex-shrink-0 lg:flex-shrink"
          >
            <div className="mb-5 sm:mb-4 md:mb-3 lg:mb-2 xl:mb-1">
              <Image
                src={value.icon}
                alt={value.title}
                width={64}
                height={64}
                priority
                className="w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-8 xl:h-8"
              />
            </div>
            <h3 className="text-3xl sm:text-2xl md:text-xl lg:text-lg xl:text-base font-medium">
              {value.title}
            </h3>
            <p className="text-2xl sm:text-xl md:text-lg lg:text-base xl:text-sm mt-4 sm:mt-3 md:mt-2 lg:mt-1">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;