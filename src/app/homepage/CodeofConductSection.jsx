"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const objectives = [
  {
    title: "KRA 1: Forest and Tree Cover Expansion for Climate Mitigation and Adaptation",
    details: [
      "1.1 Increase the National Tree Cover from 13% to 21.03% in 5 years towards 30% by 2032.",
      "1.2 Increase the National Forest Cover from 8.3% to 10% in 5 years towards 10% by 2030.",
    ],
  },
  {
    title: "KRA 2: Conservation and Protection of Forests for Climate Change Resilience",
    details: [
      "2.1 Strengthen enforcement capacity in forest protection and secure corporate assets.",
      "2.2 Improve governance for sustainable forest management.",
      "2.3 Strengthen climate change actions and response capacities.",
      "2.4 Reverse degradation of Mangrove ecosystems for climate mitigation.",
    ],
  },
  {
    title: "KRA 3: Economic Development and Livelihood Improvement",
    details: [
      "3.1 Strengthen nature-based enterprises for improving livelihoods and climate resilience.",
      "3.2 Develop commercial forest plantations on public, community, and private lands.",
      "3.3 Collaborate with private sectors for climate finance and carbon project development.",
    ],
  },
  {
    title: "KRA 4: Organizational Capacity Building and Collaboration",
    details: [
      "4.1 Promote operational efficiency and effectiveness to deliver on mandate.",
      "4.2 Strengthen partnerships and increase resource mobilization capacity.",
    ],
  },
];

const SectionContainer = styled(Box)({
  padding: "clamp(2rem, 4vw, 2.5rem) clamp(1rem, 2vw, 4rem)", // Responsive padding
  backgroundColor: "#0D3C00",
  position: "relative",
  overflow: "hidden",
});

const StarryBackground = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
    radial-gradient(circle, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
    radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
  `,
  backgroundSize: "clamp(1rem, 5vw, 3.125rem) clamp(1rem, 5vw, 3.125rem), clamp(0.75rem, 3vw, 1.875rem) clamp(0.75rem, 3vw, 1.875rem), clamp(0.5rem, 2vw, 1.25rem) clamp(0.5rem, 2vw, 1.25rem)", // Responsive background size
  backgroundPosition: "0 0, clamp(0.5rem, 1vw, 0.9375rem) clamp(0.5rem, 1vw, 0.9375rem), clamp(0.75rem, 1.5vw, 1.5625rem) clamp(0.75rem, 1.5vw, 1.5625rem)",
  opacity: 0.5,
  zIndex: 0,
});

const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const LeftContent = styled(Box)({
  width: "100%",
  height: "100%",
});

const InfoContainer = styled(Box)({
  maxWidth: "80%",
  margin: "clamp(1rem, 2vw, 2rem) auto 0", // Responsive margin
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  backgroundColor: "transparent",
});

const InfoTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#e6f5e6",
  fontSize: "clamp(1.25rem, 3vw, 1.5rem)", // Scales with viewport
  textTransform: "uppercase",
  textAlign: "center",
});

const InfoText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#ffffff",
  fontSize: "clamp(0.875rem, 2vw, 1.25rem)", // Scales with viewport
  marginTop: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  lineHeight: 1.6,
});

const LearnMoreButton = styled(Button)({
  backgroundColor: "#0D3C00",
  color: "#ffffff",
  border: "1px solid #4A7C12",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  fontSize: "clamp(0.8rem, 2vw, 1rem)", // Scales with viewport
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "4px",
  marginTop: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#4A7C12",
  },
});

const ObjectivesContainer = styled(Box)({
  width: "100%",
});

const ObjectivesTitle = styled(Typography)({
  fontFamily:"'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#e6f5e6",
  fontSize: "clamp(1.5rem, 4vw, 2rem)", // Scales with viewport
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
});

const ObjectivesSubtitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#ffffff",
  fontSize: "clamp(1rem, 3vw, 1.5rem)", // Scales with viewport
  textAlign: "center",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
});

const ObjectiveCard = styled(Box)({
  width: "100%",
  padding: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive padding
  backgroundColor: "#0D3C00",
  border: "4px solid #ffffff",
  color: "#ffffff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#15803d",
    color: "#0D3C00",
    "& .details": {
      opacity: 1,
      maxHeight: "1000px",
    },
  },
});

const ObjectiveTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
});

const DetailsContainer = styled(Box)({
  marginTop: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
  opacity: 0,
  maxHeight: 0,
  overflow: "hidden",
  transition: "all 0.3s ease",
});

const DetailText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Scales with viewport
  lineHeight: 1.7,
});

const CodeOfConductSection = () => {
  const router = useRouter();

  const navigateToCodeOfConduct = () => {
    router.push("/homepage/code-of-conduct");
  };

  return (
    <SectionContainer>
      <StarryBackground />
      <ContentGrid>
        {/* Left Side: About KFS */}
        <LeftContent>
          <InfoContainer>
            <InfoTitle>About Kenya Forest Service</InfoTitle>
            <InfoText>
              In carrying out its mandate, the functions of KFS include among others:
            </InfoText>
            <InfoText>
              1. Conserve, protect and manage all Public Forests
            </InfoText>
            <InfoText>
              2. Prepare and implement management plans for all public forests, and, where requested, assist in
              preparation of management plans for community forests or private forests in consultation with the
              relevant owners
            </InfoText>
            <InfoText>
              3. Receive and consider applications for licenses or permits in relation to forest resources or
              management of forests or any other relevant matter in accordance with the Act
            </InfoText>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LearnMoreButton onClick={navigateToCodeOfConduct}>
                Learn More
              </LearnMoreButton>
            </Box>
          </InfoContainer>
        </LeftContent>

        {/* Right Side: Strategic Objectives */}
        <ObjectivesContainer>
          <ObjectivesTitle>Strategic Objectives</ObjectivesTitle>
          <ObjectivesSubtitle>
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision.
          </ObjectivesSubtitle>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "clamp(0.5rem, 1vw, 0.5rem)" }}>
            {objectives.map((item, index) => (
              <ObjectiveCard key={index}>
                <ObjectiveTitle>{item.title}</ObjectiveTitle>
                <DetailsContainer className="details">
                  {item.details.map((detail, i) => (
                    <DetailText key={i}>{detail}</DetailText>
                  ))}
                </DetailsContainer>
              </ObjectiveCard>
            ))}
          </Box>
        </ObjectivesContainer>
      </ContentGrid>
    </SectionContainer>
  );
};

export default CodeOfConductSection;