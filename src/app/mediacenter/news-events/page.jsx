"use client";

import React, { useState, useEffect } from "react";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import NewsCard from "@/app/homepage/NewsCard";
import { useRouter } from "next/navigation";
import axios from "axios";

const NewsandEvents = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/public`);
        console.log("News posts fetched:", response.data);
        setNewsData(
          response.data.map((post) => ({
            id: post.id,
            title: post.title || "Untitled",
            content: post.content || "",
            shortDescription: post.content ? post.content.slice(0, 100) + "..." : "No description available",
            image: post.image
              ? `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${post.image}`
              : "https://via.placeholder.com/768x527",
            author: `By ${post.author_id || "Admin"}`,
            date: new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) || "Unknown Date",
            comments: post.comments || 0,
            // Mock gallery images (replace with actual data if available)
            gallery: [
              "https://via.placeholder.com/800x600?text=Gallery+Image+1",
              "https://via.placeholder.com/800x600?text=Gallery+Image+2",
              "https://via.placeholder.com/800x600?text=Gallery+Image+3",
            ],
          }))
        );
        setError("");
      } catch (err) {
        console.error("Error fetching news posts:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load news posts. Please try again later."
        );
      }
    };

    fetchNewsPosts();
  }, []);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedNews(null); // Reset selected news when changing pages
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedNews(null);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedNews(null);
    }
  };

  const handleCardClick = (item) => {
    setSelectedNews(item);
  };

  const handleBackToList = () => {
    setSelectedNews(null);
  };

  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <MainNavBar />
      <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#0E2E0E] font-black">
            News & Events
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-green-900 mt-1 sm:mt-2">
            Latest Updates
          </h2>
        </div>

        {error ? (
          <p className="text-red-500 text-center text-base xl:text-lg">{error}</p>
        ) : selectedNews ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBackToList}
              className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Back to News
            </button>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0E2E0E] mb-2">{selectedNews.title}</h3>
                <p className="text-gray-600 mb-2">{selectedNews.author} | {selectedNews.date}</p>
                <p className="text-gray-700 mb-4">{selectedNews.content}</p>
 Facet normal
                  <p className="text-gray-500">Comments: {selectedNews.comments}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#0E2E0E] mb-4">Photo Gallery</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedNews.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : newsData.length === 0 ? (
          <p className="text-gray-600 text-center text-base xl:text-lg">
            No news posts available at this time.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {currentItems.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                description={item.shortDescription}
                imageUrl={item.image}
                author={item.author}
                date={item.date}
                comments={item.comments}
                className="cursor-pointer"
                onClick={() => handleCardClick(item)}
              />
            ))}
          </div>
        )}

        {!selectedNews && (
          <div className="flex justify-center items-center my-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mx-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`mx-1 px-4 py-2 ${
                  currentPage === page ? "bg-green-500" : "bg-gray-800"
                } text-white rounded-full hover:bg-green-600 transition duration-300`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="mx-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
            >
              →
            </button>
          </div>
        )}
      </section>
      <FooterBottom />
    </>
  );
};

export default NewsandEvents;