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
  padding: "2vw", // Scales with viewport width
  position: "relative",
  overflowX: "hidden", // Prevent horizontal overflow
  width: "100vw", // Full viewport width
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
  width: "90vw", // Takes up 90% of viewport width
  maxWidth: "100%", // Prevents exceeding viewport
  margin: "0 auto",
  padding: "clamp(1rem, 3vw, 2rem) clamp(0.5rem, 1vw, 0.5rem)", // Responsive padding
  position: "relative",
  zIndex: 1,
  boxSizing: "border-box",
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  fontSize: "clamp(1.2rem, 4vw, 2rem)", // Scales with viewport
  lineHeight: 1.1,
  letterSpacing: "0.3px",
  textAlign: "center",
  marginBottom: "clamp(0.3rem, 1vw, 0.5rem)", // Responsive margin
  textTransform: "capitalize",
});

const HeaderSubtitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#e0e0e0",
  fontSize: "clamp(0.7rem, 2vw, 0.9rem)", // Scales with viewport
  textAlign: "center",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#ffffff",
  fontSize: "clamp(1rem, 3vw, 1.5rem)", // Scales with viewport
  textAlign: "center",
  marginBottom: "clamp(0.5rem, 2vw, 1rem)", // Responsive margin
  textTransform: "capitalize",
});

const CalendarWrapper = styled(Box)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Scales padding
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "clamp(1rem, 3vw, 2rem)", // Responsive margin
  width: "100%", // Full width of parent
  boxSizing: "border-box",
});

const CalendarHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "clamp(0.5rem, 2vw, 1rem)", // Responsive margin
});

const CalendarGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "clamp(0.3rem, 1vw, 0.5rem)", // Responsive gap
  width: "100%", // Full width
});

const DayHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  textAlign: "center",
  padding: "clamp(0.2rem, 0.5vw, 0.3rem)", // Scales padding
  fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", // Scales with viewport
  textTransform: "capitalize",
});

const DayCell = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isToday",
})(({ isToday }) => ({
  background: isToday ? "#e8f5e9" : "#ffffff",
  border: isToday ? "solid #0f5a28" : "1px solid #e0e0e0",
  padding: "clamp(0.3rem, 1vw, 0.5rem)", // Scales padding
  textAlign: "center",
  height: "clamp(60px, 15vw, 90px)", // Scales height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflowY: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxSizing: "border-box",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  },
}));

const DayNumber = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(0.7rem, 2vw, 0.9rem)", // Scales with viewport
});

const EventText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.5rem, 1.5vw, 0.7rem)", // Scales with viewport
  whiteSpace: "normal",
});

const EventCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "clamp(0.5rem, 2vw, 1rem)", // Scales padding
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "clamp(0.5rem, 2vw, 1rem)", // Responsive margin
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  width: "100%", // Full width of parent
  boxSizing: "border-box",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
});

const EventTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)", // Scales with viewport
  marginBottom: "clamp(0.2rem, 0.5vw, 0.3rem)", // Responsive margin
  textTransform: "capitalize",
});

const EventDate = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.7rem, 2vw, 0.85rem)", // Scales with viewport
});

const NavButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  padding: "clamp(0.2rem, 0.8vw, 0.3rem) clamp(0.5rem, 1vw, 0.8rem)", // Scales padding
  fontSize: "clamp(0.6rem, 1.5vw, 0.8rem)", // Scales with viewport
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

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
    { date: new Date("2025-06-17"), event: "World Day to Combat Desertification and Drought" },
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
        eventDate >= today && // Event is today or in the future
        eventDate.getMonth() === selectedMonth && // Event is in the selected month
        eventDate.getFullYear() === selectedYear // Event is in the selected year
      );
    })
    .sort((a, b) => a.date - b.date);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">
            Events Calendar
          </HeaderTitle>
          <HeaderSubtitle>
            Stay updated with the latest events and activities from the Kenya Forest Service.
          </HeaderSubtitle>

          <Box mb={4}>
            <SectionTitle>
              Events in {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </SectionTitle>
            <CalendarWrapper>
              <CalendarHeader>
                <NavButton onClick={handlePrevMonth} startIcon={<ArrowBackIos />}>
                  Previous
                </NavButton>
                <Typography variant="h6" sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", color: "#0f5a28", fontSize: "clamp(0.8rem, 2vw, 1rem)", textTransform: "capitalize" }}>
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </Typography>
                <NavButton onClick={handleNextMonth} endIcon={<ArrowForwardIos />}>
                  Next
                </NavButton>
              </CalendarHeader>
              <CalendarGrid>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <DayHeader key={index}>
                    {day}
                  </DayHeader>
                ))}
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

          <Box>
            <SectionTitle>Upcoming Events This Month</SectionTitle>
            <Box width="100%" mx="auto">
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
                    fontFamily: "'Peugeot', Helvetica, sans-serif",
                    color: "#ffffff",
                    textAlign: "center",
                    fontSize: "clamp(0.7rem, 2vw, 0.9rem)", // Scales with viewport
                  }}
                >
                  No upcoming events this month.
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