"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";
import Link from "next/link";
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
  padding: "2vw",
  position: "relative",
  overflowX: "hidden",
  width: "100vw",
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
  width: "90vw",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "clamp(1rem, 3vw, 3rem) clamp(0.5rem, 1vw, 1rem)",
  position: "relative",
  zIndex: 1,
  boxSizing: "border-box",
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "clamp(1.5rem, 6vw, 3rem)",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
  marginBottom: "clamp(1.5rem, 4vw, 3rem)",
});

const DocumentCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "clamp(1rem, 2vw, 1.5rem)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  },
}));

const DocumentInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "clamp(1rem, 2vw, 1.5rem)",
  width: "100%",
  flex: 1,
});

const DocumentDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(1rem, 3vw, 1.25rem)",
  lineHeight: 1.3,
  marginBottom: "0.25rem",
});

const FileSize = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.75rem)",
  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "8px",
  fontWeight: 500,
  minWidth: "clamp(80px, 20vw, 120px)",
  "&:hover": {
    backgroundColor: "#388e3c",
    transform: "scale(1.03)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
});

// Main Page Component
export default function ICFRADocumentsPage() {
  const documents = [
    {
      title: "Field Manual for Biophysical Forest Resources Assessment in Kenya",
      fileSize: "1.5 MB",
      link: "/documents/field-manual-biophysical-forest-resources-assessment.pdf",
    },
    {
      title: "Field Manual for Tree Volume and Biomass Modelling",
      fileSize: "1.2 MB",
      link: "/documents/field-manual-tree-volume-biomass-modelling.pdf",
    },
    {
      title: "Field Manual for LiDAR Assisted Estimation of Forest Resources in Kenya",
      fileSize: "2.0 MB",
      link: "/documents/field-manual-lidar-assisted-estimation.pdf",
    },
    {
      title: "Technical Report on Sampling Design Simulations for National Forest Resources Assessment in Kenya",
      fileSize: "1.8 MB",
      link: "/documents/technical-report-sampling-design-simulations.pdf",
    },
    {
      title: "Proposal for National Forest Resources Assessment in Kenya (NFRA) Technical Report on the Pilot Inventory",
      fileSize: "2.5 MB",
      link: "/documents/proposal-nfra-technical-report-pilot-inventory.pdf",
    },
    {
      title: "Manual for Preparation and Organic Carbon Analyses from Forest Soil and Mangrove Sediment Samples",
      fileSize: "1.3 MB",
      link: "/documents/manual-organic-carbon-analyses.pdf",
    },
    {
      title: "Technical Report on LiDAR Assisted Estimation of Forest Resources in Kenya",
      fileSize: "2.0 MB",
      link: "/documents/technical-report-lidar-assisted-estimation.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">IC-FRA Operating Documents</HeaderTitle>
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            {documents.map((document, index) => (
              <DocumentCard
                key={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <DocumentInfo>
                  <DescriptionIcon
                    sx={{ color: "#0f5a28", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", flexShrink: 0 }}
                  />
                  <DocumentDetails>
                    <DocumentTitle>{document.title}</DocumentTitle>
                    <FileSize>1 file(s) {document.fileSize}</FileSize>
                  </DocumentDetails>
                </DocumentInfo>
                <Link href={document.link} target="_blank" rel="noopener noreferrer" passHref>
                  <DownloadButton>Download</DownloadButton>
                </Link>
              </DocumentCard>
            ))}
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}