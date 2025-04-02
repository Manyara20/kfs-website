"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function KFSOrgStructurePage() {
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
    visible: { opacity: 1, y: 0, transition: { duration: "0.8", ease: "easeOut" } },
  };

  // Organizational structure data
  const orgStructure = {
    name: "Board of Directors",
    color: "#0E5827",
    level: "Board of Directors",
    children: [
      {
        name: "Chief Conservator of Forests (CCF)",
        color: "#0F5A26",
        level: "CCF",
        children: [
          {
            name: "Directorate of Forest Protection and Security",
            color: "#226436",
            level: "Directorate",
            children: [
              {
                name: "Forest Protection, Fire and Disaster Operations",
                color: "#245B3C",
                level: "Division",
                children: [
                  {
                    name: "Fire Management Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Fire Response Unit", color: "#78A783", level: "Unit" },
                      { name: "Fire Prevention Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                  {
                    name: "Disaster Response Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Flood Response Unit", color: "#78A783", level: "Unit" },
                      { name: "Landslide Response Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              {
                name: "Investigation, Prosecution & Inspection",
                color: "#245B3C",
                level: "Division",
                children: [
                  {
                    name: "Legal Enforcement Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Prosecution Unit", color: "#78A783", level: "Unit" },
                      { name: "Inspection Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Law Enforcement Academy - FoLEA", color: "#245B3C", level: "Division" },
              { name: "Forest Security Intelligence", color: "#245B3C", level: "Division" },
              { name: "Kenya Forestry College - KFC", color: "#245B3C", level: "Division" },
              { name: "Forestry Advisory & County Liaison", color: "#245B3C", level: "Division" },
              { name: "Dry-land & Private Forest Development Coordination", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Forest Conservation & Management",
            color: "#226436",
            level: "Directorate",
            children: [
              {
                name: "Natural Forest Conservation & Information Management",
                color: "#245B3C",
                level: "Division",
                children: [
                  {
                    name: "Biodiversity Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Wildlife Monitoring Unit", color: "#78A783", level: "Unit" },
                      { name: "Flora Preservation Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Forest Plantation Management", color: "#245B3C", level: "Division" },
              { name: "Conservancy Coordination", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Strategy, Partnerships & Resource Mobilization",
            color: "#226436",
            level: "Directorate",
            children: [
              { name: "Partnerships & Resource Mobilization", color: "#245B3C", level: "Division" },
              { name: "Enterprise and Marketing", color: "#245B3C", level: "Division" },
              { name: "Planning, M&E and Performance Management", color: "#245B3C", level: "Division" },
              { name: "Quality Assurance & Risk Management", color: "#245B3C", level: "Division" },
            ],
          },
          {
            name: "Directorate of Corporate Services",
            color: "#226436",
            level: "Directorate",
            children: [
              {
                name: "Finance & Accounts",
                color: "#FFF",
                level: "Sub-Division",
                children: [
                  {
                    name: "Budgeting Section",
                    color: "#2E5B37",
                    level: "Section",
                    children: [
                      { name: "Expenditure Unit", color: "#78A783", level: "Unit" },
                      { name: "Revenue Unit", color: "#78A783", level: "Unit" },
                    ],
                  },
                ],
              },
              { name: "Human Resource Management", color: "#FFF", level: "Sub-Division" },
              { name: "Administration & Infrastructure Development", color: "#FFF", level: "Sub-Division" },
              { name: "Information Communication Technology - ICT", color: "#FFF", level: "Sub-Division" },
              { name: "Corporate Communications", color: "#FFF", level: "Sub-Division" },
            ],
          },
          { name: "Directorate of Internal Audit", color: "#226436", level: "Directorate" },
          { name: "Directorate of Corporation Secretary", color: "#226436", level: "Directorate" },
          { name: "Supply Chain Management", color: "#245B3C", level: "Department" },
          { name: "Air-Wing", color: "#245B3C", level: "Department" },
          { name: "Inspectorate and Internal Affairs", color: "#245B3C", level: "Department" },
          {
            name: "Nairobi Conservancy",
            color: "#6F6F50",
            level: "Conservancy",
            children: [
              {
                name: "Nairobi County",
                color: "#8B6A53",
                level: "County",
                children: [
                  { name: "Karura Forest Station", color: "#78A783", level: "Station" },
                  { name: "Ngong Road Forest Station", color: "#78A783", level: "Station" },
                ],
              },
              {
                name: "Kiambu County",
                color: "#8B6A53",
                level: "County",
                children: [
                  { name: "Kereita Forest Station", color: "#78A783", level: "Station" },
                ],
              },
            ],
          },
          {
            name: "Central Highlands Conservancy",
            color: "#6F6F50",
            level: "Conservancy",
            children: [
              {
                name: "Nyeri County",
                color: "#8B6A53",
                level: "County",
                children: [
                  { name: "Aberdare Forest Station", color: "#78A783", level: "Station" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Key data for the legend
  const keyData = [
    { level: "Board of Directors", color: "#0E5827", description: "Highest governing body" },
    { level: "CCF", color: "#0F5A26", description: "Chief Conservator of Forests (CEO)" },
    { level: "Directorate", color: "#226436", description: "Strategic leadership units" },
    { level: "Department/Division", color: "#245B3C", description: "Operational units" },
    { level: "Sub-Division", color: "#FFF", borderColor: "#0E5827", description: "Support and specialized roles" },
    { level: "Section", color: "#2E5B37", description: "Operational sections within divisions" },
    { level: "Unit", color: "#78A783", description: "Specialized units within sections" },
    { level: "Conservancy", color: "#6F6F50", description: "Regional management units" },
    { level: "County", color: "#8B6A53", description: "County-level management" },
    { level: "Station", color: "#78A783", description: "Local forest stations" },
  ];

  // Recursive component to render the org chart
  const renderNode = (node) => (
    <div className="flex flex-col items-center">
      <div
        className="p-3 rounded-lg text-center text-sm font-medium min-w-[120px] max-w-[150px] border-2 border-[#0E5827] shadow-md hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: node.color, color: node.color === "#FFF" ? "#000000" : "white" }}
      >
        {node.name}
      </div>
      {node.children && (
        <>
          <div className="border-l-2 border-[#0E5827] w-px h-5 mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 relative">
            {node.children.map((child, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index > 0 && (
                  <div
                    className="absolute border-t-2 border-[#0E5827] h-px top-[-10px]"
                    style={{ left: 0, width: `calc(50% + ${index * 75}px)` }}
                  ></div>
                )}
                {index < node.children.length - 1 && (
                  <div
                    className="absolute border-t-2 border-[#0E5827] h-px top-[-10px]"
                    style={{ right: 0, width: `calc(50% + ${(node.children.length - 1 - index) * 75}px)` }}
                  ></div>
                )}
                {renderNode(child)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Page Container */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl p-12 max-w-5xl w-full mx-auto relative z-10 border border-white/30 rounded-xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          style={{ fontSize: `${fontSize}px` }}
        >
          <h1 className="text-4xl font-bold text-[#0f5a28] mb-6 text-center leading-tight tracking-wide">
            Organization Structure
          </h1>

          {/* Organizational Chart */}
          <div className="my-8 p-4 bg-gray-100 rounded-lg overflow-x-auto">
            {renderNode(orgStructure)}
          </div>

          {/* Key (Legend) */}
          <div className="mt-8 bg-[#f0f4e8] rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-[#0f5a28] mb-4">Legend</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#e8f5e9]">
                    <th className="p-2">Level</th>
                    <th className="p-2">Color</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {keyData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-2">{item.level}</td>
                      <td className="p-2 flex items-center gap-2">
                        <div
                          className="w-5 h-5 inline-block"
                          style={{
                            backgroundColor: item.color,
                            border: item.borderColor ? `2px solid ${item.borderColor}` : "none",
                          }}
                        ></div>
                        {item.color}
                      </td>
                      <td className="p-2">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-[#333] leading-relaxed mt-6">
            The Service now has an Organization Structure that borrows its functionality from the Forest Conservation and Management Act, 2016 and provides for a lean span of control. The Chief Conservator of the Forests reports to the Board of Directors. To effectively carry out its functions and fulfill its strategic objectives and mandate, KFS is structured into six (6) Directorates and three (3) Departments whose heads report directly to the Chief Conservator of Forests (CEO) as follows;
          </p>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-[#333] mb-2">Six (6) Directorates namely:</h3>
            <ul className="list-disc pl-8 space-y-1 text-lg text-[#333] leading-relaxed">
              <li>Forest Conservation and Management</li>
              <li>Forest Protection and Security</li>
              <li>Strategy, Partnerships & Resource Mobilization</li>
              <li>Corporate Services</li>
              <li>Internal Audit</li>
              <li>Corporation Secretary</li>
            </ul>
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-[#333] mb-2">There are three (3) stand-alone Departments namely:</h3>
            <ul className="list-disc pl-8 space-y-1 text-lg text-[#333] leading-relaxed">
              <li>Supply Chain Management</li>
              <li>Air-Wing</li>
              <li>Inspectorate and Internal Affairs</li>
            </ul>
          </div>
          <p className="text-lg text-[#333] leading-relaxed">
            For better span of control, the approved organization structure helps the Service to implement her mandate through these functional levels as follows; through Departments, Divisions, Sections, Units, Conservancies, Counties, Stations the functional areas have been provided for as follows; Directorates; Departments; Divisions; Sections; Units; Conservancies; Counties and Stations.
          </p>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <a
              href="https://recruitment.kenyaforestservice.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6A961F] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#5a7f1a] transition-all duration-300"
            >
              Explore KFS Careers
            </a>
          </div>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] text-white p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Increase font size"
          >
            <IoMdAdd className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] text-white p-2 rounded-full hover:bg-green-800 transition-all duration-300"
            aria-label="Decrease font size"
          >
            <IoMdRemove className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}