"use client";

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, IconButton, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Custom styled components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
    opacity: 0.1,
    zIndex: 0,
  },
});

const ContentCard = styled(motion.div)({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  padding: "3rem",
  maxWidth: "800px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "12px",
});

const Title = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
  fontSize: "2.5rem",
  lineHeight: 1.2,
  letterSpacing: "0.5px",
});

const Subtitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#555",
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
  fontStyle: "italic",
});

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.8rem",
  marginBottom: "1rem",
});

const ResponsibilityList = styled(List)({
  padding: 0,
});

const ResponsibilityItem = styled(ListItem)({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  borderRadius: "8px",
  marginBottom: "0.5rem",
  padding: "1rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const ResponsibilityText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#0D3C00",
    fontSize: "1rem",
  },
});

const NavigationBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  flexDirection: "column",
  gap: "1rem",
  "@media (min-width: 600px)": {
    flexDirection: "row",
  },
});

const NavLink = styled(Button)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 500,
  color: "#0f5a28",
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    color: "#388e3c",
    textDecoration: "underline",
  },
});

const CommentSection = styled(Box)({
  marginTop: "3rem",
});

const CommentTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  color: "#0f5a28",
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

// Main Page Component
export default function TreePlanting2022Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        {/* Main Content Card */}
        <ContentCard initial="hidden" animate="visible" variants={cardVariants}>
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

          <SectionTitle>Job Purpose</SectionTitle>
          <Description>
            Assist the KFS Board of Management with the delivery of efficient and effective field operations
            of the regional level as well as to perform specific duties related to the implementation of the
            Forest legislation.
          </Description>

          <SectionTitle>Key Responsibilities</SectionTitle>
          <ResponsibilityList>
            {[
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
            ].map((text, index) => (
              <ResponsibilityItem key={index}>
                <ResponsibilityText primary={text} />
              </ResponsibilityItem>
            ))}
          </ResponsibilityList>

          <SectionTitle>Academic Qualifications, Experience and Other Requirements</SectionTitle>
          <Description>
            [Details to be provided by the recruiting body.]
          </Description>

          <NavigationBox>
            <NavLink component="a" href="#">
              Previous: The Restoration Initiative Tree Planting in Mt. Kulal
            </NavLink>
            <NavLink component="a" href="#">
              Next: Chief Conservator of Forests End of the Year 2022 Message
            </NavLink>
          </NavigationBox>

          <CommentSection>
            <CommentTitle>Leave A Comment</CommentTitle>
            <TextField
              label="Your Name*"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email*"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Comment"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0f5a28",
                color: "#fff",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Submit Comment
            </Button>
          </CommentSection>
        </ContentCard>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}