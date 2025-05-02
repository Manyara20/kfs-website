"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const principles = [
  {
    id: "ecosystem",
    title: "Ecosystem Approach",
    description:
      "Adoption of an integrated ecosystem approach to conserving and managing forest resources, paying particular attention to ecologically fragile areas.",
    icon: "/icons/ecosystem.png",
    background: "/images/Melia-nursery.jpg",
  },
  {
    id: "public-good",
    title: "Public Good",
    description:
      "Taking into consideration the multiple roles played by forests, ownership must serve a common good for present and future generations.",
    icon: "/icons/public-relation.png",
    background: "/images/MangroveboatinGazi.jpg",
  },
  {
    id: "sustainable",
    title: "Sustainable Forest Management",
    description:
      "Sustainable management of forest resources to yield social, economic, and ecological goods and services for current and future generations.",
    icon: "/icons/conservation.png",
    background: "/images/MangroverehabilitationTudor.jpg",
  },
];

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled(Box)({
  backgroundColor: "#ffffff",
  borderTopLeftRadius: "1.5rem",
  borderTopRightRadius: "1.5rem",
  height: "clamp(3rem, 6vw, 5rem)", // Responsive height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 800,
  color: "#000000",
  fontSize: "clamp(1.25rem, 3vw, 1.875rem)", // Scales with viewport
  textTransform: "uppercase",
});

const MainSection = styled(Box)(({ background }) => ({
  position: "relative",
  width: "100%",
  height: "clamp(20rem, 40vw, 31.25rem)", // Responsive height
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#ffffff",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.5s ease",
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  marginBottom: "clamp(1.5rem, 3vw, 2rem)", // Responsive margin
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const TabList = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  paddingLeft: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
});

const Tab = styled(Typography)(({ active }) => ({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
  textTransform: "uppercase",
  cursor: "pointer",
  color: active ? "#ffffff" : "#d1d5db",
  textDecoration: active ? "underline" : "none",
  textUnderlineOffset: "4px",
  textDecorationThickness: active ? "4px" : "0",
  "&:hover": {
    color: "#ffffff",
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive gap
  maxWidth: "100%",
  paddingLeft: "0",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "clamp(30rem, 50vw, 40rem)", // Responsive max-width
    paddingLeft: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  },
}));

const PrincipleIcon = styled(Image)({
  width: "clamp(1.5rem, 3vw, 2rem)", // Responsive width
  height: "clamp(1.5rem, 3vw, 2rem)", // Responsive height
  filter: "brightness(0) invert(1)", // Makes icon white
});

const ContentText = styled(Box)({
  animation: `${fadeIn} 0.5s ease-in-out`,
});

const PrincipleTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)", // Scales with viewport
  marginBottom: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
  textTransform: "uppercase",
});

const PrincipleDescription = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Scales with viewport
  lineHeight: 1.6,
});

const GuidingPrinciples = () => {
  const [activeTab, setActiveTab] = useState("ecosystem");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === principles.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    setActiveTab(principles[currentIndex].id);
  }, [currentIndex]);

  const activePrinciple = principles.find((p) => p.id === activeTab);

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Guiding Principles</HeaderTitle>
      </HeaderContainer>
      <MainSection background={activePrinciple.background}>
        <TabsContainer>
          <TabList>
            {principles.map((principle) => (
              <Tab
                key={principle.id}
                active={activeTab === principle.id}
                onClick={() => setActiveTab(principle.id)}
              >
                {principle.title}
              </Tab>
            ))}
          </TabList>
        </TabsContainer>
        <ContentContainer>
          <PrincipleIcon
            src={activePrinciple.icon}
            alt={activePrinciple.title}
            width={32}
            height={32}
          />
          <ContentText>
            <PrincipleTitle>{activePrinciple.title}</PrincipleTitle>
            <PrincipleDescription>{activePrinciple.description}</PrincipleDescription>
          </ContentText>
        </ContentContainer>
      </MainSection>
    </>
  );
};

export default GuidingPrinciples;