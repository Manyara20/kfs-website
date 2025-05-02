"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function TendersPage() {
  const [tenders, setTenders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTenders = async () => {
      const url = "http://localhost:5000/api/tenders/public";
      console.log(`Fetching tenders from ${url}`);
      try {
        const response = await axios.get(url, {
          timeout: 5000,
        });
        console.log("Response received:", response.status, response.data);
        setTenders(response.data);
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
          "Failed to load tenders. Please check the server."
        );
      }
    };

    fetchTenders();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Tenders</h1>
          <p className="text-xl text-gray-600">
            Explore the latest tenders from the Kenya Forest Service.
          </p>
        </div>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : tenders.length === 0 ? (
          <p className="text-gray-600 text-center">No active tenders available at this time.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {tenders.map((tender) => (
              <div key={tender.id} className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-green-900 mb-2">
                  {tender.description}
                </h2>
                {tender.id && (
                  <p className="text-sm text-gray-600 mb-2">Tender ID: {tender.id}</p>
                )}
                <p className="text-sm text-gray-600 mb-4">File available for download</p>
                <a
                  href={`http://localhost:5000${tender.pdf_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Download Tender
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
      <FooterBottom />
    </div>
  );
}