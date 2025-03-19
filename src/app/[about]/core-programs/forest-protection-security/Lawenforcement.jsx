"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import Image from "next/image"; // Import next/image for optimized image loading

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
  fontFamily: "'Poppins', sans-serif",
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
  color: "#000000",
  lineHeight: 1.6,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const SectionList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1rem",
  padding: 0,
});

const SectionItem = styled(ListItem)({
  background: "#1a3c34",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
  },
});

const SectionText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#ffffff",
    fontSize: "1rem",
  },
});

const ImageSliderContainer = styled(Box)({
  marginTop: "2rem",
  "& .slick-slide": {
    padding: "0 10px",
  },
  "& .slick-prev, & .slick-next": {
    zIndex: 1,
    width: "40px",
    height: "40px",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.7)",
    },
  },
  "& .slick-prev": {
    left: "10px",
  },
  "& .slick-next": {
    right: "10px",
  },
  "& .slick-dots": {
    bottom: "-30px",
    "& li button:before": {
      color: "#1a3c34",
    },
    "& li.slick-active button:before": {
      color: "#00ffff",
    },
  },
});

const ImageItem = styled(Box)({
  width: "300px",
  height: "200px",
  position: "relative",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
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

// FLEA Page Component
export default function FleaPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

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

  const sections = ["Background", "Objectives", "Methodology", "Results"];

  // Image URLs from www.kenyaforestservice.org (replace with actual FLEA-related images if available)
  const imageUrls = [
    toProxyUrl("/images/FLEA-1.jpg"),
    toProxyUrl("/images/FLEA-2.jpg"),
    toProxyUrl("/images/FLEA-3.jpg"),
    toProxyUrl("/images/FLEA-1.jpg"),
  ];

  // Slider settings for react-slick
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
    <PageContainer>
      <ContentCard
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <Title variant="h1">
          Forest Landscape and Ecological Assessment (FLEA)
        </Title>
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
        <Description className="mt-4">
          Stay informed about FLEA progress and KFS updates.
        </Description>

        {/* Slideable Image Gallery */}
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
  );
}