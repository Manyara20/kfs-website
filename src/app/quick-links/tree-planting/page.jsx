"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, List, ListItem, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { IoMdHelpCircle } from "react-icons/io"; // Added for accessibility controls
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`, // Updated overlay color to match DFCMPage
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem", // Updated from 8rem to 2rem to match DFCMPage
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
    opacity: 0.05, // Updated from 0.10 to 0.05 to match DFCMPage
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  padding: "3rem",
  maxWidth: "900px", // Updated from max-w-2xl to 900px to match DFCMPage
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)", // Added to match DFCMPage
  borderRadius: 0, // Removed border radius to match DFCMPage
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.8rem", // Updated from 2.25rem to 1.8rem
  lineHeight: 1.3, // Updated to match DFCMPage
  letterSpacing: "0.5px", // Added to match DFCMPage
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
  textTransform: "capitalize", // Added to match DFCMPage
});

const Subtitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#555",
  fontSize: "0.9rem", // Updated from 1.125rem to 0.9rem
  lineHeight: 1.8, // Added to match DFCMPage
  wordSpacing: "0.15rem", // Added to match DFCMPage
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
  fontStyle: "italic",
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#000", // Updated from #333 to #000 to match DFCMPage
  fontSize: "0.9rem", // Updated from 1.125rem to 0.9rem
  lineHeight: 1.8, // Updated to match DFCMPage
  wordSpacing: "0.15rem", // Added to match DFCMPage
  marginBottom: "2rem", // Updated from 1.5rem to 2rem
});

const SubHeader = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.5rem", // Updated from 1.875rem to 1.5rem for better hierarchy
  marginBottom: "1rem", // Updated from 1rem to 1.5rem for better spacing
});

const ResponsibilityList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Added to match DFCMPage
  gap: "1.5rem", // Added to match DFCMPage
  padding: 0,
  marginBottom: "2rem", // Updated to match DFCMPage
});

const ResponsibilityItem = styled(ListItem)({
  background: "#1a3c34", // Updated to match DFCMPage
  padding: "1.5rem", // Updated to match DFCMPage
  "&:hover": {
    transform: "translateY(-2px)", // Updated to match DFCMPage
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Updated to match DFCMPage
  },
});

const ResponsibilityText = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#ffffff", // Updated to match DFCMPage
  fontSize: "0.85rem", // Updated from 1rem to 0.85rem to match DFCMPage
  lineHeight: 1.6, // Added to match DFCMPage
  wordSpacing: "0.1rem", // Added to match DFCMPage
  textTransform: "capitalize", // Added to match DFCMPage
});

const NavigationLink = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 500,
  color: "#0f5a28",
  fontSize: "0.85rem", // Updated from 1rem to 0.85rem to match DFCMPage
  "&:hover": {
    color: "#388e3c",
    textDecoration: "underline",
  },
});

const CommentTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  fontSize: "1.5rem", // Updated from 1.5rem to 1.5rem for consistency
  marginBottom: "1rem", // Updated from 1rem to 1.5rem for better spacing
});

const InputField = styled(TextField)({
  "& .MuiInputBase-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontSize: "0.9rem",
    padding: "0.75rem", // Updated to match p-3
    borderRadius: "8px", // Updated to match other components
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Peugeot', Helvetica, sans-serif",
    fontSize: "0.9rem",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0f5a28",
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: "#0f5a28",
  color: "#fff",
  textTransform: "none",
  padding: "0.5rem 1.5rem", // Updated to match py-2 px-6
  fontSize: "0.85rem", // Updated to match DFCMPage
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#388e3c",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
});

// Main Page Component
export default function TreePlanting2022Page() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Updated duration to match DFCMPage
  };

  const responsibilities = [
    "The FCC Chairperson shall provide leadership of the Forest Conservancy to ensure quality performance and effective execution of the mandate and functions.",
    "He/she will work closely with representatives from other government agencies (County Government, agricultural and environment), representatives of the forest industry and community Forestry Association to ensure the sustainable management of the forest and allied resources.",
    "Guide strategy and help define key issues for the FCC.",
    "Chair FCC meetings and ensure preparation of papers, reports and decision making.",
    "Bring goodwill and enthusiasm to the FCC.",
    "Maintain independence and objectivity in deliberating all FCC matters.",
    "Encourage high standards of propriety, ensuring that FCC members comply with a Code of Conduct.",
    "Provide an assessment of performance of individual FCC members.",
    "Ensure succession plans are in place for the FCC.",
    "Ensure government policies, legislation and sustainable forest management practices are adhered to.",
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentCard
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Title variant="h1">Tree Planting 2022</Title>
          <Subtitle>
            By Admin | February 25, 2022 | Tree Planting | No Comments
          </Subtitle>
          <Description>
            In accordance with Section 48 of the Forests Act, the Service created ten (10) Forest Conservancy
            Areas to oversee the proper and efficient management of forests, each with a ten (10) member
            Forest Conservation Committee (FCC) headed by a chairperson who is appointed by the Board of
            Directors. The Service requests applicants to forward their applications for the position of Forest
            Conservation Committee Chairperson in Eastern Conservancy.
          </Description>

          <SubHeader>Job Purpose</SubHeader>
          <Description>
            Assist the KFS Board of Management with the delivery of efficient and effective field operations
            of the regional level as well as to perform specific duties related to the implementation of the
            Forest legislation.
          </Description>

          <SubHeader>Key Responsibilities</SubHeader>
          <ResponsibilityList>
            {responsibilities.map((text, index) => (
              <ResponsibilityItem key={index}>
                <ResponsibilityText>{text}</ResponsibilityText>
              </ResponsibilityItem>
            ))}
          </ResponsibilityList>

          <SubHeader>Academic Qualifications, Experience and Other Requirements</SubHeader>
          <Description>
            [Details to be provided by the recruiting body.]
          </Description>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: "1rem", marginTop: "2rem", marginBottom: "3rem" }}>
            <NavigationLink>
              Previous: The Restoration Initiative Tree Planting in Mt. Kulal
            </NavigationLink>
            <NavigationLink>
              Next: Chief Conservator of Forests End of the Year 2022 Message
            </NavigationLink>
          </Box>

          <Box sx={{ marginTop: "3rem" }}>
            <CommentTitle>Leave A Comment</CommentTitle>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <InputField label="Your Name*" required />
              <InputField label="Email*" type="email" required />
              <InputField label="Comment" multiline rows={4} />
              <SubmitButton type="submit">Submit Comment</SubmitButton>
            </Box>
          </Box>
        </ContentCard>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={() => handleFontSizeChange(true)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Increase font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
          <button
            onClick={() => handleFontSizeChange(false)}
            className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
            aria-label="Decrease font size"
          >
            <IoMdHelpCircle className="text-white text-lg" />
          </button>
        </div>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}