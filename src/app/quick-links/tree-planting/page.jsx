"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function TreePlanting2022Page() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const responsibilities = [
    "The FCC Chairperson shall provide leadership of the Forest Conservancy to ensure quality performance and effective execution of the mandate and functions.",
    "He/she will work closely with representatives from other government agencies (County Government, agricultural and environment), representatives of the forest industry and community Forestry Association to ensure the sustainable management of the forest and allied resources.",
    "Guide strategy and help define key issues for the FCC.",
    "Chair FCC meetings and ensure preparation of papers, reports and decision making.",
    "Bring goodwill and enthusiasm to the FCC.",
    "Maintain independence and objectivity in deliberating all FCC matters.",
    "Encourage high standards of propriety, ensuring that FCC members comply with a Code of Conduct.",
    "Provide an assessment of performance of individual FCC members.",
    "Ensure succession plans are in place for the FCC.",
    "Ensure government policies, legislation and sustainable forest management practices are adhered to.",
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] before:opacity-[0.05] before:z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <motion.div
          className="bg-white/95 p-12 max-w-[900px] w-full z-10 border border-white/30 rounded-none"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <h1 className="font-sans font-bold text-[#0f5a28] text-[1.8rem] leading-tight tracking-[0.5px] mb-8 capitalize">
            Tree Planting 2022
          </h1>
          <p className="font-sans font-normal text-[#555] text-sm leading-relaxed mb-8 italic">
            By Admin | February 25, 2022 | Tree Planting | No Comments
          </p>
          <p className="font-sans font-normal text-black text-sm leading-relaxed mb-8">
            In accordance with Section 48 of the Forests Act, the Service created ten (10) Forest
            Conservancy Areas to oversee the proper and efficient management of forests, each with a
            ten (10) member Forest Conservation Committee (FCC) headed by a chairperson who is
            appointed by the Board of Directors. The Service requests applicants to forward their
            applications for the position of Forest Conservation Committee Chairperson in Eastern
            Conservancy.
          </p>

          <h2 className="font-sans font-bold text-[#0f5a28] text-[1.5rem] mb-4">
            Job Purpose
          </h2>
          <p className="font-sans font-normal text-black text-sm leading-relaxed mb-8">
            Assist the KFS Board of Management with the delivery of efficient and effective field
            operations of the regional level as well as to perform specific duties related to the
            implementation of the Forest legislation.
          </p>

          <h2 className="font-sans font-bold text-[#0f5a28] text-[1.5rem] mb-4">
            Key Responsibilities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {responsibilities.map((text, index) => (
              <li
                key={index}
                className="bg-[#1a3c34] p-6 hover:-translate-y-[2px] hover:shadow-md"
              >
                <span className="font-sans font-medium text-white text-[0.85rem] leading-relaxed capitalize">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="font-sans font-bold text-[#0f5a28] text-[1.5rem] mb-4">
            Academic Qualifications, Experience and Other Requirements
          </h2>
          <p className="font-sans font-normal text-black text-sm leading-relaxed mb-8">
            [Details to be provided by the recruiting body.]
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 mb-12">
            <a
              href="#"
              className="font-sans font-medium text-[#0f5a28] text-[0.85rem] hover:text-[#388e3c] hover:underline"
            >
              Previous: The Restoration Initiative Tree Planting in Mt. Kulal
            </a>
            <a
              href="#"
              className="font-sans font-medium text-[#0f5a28] text-[0.85rem] hover:text-[#388e3c] hover:underline"
            >
              Next: Chief Conservator of Forests End of the Year 2022 Message
            </a>
          </div>

          <div className="mt-12">
            <h2 className="font-sans font-bold text-[#0f5a28] text-[1.5rem] mb-4">
              Leave A Comment
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="font-sans text-sm p-3 rounded-lg border border-gray-300 focus:border-[#0f5a28] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                className="font-sans text-sm p-3 rounded-lg border border-gray-300 focus:border-[#0f5a28] focus:outline-none"
              />
              <textarea
                placeholder="Comment"
                rows={4}
                className="font-sans text-sm p-3 rounded-lg border border-gray-300 focus:border-[#0f5a28] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#0f5a28] text-white font-sans text-[0.85rem] py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-md"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}