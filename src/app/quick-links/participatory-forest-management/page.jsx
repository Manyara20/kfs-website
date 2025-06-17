"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function ParticipatoryForestManagementPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("background");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resources = [
    { name: "Forest Management Agreements Register", size: "338.06 KB", link: "/docs/fma-register.pdf" },
    { name: "Forest Management Plans", size: "4.00 KB", link: "/docs/forest-management-plans.pdf" },
  ];

  const forestPlansDocs = [
    { id: 1, name: "Forest Management Plan 2023.pdf", url: "/docs/forest-plan-2023.pdf" },
    { id: 2, name: "Community Forest Agreements 2023.pdf", url: "/docs/community-forest-agreements-2023.pdf" },
    { id: 3, name: "Forest Conservation Guidelines.pdf", url: "/docs/forest-conservation-guidelines.pdf" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <MainNavBar />

      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start py-12 px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15,90,40,0.85), rgba(15,90,40,0.85)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Leaf Texture Overlay */}
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative z-10 bg-white bg-opacity-95 p-10 max-w-6xl w-full border border-white/30 squared-md shadow-lg"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-8">
            <button
              onClick={() => setActiveTab("background")}
              className={`px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                activeTab === "background"
                  ? "border-b-4 border-green-800 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Background
            </button>
            <button
              onClick={() => setActiveTab("forestPlans")}
              className={`px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                activeTab === "forestPlans"
                  ? "border-b-4 border-green-800 text-green-800"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              Forest Plans
            </button>
          </div>

          {/* Background Tab */}
          {activeTab === "background" && (
            <div className="text-gray-900">
              <h1 className="text-3xl font-bold text-green-900 mb-6">
                Participatory Forest Management
              </h1>
              <p className="mb-6 text-base leading-relaxed">
                Kenya is endowed with a wide range of forest ecosystems ranging from montane rainforests,
                savannah woodlands, dry forests, and coastal forests and mangroves. These ecosystems
                are vital for biodiversity conservation, climate regulation, and local livelihoods.
              </p>

              <h2 className="text-2xl font-semibold text-green-900 mb-3">Strategic Objective</h2>
              <p className="mb-6 text-base">
                The Participatory Forest Management strategic objective is to enhance conservation, sustainable
                management, and utilization of forests by improving livelihoods and enabling communities to take
                part in decision-making and benefit-sharing.
              </p>

              <h2 className="text-2xl font-semibold text-green-900 mb-3">Policy Goal & Objectives</h2>
              <p className="mb-6 text-base">
                The overall policy goal of Participatory Forest Management is sustainable development, management,
                utilization, and conservation of forest resources for equitable benefits to all stakeholders.
              </p>

              <ul className="list-disc list-inside bg-green-900 text-white p-6 squared-md mb-8 space-y-2">
                <li>Increase and maintain tree and forest cover of at least ten percent of the land area of Kenya.</li>
                <li>Strengthen Community Forest Associations (CFAs) through capacity building and legal empowerment.</li>
                <li>Promote collaborative forest management through Forest Management Agreements (FMAs).</li>
              </ul>

<h2 className="text-2xl font-bold text-green-900 mb-6 mt-8">Resources</h2>
<div className="space-y-6">
  {resources.map((file, index) => (
    <motion.div
      key={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="bg-white bg-opacity-95 squared-xl p-6 flex justify-between items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <IoDocumentTextOutline className="text-green-800 text-4xl" />
        <div>
          <h3 className="font-semibold text-lg text-green-900 mb-1">{file.name}</h3>
          <p className="text-sm text-gray-600">1 file(s) {file.size}</p>
        </div>
      </div>
      <button
        onClick={() => handleDownload(file.name)}
        className="bg-green-800 text-white text-sm py-2 px-6 squared-lg hover:bg-green-700 hover:shadow-md transition-all"
      >
        Download
      </button>
    </motion.div>
  ))}
</div>

            </div>
          )}

          {/* Forest Plans Tab */}
          {activeTab === "forestPlans" && (
            <div className="text-gray-900">
              <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Forest Plans</h2>
              <p className="mb-8 text-base leading-relaxed">
                Forest resources serve the needs and interests of the public and hence, as required by law,
                the Service manages all forests according to clear management plans. A forest management plan
                is a specific statement of objectives that the KFS has for community forest associations,
                followed by a series of activities that will take place in order to meet KFS strategic objectives.
                In essence, the Forest Management Plan is a “road map” to guide the communities.
                Currently, 177 Forest Management Plans have been approved by the Director of Kenya Forest Service
                to enable community participation in forest conservation and management, along with 77 Forest Management Agreements.
              </p>

              <p className="text-green-900 font-semibold mb-6 text-center">
                Download the Forest Plans for more information.
              </p>

              <ul className="space-y-4">
                {forestPlansDocs.map((doc) => (
                  <motion.li
                    key={doc.id}
                    className="flex items-center justify-between bg-white bg-opacity-90 squared-md p-5 shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: doc.id * 0.1 }}
                  >
                    <div className="flex items-center gap-4 text-green-900 font-medium">
                      <IoDocumentTextOutline className="text-4xl" />
                      <span>{doc.name}</span>
                    </div>
                    <a
                      href={doc.url}
                      download
                      className="bg-green-700 text-white px-5 py-2 squared-md hover:bg-green-800 transition-colors text-sm"
                      aria-label={`Download ${doc.name}`}
                    >
                      Download
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      <FooterBottom />
    </div>
  );
}
