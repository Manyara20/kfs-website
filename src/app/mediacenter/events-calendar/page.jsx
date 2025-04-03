"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "1rem",
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
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem 0.5rem",
  position: "relative",
  zIndex: 1,
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  fontSize: "2rem",
  lineHeight: 1.1,
  letterSpacing: "0.3px",
  textAlign: "center",
  marginBottom: "0.5rem",
  textTransform: "capitalize",
});

const HeaderSubtitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#e0e0e0",
  fontSize: "0.9rem",
  textAlign: "center",
  marginBottom: "1.5rem",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#ffffff",
  fontSize: "1.5rem",
  textAlign: "center",
  marginBottom: "1rem",
  textTransform: "capitalize",
});

const CalendarWrapper = styled(Box)({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "8px",
  padding: "1.5rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
});

const CalendarHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
});

const CalendarGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "0.5rem",
});

const DayHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  textAlign: "center",
  padding: "0.3rem",
  fontSize: "0.8rem",
  textTransform: "capitalize",
});

const DayCell = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isToday",
})(({ isToday }) => ({
  background: isToday ? "#e8f5e9" : "#ffffff",
  border: isToday ? "2px solid #0f5a28" : "1px solid #e0e0e0",
  borderRadius: "6px",
  padding: "0.5rem",
  textAlign: "center",
  height: "90px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflowY: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  },
}));

const DayNumber = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "0.9rem",
});

const EventText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.7rem",
  whiteSpace: "normal",
});

const EventCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "1rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
});

const EventTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.2rem",
  marginBottom: "0.3rem",
  textTransform: "capitalize",
});

const EventDate = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.85rem",
});

const NavButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  padding: "0.3rem 0.8rem",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

export default function EventsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  const eventsData = {
    // January
    "2025-01-01": "New Year's Day",
    "2026-01-01": "New Year's Day",
    // February
    "2025-02-02": "World Wetlands Day",
    "2026-02-02": "World Wetlands Day",
    // March
    "2025-03-03": "Africa Environment Day\nWangari Maathai Day",
    "2026-03-03": "Africa Environment Day\nWangari Maathai Day",
    "2025-03-21": "International Day of Forests",
    "2026-03-21": "International Day of Forests",
    "2025-03-22": "World Water Day",
    "2026-03-22": "World Water Day",
    "2025-03-23": "World Meteorological Day",
    "2026-03-23": "World Meteorological Day",
    // April
    "2025-04-18": "Good Friday",
    "2026-04-18": "Good Friday",
    "2025-04-20": "Easter Monday",
    "2026-04-20": "Easter Monday",
    "2025-04-22": "World Earth Day",
    "2026-04-22": "World Earth Day",
    // May
    "2025-05-01": "Labour Day",
    "2026-05-01": "Labour Day",
    "2025-05-02": "International Day for Biological Diversity",
    "2026-05-02": "International Day for Biological Diversity",
    // June
    "2025-06-01": "Madaraka Day",
    "2026-06-01": "Madaraka Day",
    "2025-06-05": "World Environment Day",
    "2026-06-05": "World Environment Day",
    "2025-06-17": "World Day to Combat Desertification and Drought",
    "2026-06-17": "World Day to Combat Desertification and Drought",
    "2025-06-20": "World Refugees Day",
    "2026-06-20": "World Refugees Day",
    // October
    "2025-10-10": "Mazingira Day",
    "2026-10-10": "Mazingira Day",
    "2025-10-18": "International Day for the Eradication of Poverty",
    "2026-10-18": "International Day for the Eradication of Poverty",
    "2025-10-20": "World Bamboo Day",
    "2026-10-20": "World Bamboo Day",
    // November
    "2025-11-27": "National Tree Planting Day",
    "2026-11-27": "National Tree Planting Day",
    // December
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
  const upcomingEvents = upcomingEventsData
    .filter(event => event.date > today)
    .sort((a, b) => a.date - b.date);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div>
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
                <Typography variant="h6" sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", color: "#0f5a28", fontSize: "1rem", textTransform: "capitalize" }}>
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
            <SectionTitle>Upcoming Events</SectionTitle>
            <Box maxWidth="700px" mx="auto">
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
                    fontSize: "0.9rem",
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