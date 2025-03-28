"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, IconButton, Button } from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram, Description as DescriptionIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Custom styled components
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
  borderRadius: "12px",
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

const TextDescription = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.8rem",
  marginBottom: "1rem",
});

const FileSection = styled(Box)({
  marginTop: "2rem",
});

const FileItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  borderRadius: "8px",
  padding: "1rem",
  marginBottom: "0.5rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.5rem 1rem",
  fontSize: "0.9rem",
  fontFamily: "'Roboto', sans-serif",
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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

const SocialIconButton = styled(IconButton)({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0D3C00",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0D3C00",
    color: "#fff",
    transform: "scale(1.1)",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  },
});

// Main Page Component
export default function ForestManagementPlansPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Placeholder download function (replace with actual file paths or logic)
  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}`);
    // Example: window.open("/path/to/file.pdf", "_blank");
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        {/* Social Icons */}
        <SocialIconsContainer>
          <SocialIconButton><Facebook /></SocialIconButton>
          <SocialIconButton><Twitter /></SocialIconButton>
          <SocialIconButton><YouTube /></SocialIconButton>
          <SocialIconButton><Instagram /></SocialIconButton>
        </SocialIconsContainer>

        {/* Main Content Card */}
        <ContentCard initial="hidden" animate="visible" variants={cardVariants}>
          <Title variant="h1">Forest Management Plans</Title>
          <TextDescription>
            Forest resources serve the needs and interests of the public and hence, as required by law, the Service manages all forests according to clear management plans. A forest management plan is a specific statement of objectives that the KFS has for community forest associations, followed by a series of activities that will take place in order to meet KFS strategic objectives. In essence, the Forest Management Plan is a “road map” to guide the communities. Currently, 177 Forest Management Plans have been approved by the Director of Kenya Forest Service to enable community participation in forest conservation and management, along with 77 Forest Management Agreements.
          </TextDescription>

          <FileSection>
            <SectionTitle>Resources</SectionTitle>
            <List>
              <FileItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DescriptionIcon sx={{ color: "#0D3C00", mr: 1 }} />
                  <ListItemText
                    primary="Forest Management Plans Register"
                    primaryTypographyProps={{ fontWeight: 500, color: "#0D3C00" }}
                  />
                </Box>
                <DownloadButton onClick={() => handleDownload("Forest Management Plans Register")}>
                  Download
                </DownloadButton>
              </FileItem>
              <FileItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DescriptionIcon sx={{ color: "#0D3C00", mr: 1 }} />
                  <ListItemText
                    primary="Forest Management Plans"
                    primaryTypographyProps={{ fontWeight: 500, color: "#0D3C00" }}
                  />
                </Box>
                <DownloadButton onClick={() => handleDownload("Forest Management Plans")}>
                  Download
                </DownloadButton>
              </FileItem>
            </List>
          </FileSection>
        </ContentCard>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}