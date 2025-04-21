"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('/images/background-template/background.jpg')`,
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
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  maxWidth: "900px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "3rem", 
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem", 
  fontSize: "2.2rem",
  lineHeight: 1.3, 
  letterSpacing: "0.5px", 
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8, 
  wordSpacing: "0.15rem", 
  fontSize: "1rem",
  marginBottom: "2rem", 
});

const DepartmentList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem", 
  padding: 0,
});

const DepartmentItem = styled(ListItem)({
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1.5rem", // Increased from 1rem to 1.5rem for more internal spacing
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const DepartmentText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontWeight: 500,
    color: "#0D3C00",
    fontSize: "0.95rem",
    lineHeight: 1.6, // Added line height for better readability
    wordSpacing: "0.1rem", // Added word spacing for better readability
    textTransform: "capitalize",
  },
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "1.5rem", // Increased from 1rem for better positioning
  left: "1.5rem", // Increased from 1rem for better positioning
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // Increased from 0.5rem for more spacing between icons
  zIndex: 2,
});

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0D3C00",
  transition: "all 0.3s ease",
  padding: "8px", // Increased from 6px for better touch area
  "&:hover": {
    backgroundColor: "#0D3C00",
    color: "#fff",
    transform: "scale(1.05)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
}));

// Main Page Component
export default function DFCMPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>

      <PageContainer>
        <ContentCard
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <Title variant="h1">
            The Directorate of Forest Conservation and Management (DFCM)
          </Title>
          <Description>
            The Directorate of Forest Conservation and Management (DFCM) is established pursuant to the provisions of Forest Conservation and Management Act 2016, section 8(a-o) functions of the Service. The Directorate of Forest Conservation and Management is responsible for providing advice on policy and legislation development for forest sector to management.
          </Description>
          <Description>
            Central to the mandate of the Directorate is the key objective of executing the provisions of the legislation, technical forest management orders, regulations and circulars that pertain to sustainable forest conservation and management practices.
          </Description>
          <Description>
            It executes this mandate through the following Departments:
          </Description>
          <DepartmentList>
            <DepartmentItem>
              <DepartmentText primary="Department of the Natural Forest Conservation" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of the Forest Survey & Information Management" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of the Forest Plantation Management" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of the Conservation Coordination" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Kenya Forestry College - KFC" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of the Forestry Advisory & County Liaison" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of the Dryland & private Forest Development" />
            </DepartmentItem>
          </DepartmentList>
        </ContentCard>
      </PageContainer>
    </div>
  );
}