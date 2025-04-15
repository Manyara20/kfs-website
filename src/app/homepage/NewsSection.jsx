"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "@/app/homepage/NewsCard";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled(Box)({
  backgroundColor: "#e6f5e6",
  padding: "clamp(1.5rem, 3vw, 3rem) clamp(0.5rem, 2vw, 2rem)", // Responsive padding
});

const HeaderContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "clamp(1.5rem, 3vw, 3rem)", // Responsive margin
});

const MainTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 900,
  color: "#0E2E0E",
  fontSize: "clamp(1.5rem, 5vw, 3.125rem)", // Scales with viewport
});

const SubTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#15803d",
  fontSize: "clamp(1.25rem, 4vw, 2.5rem)", // Scales with viewport
  marginTop: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
});

const NewsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    overflow: "visible",
  },
}));

const SliderContainer = styled(Box)(({ currentIndex }) => ({
  display: "flex",
  gap: "clamp(0.75rem, 1.5vw, 1.5rem)", // Responsive gap
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${currentIndex * (100 + 2)}%)`, // Adjusted for gap
  [theme.breakpoints.up("sm")]: {
    transform: "none",
    transition: "none",
  },
}));

const NewsItem = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  flexShrink: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
    flexShrink: 1,
  },
}));

const ErrorText = styled(Typography)({
  color: "#f44336",
  textAlign: "center",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
});

const EmptyText = styled(Typography)({
  color: "#666",
  textAlign: "center",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
});

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/public");
        console.log("News fetched:", response.data);
        setNewsData(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching news:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(
          err.response?.data?.error || "Failed to load news. Please try again later."
        );
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 640 && newsData.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === displayedNews.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [newsData]);

  const displayedNews = newsData.slice(0, 3);

  const truncateContent = (content) => {
    if (content.length <= 300) return content;
    return content.substring(0, 300) + "...";
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <MainTitle>News</MainTitle>
        <SubTitle>Latest News</SubTitle>
      </HeaderContainer>

      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : newsData.length === 0 ? (
        <EmptyText>No news available at this time.</EmptyText>
      ) : (
        <NewsContainer>
          <SliderContainer currentIndex={currentIndex}>
            {displayedNews.map((item, index) => (
              <NewsItem key={index}>
                <NewsCard
                  title={item.title}
                  description={truncateContent(item.content)}
                  imageUrl={
                    item.image
                      ? `http://localhost:5000${item.image}`
                      : "https://via.placeholder.com/768x527"
                  }
                  author={`By ${item.author_id}`}
                  date={new Date(item.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  comments={item.comments || 0}
                  className="rounded-none"
                />
              </NewsItem>
            ))}
          </SliderContainer>
        </NewsContainer>
      )}
    </SectionContainer>
  );
};

export default NewsSection;