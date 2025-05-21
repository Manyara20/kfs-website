"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function JobVacancies() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/jobs/public`;
      console.log(`Fetching jobs from ${url}`);
      try {
        const response = await axios.get(url, {
          timeout: 5000,
        });
        console.log("Response received:", response.status, response.data);
        setJobs(response.data);
        setError("");
      } catch (err) {
        console.error("Full Axios error:", err);
        console.error("Axios error details:", {
          name: err.name,
          message: err.message,
          code: err.code,
          status: err.response?.status,
          data: err.response?.data,
          request: err.request ? "Request made, no response" : "No request sent",
          stack: err.stack,
        });
        setError(
          err.response?.data?.error ||
          err.message ||
          "Failed to load jobs. Please check the server."
        );
      }
    };

    fetchJobs();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#e8f5e9] min-h-screen">
      <TopNavBar />
      <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto py-12 px-4 relative z-10">
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
                Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act (FCMA), 2016. 
                The Mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and social-economic 
                benefits for the present and future generations. 
              </p>
            </div>

            {/* Divider */}
            <hr className="border-[#e8ecef] mx-8 my-2" />

            {/* Job Listings Section */}
            <div className="p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-lg tracking-wide">
                Available Positions
              </h2>

              {error ? (
                <p className="text-red-500 text-center text-lg">{error}</p>
              ) : jobs.length === 0 ? (
                <p className="text-gray-300 text-center text-lg">
                  No active job vacancies available at this time.
                </p>
              ) : (
                jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white bg-opacity-95  p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6 md:flex-row flex-col gap-4"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-left gap-6 flex-1">
                      <svg
                        className="w-9 h-9 text-[#0f5a28] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="flex flex-col items-start">
                        <h3 className="text-xl font-semibold text-[#0f5a28] leading-tight">
                          {job.title}
                        </h3>
                        <p className="text-sm text-[#666] mt-2">Open Application</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg text-left font-semibold text-[#0f5a28] mb-2">
                        Job Specification
                      </h4>
                      <p className="text-sm text-left text-[#444] leading-relaxed mb-4">
                        {job.description}
                      </p>
                      {job.duties && (
                        <>
                          <h4 className="text-lg text-left font-semibold text-[#0f5a28] mb-2">
                            Duties and Responsibilities
                          </h4>
                          <ul className="list-disc text-sm text-[#444] leading-relaxed text-left pl-5">
                            {job.duties.split("\n").map((duty, index) => (
                              <li key={index} className="py-1">{duty}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {job.requirements && (
                        <>
                          <h4 className="text-lg text-left font-semibold text-[#0f5a28] mb-2">
                            Person Specification
                          </h4>
                          <ul className="list-disc text-sm text-[#444] leading-relaxed text-left pl-5">
                            {job.requirements.split("\n").map((req, index) => (
                              <li key={index} className="py-1">{req}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Divider */}
            <hr className="border-[#e8ecef] mx-8 my-2" />

            {/* How to Apply and Note Sections */}
            <div className="flex flex-col md:flex-row gap-5 p-8 justify-center items-stretch">
              <div className="bg-[#FFFFE0] p-5 w-full max-w-sm text-center shadow-lg rounded-lg border border-[#d4d4d4] relative">
                <div className="absolute -top-4 left-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
                <div className="absolute -top-4 right-5 w-8 h-8 bg-[#1a1a1a] border-2 border-[#333] rounded shadow-md transform rotate-45"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#333] mb-4">
                  How to Apply
                </h3>
                <p className="text-sm text-[#333] mb-4">
                  <strong>Step 1:</strong> Visit Online Application Portal:
                </p>
                <Link href="https://recruitment.kenyaforestservice.org/" className="inline-block" target="_blank">
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
      </div>
      <FooterBottom />
    </div>
  );
}