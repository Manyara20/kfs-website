"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@/app/homepage/NewsCard";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-slide effect only for small screens
  useEffect(() => {
    if (window.innerWidth < 640 && newsData.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === displayedNews.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Slide every 3 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [newsData]);

  const displayedNews = newsData.slice(0, 3);

  const truncateContent = (content) => {
    if (content.length <= 300) return content;
    return content.substring(0, 300) + "...";
  };

  return (
    <section className="bg-[#e6f5e6] py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Centered Headers */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl bold text-[#0E2E0E] font-black">
          News
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-green-900 mt-1 sm:mt-2">
          Latest News
        </h2>
      </div>

      {/* News Card Container */}
      {error ? (
        <p className="text-red-500 text-center text-base xl:text-lg">{error}</p>
      ) : newsData.length === 0 ? (
        <p className="text-gray-600 text-center text-base xl:text-lg">
          No news available at this time.
        </p>
      ) : (
        <div className="w-full overflow-hidden sm:overflow-visible">
          <div
            className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out sm:transition-none"
            style={{
              transform: window.innerWidth < 640 ? `translateX(-${currentIndex * (100 + 2)}%)` : "none", // Adjusted for gap
            }}
          >
            {displayedNews.map((item, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-0 flex-shrink-0 sm:flex-shrink"
              >
                <NewsCard
                  title={item.title}
                  description={truncateContent(item.content)}
                  imageUrl={
                    item.image
                      ? `http://localhost:5000${item.image}`
                      : "https://via.placeholder.com/768x527"
                  }
                  author={`By ${item.author_id}`}
                  date={new Date(item.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  comments={item.comments || 0}
                  className="rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;