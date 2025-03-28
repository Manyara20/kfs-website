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
  background: "rgba(255, 255, 255, 0.95)",
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
  color: "#0f5a28",
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
          <Description className="mt-4">
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
      <FooterBottom />
    </div>
  );
}