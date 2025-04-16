"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

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
  padding: "clamp(1rem, 2vw, 2rem)", // Responsive padding
  position: "relative",
  overflowX: "hidden", // Prevent horizontal overflow
  width: "100vw", // Full viewport width
  boxSizing: "border-box",
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
  width: "clamp(90%, 95vw, 100%)", // Responsive width
  maxWidth: "100%", // Prevent overflow
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "clamp(1.5rem, 3vw, 3rem)", // Responsive padding
  boxSizing: "border-box",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
  fontSize: "clamp(1.5rem, 4vw, 2.2rem)", // Scales with viewport
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
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
});

const DepartmentList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(clamp(12rem, 25vw, 17.5rem), 1fr))", // Responsive grid
  gap: "clamp(0.75rem, 1.5vw, 1.5rem)", // Responsive gap
  padding: 0,
  width: "100%", // Full width of parent
});

const DepartmentItem = styled(ListItem)({
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "clamp(0.75rem, 1.5vw, 1.5rem)", // Responsive padding
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
    color: "#fff",
    fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)", // Scales with viewport
    lineHeight: 1.6,
    wordSpacing: "0.1rem",
    textTransform: "capitalize",
  },
});

// Main Page Component
export default function DFCMPage() {
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
      <FooterBottom />
    </div>
  );
}