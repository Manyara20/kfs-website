"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function EventsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  const eventsData = {
    "2025-01-01": "New Year's Day",
    "2026-01-01": "New Year's Day",
    "2025-02-02": "World Wetlands Day",
    "2026-02-02": "World Wetlands Day",
    "2025-03-03": "Africa Environment Day\nWangari Maathai Day",
    "2026-03-03": "Africa Environment Day\nWangari Maathai Day",
    "2025-03-21": "International Day of Forests",
    "2026-03-21": "International Day of Forests",
    "2025-03-22": "World Water Day",
    "2026-03-22": "World Water Day",
    "2025-03-23": "World Meteorological Day",
    "2026-03-23": "World Meteorological Day",
    "2025-04-18": "Good Friday",
    "2026-04-18": "Good Friday",
    "2025-04-20": "Easter Monday",
    "2026-04-20": "Easter Monday",
    "2025-04-22": "World Earth Day",
    "2026-04-22": "World Earth Day",
    "2025-05-01": "Labour Day",
    "2026-05-01": "Labour Day",
    "2025-05-02": "International Day for Biological Diversity",
    "2026-05-02": "International Day for Biological Diversity",
    "2025-06-01": "Madaraka Day",
    "2026-06-01": "Madaraka Day",
    "2025-06-05": "World Environment Day",
    "2026-06-05": "World Environment Day",
    "2025-06-17": "World Day to Combat Desertification and Drought",
    "2026-06-17": "World Day to Combat Desertification and Drought",
    "2025-06-20": "World Refugees Day",
    "2026-06-20": "World Refugees Day",
    "2025-10-10": "Mazingira Day",
    "2026-10-10": "Mazingira Day",
    "2025-10-18": "International Day for the Eradication of Poverty",
    "2026-10-18": "International Day for the Eradication of Poverty",
    "2025-10-20": "World Bamboo Day",
    "2026-10-20": "World Bamboo Day",
    "2025-11-27": "National Tree Planting Day",
    "2026-11-27": "National Tree Planting Day",
    "2025-12-12": "Jamhuri Day",
    "2026-12-12": "Jamhuri Day",
    "2025-12-25": "Christmas Day",
    "2026-12-25": "Christmas Day",
    "2025-12-26": "Boxing Day",
    "2026-12-26": "Boxing Day",
  };

  const upcomingEventsData = [
    { date: new Date("2025-04-18"), event: "Good Friday" },
    { date: new Date("2025-04-20"), event: "Easter Monday" },
    { date: new Date("2025-04-22"), event: "World Earth Day" },
    { date: new Date("2025-05-01"), event: "Labour Day" },
    { date: new Date("2025-05-02"), event: "International Day for Biological Diversity" },
    { date: new Date("2025-06-01"), event: "Madaraka Day" },
    { date: new Date("2025-06-05"), event: "World Environment Day" },
    { date: new Date("2025-06-17"), event: "World Day to Combat Desertification and Drought-xs" },
    { date: new Date("2025-06-20"), event: "World Refugees Day" },
    { date: new Date("2025-10-10"), event: "Mazingira Day" },
    { date: new Date("2025-10-18"), event: "International Day for the Eradication of Poverty" },
    { date: new Date("2025-10-20"), event: "World Bamboo Day" },
    { date: new Date("2025-11-27"), event: "National Tree Planting Day" },
    { date: new Date("2025-12-12"), event: "Jamhuri Day" },
    { date: new Date("2025-12-25"), event: "Christmas Day" },
    { date: new Date("2025-12-26"), event: "Boxing Day" },
    { date: new Date("2026-01-01"), event: "New Year's Day" },
    { date: new Date("2026-02-02"), event: "World Wetlands Day" },
    { date: new Date("2026-03-03"), event: "Africa Environment Day" },
    { date: new Date("2026-03-03"), event: "Wangari Maathai Day" },
    { date: new Date("2026-03-21"), event: "International Day of Forests" },
    { date: new Date("2026-03-22"), event: "World Water Day" },
    { date: new Date("2026-03-23"), event: "World Meteorological Day" },
  ];

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, event: "" });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      days.push({
        day,
        event: eventsData[dateKey] || "",
      });
    }
    setCalendarDays(days);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const today = new Date();
  const selectedMonth = currentDate.getMonth();
  const selectedYear = currentDate.getFullYear();

  const upcomingEvents = upcomingEventsData
    .filter(event => {
      const eventDate = event.date;
      return (
        eventDate >= today &&
        eventDate.getMonth() === selectedMonth &&
        eventDate.getFullYear() === selectedYear
      );
    })
    .sort((a, b) => a.date - b.date);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div>
     <MainNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-4 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-2 py-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white bg-opacity-95 p-12 max-w-9xl w-full shadow-lg rounded-none"
          >
            <h1 className="font-bold text-[#0f5a28] text-4xl text-center mb-2 drop-shadow-md capitalize tracking-tight leading-tight">
              Events Calendar
            </h1>
            <p className="text-black-200 text-sm text-center mb-6">
              Stay updated with the latest events and activities from the Kenya Forest Service.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white text-center mb-4 capitalize">
                Events in {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="bg-white bg-opacity-95 p-6 shadow-lg rounded-none">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="bg-[#0f5a28] text-white px-4 py-2 rounded text-sm hover:bg-[#2e5b4f] flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>
                  <span className="text-[#0f5a28] font-semibold text-base capitalize">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    onClick={handleNextMonth}
                    className="bg-[#0f5a28] text-white px-4 py-2 rounded text-sm hover:bg-[#2e5b4f] flex items-center gap-2"
                  >
                    Next
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <div
                      key={index}
                      className="text-[#0f5a28] font-semibold text-center text-sm capitalize p-1"
                    >
                      {day}
                    </div>
                  ))}
                  {calendarDays.map((dayData, index) => {
                    const isToday =
                      dayData.day &&
                      dayData.day === today.getDate() &&
                      currentDate.getMonth() === today.getMonth() &&
                      currentDate.getFullYear() === today.getFullYear();
                    return (
                      <motion.div
                        key={index}
                        className={`p-2 text-center h-[90px] flex flex-col justify-between overflow-y-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                          isToday
                            ? "bg-green-50 border-2 border-[#0f5a28]"
                            : "bg-white border border-gray-200"
                        }`}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                      >
                        {dayData.day ? (
                          <>
                            <span className="text-[#0f5a28] font-semibold text-sm">
                              {dayData.day}
                            </span>
                            {dayData.event && (
                              <p className="text-gray-600 text-xs whitespace-normal">
                                {dayData.event}
                              </p>
                            )}
                          </>
                        ) : null}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white text-center mb-4 capitalize">
                Upcoming Events This Month
              </h2>
              <div className="max-w-3xl mx-auto">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="bg-white bg-opacity-95 p-4 shadow-lg rounded-none mb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <h3 className="text-[#0f5a28] font-semibold text-lg mb-1 capitalize">
                        {event.event}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {event.date.toLocaleDateString()} {event.time && `– ${event.time}`}
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white text-center text-sm">
                    No upcoming events this month.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}