"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
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
  maxWidth: "900px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: 0,
});

const SocialIconsContainer = styled(Box)({
  position: "absolute",
  top: "2rem",
  left: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 20,
});

const SocialIconButton = styled("button")({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#0f5a28",
  padding: "0.5rem",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#1a3c34",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.8rem",
  lineHeight: 1.3,
  letterSpacing: "0.5px",
  marginBottom: "2rem",
  textTransform: "capitalize",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000",
  fontSize: "0.9rem",
  lineHeight: 1.8,
  wordSpacing: "0.15rem",
  marginBottom: "2rem",
});

const VideoContainer = styled(Box)({
  width: "100%",
  "& iframe": {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
    border: "none",
  },
  "@media (min-width: 640px)": {
    "& iframe": {
      height: "400px",
    },
  },
});

// Main Page Component
export default function SignLanguageServiceCharter() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>

        <ContentCard
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">Sign Language Service Charter</Title>
          <Description>
            Kenya Forest Service (KFS) is committed to providing accessible services to all, including individuals with hearing impairments. Our Sign Language Service Charter ensures effective communication and inclusion in all our service delivery points.
          </Description>
          <Description>
            Watch Our Sign Language Charter Video:
          </Description>
          <VideoContainer>
            {isLoaded && (
              <iframe
                src="https://www.youtube.com/embed/ZXXwvbU-zDA?si=Z8sN8oIYal0arF2-"
                title="Sign Language Service Charter"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </VideoContainer>
        </ContentCard>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}