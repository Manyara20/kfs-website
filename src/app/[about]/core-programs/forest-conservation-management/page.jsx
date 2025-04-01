// pages/dfcm.js
"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem", 
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
  maxWidth: "700px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif", 
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  marginBottom: "1rem", 
  fontSize: "1.8rem", 
  lineHeight: 1.1, 
  letterSpacing: "0.3px", 
  textTransform: "capitalize", 
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif", 
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.6, 
  fontSize: "0.9rem", 
  marginBottom: "1rem", 
});

const DepartmentList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
  gap: "0.5rem", 
  padding: 0,
});

const DepartmentItem = styled(ListItem)({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "0.5rem", 
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
    fontSize: "0.85rem", 
    textTransform: "capitalize", 
  },
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "1rem", 
  left: "1rem", 
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem", 
  zIndex: 2,
});

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0D3C00",
  transition: "all 0.3s ease",
  padding: "6px", 
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
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <SocialIconsContainer>
          <SocialIconButton aria-label="Facebook">
            <Facebook fontSize="small" /> {/* Reduced from default */}
          </SocialIconButton>
          <SocialIconButton aria-label="Twitter">
            <Twitter fontSize="small" /> 
          </SocialIconButton>
          <SocialIconButton aria-label="YouTube">
            <YouTube fontSize="small" /> 
          </SocialIconButton>
          <SocialIconButton aria-label="Instagram">
            <Instagram fontSize="small" /> 
          </SocialIconButton>
        </SocialIconsContainer>
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