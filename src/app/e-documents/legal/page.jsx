"use client";
import Link from 'next/link';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { InsertDriveFile as FileIcon } from "@mui/icons-material";
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';

// Styled Components (consistent with other pages)
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
  const legalDocuments = [
    { title: "Forest Conservation and Management Act No 34 of 2016", size: "821 KB", link: "#" },
    { title: "Forests Conservation & Management Bill 2014", size: "689 KB", link: "#" },
    { title: "Forest Policy, 2014", size: "254 KB", link: "#" },
    { title: "Forest Act, 2005", size: "270 KB", link: "#" },
    { title: "SESSION PAPER NO. 9 OF 2005 ON FOREST POLICY", size: "2 MB", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
    <TopNavBar/>
    <MainNavBar/>
    <PageContainer>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderTitle variant="h1">
          Legal Documents
        </HeaderTitle>

        {/* Documents Section */}
        <Box>
          {legalDocuments.map((doc, index) => (
            <DocumentCard 
              key={index} 
              initial="hidden" 
              animate="visible" 
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <DocumentInfo>
                <FileIcon sx={{ color: "#0f5a28", fontSize: "2rem" }} />
                <DocumentDetails>
                  <DocumentTitle>{doc.title}</DocumentTitle>
                  <DocumentSize>1 file(s) {doc.size}</DocumentSize>
                </DocumentDetails>
              </DocumentInfo>
              <Link href={doc.link} target="_blank" rel="noopener noreferrer" passHref>
                <DownloadButton>
                  Download
                </DownloadButton>
              </Link>
            </DocumentCard>
          ))}
        </Box>
      </ContentWrapper>
    </PageContainer>
    <FooterBottom/>
    </>
  );
}