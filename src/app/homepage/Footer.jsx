"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Box, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  backgroundColor: "#0D3C00",
  color: "#ffffff",
  padding: "clamp(1.5rem, 3vw, 3rem) 0", // Responsive padding
  width: "100%",
  borderTop: "4px solid #1f5d2f",
  position: "relative",
  overflow: "hidden",
});

const BackgroundOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  opacity: 0.1,
  backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
  backgroundSize: "clamp(6rem, 20vw, 12.5rem)", // Responsive background size
  backgroundRepeat: "repeat",
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom, rgba(13, 60, 0, 0.8), rgba(31, 93, 47, 0.8))",
});

const ContentContainer = styled(Box)({
  position: "relative",
  padding: "0 clamp(0.5rem, 2vw, 2rem)", // Responsive padding
});

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "clamp(0.75rem, 2vw, 1.5rem)", // Responsive gap
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Column = styled(Box)({
  padding: "clamp(0.75rem, 2vw, 1.5rem)", // Responsive padding
});

const LogoWrapper = styled(Box)({
  marginBottom: "clamp(0.75rem, 2vw, 1.5rem)", // Responsive margin
});

const Tagline = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 300,
  fontStyle: "italic",
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "clamp(0.75rem, 2vw, 1.25rem)", // Scales with viewport
  marginBottom: "clamp(0.75rem, 2vw, 1.5rem)", // Responsive margin
});

const ColumnTitle = styled(Typography)({
  fontFamily: "' serif'",
  fontWeight: 700,
  color: "#ffffff",
  fontSize: "clamp(1rem, 3vw, 1.875rem)", // Scales with viewport
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
});

const ContactText = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "clamp(0.75rem, 2vw, 1.25rem)", // Scales with viewport
  padding: "clamp(0.25rem, 0.5vw, 0.5rem) 0", // Responsive padding
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive gap
});

const Icon = styled(Box)({
  color: "#1f5d2f",
});

const TollFreeNumber = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#ffffff",
  fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)", // Scales with viewport
  marginBottom: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive margin
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive gap
});

const ActionButton = styled(Button)({
  backgroundColor: "#1f5d2f",
  color: "#ffffff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)", // Responsive padding
  fontSize: "clamp(0.75rem, 2vw, 1.25rem)", // Scales with viewport
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "6px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#0D3C00",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
});

const EmailInput = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
    borderRadius: "6px",
    backgroundColor: "transparent",
    color: "#e6f5e6",
    fontSize: "clamp(0.75rem, 2vw, 1.25rem)", // Scales with viewport
    fontFamily: "'Roboto', sans-serif",
  },
  "& .MuiInputBase-input": {
    paddingLeft: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffffff",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1f5d2f",
    boxShadow: "0 0 0 2px rgba(31, 93, 47, 0.5)",
  },
});

const SocialIcon = styled("a")({
  color: "#ffffff",
  fontSize: "clamp(1rem, 2.5vw, 1.5rem)", // Scales with viewport
  "&:hover": {
    color: "#1f5d2f",
    transform: "scale(1.1) rotate(12deg)",
  },
});

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <FooterContainer>
        <ContentContainer />
      </FooterContainer>
    );
  }

  return (
    <FooterContainer>
      <BackgroundOverlay />
      <GradientOverlay />
      <ContentContainer>
        <GridContainer>
          {/* Column 1: Logo, Tagline */}
          <Column sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <LogoWrapper>
              <Image
                src="/images/t_logo_edited.png"
                alt="Kenya Forest Service Logo"
                width={80}
                height={56}
                priority
                style={{ width: "clamp(2.5rem, 5vw, 5rem)", height: "auto" }} // Responsive image size
              />
            </LogoWrapper>
            <Tagline>
              To be an internationally recognized organisation for excellence in knowledge-based sustainable forest resources management and conservation.
            </Tagline>
          </Column>

          {/* Column 2: Contact Info */}
          <Column>
            <ColumnTitle>Contact Us</ColumnTitle>
            <Box sx={{ display: "grid", gap: "clamp(0.5rem, 1vw, 0.75rem)" }}>
              <ContactText><Icon as={FaEnvelope} /> info@kenyaforestservice.org</ContactText>
              <ContactText><Icon as={FaMapMarkerAlt} /> P.O BOX 30513 - 00100 NAIROBI - KENYA</ContactText>
              <ContactText><Icon as={FaClock} /> Mon - Fri (8am - 5pm) Sat & Sun CLOSED</ContactText>
            </Box>
          </Column>

          {/* Column 3: Toll-Free */}
          <Column>
            <ColumnTitle>Toll Free</ColumnTitle>
            <TollFreeNumber><FaPhone style={{ transform: "rotate(180deg)" }} /> 0800 721 277</TollFreeNumber>
            <Tagline>Toll Free Number (For Anticorruption and Complaints)</Tagline>
            <ActionButton>Call Now</ActionButton>
          </Column>

          {/* Column 4: Subscribe */}
          <Column>
            <ColumnTitle>Subscribe to The Forester Magazine</ColumnTitle>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "clamp(0.75rem, 1.5vw, 1rem)" }}>
              <EmailInput
                type="email"
                placeholder="Enter your email"
                variant="outlined"
              />
              <ActionButton>Subscribe</ActionButton>
              <Box sx={{ display: "flex", gap: "clamp(0.75rem, 1.5vw, 1rem)" }}>
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon href="skype:user?call" target="_blank" rel="noopener noreferrer">
                  <FaSkype />
                </SocialIcon>
              </Box>
            </Box>
          </Column>
        </GridContainer>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;