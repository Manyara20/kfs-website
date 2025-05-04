"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { styled } from "@mui/system";
import { IoMdHelpCircle } from "react-icons/io"; 
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { Description as DescriptionIcon } from "@mui/icons-material"; 

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

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "3rem", // Fixed syntax error: removed extra space
  maxWidth: "900px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.8rem",
  lineHeight: 1.3,
  letterSpacing: "0.5px",
  marginBottom: "2rem",
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  fontSize: "0.9rem",
  lineHeight: 1.8,
  wordSpacing: "0.15rem",
  marginBottom: "2rem",
});

const SubHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

const ObjectiveList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  padding: 0,
  marginBottom: "2rem",
});

const ObjectiveItem = styled(ListItem)({
  background: "#1a3c34",
  padding: "1.5rem",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
});

const ObjectiveText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#ffffff",
  fontSize: "0.85rem",
  lineHeight: 1.6,
  wordSpacing: "0.1rem",
  textTransform: "capitalize",
});

const ResourceList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  padding: 0,
});

const ResourceItem = styled(ListItem)({
  background: "#1a3c34",
  padding: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
});

const ResourceInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const ResourceName = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#ffffff",
  fontSize: "0.85rem",
  lineHeight: 1.6,
  wordSpacing: "0.1rem",
  textTransform: "capitalize",
});

const ResourceSize = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#cccccc",
  fontSize: "0.85rem",
  lineHeight: 1.6,
  wordSpacing: "0.1rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.5rem 1.5rem",
  fontSize: "0.85rem",
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>

        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">Participatory Forest Management</Title>
          <Description>
            Kenya is endowed with a wide range of forest ecosystems ranging from montane rainforests, savannah woodlands, dry forests, and coastal forests and mangroves. The current forest cover of 7.2% of the land area of the country is still below the constitutional requirement of 10%. These forests have high species richness and endemism, which has made the country be classified as mega diverse. They rank high as the country’s natural asset, due to their environmental, life-supporting functions, and the provision of diverse goods and services.
          </Description>

          <SubHeader>Strategic Objective</SubHeader>
          <Description>
            The Participatory Forest Management strategic objective is to enhance conservation, sustainable management, and utilization of forests by improving livelihoods in rural areas, conserving biodiversity while enhancing people’s livelihoods, and ensuring the sustainable use of forests.
          </Description>

          <SubHeader>Policy Goal & Objectives</SubHeader>
          <Description>
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
                  <DescriptionIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
                  <Box>
                    <ResourceName>{file.name}</ResourceName>
                    <ResourceSize>1 file(s) {file.size}</ResourceSize>
                  </Box>
                </ResourceInfo>
                <DownloadButton onClick={() => handleDownload(file.name)}>
                  Download
                </DownloadButton>
              </ResourceItem>
            ))}
          </ResourceList>
        </ContentCard>

        {/* Accessibility Controls */}
        <Box className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </Box>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}