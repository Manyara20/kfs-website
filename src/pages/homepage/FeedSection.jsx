"use client";

import React, { useEffect, useRef, useState } from "react";

// EventCard component for Events
const EventCard = ({ date, title, time, venue, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center bg-[#0f5a28] text-white rounded p-2 mb-1 transition-all duration-200 hover:bg-[#e6f5e6] hover:text-[#000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0000]"
    >
      <div className="w-12 h-12 bg-[#000] text-white flex flex-col items-center justify-center rounded mr-2">
        <span className="text-base font-bold">{date.day}</span>
        <span className="text-[10px] uppercase">{date.month}</span>
      </div>
      <div className="flex flex-col text-xs text-left">
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Date:</strong> {date.day} {date.month}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Venue:</strong> {venue}</p>
      </div>
    </button>
  );
};

const NoticeCard = ({ title, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#0f5a28] text-white rounded p-2 mb-1 transition-all duration-200 hover:bg-[#e6f5e6] hover:text-[#000] h-40"
    >
      <div className="flex flex-col text-xs text-left">
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Description:</strong> {content}</p>
      </div>
    </button>
  );
};

// X Feed component with live tweets
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
      className="bg-[#ffffff] p-1 overflow-y-auto no-scrollbar twitter-feed-container"
      style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
    >
      <h3 className="text-base font-semibold mb-1 text-black">X Feed</h3>
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
  const eventItems = [
    {
      date: { day: "25", month: "Mar" },
      title: "Tree Planting Drive",
      time: "8 AM - 2 PM",
      venue: "Karura Forest",
      onClick: () => console.log("Clicked Event: Tree Planting Drive"),
    },
    {
      date: { day: "10", month: "Apr" },
      title: "Wildlife Conservation Seminar",
      time: "10 AM - 4 PM",
      venue: "KFS HQ, Nairobi",
      onClick: () => console.log("Clicked Event: Wildlife Conservation Seminar"),
    },
  ];

  const noticeItems = [
    {
      title: "KFS Plants 1 Million Trees",
      content: "Launched a massive reforestation effort in Nairobi, planting 1M trees to combat deforestation.",
      onClick: () => console.log("Clicked Notice: KFS Plants 1 Million Trees"),
    },
    {
      title: "Wildfire Contained in Aberdare",
      content: "Rangers contained a wildfire in Aberdare National Park, protecting local wildlife.",
      onClick: () => console.log("Clicked Notice: Wildfire Contained in Aberdare"),
    },
  ];

  const eventsRef = useRef(null);
  const noticeRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const eventsHeight = eventsRef.current?.getBoundingClientRect().height || 0;
    const noticeHeight = noticeRef.current?.getBoundingClientRect().height || 0;
    const tallestHeight = Math.max(eventsHeight, noticeHeight);
    setMaxHeight(tallestHeight);
  }, []);

  return (
    <section className="py-2 bg-[#e6f5e6] text-white">
      <h2 className="text-xl font-bold text-center mb-2 text-black">KFS Updates</h2>
      <div className="w-full max-w-5xl mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          
          <div ref={eventsRef} className="bg-[#fff] p-1 border-2 border-[#1a3c34] min-h-64">
            <h3 className="text-base font-semibold mb-1 text-black">Events</h3>
            {eventItems.map((item, index) => (
              <EventCard key={index} {...item} />
            ))}
          </div>
          
          <div ref={noticeRef} className="bg-[#ffffff] p-1 border-2 border-[#1a3c34] min-h-64">
            <h3 className="text-base font-semibold mb-1 text-black">Notice Board</h3>
            {noticeItems.map((item, index) => (
              <NoticeCard key={index} {...item} />
            ))}
          </div>
          
          <div className="bg-[#ffffff] p-1 border-2 border-[#1a3c34] min-h-64">
            <XFeed containerHeight={maxHeight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KFSFeeds;