"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";
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

const SubHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
  lineHeight: 1.3,
  marginBottom: "clamp(0.5rem, 1vw, 1rem)",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
  lineHeight: 1.8,
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
});

const ObjectiveList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 1rem)",
  padding: 0,
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
});

const ObjectiveItem = styled(ListItem)(({ theme }) => ({
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

const ObjectiveText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#ffffff",
  fontSize: "clamp(0.8rem, 2vw, 1rem)",
  lineHeight: 1.6,
  textTransform: "capitalize",
});

const ResourceList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 1rem)",
  padding: 0,
});

const ResourceItem = styled(ListItem)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "clamp(1rem, 2vw, 1.5rem)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  },
}));

const ResourceInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "clamp(1rem, 2vw, 1.5rem)",
  width: "100%",
  flex: 1,
});

const ResourceDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const ResourceName = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(1rem, 3vw, 1.25rem)",
  lineHeight: 1.3,
  marginBottom: "0.25rem",
});

const ResourceSize = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
});

const DownloadButton = styled(Button)({
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
export default function ParticipatoryForestManagementPage() {
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

  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
    // Example: window.open("/path/to/file.pdf", "_blank");
  };

  const resources = [
    { name: "Forest Management Agreements Register", size: "338.06 KB" },
    { name: "Forest Management Plans", size: "4.00 KB" },
  ];

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">Participatory Forest Management</HeaderTitle>
          <ContentCard
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Description style={{ fontSize: `${fontSize}px` }}>
              Kenya is endowed with a wide range of forest ecosystems ranging from montane rainforests, savannah woodlands, dry forests, and coastal forests and mangroves. The current forest cover of 7.2% of the land area of the country is still below the constitutional requirement of 10%. These forests have high species richness and endemism, which has made the country be classified as mega diverse. They rank high as the country’s natural asset, due to their environmental, life-supporting functions, and the provision of diverse goods and services.
            </Description>

            <SubHeader>Strategic Objective</SubHeader>
            <Description style={{ fontSize: `${fontSize}px` }}>
              The Participatory Forest Management strategic objective is to enhance conservation, sustainable management, and utilization of forests by improving livelihoods in rural areas, conserving biodiversity while enhancing people’s livelihoods, and ensuring the sustainable use of forests.
            </Description>

            <SubHeader>Policy Goal & Objectives</SubHeader>
            <Description style={{ fontSize: `${fontSize}px` }}>
              The overall policy goal of Participatory Forest Management is sustainable development, management, utilization, and conservation of forest resources and equitable sharing of accrued benefits for the present and future generations of the forest-adjacent communities and citizens at large.
            </Description>
            <ObjectiveList>
              <ObjectiveItem>
                <ObjectiveText>
                  Increase and maintain tree and forest cover of at least ten percent of the land area of Kenya.
                </ObjectiveText>
              </ObjectiveItem>
            </ObjectiveList>

            <SubHeader>Resources</SubHeader>
            <ResourceList>
              {resources.map((file, index) => (
                <ResourceItem key={index}>
                  <ResourceInfo>
                    <DescriptionIcon
                      sx={{ color: "#0f5a28", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", flexShrink: 0 }}
                    />
                    <ResourceDetails>
                      <ResourceName>{file.name}</ResourceName>
                      <ResourceSize>1 file(s) {file.size}</ResourceSize>
                    </ResourceDetails>
                  </ResourceInfo>
                  <DownloadButton onClick={() => handleDownload(file.name)}>
                    Download
                  </DownloadButton>
                </ResourceItem>
              ))}
            </ResourceList>
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