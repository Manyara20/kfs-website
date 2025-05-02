"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2vw", // Relative to viewport width
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

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "clamp(1rem, 3vw, 3rem)", // Scales padding dynamically
  width: "90vw", // Takes up 90% of viewport width
  maxWidth: "100%", // Ensures it doesn’t exceed viewport
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
  boxSizing: "border-box", // Includes padding in width calculation
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "2vw",
  left: "2vw",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 20,
});

const SocialIconButton = styled("button")({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0f5a28",
  padding: "0.5rem",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#1a3c34",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "clamp(1.2rem, 4vw, 1.8rem)", // Scales with viewport
  lineHeight: 1.3,
  letterSpacing: "0.5px",
  marginBottom: "2rem",
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", // Scales with viewport
  lineHeight: 1.8,
  wordSpacing: "0.15rem",
  marginBottom: "2rem",
});

const VideoContainer = styled(Box)({
  width: "100%",
  "& iframe": {
    width: "100%",
    height: "auto", // Let height adjust naturally
    minHeight: "200px", // Minimum height for small screens
    aspectRatio: "16/9", // Maintains video aspect ratio
    borderRadius: "8px",
    border: "none",
  },
  "@media (min-width: 640px)": {
    "& iframe": {
      minHeight: "300px", // Larger height on bigger screens
    },
  },
});

// Main Page Component
export default function AudioServiceCharter() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentCard
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">Audio Service Charter</Title>
          <Description>
            Kenya Forest Service (KFS) is committed to providing accessible services to all, including individuals with visual or hearing impairments. Our Audio Service Charter ensures effective communication and inclusion in all our service delivery points.
          </Description>
          <Description>
            Watch Our Sign Language Charter Video (Note: Update to Audio if available):
          </Description>
          <VideoContainer>
            {isLoaded && (
              <iframe
                src="https://www.youtube.com/embed/674CgQpSzOk?si=0uD8HSaohm-nPCzx"
                title="Audio Service Charter"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </VideoContainer>
        </ContentCard>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}