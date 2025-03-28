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

const ObjectiveList = styled(List)({
  padding: 0,
});

const ObjectiveItem = styled(ListItem)({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  borderRadius: "8px",
  marginBottom: "0.5rem",
  padding: "1rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const ObjectiveText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#0D3C00",
    fontSize: "1rem",
  },
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

const ParticipatoryForestManagementPage = () => {
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
          <Title variant="h1">Participatory Forest Management</Title>
          <TextDescription>
            Kenya is endowed with a wide range of forest ecosystems ranging from montane rainforests, savannah woodlands, dry forests, and coastal forests and mangroves. The current forest cover of 7.2% of the land area of the country is still below the constitutional requirement of 10%. These forests have high species richness and endemism, which has made the country be classified as mega diverse. They rank high as the country’s natural asset, due to their environmental, life-supporting functions, and the provision of diverse goods and services.
          </TextDescription>

          <SectionTitle>Strategic Objective</SectionTitle>
          <TextDescription>
            The Participatory Forest Management strategic objective is to enhance conservation, sustainable management, and utilization of forests by improving livelihoods in rural areas, conserving biodiversity while enhancing people’s livelihoods, and ensuring the sustainable use of forests.
          </TextDescription>

          <SectionTitle>Policy Goal & Objectives</SectionTitle>
          <TextDescription>
            The overall policy goal of Participatory Forest Management is sustainable development, management, utilization, and conservation of forest resources and equitable sharing of accrued benefits for the present and future generations of the forest-adjacent communities and citizens at large.
          </TextDescription>
          <ObjectiveList>
            <ObjectiveItem>
              <ObjectiveText primary="Increase and maintain tree and forest cover of at least ten percent of the land area of Kenya." />
            </ObjectiveItem>
          </ObjectiveList>

          <FileSection>
            <SectionTitle>Resources</SectionTitle>
            <List>
              <FileItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DescriptionIcon sx={{ color: "#0D3C00", mr: 1 }} />
                  <ListItemText
                    primary="Forest Management Agreements Register"
                    secondary="1 file(s) 338.06 KB"
                    primaryTypographyProps={{ fontWeight: 500, color: "#0D3C00" }}
                    secondaryTypographyProps={{ color: "#555" }}
                  />
                </Box>
                <DownloadButton onClick={() => handleDownload("Forest Management Agreements Register")}>
                  Download
                </DownloadButton>
              </FileItem>
              <FileItem>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DescriptionIcon sx={{ color: "#0D3C00", mr: 1 }} />
                  <ListItemText
                    primary="Forest Management Plans"
                    secondary="1 file(s) 4.00 KB"
                    primaryTypographyProps={{ fontWeight: 500, color: "#0D3C00" }}
                    secondaryTypographyProps={{ color: "#555" }}
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
};

export default ParticipatoryForestManagementPage;