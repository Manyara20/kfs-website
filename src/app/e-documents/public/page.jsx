"use client";
import Link from 'next/link';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { InsertDriveFile as FileIcon } from "@mui/icons-material";
import TopNavBar from '@/components/TopNavBar';
import MainNavBar from '@/components/MainNavBar';
import FooterBottom from '@/components/FooterBottom';


// Styled Components (same as press releases page)
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

const DocumentText = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const DocumentTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.25rem",
});

const DocumentMeta = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "0.9rem",
  marginTop: "0.25rem",
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

export default function PublicDocumentsPage() {
  const documents = [
    { title: "THE FORESTS (FEES AND CHARGES) REGULATIONS, 2016", size: "233 KB", link: "#" },
    { title: "KFC APPLICATION FORM", size: "287 KB", link: "#" },
    { title: "STRATEGIC PLAN 2023-2027", size: "23 MB", link: "#" },
    { title: "KFS SERVICE CHARTER", size: "430 KB", link: "#" },
    { title: "MKATABA WA HUDUMA (KFS SERVICE CHARTER – KISWAHILI VERSION)", size: "3 MB", link: "#" },
    { title: "PUBLIC NOTICE – THE CLIMATE CHANGE (AMENDMENT) BILL, 2023", size: "620 KB", link: "#" },
    { title: "THE CLIMATE CHANGE (AMENDMENT) BILL, 2023", size: "326 KB", link: "#" },
    { title: "APPLICATION FOR TRAINING PROGRAMMES 2023/2024 ACADEMIC YEAR", size: "283 KB", link: "#" },
    { title: "KFC APPLICATION FORM", size: "223 KB", link: "#" },
    { title: "Filming and Photoshoot Application Form", size: "56 KB", link: "#" },
    { title: "MKATABA WA HUDUMA (KFS SERVICE CHARTER – KISWAHILI VERSION)", size: "3 MB", link: "#" },
    { title: "CUSTOMER FEEDBACK QUESTIONNAIRE", size: "328 KB", link: "#" },
    { title: "NETFUND RESEARCH REPORT ON FACTORS INFLUENCING HOUSEHOLD ADOPTION OF RENEWABLE ENERGY TECHNOLOGIES IN RURAL KENYA", size: "4.00 KB", link: "#" },
    { title: "NATIONAL MANGROVE MANAGEMENT PLAN SUMMARY FOR POLICY MAKERS", size: "811 KB", link: "#" },
    { title: "NATIONAL MANGROVE ECOSYSTEM MANAGEMENT PLAN", size: "811 KB", link: "#" },
    { title: "Forest Conservation and Management Act No 34 of 2016", size: "821 KB", link: "#" },
    { title: "KFS 3RD STRATEGIC PLAN 2018-2022", size: "4.00 KB", link: "#" },
    { title: "UN STRATEGIC PLAN FOR FORESTS 2017 TO 2030", size: "469 KB", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />
      <PageContainer>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderTitle variant="h1">
          Public Documents
        </HeaderTitle>

        {/* Documents Section */}
        <Box>
          {documents.map((doc, index) => (
            <DocumentCard key={index} initial="hidden" animate="visible" variants={cardVariants}>
              <DocumentInfo>
                <FileIcon sx={{ color: "#0f5a28", fontSize: "2rem" }} />
                <DocumentText>
                  <DocumentTitle>{doc.title}</DocumentTitle>
                  <DocumentMeta>1 file(s) {doc.size}</DocumentMeta>
                </DocumentText>
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

      {/* Footer */}
      <FooterBottom />
    </div>
    
  );
}