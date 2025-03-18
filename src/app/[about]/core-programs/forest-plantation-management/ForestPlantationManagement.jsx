"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import Link from "next/link";

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
    opacity: 0.05,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "#e6f5e6",
  padding: "3rem",
  maxWidth: "800px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "#ffffff",
});

const Title = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 700,
  color: "#000",
  marginBottom: "1.5rem",
  fontSize: "2.5rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
});

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#000",
  lineHeight: 1.6,
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
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
  },
});

const DepartmentText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#ffffff",
    fontSize: "1rem",
  },
});

// Divisions Page Component
export default function Divisions() {
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
    setIsVisible(true); // Fade-in effect on load
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize)); // Limit between 12px and 20px
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
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
        <Description className="mt-4">
          Explore our ongoing efforts and updates below.
        </Description>
        <Link
          href="/#kfs-feeds"
          className="text-black"
        >
          View KFS Feeds
        </Link>
      </ContentCard>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={() => handleFontSizeChange(true)}
          className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
          aria-label="Increase font size"
        >
          <IoMdHelpCircle className="text-white" />
        </button>
        <button
          onClick={() => handleFontSizeChange(false)}
          className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
          aria-label="Decrease font size"
        >
          <IoMdHelpCircle className="text-white" />
        </button>
      </div>
    </PageContainer>
  );
}