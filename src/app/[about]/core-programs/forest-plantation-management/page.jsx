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
    opacity: 0.05,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "2rem", 
  maxWidth: "700px", 
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "#ffffff",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif", 
  fontWeight: 700,
  color: "#0f5a28",
  marginBottom: "1rem", 
  fontSize: "1.8rem", 
  lineHeight: 1.1,
  letterSpacing: "0.3px", 
  textTransform: "capitalize", 
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
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
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "0.5rem", 
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
    fontSize: "0.85rem", 
    textTransform: "capitalize", 
  },
});

// Main Page Component
export default function KFSDivisionsPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const departments = [
    "Economics Department",
    "Inventory Department",
    "Roads and Infrastructure Department",
    "Reforestation Department",
    "Sawmill Department",
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
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">
            Plantation Division: Managing Kenya’s Forests
          </Title>
          <Description>
            The Plantation Division of the Kenya Forest Service (KFS) is responsible for managing
            all plantations across the country and coordinating tree planting through the PELIS
            programme, as mandated by the Forest Conservation and Management Act 2016.
          </Description>
          <Description>
            This division ensures sustainable forest management and supports Kenya’s goal of
            increasing forest cover, executed through the following departments:
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
        <div className="fixed bottom-2 right-2 flex flex-col space-y-1"> 
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-1 rounded-full hover:bg-green-800" 
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" /> 
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-1 rounded-full hover:bg-green-800" 
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