"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
    opacity: 0.1,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  padding: "3rem",
  maxWidth: "800px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
});

const Title = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
  fontSize: "2.5rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
});

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0D3C00",
  color: "#fff",
  padding: "0.75rem 1.5rem",
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0f5a28",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  },
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "2rem",
  left: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 2,
});

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0D3C00",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0D3C00",
    color: "#fff",
    transform: "scale(1.1)",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  },
}));

const GzdspPage = () => {
  // State to hold dynamic content from backend
  const [content, setContent] = useState({
    title: "Green Zones Development Support Project - Phase II",
    description1:
      "The Green Zones Development Support Project-Phase II builds on the success of the concluded GZDSP-1 project. GZDSP-1 contributed to the rehabilitation and protection for regeneration of 309,000ha of degraded forest land translating to 0.54% increase in the national forest cover and significantly increased (by 25%) the annual incomes of 375,912 households (40% female-headed) through direct employment, and income generating activities.",
    description2:
      "Phase II aims to further enhance forest conservation efforts, promote sustainable land use, and support community livelihoods through innovative forestry practices and partnerships.",
    documentUrl: "#", // Placeholder for uploaded document URL
  });

  // Simulate fetching content from backend (replace with actual API call)
  useEffect(() => {
    // Example: fetch('/api/gzdsp-content').then(res => res.json()).then(data => setContent(data));
    // For now, using static content as placeholder
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <PageContainer>
      {/* Main Content Card */}
      <ContentCard initial="hidden" animate="visible" variants={cardVariants}>
        <Title variant="h1">{content.title}</Title>
        <Description>{content.description1}</Description>
        <Description>{content.description2}</Description>
        {content.documentUrl && (
          <DownloadButton
            href={content.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Project Document
          </DownloadButton>
        )}
      </ContentCard>
    </PageContainer>
  );
};

export default GzdspPage;