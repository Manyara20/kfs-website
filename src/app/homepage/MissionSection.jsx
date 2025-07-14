"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const data = [
  {
    title: "Mission",
    description:
      "Conservation, management, development and sustainable utilization of forests and allied resources for current and future generation.",
  },
  {
    title: "Vision",
    description:
      "To be an internationally recognized organization of excellence in knowledge-based sustainable forest resources development, conservation, and management.",
  },
  {
    title: "Strategic Goal",
    description:
      "Sustainably manage all forests and build resilient forest ecosystems.",
  },
];

export default function MissionVisionNews() {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
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

  const getImageUrl = (image) => {
    return image
      ? `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${image}`
      : "https://via.placeholder.com/150x100";
  };

  const isImageFile = (file_url) => {
    return file_url && /\.(jpg|jpeg|png|gif)$/i.test(file_url);
  };

  return (
    <div className="w-full bg-[url('/images/pattern.svg')] bg-cover bg-center py-8 md:py-12">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Section: Mission, Vision, Strategic Goal */}
        <div className="flex flex-col space-y-6 h-[720px] overflow-hidden">
          <div className="flex flex-col gap-6 h-full">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex">
                <div className="flex flex-col justify-between w-full shadow-lg rounded-none bg-white">
                  {/* Title Section */}
                  <div className="w-full bg-[#0f5a28] text-white text-center py-2">
                    <h6 className="text-lg font-bold">{item.title}</h6>
                  </div>
                  {/* Description Section */}
                  <div className="flex-grow flex items-center px-4 lg:px-8">
                    <p className="text-gray-600 text-base text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section: Code of Conduct */}
        <div className="flex flex-col h-[720px] overflow-hidden">
          <div className="w-full h-full">
            <div className="bg-white shadow">
              <a
                href="/Documents/KFS-Code-of-Conduct-Report-LOW-RES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <img
                  src="/images/code-of-conduct.png"
                  alt="Code of Conduct"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Notices Slider */}
        <div className="flex flex-col h-[720px] overflow-hidden">
          <div className="w-full h-full">
            {error && <p className="text-red-500 text-center text-base">{error}</p>}
            {notices.length === 0 && !error ? (
              <p className="text-gray-600 text-center text-base">No notices available at this time.</p>
            ) : (
              <div className="relative w-full h-full bg-white shadow">
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
                          className="w-full h-[80%] object-contain rounded mb-2"
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
      </div>
    </div>
  );
}