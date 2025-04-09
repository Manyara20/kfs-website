"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";
import { IoMdHelpCircle } from "react-icons/io"; // Added for accessibility controls
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
  display: "flex", // Added to match DFCMPage
  justifyContent: "center", // Added to match DFCMPage
  alignItems: "center", // Added to match DFCMPage
  padding: "2rem", // Updated from 1rem to 2rem to match DFCMPage
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

const ContentWrapper = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "3rem", // Updated from 2rem 0.5rem to 3rem to match DFCMPage
  maxWidth: "900px", // Updated from 1000px to 900px to match DFCMPage
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)", // Added to match DFCMPage
  borderRadius: 0, // Removed border radius to match DFCMPage
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28", // Updated from #ffffff to #0f5a28 to match DFCMPage
  fontSize: "1.8rem", // Updated from 2rem to 1.8rem
  lineHeight: 1.3, // Updated from 1.1 to 1.3
  letterSpacing: "0.5px", // Updated from 0.3px to 0.5px
  textAlign: "left", // Updated from center to left to match DFCMPage
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
  textTransform: "capitalize",
  textShadow: "none", // Removed textShadow to match DFCMPage
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000", // Updated from textSecondary to #000 to match DFCMPage
  fontSize: "0.9rem",
  lineHeight: 1.8, // Added to match DFCMPage
  wordSpacing: "0.15rem", // Added to match DFCMPage
  marginBottom: "2rem", // Updated to match DFCMPage
});

const SubHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.2rem",
  marginBottom: "1rem", // Adjusted for better spacing
  textTransform: "capitalize",
});

const DocumentCard = styled(Box)({
  background: "#1a3c34", // Updated to match DFCMPage DepartmentItem
  padding: "1.5rem", // Updated from 1rem to 1.5rem to match DFCMPage
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  marginBottom: "1.5rem", // Updated from 1rem to 1.5rem to match DFCMPage
  "&:hover": {
    transform: "translateY(-2px)", // Updated from -3px to -2px to match DFCMPage
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Updated to match DFCMPage
  },
});

const DocumentInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem", // Updated from 0.5rem to 1rem for better spacing
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500, // Updated from 600 to 500 to match DFCMPage
  color: "#ffffff", // Updated from #0f5a28 to #ffffff to match DFCMPage
  fontSize: "0.85rem", // Updated from 1rem to 0.85rem to match DFCMPage
  lineHeight: 1.6, // Added to match DFCMPage
  wordSpacing: "0.1rem", // Added to match DFCMPage
  textTransform: "capitalize",
});

const FileSize = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#cccccc", // Updated to a lighter shade for contrast against #1a3c34 background
  fontSize: "0.85rem", // Updated from 0.8rem to 0.85rem to match DFCMPage
  lineHeight: 1.6, // Added to match DFCMPage
  wordSpacing: "0.1rem", // Added to match DFCMPage
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.5rem 1.5rem", // Updated from 0.3rem 1rem to 0.5rem 1.5rem for better proportions
  fontSize: "0.85rem", // Updated from 0.8rem to 0.85rem to match DFCMPage
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "8px", // Updated from 6px to 8px to match other document pages
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Updated to match other document pages
  },
});

// Main Page Component
export default function ForesterMagazinePage() {
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

  const magazines = [
    {
      title: "Forester January-June 2024",
      fileSize: "31 MB",
      link: "/path/to/forester-jan-jun-2024.pdf",
    },
    {
      title: "Forester July-December 2023",
      fileSize: "58 MB",
      link: "/path/to/forester-jul-dec-2023.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Updated duration to match DFCMPage
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <HeaderTitle variant="h1">The Forester Magazine</HeaderTitle>
          <Description>
            Biannual Forestry Magazine of the Kenya Forest Service
          </Description>

          <SubHeader>
            Welcome to the latest edition of our biannual forestry magazine.
          </SubHeader>
          <Description>
            As we reflect on the past six months, we’re proud to share the significant strides
            made in Kenya’s forestry sector. In this issue, we spotlight several key events and
            initiatives that underscore our commitment to sustainable forest management and
            conservation.
          </Description>
          <Description>
            Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap
            that will guide our efforts in the coming years to enhance forest cover and promote
            sustainable utilization of forest resources.
          </Description>
          <Description>
            We also bring you highlights from the International Day of Forests celebrations, where
            we joined the global community in recognizing the vital role forests play in our lives
            and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an
            initiative that saw thousands of Kenyans come together to green our nation.
          </Description>
          <Description>
            This edition also features news on various Memoranda of Understanding signed with
            partner organizations, strengthening our collaborative efforts in forest conservation
            and management.
          </Description>
          <Description>
            These stories reflect our ongoing dedication to Kenya’s forests and the communities
            that depend on them. We hope this issue informs and inspires you to join us in our
            mission to protect and nurture our precious forest resources.
          </Description>
          <SubHeader>Happy reading!</SubHeader>
          <Description>Anne Kaari, ‘ndc‘ (K)</Description>

          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
            {magazines.map((magazine, index) => (
              <DocumentCard key={index}>
                <DocumentInfo>
                  <DescriptionIcon sx={{ color: "#ffffff", fontSize: "2rem" }} /> {/* Updated color to #ffffff for contrast */}
                  <Box>
                    <DocumentTitle>{magazine.title}</DocumentTitle>
                    <FileSize>1 file(s) {magazine.fileSize}</FileSize>
                  </Box>
                </DocumentInfo>
                <Link href={magazine.link} target="_blank" rel="noopener noreferrer" passHref>
                  <DownloadButton>Download</DownloadButton>
                </Link>
              </DocumentCard>
            ))}
          </Box>
        </ContentWrapper>

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