"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function TendersPage() {
  const [tenders, setTenders] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tendersPerPage = 20;

  useEffect(() => {
    const fetchTenders = async () => {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/tenders/public`;
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

  // Filter tenders based on search query
  const filteredTenders = tenders.filter((tender) =>
    tender.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalTenders = filteredTenders.length;
  const totalPages = Math.ceil(totalTenders / tendersPerPage);
  const indexOfLastTender = currentPage * tendersPerPage;
  const indexOfFirstTender = indexOfLastTender - tendersPerPage;
  const currentTenders = filteredTenders.slice(indexOfFirstTender, indexOfLastTender);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNavBar />
      <MainNavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Tenders</h1>
          <p className="text-xl text-gray-600 mb-4">
            Explore the latest tenders from the Kenya Forest Service.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search tenders by description..."
              className="w-full px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : filteredTenders.length === 0 ? (
          <p className="text-gray-600 text-center">
            {searchQuery
              ? "No tenders match your search."
              : "No active tenders available at this time."}
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6">
              {currentTenders.map((tender) => (
                <div key={tender.id} className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold text-green-900 mb-2">
                    {tender.description}
                  </h2>
                  {tender.id && (
                    <p className="text-sm text-gray-600 mb-2">Tender ID: {tender.id}</p>
                  )}
                  <p className="text-sm text-gray-600 mb-4">File available for download</p>
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${tender.pdf_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Download Tender
                  </a>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  } transition duration-300`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? "bg-green-900 text-white"
                        : "bg-green-600 text-white hover:bg-green-700"
                    } transition duration-300`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  } transition duration-300`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
      <FooterBottom />
    </div>
  );
}