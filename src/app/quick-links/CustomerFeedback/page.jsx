"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";
import Link from "next/link";
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
  padding: "2vw",
  position: "relative",
  overflowX: "hidden",
  width: "100vw",
  "&:before": {
    content: "''",
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
  width: "90vw",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "clamp(1rem, 3vw, 3rem) clamp(0.5rem, 1vw, 1rem)",
  position: "relative",
  zIndex: 1,
  boxSizing: "border-box",
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "clamp(1.5rem, 6vw, 3rem)",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
  marginBottom: "clamp(1.5rem, 4vw, 3rem)",
});

const ContentCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "clamp(1rem, 2vw, 1.5rem)",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "clamp(0.5rem, 1.5vw, 1rem)",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  },
}));

const ResourceTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
  lineHeight: 1.3,
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
});

const ResourceCard = styled(motion.div)(({ theme }) => ({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  borderRadius: "8px",
  padding: "clamp(0.75rem, 1.5vw, 1rem)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 0.3s ease",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
}));

const ResourceInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.5rem, 1vw, 1rem)",
});

const ResourceText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#0D3C00",
  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
});

const SurveyButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.75rem)",
  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "8px",
  fontWeight: 500,
  minWidth: "clamp(80px, 20vw, 120px)",
  "&:hover": {
    backgroundColor: "#388e3c",
    transform: "scale(1.03)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
});

// Main Page Component
export default function CustomerFeedbackPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">Customer Feedback</HeaderTitle>
          <ContentCard
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <ResourceTitle>Resources</ResourceTitle>
            <ResourceCard
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <ResourceInfo>
                <DescriptionIcon
                  sx={{ color: "#0D3C00", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", flexShrink: 0 }}
                />
                <ResourceText>Forest Management Survey</ResourceText>
              </ResourceInfo>
              <Link
                href="https://www.surveymonkey.com/r/NCPZPGG"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <SurveyButton>Take Survey</SurveyButton>
              </Link>
            </ResourceCard>
          </ContentCard>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}