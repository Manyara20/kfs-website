// pages/events-calendar.js
"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "2rem",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
    opacity: 0.05,
    zIndex: 0,
  },
});

const ContentWrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "3rem 1rem",
  position: "relative",
  zIndex: 1,
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "3rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
  marginBottom: "1rem",
});

const HeaderSubtitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#e0e0e0",
  fontSize: "1.25rem",
  textAlign: "center",
  marginBottom: "3rem",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  color: "#ffffff",
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: "2rem",
});

const CalendarWrapper = styled(Box)({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: "4rem",
});

const CalendarHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
});

const CalendarGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "1rem",
});

const DayHeader = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  textAlign: "center",
  padding: "0.5rem",
});

const DayCell = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isToday", // Prevent isToday from being forwarded to the DOM
})(({ isToday }) => ({
  background: isToday ? "#e8f5e9" : "#ffffff",
  border: isToday ? "2px solid #0f5a28" : "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "1rem",
  textAlign: "center",
  height: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflowY: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
}));

const DayNumber = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.1rem",
});

const EventText = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.85rem",
  whiteSpace: "normal",
});

const EventCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  },
});

const EventTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
});

const EventDate = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "1rem",
});

const NavButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

export default function EventsCalendarPage() {
  // State for current month and year
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  // Events data (map of dates to events)
  const eventsData = {
    "2025-03-03": "Africa Environment Day\nWangari Maathai Day\nWorld Wildlife Day",
    "2025-03-21": "International Day of Forests",
    "2025-03-22": "World Water Day",
    "2025-03-23": "World Meteorological Day",
    "2025-06-05": "World Environment Day",
    "2026-03-03": "Africa Environment Day\nWangari Maathai Day",
  };

  // Upcoming events data
  const upcomingEventsData = [
    { date: new Date("2025-03-22"), event: "World Water Day", time: "11:59 pm" },
    { date: new Date("2025-03-23"), event: "World Meteorological Day", time: "11:11 pm" },
    { date: new Date("2025-06-05"), event: "World Environment Day" },
    { date: new Date("2026-03-03"), event: "Africa Environment Day" },
    { date: new Date("2026-03-03"), event: "Wangari Maathai Day" },
  ];

  // Generate calendar days for the current month
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)
    const daysInMonth = lastDayOfMonth.getDate();

    const days = [];
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, event: "" });
    }
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      days.push({
        day,
        event: eventsData[dateKey] || "",
      });
    }
    setCalendarDays(days);
  }, [currentDate]);

  // Navigate to previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Get upcoming events (events after today)
  const today = new Date();
  const upcomingEvents = upcomingEventsData
    .filter(event => event.date > today)
    .sort((a, b) => a.date - b.date);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          {/* Header Section */}
          <HeaderTitle variant="h1">
            Events Calendar
          </HeaderTitle>
          <HeaderSubtitle>
            Stay updated with the latest events and activities from the Kenya Forest Service.
          </HeaderSubtitle>

          {/* Calendar Section */}
          <Box mb={8}>
            <SectionTitle>
              Events in {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </SectionTitle>
            <CalendarWrapper>
              <CalendarHeader>
                <NavButton onClick={handlePrevMonth} startIcon={<ArrowBackIos />}>
                  Previous
                </NavButton>
                <Typography variant="h6" sx={{ fontFamily: "'Roboto', sans-serif", color: "#0f5a28" }}>
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </Typography>
                <NavButton onClick={handleNextMonth} endIcon={<ArrowForwardIos />}>
                  Next
                </NavButton>
              </CalendarHeader>
              <CalendarGrid>
                {/* Calendar Headers */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <DayHeader key={index}>
                    {day}
                  </DayHeader>
                ))}
                {/* Calendar Days */}
                {calendarDays.map((dayData, index) => {
                  const isToday =
                    dayData.day &&
                    dayData.day === today.getDate() &&
                    currentDate.getMonth() === today.getMonth() &&
                    currentDate.getFullYear() === today.getFullYear();
                  return (
                    <DayCell
                      key={index}
                      isToday={isToday}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      {dayData.day ? (
                        <>
                          <DayNumber>{dayData.day}</DayNumber>
                          {dayData.event && (
                            <EventText>{dayData.event}</EventText>
                          )}
                        </>
                      ) : null}
                    </DayCell>
                  );
                })}
              </CalendarGrid>
            </CalendarWrapper>
          </Box>

          {/* Upcoming Events Section */}
          <Box>
            <SectionTitle>Upcoming Events</SectionTitle>
            <Box maxWidth="800px" mx="auto">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <EventTitle>{event.event}</EventTitle>
                    <EventDate>
                      {event.date.toLocaleDateString()} {event.time && `– ${event.time}`}
                    </EventDate>
                  </EventCard>
                ))
              ) : (
                <Typography
                  sx={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#ffffff",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  No upcoming events.
                </Typography>
              )}
            </Box>
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}