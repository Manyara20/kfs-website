"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@/app/homepage/NewsCard";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");

  // Fetch news from public endpoint
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/public");
        console.log("News fetched:", response.data);
        setNewsData(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching news:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load news. Please try again later."
        );
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-[#e6f5e6] py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Centered Headers */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl bold text-[#0E2E0E] font-black">
          News
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mt-1 sm:mt-2">
          KFS Latest News
        </h2>
      </div>

      {/* News Card Scrollable Container */}
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : newsData.length === 0 ? (
        <p className="text-gray-600 text-center">No news available at this time.</p>
      ) : (
        <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x">
          <div className="flex gap-3 sm:gap-4 md:gap-6 pb-4 md:pb-6">
            {newsData.map((item, index) => (
              <NewsCard
                key={index}
                title={item.title}
                description={item.content}
                imageUrl={item.image ? `http://localhost:5000${item.image}` : "https://via.placeholder.com/768x527"}
                author={`By ${item.author_id}`} // Adjust if you have author names in DB
                date={new Date(item.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                comments={item.comments || 0} // Add comments column to DB if needed
                className="snap-center"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;