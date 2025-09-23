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
              ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${post.image}`
              : "https://via.placeholder.com/768x527",
            author: `By ${post.author_id || "Admin"}`,
            date: new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }) || "Unknown Date",
            comments: post.comments || 0,
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
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCardClick = (id) => {
    router.push(`/mediacenter/news-events/${id}`);
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
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        )}

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
      </section>
      <FooterBottom />
    </>
  );
};

export default NewsandEvents;