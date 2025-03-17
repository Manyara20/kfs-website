"use client";

import React from "react";
import { FaUsers, FaBalanceScale, FaBullseye, FaStar, FaFlask, FaShieldAlt } from "react-icons/fa";

const CoreValueCard = ({ title, description, Icon, bgColor }) => {
  return (
    <div className="flex-shrink-0 w-80 h-auto bg-[#420909] text-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
      <Icon className="text-4xl mb-4" />
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};

const CoreValues = () => {
  const values = [
    {
      title: "Teamwork",
      description:
        "The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing, and mentoring.",
      Icon: FaUsers,
    },
    {
      title: "Equity",
      description:
        "The Service will promote the virtues of equity and fair play for equitable and sustainable development.",
      Icon: FaBalanceScale,
    },
    {
      title: "Result Oriented",
      description: "The Service will pursue timely attainment of targeted results at all levels.",
      Icon: FaBullseye,
    },
    
    {
      title: "Scientific Principles & Professionalism",
      description:
        "The Service will encourage and reward creativity and innovativeness in work performance among staff.",
      Icon: FaFlask,
    },
    {
      title: "Integrity",
      description:
        "The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business.",
      Icon: FaShieldAlt,
    },
  ];

  return (
    <section className="bg-white py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Core Values</h2>

      <div className="inherit">
        <div className="flex gap-8 px-4" style={{ minWidth: "min-content" }}>
          {values.map((value, index) => (
            <CoreValueCard
              key={index}
              title={value.title}
              description={value.description}
              Icon={value.Icon}
              bgColor="bg-[#420909]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;