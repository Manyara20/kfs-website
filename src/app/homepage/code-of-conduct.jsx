"use client";

import Head from "next/head";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "2vw", // Scales with viewport width
  position: "relative",
  overflowX: "hidden", // Prevent horizontal overflow
  width: "100vw", // Full viewport width
  "&:before": {
    content: "''",
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

const ContentWrapper = styled(Box)({
  width: "90vw", // Takes up 90% of viewport width
  maxWidth: "100%", // Prevents exceeding viewport
  margin: "0 auto",
  padding: "clamp(1rem, 3vw, 3rem) clamp(0.5rem, 1vw, 1rem)", // Responsive padding
  position: "relative",
  zIndex: 1,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "clamp(1.5rem, 6vw, 3rem)", // Scales with viewport
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
});

const IntroText = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#ffffff",
  fontSize: "clamp(1rem, 3vw, 1.125rem)", // Scales with viewport
  textAlign: "center",
  maxWidth: "clamp(40rem, 80vw, 48rem)", // Responsive max-width
  marginBottom: "clamp(1.5rem, 4vw, 2rem)",
});

const ValuesCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Scales padding
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "clamp(40rem, 80vw, 48rem)", // Responsive max-width
});

const ValuesTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0D3C00",
  fontSize: "clamp(1.25rem, 4vw, 1.5rem)", // Scales with viewport
  marginBottom: "clamp(0.75rem, 2vw, 1rem)",
});

const ValuesList = styled(Box)({
  paddingLeft: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
});

const ValueItem = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
  lineHeight: 1.6,
  marginBottom: "clamp(0.25rem, 1vw, 0.5rem)",
});

const BackButton = styled(Button)({
  backgroundColor: "#0D3C00",
  color: "#fff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  fontSize: "clamp(0.8rem, 2vw, 0.95rem)", // Scales with viewport
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "8px",
  fontWeight: 500,
  marginTop: "clamp(1.5rem, 4vw, 2rem)",
  "&:hover": {
    backgroundColor: "#4A7C12",
    transform: "scale(1.03)",
  },
});

export default function CodeOfConduct() {
  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <Head>
        <title>Code of Conduct</title>
        <meta name="description" content="Code of Conduct page for KFS" />
      </Head>

      <PageContainer>
        <ContentWrapper>
          <HeaderTitle>Code of Conduct</HeaderTitle>
          <IntroText>
            Welcome to the Code of Conduct page. This page contains the guidelines and ethical standards governing Kenya
            Forest Service.
          </IntroText>

          <ValuesCard>
            <ValuesTitle>Our Core Values</ValuesTitle>
            <ValuesList component="ul" sx={{ listStyleType: "disc" }}>
              {["Integrity", "Professionalism", "Transparency", "Accountability", "Environmental Stewardship"].map((value, index) => (
                <ValueItem key={index} component="li">{value}</ValueItem>
              ))}
            </ValuesList>
          </ValuesCard>

          <Link href="/">
            <BackButton variant="contained">Back to Home</BackButton>
          </Link>
        </ContentWrapper>
      </PageContainer>
    </div>
  );
}