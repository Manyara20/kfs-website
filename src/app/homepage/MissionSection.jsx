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
  const [activeTab, setActiveTab] = useState("Mission");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-[url('/images/pattern.svg')] bg-cover bg-center py-2 md:py-3">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-0 sm:px-0 lg:px-0">
        {/* Left Section: Image */}
        <div className="flex flex-col space-y-0 h-[720px] overflow-hidden">
          <div className="flex-1 flex">
            <div className="w-full shadow-lg rounded-none bg-white">
              <img
                src="/images/hq/hq.png"
                alt="Forest Conservation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Core Mandate + Tabs */}
        <div className="flex flex-col space-y-6 h-[720px] overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Core Mandate */}
            <div className="flex flex-col justify-between w-full shadow-lg rounded-none bg-white mb-6">
              <div className="w-full bg-white text-[#0f5a28] text-center py-2">
                <h6 className="text-xl font-bold">Core Mandate</h6>
              </div>
              <div className="flex-grow text-lg flex items-center px-4 lg:px-8 py-4">
                <div className="text-gray-900 text-base">
                  <p className="mb-2">
                    Kenya Forest Service is a state corporation created through the Forest Act, 2005 (now repealed). The Service derives its mandate from the Forest Conservation and Management Act (FCMA), 2016, with key functions including:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Conserve, protect, and manage all Public Forests</li>
                    <li>
                      Prepare and implement management plans for all public forests, and assist with community or private forest plans when requested
                    </li>
                    <li>
                      Process applications for licenses or permits related to forest resources or management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tabs for Mission, Vision, Strategic Goal */}
            <div className="flex-1 flex flex-col shadow-lg rounded-none bg-gray-100">
              <div className="flex border-b border-gray-200">
                {data.map((item) => (
                  <button
                    key={item.title}
                    className={`flex-1 py-2 text-center text-base font-semibold ${
                      activeTab === item.title
                        ? " bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => handleTabClick(item.title)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="flex-grow flex items-center px-4 lg:px-8">
                <p className="text-gray-900 text-lg text-center">
                  {data.find((item) => item.title === activeTab)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Notices Slider */}
        <div className="flex flex-col space-y-6 h-[720px] overflow-hidden">
          <div className="flex-1 flex">
            <div className="flex flex-col justify-between w-full shadow-lg rounded-none bg-white">
              <div className="w-full  bg-white text-[#0f5a28] text-center py-2">
                <h6 className="text-xl font-bold">Notices</h6>
              </div>
              <div className="flex-grow flex items-center px-4 lg:px-8">
                <div className="w-full h-full">
                  {error && <p className="text-red-500 text-center text-base">{error}</p>}
                  {notices.length === 0 && !error ? (
                    <p className="text-gray-600 text-center text-base">No notices available at this time.</p>
                  ) : (
                    <div className="relative w-full h-full">
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
                                className="inline-block mt-2 bg-[#0f5a28] text-white px-6 py-2 rounded text-sm hover:bg-green-700 transition"
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
        </div>
      </div>
    </div>
  );
}