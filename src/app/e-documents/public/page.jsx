"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import axios from "axios";

export default function PublicDocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/documents/public`);
        setDocuments(response.data);
        setError("");
      } catch (err) {
        setError(
          err.response?.data?.error || "Failed to load documents. Please try again later."
        );
      }
    };
    fetchDocuments();
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
    <div className="flex flex-col min-h-screen bg-gray-50">
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
        <div className="max-w-6xl mx-auto py-12 px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-lg tracking-wide">
            Public Documents
          </h1>
          <div>
            {error ? (
              <p className="text-red-500 text-center text-lg">{error}</p>
            ) : documents.length === 0 ? (
              <p className="text-gray-300 text-center text-lg">
                No public documents available at this time.
              </p>
            ) : (
              documents.map((doc, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-95 rounded-xl p-6 flex justify-between items-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6 md:flex-row flex-col gap-4"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center gap-6 flex-1">
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
                    <div className="flex flex-col">
                      <h2 className="text-xl font-semibold text-[#0f5a28] leading-tight">
                        {doc.description}
                      </h2>
                      <p className="text-sm text-[#666] mt-2">Public Document</p>
                    </div>
                  </div>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${doc.pdf_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="bg-[#0f5a28] text-white py-2.5 px-7 rounded-lg text-sm font-medium hover:bg-[#1b7d3a] hover:scale-103 transition-all min-w-[120px]">
                      Download
                    </button>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}