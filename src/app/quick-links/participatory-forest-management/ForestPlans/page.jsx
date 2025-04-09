"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
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
  padding: "3rem",
  maxWidth: "900px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "2rem",
  left: "2rem",
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
export default function ForestManagementPlansPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
  
  };

  const resources = [
    { name: "Forest Management Plans Register", size: "338.06 KB" },
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
          <Title variant="h1">Forest Management Plans</Title>
          <Description>
            Forest resources serve the needs and interests of the public and hence, as required by law, the Service manages all forests according to clear management plans. A forest management plan is a specific statement of objectives that the KFS has for community forest associations, followed by a series of activities that will take place in order to meet KFS strategic objectives. In essence, the Forest Management Plan is a “road map” to guide the communities. Currently, 177 Forest Management Plans have been approved by the Director of Kenya Forest Service to enable community participation in forest conservation and management, along with 77 Forest Management Agreements.
          </Description>

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
      </PageContainer>
      <FooterBottom />
    </div>
  );
}