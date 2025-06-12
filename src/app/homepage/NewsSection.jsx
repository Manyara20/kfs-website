"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/public`);
        setNewsData(response.data.slice(0, 4));
        setError("");
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      }
    };

    const fetchNotices = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notices/public`);
        setNotices(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Failed to load notices.");
      }
    };

    fetchNews();
    fetchNotices();
  }, []);

  useEffect(() => {
    if (notices.length > 1) {
      const interval = setInterval(() => {
        setCurrentNoticeIndex((prevIndex) =>
          prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [notices]);

  const truncateContent = (content) => {
    if (content.length <= 100) return content;
    return content.substring(0, 100) + "...";
  };

  const getImageUrl = (image) => {
    return image
      ? `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image}`
      : "https://via.placeholder.com/150x100";
  };

  const isImageFile = (file_url) => {
    return file_url && /\.(jpg|jpeg|png|gif)$/i.test(file_url);
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8 bg-[#e6f5e6]">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-[#0E2E0E]">
          News & Notices
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Latest News */}
        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mb-4 flex items-center">
            Latest News
          </h2>
          {error && <p className="text-red-500 text-center text-base">{error}</p>}
          {newsData.length === 0 && !error ? (
            <p className="text-gray-600 text-center text-base">No news available at this time.</p>
          ) : (
            <ul className="space-y-4">
              {newsData.map((item, index) => (
                <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-32 h-20 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0E2E0E]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{truncateContent(item.content)}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(item.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section: Notices Slider */}
        <div className="lg:col-span-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-900 mb-4">
            Updates
          </h2>
          {error && <p className="text-red-500 text-center text-base">{error}</p>}
          {notices.length === 0 && !error ? (
            <p className="text-gray-600 text-center text-base">No notices available at this time.</p>
          ) : (
            <div className="relative w-full h-[530px] bg-white rounded-lg shadow overflow-hidden">
              {notices.map((item, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentNoticeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="p-4 h-full flex flex-col justify-between">
                    {isImageFile(item.file_url) && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${item.file_url}`}
                        alt={item.title}
                        className="w-full h-full object-cover rounded mb-2"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-[#0E2E0E] truncate">{item.title}</h3>
                    {item.file_url && (
                      <a
                        href={`${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${item.file_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 bg-[#0f5a28] text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition"
                      >
                        {isImageFile(item.file_url) ? "View Image" : "Download PDF"}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;