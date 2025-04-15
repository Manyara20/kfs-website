"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Moments = [
  {
    title: "Partnership with WWF",
    description: "Collaborating with WWF to protect Kenya's biodiversity and forests.",
    image: "/images/cypress.JPG",
  },
  {
    title: "Conservation with AWF",
    description: "Working with AWF to safeguard wildlife habitats in Kenyan forests.",
    image: "/images/about.png",
  },
  {
    title: "UNEP Initiatives",
    description: "Supporting UNEP’s global environmental efforts in Kenya.",
    image: "/images/forest.jpg",
  },
  {
    title: "USAID Projects",
    description: "Enhancing forest management with USAID’s support.",
    image: "/images/forestcover.jpg",
  },
  {
    title: "FAO Collaboration",
    description: "Promoting sustainable forestry with FAO expertise.",
    image: "/images/foresty.jpg",
  },
  {
    title: "NEMA Partnership",
    description: "Aligning with NEMA for environmental regulation and conservation.",
    image: "/images/blackforest.jpg",
  },
  {
    title: "World Bank Support",
    description: "Leveraging World Bank funding for forest restoration.",
    image: "/images/cypress.JPG",
  },
  {
    title: "UNDP Efforts",
    description: "Partnering with UNDP for climate resilience in forests.",
    image: "/images/OIP.jpg",
  },
  {
    title: "KEFRI Research",
    description: "Advancing forest science with KEFRI’s research capabilities.",
    image: "/images/plantation.jpg",
  },
  {
    title: "Rhino Ark Conservation",
    description: "Protecting ecosystems with Rhino Ark’s initiatives.",
    image: "/images/cypress.JPG",
  },
  {
    title: "KFS Milestone",
    description: "Celebrating a key milestone in forest conservation with partners.",
    image: "/images/tree nusery.jpg",
  },
  {
    title: "Community Engagement",
    description: "Empowering local communities with partner support.",
    image: "/images/nuseries.jpg",
  },
];

const SectionContainer = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
});

const ContentContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "clamp(1rem, 2vw, 2rem)", // Responsive gap
  padding: "clamp(1rem, 2vw, 2rem)", // Responsive padding
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const MobileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const DesktopTextContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const MomentImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "clamp(20rem, 40vw, 25rem)", // Responsive height for mobile
  objectFit: "cover",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin (mobile only)
  [theme.breakpoints.up("md")]: {
    height: "clamp(30rem, 60vw, 45rem)", // Responsive height for desktop
    marginBottom: 0,
  },
}));

const NavigationContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive gap
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
});

const NavButton = styled(Button)({
  backgroundColor: "#e6f5e6",
  color: "#0D3C00",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)", // Responsive padding
  borderRadius: "4px",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: "#15803d",
    color: "#ffffff",
  },
});

const SlideIndicator = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0D3C00",
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
});

const MomentTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0D3C00",
  fontSize: "clamp(1.25rem, 3vw, 1.875rem)", // Scales with viewport
  marginBottom: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive margin
});

const MomentDescription = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
});

const TextContent = styled(Box)({
  height: "clamp(10rem, 20vw, 12rem)", // Responsive height for mobile text area
});

const MomentsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === Moments.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Moments.length - 1 : prev - 1));
  };

  const currentMoment = Moments[currentSlide];

  return (
    <SectionContainer>
      <ContentContainer>
        {/* Small Screens: Image on Top, Text Below */}
        <MobileContainer>
          <MomentImage src={currentMoment.image} alt={currentMoment.title} />
          <TextContent>
            <NavigationContainer>
              <NavButton onClick={handlePrevSlide}>{"<"}</NavButton>
              <SlideIndicator>
                {currentSlide + 1} / {Moments.length}
              </SlideIndicator>
              <NavButton onClick={handleNextSlide}>{">"}</NavButton>
            </NavigationContainer>
            <MomentTitle>{currentMoment.title}</MomentTitle>
            <MomentDescription>{currentMoment.description}</MomentDescription>
          </TextContent>
        </MobileContainer>

        {/* Medium/Large Screens: Left (Text with Navigation), Right (Image) */}
        <DesktopTextContainer>
          <Box sx={{ width: "100%" }}>
            <NavigationContainer>
              <NavButton onClick={handlePrevSlide}>{"<"}</NavButton>
              <SlideIndicator>
                {currentSlide + 1} / {Moments.length}
              </SlideIndicator>
              <NavButton onClick={handleNextSlide}>{">"}</NavButton>
            </NavigationContainer>
            <MomentTitle>{currentMoment.title}</MomentTitle>
            <MomentDescription>{currentMoment.description}</MomentDescription>
          </Box>
        </DesktopTextContainer>

        <ImageContainer>
          <MomentImage src={currentMoment.image} alt={currentMoment.title} />
        </ImageContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default MomentsSection;