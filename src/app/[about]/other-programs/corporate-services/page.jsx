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

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const DepartmentList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1rem",
  padding: 0,
});

const DepartmentItem = styled(ListItem)({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const DepartmentText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#0D3C00",
    fontSize: "1rem",
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

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0D3C00",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0D3C00",
    color: "#fff",
    transform: "scale(1.1)",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  },
}));

// Main Page Component
export default function CorporateServicesPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        {/* Main Content Card */}
        <ContentCard
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <Title variant="h1">
            Corporate Service
          </Title>
          <Description>
            Corporate Service Directorate is established to ensure prudent utilization of financial resources, aligning human resources strategy of the organization, infrastructure management, leveraging on ICT technology and enhancing the image and communication of the organization.
          </Description>
          <DepartmentList>
            <DepartmentItem>
              <DepartmentText primary="Department of Finance and Accounts" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of Human Resource Management" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of Administration and Infrastructure Development" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of Information Communication Technology" />
            </DepartmentItem>
            <DepartmentItem>
              <DepartmentText primary="Department of Corporate Communication" />
            </DepartmentItem>
          </DepartmentList>
        </ContentCard>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}