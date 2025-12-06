"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import axios from "axios";

export default function LegalDocumentsPage() {
  const [legalDocuments, setLegalDocuments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLegalDocuments = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/documents/legal`
        );
        setLegalDocuments(response.data);
        setError("");
      } catch (err) {
        setError("Failed to load legal documents. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLegalDocuments();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0f5a28]/90"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.95), rgba(15, 90, 40, 0.95)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        />
        <MainNavBar />
      </div>

      {/* Main Content */}
      <div
        className="flex-1 bg-cover bg-center bg-fixed py-16 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.88), rgba(15, 90, 40, 0.88)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16 drop-shadow-2xl tracking-tight"
          >
            Legal Documents
          </motion.h1>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white mt-4 text-lg">Loading documents...</p>
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-red-300 text-xl font-medium bg-white/10 backdrop-blur-sm inline-block px-8 py-6 rounded-xl">
                {error}
              </p>
            </motion.div>
          ) : legalDocuments.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-200 text-xl py-20 font-light"
            >
              No legal documents available at the moment.
            </motion.p>
          ) : (
            <div className="space-y-6">
              {legalDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id || index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="p-4 bg-[#0f5a28]/10 rounded-xl group-hover:bg-[#0f5a28]/20 transition">
                        <svg
                          className="w-10 h-10 text-[#0f5a28]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0f5a28] group-hover:text-[#1b7d3a] transition">
                          {doc.description}
                        </h2>
                        <p className="text-gray-600 mt-1 font-medium">Legal Document • PDF Format</p>
                      </div>
                    </div>

                    <Link
                      href={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${doc.pdf_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <button className="bg-[#0f5a28] hover:bg-[#1b7d3a] text-white font-bold py-3.5 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}