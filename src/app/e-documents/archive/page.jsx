"use client";
import Link from 'next/link';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { InsertDriveFile as FileIcon } from "@mui/icons-material";
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';



// Styled Components (consistent with other document pages)
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
  transition: "all 0.3s ease",
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
  gap: "1.5rem",
  flex: 1,
});

const DocumentText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.25rem",
  lineHeight: 1.3,
});

const DocumentMeta = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.9rem",
  marginTop: "0.5rem",
});

const DownloadButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.6rem 1.75rem",
  fontSize: "0.95rem",
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "8px",
  fontWeight: 500,
  minWidth: "120px",
  "&:hover": {
    backgroundColor: "#1b7d3a",
    transform: "scale(1.03)",
  },
});

export default function DocumentsArchivePage() {
  const archiveDocuments = [
    { title: "Readiness Preparation Proposal (R-PP) Assessment Note", size: "13 MB", link: "#" },
    { title: "KFS Strategic Plan 2014 – 2017", size: "10 MB", link: "#" },
    { title: "Forest Products Market Analysis and Enterprise Development", size: "1 MB", link: "#" },
    { title: "Forests Conservation and Management Bill, 2014 (26-2-2014)", size: "689 KB", link: "#" },
    { title: "Natural Resource Management Project (NRMP) – Resettlement Policy Framework", size: "2 MB", link: "#" },
    { title: "Forests Act, 2005", size: "270 KB", link: "#" },
    { title: "Forest Policy, 2014 (Revised 20-2-2014)", size: "254 KB", link: "#" },
    { title: "Private Forest Registration Form For Forest Officers", size: "113 KB", link: "#" },
    { title: "Private Forest Registration Form For Forest Owners", size: "89 KB", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  return (
    <> 
    <TopNavBar/>
    <MainNavBar/>
    <PageContainer>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderTitle variant="h1">
          Documents Archive
        </HeaderTitle>

        {/* Documents Section */}
        <Box>
          {archiveDocuments.map((doc, index) => (
            <DocumentCard 
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <DocumentInfo>
                <FileIcon sx={{ 
                  color: "#0f5a28", 
                  fontSize: "2.25rem",
                  flexShrink: 0 
                }} />
                <DocumentText>
                  <DocumentTitle>{doc.title}</DocumentTitle>
                  <DocumentMeta>1 file(s) {doc.size}</DocumentMeta>
                </DocumentText>
              </DocumentInfo>
              <Link href={doc.link} target="_blank" rel="noopener noreferrer" passHref>
                <DownloadButton
                  variant="contained"
                  startIcon={<FileIcon sx={{ fontSize: "1.1rem" }} />}
                >
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
