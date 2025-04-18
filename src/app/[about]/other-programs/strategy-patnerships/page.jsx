"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
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
    opacity: 0.05,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  padding: "clamp(1.5rem, 3vw, 3rem)", // Responsive padding
  width: "clamp(90%, 95vw, 100%)", // Responsive width
  maxWidth: "100%", // Prevent overflow
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
  boxSizing: "border-box",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: "bold",
  color: "#0f5a28",
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
  fontSize: "clamp(1.25rem, 3.5vw, 1.8rem)", // Scales with viewport
  lineHeight: 1.3,
  letterSpacing: "0.5px",
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  lineHeight: 1.8,
  wordSpacing: "0.15rem",
  fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)", // Scales with viewport
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
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
});

const DepartmentText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontWeight: 500,
    color: "#ffffff",
    fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", // Scales with viewport
    lineHeight: 1.6,
    wordSpacing: "0.1rem",
    textTransform: "capitalize",
  },
});

const AccessibilityControls = styled(Box)({
  position: "fixed",
  bottom: "clamp(1rem, 2vw, 4rem)", // Responsive positioning
  right: "clamp(1rem, 2vw, 4rem)",
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 2rem)", // Responsive gap
  zIndex: 20,
});

const AccessibilityButton = styled("button")({
  backgroundColor: "#1a3c34",
  padding: "clamp(0.5rem, 1vw, 2rem)", // Responsive padding
  borderRadius: "50%",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

// Main Page Component
export default function StrategyPartnershipsPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const departments = [
    "Department of Partnerships and Resource Mobilization",
    "Department of Enterprise and Marketing",
    "Department of Planning, M&E and Performance Management",
    "Department of Quality Assurance",
  ];

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

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          style={{ fontSize: `${fontSize}px` }}
        >
          <Title variant="h1">
            Directorate of Strategy, Partnerships & Resource Mobilization
          </Title>
          <Description>
            The Directorate is responsible for guiding the organization in setting the Strategic direction to take in the execution of her mandate in order to succeed. It guides in establishing priorities and developing corporate strategies which are harmonized with the National Development plans. It ensures that the Service uses current technologies in Forest management and complies with the quality Management standards.
          </Description>
          <Description>
            The directorate will also guide the Service in the implementation of quality management systems under ISO and risk-based strategies. It is further responsible for managing partnerships and mobilizing resources for the Service’ core programmes operations.
          </Description>
          <Description>
            It executes this mandate through the following Departments:
          </Description>
          <DepartmentList>
            {departments.map((dept, index) => (
              <DepartmentItem key={index}>
                <DepartmentText primary={dept} />
              </DepartmentItem>
            ))}
          </DepartmentList>
          <Description className="mt-2">
            Explore our ongoing efforts and updates below.
          </Description>
        </ContentCard>

        {/* Accessibility Controls */}
        <AccessibilityControls>
          <AccessibilityButton
            onClick={() => handleFontSizeChange(true)}
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </AccessibilityButton>
          <AccessibilityButton
            onClick={() => handleFontSizeChange(false)}
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </AccessibilityButton>
        </AccessibilityControls>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}