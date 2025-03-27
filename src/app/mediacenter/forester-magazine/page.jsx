"use client";
import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
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

const ContentWrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "3rem 1rem",
  position: "relative",
  zIndex: 1,
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "3rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
  textAlign: "center",
  marginBottom: "3rem",
});

const DocumentCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  marginBottom: "1.5rem",
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
  gap: "1rem",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.25rem",
});

const FileSize = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.9rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.5rem 1.5rem",
  fontSize: "0.9rem",
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
});

export default function ForesterMagazinePage() {
  const magazines = [
    {
      title: "Forester January-June 2024",
      fileSize: "31 MB",
      link: "/path/to/forester-jan-jun-2024.pdf",
    },
    {
      title: "Forester July-December 2023",
      fileSize: "58 MB",
      link: "/path/to/forester-jul-dec-2023.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <PageContainer>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderTitle variant="h1">The Forester Magazine</HeaderTitle>
        <Typography variant="h6" align="center" color="#fff" gutterBottom>
          Biannual Forestry Magazine of the Kenya Forest Service
        </Typography>

        {/* New Content Section */}
        <Box mt={4} p={3} bgcolor="rgba(255,255,255,0.9)" borderRadius="12px" boxShadow={3}>
          <Typography variant="h6" color="#0f5a28" fontWeight="bold">
            Welcome to the latest edition of our biannual forestry magazine.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={2}>
            As we reflect on the past six months, we’re proud to share the significant strides
            made in Kenya’s forestry sector. In this issue, we spotlight several key events and
            initiatives that underscore our commitment to sustainable forest management and
            conservation.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={2}>
            Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap
            that will guide our efforts in the coming years to enhance forest cover and promote
            sustainable utilization of forest resources.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={2}>
            We also bring you highlights from the International Day of Forests celebrations, where
            we joined the global community in recognizing the vital role forests play in our lives
            and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an
            initiative that saw thousands of Kenyans come together to green our nation.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={2}>
            This edition also features news on various Memoranda of Understanding signed with
            partner organizations, strengthening our collaborative efforts in forest conservation
            and management.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={2}>
            These stories reflect our ongoing dedication to Kenya’s forests and the communities
            that depend on them. We hope this issue informs and inspires you to join us in our
            mission to protect and nurture our precious forest resources.
          </Typography>
          <Typography variant="h6" color="#0f5a28" fontWeight="bold" mt={3}>
            Happy reading!
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Anne Kaari, ‘ndc‘ (K)
          </Typography>
        </Box>

        {/* Magazine Download Section */}
        <Box mt={4}>
          {magazines.map((magazine, index) => (
            <DocumentCard key={index} initial="hidden" animate="visible" variants={cardVariants}>
              <DocumentInfo>
                <DescriptionIcon sx={{ color: "#0f5a28", fontSize: "2rem" }} />
                <Box>
                  <DocumentTitle>{magazine.title}</DocumentTitle>
                  <FileSize>1 file(s) {magazine.fileSize}</FileSize>
                </Box>
              </DocumentInfo>
              <Link href={magazine.link} target="_blank" rel="noopener noreferrer" passHref>
                <DownloadButton>Download</DownloadButton>
              </Link>
            </DocumentCard>
          ))}
        </Box>
      </ContentWrapper>
    </PageContainer>
  );
}
