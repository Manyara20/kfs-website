"use client";

import React, { useState } from "react";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function OrganizationalStructure() {
  const [activeTab, setActiveTab] = useState("Corporate Secretary");

  const tabs = {
    "Corporate Secretary": ["Legal Services"],
    "Forest Protection and Security": [
      "Forest Protection, Fire and Disaster Operations",
      "Investigation, Prosecution & Inspection",
      "Forest Law Enforcement Academy - FoLEA",
      "Forest Security Intelligence"
    ],
    "Forest Conservation and Management": [
      "Forest Survey & Information Management",
      "Conservation Coordination",
      "Kenya Forestry College - KFC",
      "Forestry Advisory & County Liaison",
      "Dry-land & Private Forest Development Coordination"
    ],
    "Strategy, Partnerships & Resource Mobilization": [
      "Partnerships & Resource Mobilization",
      "Enterprise and Marketing",
      "Planning, M&E and Performance Management",
      "Quality Assurance & Risk Management"
    ],
    "Corporate Services": [
      "Finance & Accounts",
      "Human Resource Management",
      "Administration & Infrastructure Development",
      "Information Communication Technology - ICT",
      "Corporate Communications"
    ],
    "Internal Audit": []
  };

  const standaloneDepartments = [
    "Supply Chain Management",
    "Air-Wing",
    "Inspectorate and Internal Affairs"
  ];

  return (
    <>
      <MainNavBar />
      <div className="container mx-auto p-6 bg-white shadow-squareded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">Organizational Structure</h1>

        <div className="prose max-w-none mb-10">
          <h2 className="text-2xl font-bold text-gray-800">ORGANIZATION STRUCTURE</h2>
          <p className="text-justify leading-relaxed">
            The Service now has an Organization Structure that borrows its functionality from the <strong>Forest Conservation and Management Act, 2016</strong>, and provides for a lean span of control. The <strong>Chief Conservator of the Forests</strong> reports to the <strong>Board of Directors</strong>. To effectively carry out its functions and fulfill its strategic objectives and mandate, KFS is structured into six (6) Directorates and three (3) Departments whose heads report directly to the Chief Conservator of Forests (CEO) as follows:
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">Six (6) Directorates namely:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Forest Conservation and Management</li>
            <li>Forest Protection and Security</li>
            <li>Strategy, Partnerships & Resource Mobilization</li>
            <li>Corporate Services</li>
            <li>Internal Audit</li>
            <li>Corporate Secretary</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">Three (3) Stand-alone Departments:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Supply Chain Management</li>
            <li>Air-Wing</li>
            <li>Inspectorate and Internal Affairs</li>
          </ul>

          <p className="text-justify leading-relaxed mt-4">
            For better span of control, the approved organization structure helps the Service implement its mandate through these functional levels: <strong>Departments</strong>, <strong>Divisions</strong>, <strong>Sections</strong>, <strong>Units</strong>, <strong>Conservancies</strong>, <strong>Counties</strong>, and <strong>Stations</strong>.
          </p>
        </div>

        {/* Top Structure */}
        <div className="flex flex-col items-center relative">
          <div className="bg-red-700 text-white p-3 w-72 text-center font-bold mb-4 z-10">
            BOARD OF DIRECTORS
          </div>

          <svg
            className="absolute top-14 left-1/2 transform -translate-x-1/2"
            width="2"
            height="40"
            style={{ zIndex: 0 }}
          >
            <line x1="1" y1="0" x2="1" y2="40" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
              </marker>
            </defs>
          </svg>

          <div className="bg-blue-700 text-white p-2 w-72 text-center font-medium mb-6 z-10">
            Chief Conservator of Forests (CCF)
          </div>

          {/* Tabbed Directorate Content */}
          <div className="w-full mb-6 relative">
            <div className="flex overflow-x-auto gap-2 border-b border-gray-300 pb-2">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none transition ${
                    activeTab === tab
                      ? "bg-gray-200 text-gray-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border border-t-0 border-gray-300 rounded-b-md">
              {tabs[activeTab].length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {tabs[activeTab].map((department) => (
                    <li
                      key={department}
                      className="text-gray-800 bg-yellow-100 p-2 rounded-md"
                    >
                      {department}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 italic">No departments listed.</p>
              )}
            </div>
          </div>

          {/* Standalone Departments */}
          <div className="w-full">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4 underline">Standalone Departments</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {standaloneDepartments.map((department) => (
                <div
                  key={department}
                  className="bg-yellow-100 p-2 w-40 text-center text-gray-800 rounded-md shadow-sm"
                >
                  {department}
                </div>
              ))}
            </div>
          </div>

          {/* Color Legend Table */}
          <div className="w-full mt-10">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4 underline">Hierarchy Legend</h2>
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">S/N</th>
                  <th className="border border-gray-300 p-2">Colour Code</th>
                  <th className="border border-gray-300 p-2">Level</th>
                  <th className="border border-gray-300 p-2">KFS Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">1</td>
                  <td className="border border-gray-300 p-2 bg-red-700 text-white text-center">RED</td>
                  <td className="border border-gray-300 p-2 text-center">BOARD OF DIRECTORS</td>
                  <td className="border border-gray-300 p-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                  <td className="border border-gray-300 p-2 bg-blue-700 text-white text-center">BLUE</td>
                  <td className="border border-gray-300 p-2 text-center">CCF</td>
                  <td className="border border-gray-300 p-2 text-center">–</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">3</td>
                  <td className="border border-gray-300 p-2 bg-gray-200 text-center">GREY</td>
                  <td className="border border-gray-300 p-2 text-center">DIRECTORATES</td>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">4</td>
                  <td className="border border-gray-300 p-2 bg-yellow-200 text-center">YELLOW</td>
                  <td className="border border-gray-300 p-2 text-center">DEPARTMENTS</td>
                  <td className="border border-gray-300 p-2 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
}
