"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: "/icons/teamwork.png",
    title: "Teamwork",
    description:
      "We embrace mutual support, respect, active participation, collective responsibility, open communication, and mentoring.",
  },
  {
    icon: "/icons/results.png",
    title: "Results-Oriented",
    description:
      "We pursue timely attainment of targeted results at all levels with focus and precision.",
  },
  {
    icon: "/icons/integrity.png",
    title: "Integrity",
    description:
      "We uphold high standards of personal ethics, transparency, and accountability in all our actions.",
  },
  {
    icon: "/icons/scientific.png",
    title: "Scientific Principles",
    description:
      "Our decisions and practices are grounded in current scientific knowledge and best practices.",
  },
  {
    icon: "/icons/creativity.png",
    title: "Creativity & Innovation",
    description:
      "We foster and reward creativity and innovativeness to enhance work performance.",
  },
];

const SectionContainer = styled(Box)({
  backgroundColor: "#f7faf7",
  padding: "clamp(2rem, 3vw, 3rem) clamp(0.5rem, 1vw, 1rem)", // Optimized padding
  width: "100vw",
  overflowX: "hidden",
  boxSizing: "border-box",
});

const HeaderContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Reduced for space efficiency
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "clamp(2rem, 5vw, 3.5rem)", // Large for prominence
  lineHeight: 1.2,
  letterSpacing: "0.02em",
});

const ValuesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row", // Single line
  gap: "clamp(0.75rem, 1vw, 1rem)", // Balanced gap
  justifyContent: "flex-start",
  width: "98vw", // Maximize width to fill space
  maxWidth: "100%",
  margin: "0 auto",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  paddingBottom: "clamp(0.25rem, 0.5vw, 0.5rem)",
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#0f5a28",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#e6f5e6",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "clamp(0.25rem, 0.5vw, 0.5rem)",
    paddingRight: "clamp(0.25rem, 0.5vw, 0.5rem)",
  },
}));

const ValueCard = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "clamp(1rem, 1.5vw, 1.5rem)", // Balanced padding
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "clamp(12rem, 19vw, 16rem)", // Wider cards to fill space
  flexShrink: 0,
  scrollSnapAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
});

const ValueIconWrapper = styled(Box)({
  marginBottom: "clamp(0.5rem, 1vw, 0.75rem)",
});

const ValueTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  fontSize: "clamp(1.125rem, 2.8vw, 1.5rem)", // Increased for readability
  color: "#0f5a28",
  lineHeight: 1.3,
});

const ValueDescription = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Increased for clarity
  color: "#333",
  marginTop: "clamp(0.25rem, 0.5vw, 0.5rem)",
  lineHeight: 1.5,
});

const CoreValuesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <SectionContainer>
      <HeaderContainer>
        <HeaderTitle>Our Core Values</HeaderTitle>
      </HeaderContainer>
      <ValuesContainer>
        {coreValues.map((value, index) => (
          <ValueCard
            key={index}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <ValueIconWrapper>
              <Image
                src={value.icon}
                alt={value.title}
                width={40}
                height={40}
                priority
                style={{
                  width: "clamp(1.5rem, 3vw, 2.5rem)", // Balanced icon size
                  height: "clamp(1.5rem, 3vw, 2.5rem)",
                  objectFit: "contain",
                }}
              />
            </ValueIconWrapper>
            <ValueTitle>{value.title}</ValueTitle>
            <ValueDescription>{value.description}</ValueDescription>
          </ValueCard>
        ))}
      </ValuesContainer>
    </SectionContainer>
  );
};

export default CoreValuesSection;