"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/public`);
        setNewsData(data.slice(0, 4));
      } catch {
        setError("Failed to load news. Please try again later.");
      }
    };

    const fetchNotices = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notices/public`);
        setNotices(data);
      } catch {
        setError("Failed to load notices.");
      }
    };

    fetchNews();
    fetchNotices();
  }, []);

  useEffect(() => {
    if (notices.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 3_000);
    return () => clearInterval(interval);
  }, [notices]);

  const truncate = (text, max = 100) =>
    text.length <= max ? text : text.slice(0, max) + "…";

  const getImageUrl = (image) =>
    image
      ? `${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${image}`
      : "https://via.placeholder.com/150x100";

  const isImageFile = (url) => url && /\.(jpg|jpeg|png|gif)$/i.test(url);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-kfs-light">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kfs-dark text-center mb-10">
          News &amp; Notices
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-kfs-medium mb-4 uppercase tracking-wide border-b-2 border-kfs-medium pb-2">
              Latest News
            </h3>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {newsData.length === 0 && !error && (
              <p className="text-gray-500 text-sm">No news available at this time.</p>
            )}

            <ul className="space-y-4">
              {newsData.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-200"
                  onClick={() => router.push(`/mediacenter/news-events/${item.id}`)}
                >
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-28 h-20 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-kfs-dark leading-snug mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-1">
                      {truncate(item.content)}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(item.date).toLocaleDateString("en-KE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Notices Slider */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-kfs-medium mb-4 uppercase tracking-wide border-b-2 border-kfs-medium pb-2">
              Updates
            </h3>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {notices.length === 0 && !error && (
              <p className="text-gray-500 text-sm">No updates available at this time.</p>
            )}

            {notices.length > 0 && (
              <div className="relative bg-white rounded-lg shadow-sm overflow-hidden h-[480px]">
                {notices.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-4 flex flex-col justify-between transition-opacity duration-500 ${
                      index === currentNoticeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {isImageFile(item.file_url) && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${item.file_url}`}
                        alt={item.title}
                        className="w-full flex-1 object-cover rounded mb-3 min-h-0"
                      />
                    )}
                    <div className="flex-shrink-0">
                      <h4 className="text-sm font-semibold text-kfs-dark truncate mb-2">
                        {item.title}
                      </h4>
                      {item.file_url && (
                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL.replace("/api", "")}${item.file_url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-kfs-dark text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-kfs-medium transition-colors"
                        >
                          {isImageFile(item.file_url) ? "View Image" : "Download PDF"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                {/* Dot indicators */}
                {notices.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {notices.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Notice ${i + 1}`}
                        onClick={() => setCurrentNoticeIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          i === currentNoticeIndex ? "bg-kfs-dark scale-125" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
