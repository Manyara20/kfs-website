"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
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

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
  lineHeight: 1.8,
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
});

const ProjectList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 1rem)",
  padding: 0,
});

const ProjectItem = styled(ListItem)(({ theme }) => ({
  background: "#1a3c34",
  borderRadius: "8px",
  padding: "clamp(0.5rem, 1vw, 1rem)",
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    padding: "clamp(0.4rem, 0.8vw, 0.8rem)",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
}));

const ProjectText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontWeight: 500,
    color: "#ffffff",
    fontSize: "clamp(0.8rem, 2vw, 1rem)",
    lineHeight: 1.6,
    textTransform: "capitalize",
  },
});

const AccessibilityButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  padding: "clamp(0.4rem, 1vw, 0.6rem)",
  borderRadius: "50%",
  minWidth: "40px",
  minHeight: "40px",
  "&:hover": {
    backgroundColor: "#388e3c",
    transform: "scale(1.03)",
  },
});

// Main Page Component
export default function GreenZonesProjectPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle>Green Zones Development Support Project</HeaderTitle>
          <ContentCard
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Description style={{ fontSize: `${fontSize}px` }}>
              The Green Zones Development Support Project aims to promote conservation
              and sustainable management of forest resources while improving the
              livelihoods of communities living around forests.
            </Description>
            <Description style={{ fontSize: `${fontSize}px` }}>
              It focuses on the following key areas:
            </Description>
            <ProjectList>
              <ProjectItem>
                <ProjectText primary="Afforestation and Reforestation Programs" />
              </ProjectItem>
              <ProjectItem>
                <ProjectText primary="Community Empowerment and Livelihood Support" />
              </ProjectItem>
              <ProjectItem>
                <ProjectText primary="Watershed Management and Soil Conservation" />
              </ProjectItem>
              <ProjectItem>
                <ProjectText primary="Sustainable Agroforestry Practices" />
              </ProjectItem>
            </ProjectList>
            <Description style={{ fontSize: `${fontSize}px`, marginTop: "clamp(1rem, 2vw, 1.5rem)" }}>
              Explore our ongoing efforts and updates below.
            </Description>
          </ContentCard>
          <Box sx={{ position: "fixed", bottom: "1rem", right: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <AccessibilityButton onClick={() => handleFontSizeChange(true)} aria-label="Increase font size">
              <IoMdHelpCircle size={20} />
            </AccessibilityButton>
            <AccessibilityButton onClick={() => handleFontSizeChange(false)} aria-label="Decrease font size">
              <IoMdHelpCircle size={20} />
            </AccessibilityButton>
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}