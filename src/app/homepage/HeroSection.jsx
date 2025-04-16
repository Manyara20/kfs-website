"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const slides = [
  {
    title: "Kenya Forest Service",
    subtitle:
      "Provide for the development and sustainable management, including conservation and rational utilization of all forest resources for the socio-economic development of the country and for connected purposes.",
    image: "/images/cypress.JPG",
  },
  {
    title: "Mangrove Forest Conservation Efforts",
    subtitle:
      "Protecting Kenya's forests for future generations. Increase the National Tree Cover from 13% to 21.03% in the 5-year period towards attainment of 30% tree cover by 2032",
    image: "/images/Mangroveforest.png",
  },
  {
    title: "Trees For Better Lives",
    subtitle:
      "Promoting environmental sustainability since 2005. National Forest Cover from 8.83% to 10% in the 5 years plan period towards attainment of the National target of 10% forest cover by 2030",
    image: "/images/MTKULAL.JPG",
  },
];

const HeroContainer = styled(Box)({
  position: "relative",
  height: "clamp(40vh, 60vw, 80vh)", // Responsive height
  width: "100vw", // Full viewport width
  overflow: "hidden",
  boxSizing: "border-box",
});

const SlideContainer = styled(Box)(({ image }) => ({
  position: "relative",
  height: "100%",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "clamp(1rem, 2vw, 2.5rem)", // Responsive padding
  transition: "opacity 0.5s ease-in-out", // Smooth fade transition
  opacity: 1,
  width: "100%", // Full width of parent
}));

const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

const TextContainer = styled(Box)({
  position: "relative",
  textAlign: "center",
  zIndex: 10,
  width: "90vw", // Responsive width
  maxWidth: "100%", // Prevent overflow
});

const SlideTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
  fontSize: "clamp(1.25rem, 4vw, 3.125rem)", // Scales with viewport
  marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)", // Responsive margin
  letterSpacing: "0.1em",
});

const SlideSubtitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  fontStyle: "italic",
  color: "#ffffff",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
  fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)", // Scales with viewport
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
});

const IndicatorsContainer = styled(Box)({
  position: "absolute",
  bottom: "clamp(0.75rem, 1.5vw, 1.25rem)", // Responsive positioning
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "clamp(0.375rem, 1vw, 0.625rem)", // Responsive gap
  zIndex: 10,
});

const Indicator = styled(Box)(({ active }) => ({
  width: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive width
  height: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive height
  borderRadius: "50%",
  backgroundColor: active ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}));

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <HeroContainer>
      {slides.map((slide, index) => (
        <SlideContainer
          key={index}
          image={slide.image}
          style={{
            opacity: currentSlide === index ? 1 : 0,
            position: currentSlide === index ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: currentSlide === index ? 5 : 1,
          }}
        >
          <Overlay />
          <TextContainer>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
          </TextContainer>
        </SlideContainer>
      ))}
      <IndicatorsContainer>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={currentSlide === index}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </IndicatorsContainer>
    </HeroContainer>
  );
};

export default HeroSection;