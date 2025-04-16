"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

// EventCard component
const EventCard = styled(Button)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#0f5a28",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
  marginBottom: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
  transition: "all 0.2s ease",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#e6f5e6",
    color: "#000000",
  },
  "&:focus": {
    outline: "none",
    ring: "2px solid #ff0000",
    ringOffset: "2px",
  },
}));

const EventDateBox = styled(Box)({
  width: "clamp(2.5rem, 5vw, 3rem)", // Responsive width
  height: "clamp(2.5rem, 5vw, 3rem)", // Responsive height
  backgroundColor: "#000000",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  marginRight: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive margin
});

const EventDay = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Scales with viewport
});

const EventMonth = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.5rem, 1vw, 0.625rem)", // Scales with viewport
  textTransform: "uppercase",
});

const EventDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", // Scales with viewport
});

// NoticeCard component
const NoticeCard = styled(Button)({
  width: "100%",
  backgroundColor: "#0f5a28",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
  marginBottom: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
  transition: "all 0.2s ease",
  height: "clamp(5rem, 10vw, 6rem)", // Responsive height
  overflow: "hidden",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#e6f5e6",
    color: "#000000",
  },
});

const NoticeDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", // Scales with viewport
});

const FileLink = styled("a")({
  color: "#90caf9",
  "&:hover": {
    textDecoration: "underline",
  },
});

// X Feed component
const XFeedContainer = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
});

const XFeedTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#000000",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
  marginBottom: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive margin
});

// Main Section
const SectionContainer = styled(Box)({
  backgroundColor: "#e6f5e6",
  padding: "clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)", // Responsive padding
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 900,
  color: "#0E2E0E",
  fontSize: "clamp(1.5rem, 5vw, 3.125rem)", // Scales with viewport
  textAlign: "center",
  marginBottom: "clamp(1.5rem, 3vw, 3rem)", // Responsive margin
});

const ContentGrid = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "clamp(60rem, 90vw, 87.5rem)", // Responsive max-width
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const CardContainer = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
  border: "2px solid #0d3c00",
  minHeight: "clamp(20rem, 40vw, 32rem)", // Responsive min-height
});

const CardTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#000000",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
  marginBottom: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive margin
});

const ErrorText = styled(Typography)({
  color: "#f44336",
  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", // Scales with viewport
});

const EmptyText = styled(Typography)({
  color: "#666",
  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", // Scales with viewport
});

// EventCard Component
const EventCardComponent = ({ date, title, time, venue, onClick }) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate().toString().padStart(2, "0");
  const month = eventDate.toLocaleString("default", { month: "short" });

  return (
    <EventCard onClick={onClick}>
      <EventDateBox>
        <EventDay>{day}</EventDay>
        <EventMonth>{month}</EventMonth>
      </EventDateBox>
      <EventDetails>
        <Typography><strong>Title:</strong> {title}</Typography>
        <Typography><strong>Date:</strong> {day} {month}</Typography>
        <Typography><strong>Time:</strong> {time}</Typography>
        <Typography><strong>Venue:</strong> {venue}</Typography>
      </EventDetails>
    </EventCard>
  );
};

// NoticeCard Component
const NoticeCardComponent = ({ title, description, file_url, onClick }) => {
  return (
    <NoticeCard onClick={onClick}>
      <NoticeDetails>
        <Typography><strong>Title:</strong> {title}</Typography>
        <Typography><strong>Description:</strong> {description}</Typography>
        {file_url && (
          <FileLink
            href={`http://localhost:5000${file_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View File
          </FileLink>
        )}
      </NoticeDetails>
    </NoticeCard>
  );
};

// X Feed Component
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
    <XFeedContainer sx={{ height: containerHeight ? `${containerHeight}px` : "auto" }}>
      <XFeedTitle>X Feed</XFeedTitle>
      <a
        className="twitter-timeline"
        href="https://twitter.com/KeForestService?ref_src=twsrc%5Etfw"
        data-height="300%"
        data-chrome="noheader nofooter transparent noborders"
      >
        Tweets by KeForestService
      </a>
    </XFeedContainer>
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
    <SectionContainer>
      <SectionTitle>Updates</SectionTitle>
      <ContentGrid>
        <CardContainer ref={eventsRef}>
          <CardTitle>Events</CardTitle>
          {error ? (
            <ErrorText>{error}</ErrorText>
          ) : events.length === 0 ? (
            <EmptyText>No active events available.</EmptyText>
          ) : (
            events.map((item, index) => (
              <EventCardComponent
                key={index}
                date={item.date}
                title={item.title}
                time={item.time}
                venue={item.venue}
                onClick={() => console.log(`Clicked Event: ${item.title}`)}
              />
            ))
          )}
        </CardContainer>
        <CardContainer ref={noticeRef}>
          <CardTitle>Notice Board</CardTitle>
          {error ? (
            <ErrorText>{error}</ErrorText>
          ) : notices.length === 0 ? (
            <EmptyText>No active notices available.</EmptyText>
          ) : (
            notices.map((item, index) => (
              <NoticeCardComponent
                key={index}
                title={item.title}
                description={item.description}
                file_url={item.file_url}
                onClick={() => console.log(`Clicked Notice: ${item.title}`)}
              />
            ))
          )}
        </CardContainer>
        <CardContainer>
          <XFeed containerHeight={maxHeight} />
        </CardContainer>
      </ContentGrid>
    </SectionContainer>
  );
};

export default KFSFeeds;