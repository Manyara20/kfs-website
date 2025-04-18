"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
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
  padding: "clamp(1rem, 2vw, 2rem)", // Responsive padding
  position: "relative",
  overflowX: "hidden", // Prevent horizontal overflow
  width: "100vw", // Full viewport width
  boxSizing: "border-box",
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
  padding: "clamp(1.5rem, 3vw, 3rem)", // Responsive padding
  width: "clamp(90%, 95vw, 100%)", // Responsive width
  maxWidth: "100%", // Prevent overflow
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "#ffffff",
  borderRadius: 0,
  boxSizing: "border-box",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
  fontSize: "clamp(1.25rem, 3.5vw, 1.8rem)", // Scales with viewport
  lineHeight: 1.3,
  letterSpacing: "0.5px",
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000000",
  lineHeight: 1.8,
  wordSpacing: "0.15rem",
  fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)", // Scales with viewport
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
});

const SectionList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(clamp(12rem, 25vw, 17.5rem), 1fr))", // Responsive grid
  gap: "clamp(0.75rem, 1.5vw, 1.5rem)", // Responsive gap
  padding: 0,
  width: "100%", // Full width of parent
});

const SectionItem = styled(ListItem)({
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "clamp(0.75rem, 1.5vw, 1.5rem)", // Responsive padding
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
});

const SectionText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontWeight: 500,
    color: "#ffffff",
    fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", // Scales with viewport
    lineHeight: 1.6,
    wordSpacing: "0.1rem",
    textTransform: "capitalize",
  },
});

const ImageSliderContainer = styled(Box)({
  marginTop: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  marginBottom: "clamp(1rem, 2vw, 2rem)", // Responsive margin
  width: "100%", // Ensure full width
  "& .slick-slide": {
    padding: "0 clamp(2px, 0.5vw, 5px)", // Responsive padding for slides
    outline: "none", // Remove outline for better accessibility
  },
  "& .slick-prev, & .slick-next": {
    zIndex: 1,
    width: "clamp(20px, 2vw, 30px)", // Responsive arrow size
    height: "clamp(20px, 2vw, 30px)",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.7)",
    },
    "&:before": {
      fontSize: "clamp(12px, 1.5vw, 18px)", // Responsive arrow icon size
    },
  },
  "& .slick-prev": {
    left: "clamp(2px, 0.5vw, 5px)",
  },
  "& .slick-next": {
    right: "clamp(2px, 0.5vw, 5px)",
  },
  "& .slick-dots": {
    bottom: "clamp(-30px, -2vw, -20px)", // Responsive dot positioning
    "& li": {
      margin: "0 clamp(2px, 0.5vw, 5px)", // Responsive dot spacing
    },
    "& li button:before": {
      color: "#1a3c34",
      fontSize: "clamp(6px, 0.5vw, 8px)", // Responsive dot size
      opacity: 0.5,
    },
    "& li.slick-active button:before": {
      color: "#00ffff",
      opacity: 1,
    },
  },
  "& .slick-track": {
    display: "flex",
    alignItems: "center", // Vertically center slides
  },
});

const ImageItem = styled(Box)({
  width: "100%", // Full width of the slide
  height: "clamp(8rem, 20vw, 12.5rem)", // Responsive height
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
  overflow: "hidden",
  "& img": {
    transition: "transform 0.3s ease", // Smooth zoom effect
  },
  "&:hover img": {
    transform: "scale(1.05)", // Slight zoom on hover
  },
});

const AccessibilityControls = styled(Box)({
  position: "fixed",
  bottom: "clamp(1rem, 2vw, 4rem)", // Responsive positioning
  right: "clamp(1rem, 2vw, 4rem)",
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 2rem)", // Responsive gap
});

const AccessibilityButton = styled("button")({
  backgroundColor: "#1a3c34",
  padding: "clamp(0.5rem, 1vw, 2rem)", // Responsive padding
  borderRadius: "50%",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

// Helper function to convert external URLs to proxy URLs
const toProxyUrl = (url) => {
  const kfsBaseUrl = "https://www.kenyaforestservice.org/";
  if (url.startsWith(kfsBaseUrl)) {
    return url.replace(kfsBaseUrl, "/proxy/kfs/");
  }
  return url;
};

// Main Page Component
export default function FLEAAssessmentPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

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

  const sections = ["Background", "Objectives", "Methodology", "Results"];

  const imageUrls = [
    toProxyUrl("/images/FLEA-1.jpg"),
    toProxyUrl("/images/FLEA-2.jpg"),
    toProxyUrl("/images/FLEA-3.jpg"),
    toProxyUrl("/images/FLEA-1.jpg"),
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false, // Disable center mode for consistent slide alignment
    variableWidth: false, // Ensure slides are uniform
    focusOnSelect: true, // Improve accessibility
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on small screens
          dots: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          style={{ fontSize: `${fontSize}px` }}
        >
          <Title variant="h1">
            Forest Landscape and Ecological Assessment (FLEA)
          </Title>

          <ImageSliderContainer>
            <Slider {...sliderSettings}>
              {imageUrls.map((url, index) => (
                <ImageItem key={index}>
                  <Image
                    src={url}
                    alt={`FLEA Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    priority={index === 0} // Prioritize first image for faster loading
                    loading={index === 0 ? "eager" : "lazy"} // Optimize loading
                  />
                </ImageItem>
              ))}
            </Slider>
          </ImageSliderContainer>

          <Description>
            The Forest Landscape and Ecological Assessment (FLEA) is a strategic initiative by
            the Kenya Forest Service (KFS) to evaluate the ecological status of forest landscapes
            across Kenya. Launched under the Forest Conservation and Management Act 2016, FLEA
            aims to provide a comprehensive understanding of forest health and guide conservation
            efforts.
          </Description>
          <Description>
            This assessment integrates data on biodiversity, land use, and climate change impacts
            to support sustainable forest management and policy development.
          </Description>
          <Description>
            Key components of the FLEA initiative include:
          </Description>
          <SectionList>
            {sections.map((section, index) => (
              <SectionItem key={index}>
                <SectionText primary={section} />
              </SectionItem>
            ))}
          </SectionList>
          <Description className="mt-2">
            Stay informed about FLEA progress and KFS updates.
          </Description>
        </ContentCard>

        {/* Accessibility Controls */}
        <AccessibilityControls>
          <AccessibilityButton
            onClick={() => handleFontSizeChange(true)}
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </AccessibilityButton>
          <AccessibilityButton
            onClick={() => handleFontSizeChange(false)}
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </AccessibilityButton>
        </AccessibilityControls>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}