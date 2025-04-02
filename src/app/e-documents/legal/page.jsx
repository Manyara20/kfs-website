"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { InsertDriveFile as FileIcon } from "@mui/icons-material";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import axios from "axios";
import { styled } from "@mui/material/styles";

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
    content: "\"\"",
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
  flex: 1,
});

const DocumentDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.25rem",
  marginBottom: "0.25rem",
});

const DocumentSize = styled(Typography)({
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

export default function LegalDocumentsPage() {
  const [legalDocuments, setLegalDocuments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLegalDocuments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/documents/legal");
        console.log("Legal documents fetched:", response.data);
        setLegalDocuments(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching legal documents:", err);
        setError("Failed to load legal documents. Please try again later.");
      }
    };

    fetchLegalDocuments();
  }, []);

  return (
    <>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <HeaderTitle>Legal Documents</HeaderTitle>
          <Box>
            {error ? (
              <Typography color="error" align="center">{error}</Typography>
            ) : legalDocuments.length === 0 ? (
              <Typography color="textSecondary" align="center">No legal documents available.</Typography>
            ) : (
              legalDocuments.map((doc, index) => (
                <DocumentCard key={index}>
                  <DocumentInfo>
                    <FileIcon sx={{ color: "#0f5a28", fontSize: "2rem" }} />
                    <DocumentDetails>
                      <DocumentTitle>{doc.description}</DocumentTitle>
                      <DocumentSize>1 file(s) {doc.size || "Unknown size"}</DocumentSize>
                    </DocumentDetails>
                  </DocumentInfo>
                  <Link href={doc.pdf_url} target="_blank" rel="noopener noreferrer">
                    <DownloadButton>Download</DownloadButton>
                  </Link>
                </DocumentCard>
              ))
            )}
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </>
  );
}