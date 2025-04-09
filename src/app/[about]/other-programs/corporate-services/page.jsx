"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io"; // Added for accessibility controls
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`, // Updated overlay color to match DFCMPage
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
    opacity: 0.05, // Updated opacity to match DFCMPage
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "3rem",
  maxWidth: "900px", // Updated from 800px to 900px to match DFCMPage
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0, // Removed border radius to match DFCMPage
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif", // Updated font to match DFCMPage
  fontWeight: 700, // Updated from 400 to 700
  color: "#0f5a28",
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
  fontSize: "1.8rem", // Updated from 2.5rem to 1.8rem
  lineHeight: 1.3, // Updated from 1.2 to 1.3
  letterSpacing: "0.5px",
  textTransform: "capitalize", // Added to match DFCMPage
  textShadow: "none", // Removed textShadow to match DFCMPage
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif", // Updated font to match DFCMPage
  fontWeight: 400,
  color: "#000", // Updated from #333 to #000
  lineHeight: 1.8,
  wordSpacing: "0.15rem", // Added to match DFCMPage
  fontSize: "0.9rem", // Updated from 1.1rem to 0.9rem
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
});

const DepartmentList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Updated from 300px to 280px to match DFCMPage
  gap: "1.5rem", // Updated from 1rem to 1.5rem
  padding: 0,
});

const DepartmentItem = styled(ListItem)({
  background: "#1a3c34", // Updated background to match DFCMPage
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1.5rem", // Updated from 1rem to 1.5rem
  "&:hover": {
    transform: "translateY(-2px)", // Updated from -5px to -2px to match DFCMPage
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Updated to match DFCMPage
  },
});

const DepartmentText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif", // Updated font to match DFCMPage
    fontWeight: 500, // Updated from 400 to 500
    color: "#ffffff", // Updated from #0D3C00 to #ffffff
    fontSize: "0.85rem", // Updated from 1rem to 0.85rem
    lineHeight: 1.6, // Added to match DFCMPage
    wordSpacing: "0.1rem", // Added to match DFCMPage
    textTransform: "capitalize", // Added to match DFCMPage
  },
});

// Main Page Component
export default function CorporateServicesPage() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Updated duration to match DFCMPage
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        {/* Main Content Card */}
        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">
            Corporate Service
          </Title>
          <Description>
            Corporate Service Directorate is established to ensure prudent utilization of financial resources, aligning human resources strategy of the organization, infrastructure management, leveraging on ICT technology and enhancing the image and communication of the organization.
          </Description>
          <Description>
            It executes this mandate through the following departments:
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
          <Description className="mt-2">
            Explore our ongoing efforts and updates below.
          </Description>
        </ContentCard>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
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
        </div>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}