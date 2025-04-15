"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const coreValues = [
  {
    icon: "/icons/teamwork.png",
    title: "TEAMWORK",
    description:
      "The Service will embrace mutual support and respect, active participation, and collective responsibility, open communication, information sharing and mentoring.",
  },
  {
    icon: "/icons/results.png",
    title: "RESULTS ORIENTED",
    description:
      "The Service will pursue timely attainment of targeted results at all levels.",
  },
  {
    icon: "/icons/integrity.png",
    title: "INTEGRITY",
    description:
      "The Service and staff shall ascribe to high standards of personal integrity, ethics, transparency together with individual and corporate accountability in the conduct of business.",
  },
  {
    icon: "/icons/scientific.png",
    title: "SCIENTIFIC PRINCIPLES AND PROFESSIONALISM",
    description:
      "Decision making and practice will be based on current scientific knowledge and best practice.",
  },
  {
    icon: "/icons/creativity.png",
    title: "CREATIVITY AND INNOVATION",
    description:
      "The Service will encourage and reward creativity and innovativeness in work performance among staff.",
  },
];

const SectionContainer = styled(Box)({
  backgroundColor: "#e6f5e6",
  padding: "clamp(1.5rem, 3vw, 3rem) clamp(0.5rem, 1vw, 2rem)", // Responsive padding
});

const HeaderContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "clamp(1rem, 2vw, 3rem)", // Responsive margin
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 900,
  color: "#0E2E0E",
  fontSize: "clamp(1.5rem, 6vw, 3.75rem)", // Scales with viewport
  lineHeight: 1.2,
});

const ValuesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "clamp(0.5rem, 1vw, 1.5rem)", // Responsive gap
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    overflowX: "auto",
    flexWrap: "nowrap",
    paddingBottom: "1rem",
  },
}));

const ValueCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "clamp(1rem, 2vw, 3rem)", // Scales padding
  border: "1px solid #e8ecef",
  backgroundColor: "#1f5d2f",
  color: "#ffffff",
  width: "clamp(14rem, 20vw, 28.125rem)", // Responsive width
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    color: "#000000",
  },
  [theme.breakpoints.down("lg")]: {
    flexShrink: 0,
  },
}));

const ValueIconWrapper = styled(Box)({
  marginBottom: "clamp(0.5rem, 1vw, 1.25rem)", // Responsive margin
});

const ValueTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 500,
  fontSize: "clamp(1rem, 3vw, 1.875rem)", // Scales with viewport
  lineHeight: 1.3,
});

const ValueDescription = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.75rem, 2vw, 1.5rem)", // Scales with viewport
  marginTop: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  lineHeight: 1.5,
});

const CoreValuesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <SectionContainer>
        <HeaderContainer>
          <HeaderTitle>Our Core Values</HeaderTitle>
        </HeaderContainer>
        <ValuesContainer>
          {coreValues.map((_, index) => (
            <ValueCard key={index} />
          ))}
        </ValuesContainer>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <HeaderContainer>
        <HeaderTitle>Our Core Values</HeaderTitle>
      </HeaderContainer>
      <ValuesContainer>
        {coreValues.map((value, index) => (
          <ValueCard key={index}>
            <ValueIconWrapper>
              <Image
                src={value.icon}
                alt={value.title}
                width={64}
                height={64}
                priority
                style={{
                  width: "clamp(2rem, 5vw, 4rem)", // Responsive image size
                  height: "clamp(2rem, 5vw, 4rem)", // Responsive image size
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