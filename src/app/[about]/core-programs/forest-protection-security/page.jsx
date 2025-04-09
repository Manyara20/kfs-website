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
  padding: "2rem", // Updated to match DFCMPage
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
  padding: "3rem", // Updated from 2rem to 3rem to match DFCMPage
  maxWidth: "900px", // Updated from 700px to 900px to match DFCMPage
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "#ffffff",
  borderRadius: 0, // Removed border radius
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  marginBottom: "2rem", // Updated from 1rem to 2rem to match DFCMPage
  fontSize: "1.8rem",
  lineHeight: 1.3, // Updated from 1.1 to 1.3 to match DFCMPage
  letterSpacing: "0.5px", // Updated from 0.3px to 0.5px to match DFCMPage
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000000",
  lineHeight: 1.8, // Updated from 1.6 to 1.8 to match DFCMPage
  wordSpacing: "0.15rem", // Added to match DFCMPage
  fontSize: "0.9rem",
  marginBottom: "2rem", // Updated from 1rem to 2rem to match DFCMPage
});

const SectionList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Updated from 250px to 280px to match DFCMPage
  gap: "1.5rem", // Updated from 0.5rem to 1.5rem to match DFCMPage
  padding: 0,
});

const SectionItem = styled(ListItem)({
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1.5rem", // Updated from 0.5rem to 1.5rem to match DFCMPage
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
    fontSize: "0.85rem",
    lineHeight: 1.6, // Added to match DFCMPage
    wordSpacing: "0.1rem", // Added to match DFCMPage
    textTransform: "capitalize",
  },
});

const ImageSliderContainer = styled(Box)({
  marginTop: "1rem",
  marginBottom: "2rem", // Added to match the spacing style of DFCMPage
  "& .slick-slide": {
    padding: "0 5px",
  },
  "& .slick-prev, & .slick-next": {
    zIndex: 1,
    width: "30px",
    height: "30px",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.7)",
    },
  },
  "& .slick-prev": {
    left: "5px",
  },
  "& .slick-next": {
    right: "5px",
  },
  "& .slick-dots": {
    bottom: "-20px",
    "& li button:before": {
      color: "#1a3c34",
      fontSize: "8px",
    },
    "& li.slick-active button:before": {
      color: "#00ffff",
    },
  },
});

const ImageItem = styled(Box)({
  width: "100%",
  height: "200px",
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0, // Removed border radius
  overflow: "hidden",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </div>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}