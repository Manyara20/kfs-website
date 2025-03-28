"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography} from "@mui/material";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Kenya Forest Service",
      subtitle: "Provide for the development and sustainable management, including conservation and rational utilization of all forest resources for the socio-economic development of the country and for connected purposes.",
      image: "/images/cypress.JPG", 
    },
    {
      title: "Mangrove Forest Conservation Efforts",
      subtitle: "Protecting Kenya's forests for future generations. Increase the National Tree Cover from13% to 21.03% in the 5-year period towards attainment of 30% tree cover by 2032",
      image: "/images/Mangroveforest.png", 
    },
    {
      title: "Trees For Better Lives",
      subtitle: "Promoting environmental sustainability since 2005. National Forest Cover from 83% to 10% in the 5 years plan period towards attainment of the National target of 10% forest cover by 2030",
      image: "/images/MTKULAL.JPG", 
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Slide Container */}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          backgroundImage: `url(${slides[currentSlide].image})`, // Use path from /public
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          color: "white",
          padding: "20px",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <Box
          sx={{
            textAlign: "center", // Ensure text is centered within the Box
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "20px",
              letterSpacing: "2px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].title}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontStyle: "italic",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
            }}
          >
            {slides[currentSlide].subtitle}
          </Typography>
        </Box>

        {/* Navigation Buttons 
        <Button
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: "0px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1,
          }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1,
          }}
        >
          <ArrowForwardIosIcon />
        </Button> */}

        {/* Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: currentSlide === index ? "white" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;