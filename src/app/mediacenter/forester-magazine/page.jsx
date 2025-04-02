"use client";
import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Description as DescriptionIcon } from "@mui/icons-material";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  padding: "1rem",
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
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem 0.5rem",
  position: "relative",
  zIndex: 1,
});

const HeaderTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#ffffff",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  fontSize: "2rem",
  lineHeight: 1.1,
  letterSpacing: "0.3px",
  textAlign: "center",
  marginBottom: "1.5rem",
  textTransform: "capitalize",
});

const DocumentCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "8px",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const DocumentInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1rem",
  textTransform: "capitalize",
});

const FileSize = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.8rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.3rem 1rem",
  fontSize: "0.8rem",
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">The Forester Magazine</HeaderTitle>
          <Typography variant="h6" align="center" color="#fff" gutterBottom sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
            Biannual Forestry Magazine of the Kenya Forest Service
          </Typography>

          <Box mt={2} p={2} bgcolor="rgba(255,255,255,0.9)" borderRadius="8px" boxShadow={2}>
            <Typography variant="h6" color="#0f5a28" fontWeight="bold" sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "1.2rem", textTransform: "capitalize" }}>
              Welcome to the latest edition of our biannual forestry magazine.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              As we reflect on the past six months, we’re proud to share the significant strides
              made in Kenya’s forestry sector. In this issue, we spotlight several key events and
              initiatives that underscore our commitment to sustainable forest management and
              conservation.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              Our lead story covers the launch of the Kenya Forest Service Strategic Plan, a roadmap
              that will guide our efforts in the coming years to enhance forest cover and promote
              sustainable utilization of forest resources.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              We also bring you highlights from the International Day of Forests celebrations, where
              we joined the global community in recognizing the vital role forests play in our lives
              and ecosystems. Additionally, you’ll find coverage of our National Tree Growing Day, an
              initiative that saw thousands of Kenyans come together to green our nation.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              This edition also features news on various Memoranda of Understanding signed with
              partner organizations, strengthening our collaborative efforts in forest conservation
              and management.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              These stories reflect our ongoing dedication to Kenya’s forests and the communities
              that depend on them. We hope this issue informs and inspires you to join us in our
              mission to protect and nurture our precious forest resources.
            </Typography>
            <Typography variant="h6" color="#0f5a28" fontWeight="bold" mt={2} sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "1.2rem", textTransform: "capitalize" }}>
              Happy reading!
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ fontFamily: "'Peugeot', Helvetica, sans-serif", fontSize: "0.9rem" }}>
              Anne Kaari, ‘ndc‘ (K)
            </Typography>
          </Box>

          <Box mt={2}>
            {magazines.map((magazine, index) => (
              <DocumentCard key={index} initial="hidden" animate="visible" variants={cardVariants}>
                <DocumentInfo>
                  <DescriptionIcon sx={{ color: "#0f5a28", fontSize: "1.5rem" }} />
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
      <FooterBottom />
    </div>
  );
}