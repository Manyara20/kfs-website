"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// EventCard component
const EventCard = ({ date, title, time, venue, onClick }) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate().toString().padStart(2, "0");
  const month = eventDate.toLocaleString("default", { month: "short" });

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center bg-[#0f5a28] text-white rounded p-2 sm:p-3 mb-1 transition-all duration-200 hover:bg-[#e6f5e6] hover:text-[#000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0000]"
    >
      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#000] text-white flex flex-col items-center justify-center rounded mr-2">
        <span className="text-sm sm:text-base font-bold">{day}</span>
        <span className="text-[8px] sm:text-[10px] uppercase">{month}</span>
      </div>
      <div className="flex flex-col text-xs sm:text-sm text-left">
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Date:</strong> {day} {month}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Venue:</strong> {venue}</p>
      </div>
    </button>
  );
};

// NoticeCard component
const NoticeCard = ({ title, description, file_url, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#0f5a28] text-white rounded p-2 sm:p-3 mb-1 transition-all duration-200 hover:bg-[#e6f5e6] hover:text-[#000] h-20 sm:h-24 overflow-hidden"
    >
      <div className="flex flex-col text-xs sm:text-sm text-left">
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {description}</p>
        {file_url && (
          <a
            href={`http://localhost:5000${file_url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            View File
          </a>
        )}
      </div>
    </button>
  );
};

// X Feed component
const XFeed = ({ containerHeight }) => {
  const xFeedRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {
      if (xFeedRef.current) {
        const timeline = xFeedRef.current.querySelector(".twitter-timeline");
        if (timeline) {
          timeline.style.height = `${containerHeight}px`;
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [containerHeight]);

  return (
    <div
      ref={xFeedRef}
      className="bg-[#ffffff] p-2 sm:p-3 overflow-y-auto no-scrollbar"
      style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
    >
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-black">X Feed</h3>
      <a
        className="twitter-timeline"
        href="https://twitter.com/KeForestService?ref_src=twsrc%5Etfw"
        data-height="300%"
        data-chrome="noheader nofooter transparent noborders"
      >
        Tweets by KeForestService
      </a>
    </div>
  );
};

const KFSFeeds = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events/public");
        console.log("Events fetched:", response.data);
        setEvents(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching events:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load events. Please try again later."
        );
      }
    };

    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notices/public");
        console.log("Notices fetched:", response.data);
        setNotices(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching notices:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load notices. Please try again later."
        );
      }
    };

    fetchEvents();
    fetchNotices();
  }, []);

  const eventsRef = useRef(null);
  const noticeRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const eventsHeight = eventsRef.current?.getBoundingClientRect().height || 0;
    const noticeHeight = noticeRef.current?.getBoundingClientRect().height || 0;
    const tallestHeight = Math.max(eventsHeight, noticeHeight);
    setMaxHeight(tallestHeight);
  }, [events, notices]);

  return (
    <section className="bg-[#e6f5e6] py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-[#0E2E0E]">
        KFS Updates
      </h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div
            ref={eventsRef}
            className="bg-[#fff] p-2 sm:p-3 border-2 border-[#1a3c34] min-h-[32rem]"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-black">
              Events
            </h3>
            {error ? (
              <p className="text-red-500 text-xs sm:text-sm">{error}</p>
            ) : events.length === 0 ? (
              <p className="text-gray-600 text-xs sm:text-sm">No active events available.</p>
            ) : (
              events.map((item, index) => (
                <EventCard
                  key={index}
                  date={item.date}
                  title={item.title}
                  time={item.time}
                  venue={item.venue}
                  onClick={() => console.log(`Clicked Event: ${item.title}`)}
                />
              ))
            )}
          </div>
          <div
            ref={noticeRef}
            className="bg-[#ffffff] p-2 sm:p-3 border-2 border-[#1a3c34] min-h-[16rem]"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-black">
              Notice Board
            </h3>
            {error ? (
              <p className="text-red-500 text-xs sm:text-sm">{error}</p>
            ) : notices.length === 0 ? (
              <p className="text-gray-600 text-xs sm:text-sm">No active notices available.</p>
            ) : (
              notices.map((item, index) => (
                <NoticeCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  file_url={item.file_url}
                  onClick={() => console.log(`Clicked Notice: ${item.title}`)}
                />
              ))
            )}
          </div>
          <div className="bg-[#ffffff] border-2 border-[#1a3c34] min-h-[16rem]">
            <XFeed containerHeight={maxHeight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KFSFeeds;