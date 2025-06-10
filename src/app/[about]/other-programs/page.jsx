"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function otherprograms() {
  const [activeTab, setActiveTab] = useState("corporate");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // ✅ Missing array added
  const departments = [
    "Department of Strategy and Planning",
    "Department of Partnership and Linkages",
    "Department of Resource Mobilization",
    "Department of Risk Management",
    "Department of Performance Contracting",
  ];

  const tabs = [
    {
      id: "corporate",
      title: "Corporate Services",
      content: (
        <>
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mb-8 text-2xl leading-[1.3] tracking-[0.5px] capitalize">
            Corporate Services Directorate
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] text-[#333] text-[1rem] leading-[1.8] mb-8">
            The Corporate Services Directorate provides internal support systems that enhance organizational performance and service delivery within the Kenya Forest Service. It comprises various departments critical to policy implementation, resource management, and internal infrastructure development.
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
            {[
              "Department of Finance and Accounts",
              "Department of Human Resource Management",
              "Department of Administration and Infrastructure Development",
              "Department of Information Communication Technology",
              "Department of Corporate Communication",
            ].map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.95rem] leading-[1.6] capitalize block">
                  {dept}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "strategy",
      title: "Strategy & Partnership",
      content: (
        <>
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] mb-8 text-[2.2rem] leading-[1.3] tracking-[0.5px] capitalize">
            Directorate of Strategy, Partnerships & Resource Mobilization
          </h1>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The Directorate is responsible for guiding the organization in setting the Strategic direction to take in the execution of her mandate in order to succeed. It guides in establishing priorities and developing corporate strategies which are harmonized with the National Development plans. It ensures that the Service uses current technologies in Forest management and complies with the quality Management standards.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            The directorate will also guide the Service in the implementation of quality management systems under ISO and risk-based strategies. It is further responsible for managing partnerships and mobilizing resources for the Service’ core programmes operations.
          </p>
          <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-[#333] leading-[1.8] text-[1rem] mb-8">
            It executes this mandate through the following Departments:
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-0 list-none">
            {departments.map((dept, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
              >
                <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.95rem] leading-[1.6] capitalize block">
                  {dept}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <MainNavBar />

      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('/images/background-template/background.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          <p className="font-['Peugeot',Helvetica,sans-serif] text-[#333] text-[1rem] leading-[1.8] mb-8">
            Learn more about Kenya Forest Service’s internal operations and strategic direction. Switch between tabs to explore Corporate Services and Strategy & Partnership initiatives.
          </p>
          <div className="flex border-b border-gray-200 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-[1rem] capitalize ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#0f5a28] text-[#0f5a28]"
                    : "text-[#333] hover:text-[#0f5a28]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </motion.div>
      </div>

      <FooterBottom />
    </div>
  );
}
