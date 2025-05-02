"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { InsertDriveFile as FileIcon } from "@mui/icons-material";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import axios from "axios";

// Styled Components
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
  marginBottom: "clamp(1.5rem, 4vw, 3rem)", // Responsive margin
});

const DocumentCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "12px",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Scales padding
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  marginBottom: "clamp(1rem, 2vw, 1.5rem)", // Responsive margin
  width: "100%", // Full width of parent
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
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  width: "100%", // Ensures it scales within parent
});

const DocumentText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "clamp(1rem, 3vw, 1.25rem)", // Scales with viewport
  lineHeight: 1.3,
});

const DocumentMeta = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.75rem, 2vw, 0.9rem)", // Scales with viewport
  marginTop: "0.5rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.75rem)", // Responsive padding
  fontSize: "clamp(0.8rem, 2vw, 0.95rem)", // Scales with viewport
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "8px",
  fontWeight: 500,
  minWidth: "clamp(80px, 20vw, 120px)", // Responsive min-width
  "&:hover": {
    backgroundColor: "#1b7d3a",
    transform: "scale(1.03)",
  },
});

export default function PublicDocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/documents/public");
        setDocuments(response.data);
        setError("");
      } catch (err) {
        setError(
          err.response?.data?.error || "Failed to load documents. Please try again later."
        );
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle variant="h1">Public Documents</HeaderTitle>
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            {error ? (
              <Typography color="error" align="center">{error}</Typography>
            ) : documents.length === 0 ? (
              <Typography color="textSecondary" align="center">
                No public documents available at this time.
              </Typography>
            ) : (
              documents.map((doc, index) => (
                <DocumentCard key={index} initial="hidden" animate="visible">
                  <DocumentInfo>
                    <FileIcon sx={{ color: "#0f5a28", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", flexShrink: 0 }} />
                    <DocumentText>
                      <DocumentTitle>{doc.title}</DocumentTitle>
                      <DocumentMeta>1 file(s)</DocumentMeta>
                    </DocumentText>
                  </DocumentInfo>
                  <Link href={`http://localhost:5000${doc.pdf_url}`} target="_blank" rel="noopener noreferrer">
                    <DownloadButton variant="contained">Download</DownloadButton>
                  </Link>
                </DocumentCard>
              ))
            )}
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}