"use client";

import React from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function TreePlanting2022Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Page Container */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-2xl w-full relative z-10 border border-white/30 rounded-xl"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] text-shadow-md mb-6 leading-tight tracking-wide">
            Tree Planting 2022
          </h1>
          <p className="text-lg text-[#555] italic mb-6">
            By Admin | February 25, 2022 | Tree Planting | No Comments
          </p>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            In accordance with Section 48 of the Forests Act, the Service created ten (10) Forest Conservancy
            Areas to oversee the proper and efficient management of forests, each with a ten (10) member
            Forest Conservation Committee (FCC) headed by a chairperson who is appointed by the Board of
            Directors. The Service requests applicants to forward their applications for the position of Forest
            Conservation Committee Chairperson in Eastern Conservancy.
          </p>

          <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Job Purpose</h2>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            Assist the KFS Board of Management with the delivery of efficient and effective field operations
            of the regional level as well as to perform specific duties related to the implementation of the
            Forest legislation.
          </p>

          <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">Key Responsibilities</h2>
          <ul className="space-y-2 mb-6">
            {[
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
            ].map((text, index) => (
              <li
                key={index}
                className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-lg p-4 text-[#0D3C00] text-base font-medium hover:from-[#C8E6C9] hover:to-[#A5D6A7] hover:-translate-y-1 hover:shadow-md transition-all"
              >
                {text}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-semibold text-[#0f5a28] mb-4">
            Academic Qualifications, Experience and Other Requirements
          </h2>
          <p className="text-lg text-[#333] leading-relaxed mb-6">
            [Details to be provided by the recruiting body.]
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 mb-12">
            <a
              href="#"
              className="text-[#0f5a28] text-base font-medium hover:text-[#388e3c] hover:underline"
            >
              Previous: The Restoration Initiative Tree Planting in Mt. Kulal
            </a>
            <a
              href="#"
              className="text-[#0f5a28] text-base font-medium hover:text-[#388e3c] hover:underline"
            >
              Next: Chief Conservator of Forests End of the Year 2022 Message
            </a>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#0f5a28] mb-4">Leave A Comment</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f5a28]"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f5a28]"
                required
              />
              <textarea
                placeholder="Comment"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f5a28]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0f5a28] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#388e3c] hover:shadow-md transition-all"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}