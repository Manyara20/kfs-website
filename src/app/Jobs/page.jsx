"use client";
import Link from "next/link";
import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function JobVacancies() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-[#e8f5e9] min-h-screen">
      <TopNavBar />
      <MainNavBar />

      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-white to-[#f9f9f9] shadow-lg border border-[#e8ecef] mb-10 overflow-hidden">
          {/* Hero Section */}
          <div
            className="relative h-64 bg-cover bg-center flex items-center justify-center text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(13, 86, 2, 0.85), rgba(13, 86, 2, 0.85)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
            }}
          >
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-shadow-lg">
                Join the Kenya Forest Service
              </h1>
              <p className="mt-2 text-sm sm:text-base max-w-md mx-auto text-shadow-md">
                Be part of a legacy in conserving Kenya’s forests for a sustainable future.
              </p>
            </div>
            <div className="absolute inset-0 bg-inherit blur-sm -z-10"></div>
          </div>

          {/* Divider */}
          <hr className="border-[#e8ecef] mx-8 my-2" />

          {/* Introduction Section */}
          <div className="p-5 sm:p-8 text-center bg-[#f5f7fa] shadow-md border border-[#e8ecef] m-5 sm:m-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0D5602] mb-4">
              About Kenya Forest Service
            </h2>
            <p className="text-sm sm:text-base text-[#333] leading-relaxed max-w-3xl mx-auto">
              Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act (FCMA), 2016. The Mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and social-economic benefits for the present and future generations. KFS has partnered with the Global Environment Facility (GEF-7) through Food and Agricultural Organization of the United Nation (FAO) to support implementation of the Integrated Landscape Management for Conservation and Restoration of Mt. Elgon Ecosystem Project in Western Kenya. The Service wishes to recruit qualified personnel for a one-year renewable temporary contract.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-[#e8ecef] mx-8 my-2" />

          {/* Job Listings Section */}
          <div className="p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#0D5602] mb-6">
              Available Positions
            </h2>

            <div className="flex justify-between items-center mb-2 p-4 bg-[#245b3c] rounded-lg border border-[#e8ecef] max-w-4xl mx-auto">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Communication Expert KFS Grade 6 (REF KFS/CE/2025) - One (1) Post
              </h3>
              <button
                onClick={handleExpandClick}
                className="text-white hover:text-white focus:outline-none"
              >
                {expanded ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>

            {expanded && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-white rounded-lg border border-[#e8ecef] shadow-md max-w-4xl mx-auto">
                <div>
                  <h4 className="text-lg font-semibold text-[#0D5602] mb-2">Job Specification</h4>
                  <p className="text-sm text-[#444] leading-relaxed mb-4">
                    The Communication Expert shall report directly to the Project Manager and work in liaison with the Service’s corporate communication department and in collaboration with other Project staff and partners.
                  </p>

                  <h4 className="text-lg font-semibold text-[#0D5602] mb-2">Duties and Responsibilities</h4>
                  <ul className="list-disc text-sm text-[#444] leading-relaxed text-left pl-5">
                    <li className="py-1">Implement relevant communication strategies.</li>
                    <li className="py-1">
                      Facilitate all communication training programs targeting staff, KALRO, FAO, external staff, and other stakeholders within the project area.
                    </li>
                    <li className="py-1">Participate and contribute in interdepartmental planning and monitoring project activities.</li>
                    <li className="py-1">Spearhead effective exchange of information between the project and its publics.</li>
                    <li className="py-1">
                      Undertake communication research activities and dissemination of research findings to relevant audience within the project area.
                    </li>
                    <li className="py-1">Mentoring and coaching.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#0D5602] mb-2">Person Specification</h4>
                  <ul className="list-disc text-sm text-[#444] leading-relaxed text-left pl-5">
                    <li className="py-1">Bachelor’s degree in Communication, Social Sciences, Journalism, International Relations or other related fields of study.</li>
                    <li className="py-1">Served for at least six (6) years in a relevant position.</li>
                    <li className="py-1">Member of a professional body such as PRSK.</li>
                    <li className="py-1">Proficiency in Computer applications.</li>
                    <li className="py-1">Fulfil the requirements of Chapter Six of the Constitution.</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-[#0D5602] mb-2 mt-4">Skills and Attributes</h4>
                  <ul className="list-disc text-sm text-[#444] leading-relaxed text-left pl-5">
                    <li className="py-1">Good oral and written communication skills in Kiswahili and English.</li>
                    <li className="py-1">Time management and proper planning.</li>
                    <li className="py-1">Good analytical skills.</li>
                    <li className="py-1">Team player.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <hr className="border-[#e8ecef] mx-8 my-2" />

          {/* How to Apply and Note Sections */}
          <div className="flex flex-col md:flex-row gap-5 p-8 justify-center items-stretch">
            <div className="bg-[#FFFFE0] p-5 w-full max-w-sm text-center shadow-lg rounded-lg border border-[#d4d4d4] relative">
              <div className="absolute -top-4 left-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
              <div className="absolute -top-4 right-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-4">How to Apply</h3>
              <p className="text-sm text-[#333] mb-4">
                <strong>Step 1:</strong> Visit the official Kenya Forest Service website:
              </p>
              <Link href="https://www.kenyaforestservice.org" className="inline-block">
                <button className="bg-gradient-to-r from-[#0D5602] to-[#1a6b1a] text-white py-2 px-6 font-semibold text-sm rounded-lg shadow-md hover:from-[#0A4201] hover:to-[#145214] hover:-translate-y-0.5 hover:shadow-lg transition-all">
                  Apply Online
                </button>
              </Link>
              <p className="text-sm text-[#333] mt-4">
                <strong>Step 2:</strong> Submit a hard copy application with relevant documents.
              </p>
            </div>

            <div className="bg-[#FFFFE0] p-5 w-full max-w-sm text-center shadow-lg rounded-lg border border-[#d4d4d4] relative">
              <div className="absolute -top-4 left-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
              <div className="absolute -top-4 right-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-4">Note</h3>
              <ul className="text-sm text-[#444] leading-relaxed">
                <li className="py-1">The application process includes both online and hard copy submissions.</li>
                <li className="py-1">Shortlisted candidates must provide original documents.</li>
                <li className="py-1">KFS is an equal opportunity employer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}