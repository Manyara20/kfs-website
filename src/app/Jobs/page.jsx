"use client";

import Link from "next/link";
import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

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

const HeroSection = styled(Box)({
  height: "clamp(12rem, 30vw, 16rem)", // Responsive height
  backgroundImage: `linear-gradient(rgba(13, 86, 2, 0.85), rgba(13, 86, 2, 0.85)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
});

const HeroTitle = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 800,
  color: "#ffffff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  fontSize: "clamp(1.5rem, 6vw, 2.25rem)", // Scales with viewport
  lineHeight: 1.2,
});

const HeroSubtitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#ffffff",
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
  marginTop: "0.5rem",
  maxWidth: "clamp(20rem, 60vw, 28rem)", // Responsive max-width
});

const SectionTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0D5602",
  fontSize: "clamp(1.25rem, 4vw, 1.5rem)", // Scales with viewport
  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
});

const IntroSection = styled(Box)({
  backgroundColor: "#f5f7fa",
  padding: "clamp(1rem, 2vw, 2rem)", // Scales padding
  textAlign: "center",
  borderRadius: "12px",
  border: "1px solid #e8ecef",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
});

const IntroText = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
  lineHeight: 1.6,
  maxWidth: "clamp(40rem, 80vw, 48rem)", // Responsive max-width
  margin: "0 auto",
});

const JobCard = styled(Box)({
  backgroundColor: "#245b3c",
  borderRadius: "8px",
  padding: "clamp(0.75rem, 2vw, 1rem)", // Scales padding
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #e8ecef",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)",
});

const JobTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#ffffff",
  fontSize: "clamp(1rem, 3vw, 1.125rem)", // Scales with viewport
});

const ExpandButton = styled(Button)({
  color: "#ffffff",
  minWidth: "auto",
  padding: "0",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const DetailsSection = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(1rem, 2vw, 1.25rem)", // Scales padding
  borderRadius: "8px",
  border: "1px solid #e8ecef",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
});

const DetailTitle = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 600,
  color: "#0D5602",
  fontSize: "clamp(1rem, 3vw, 1.125rem)", // Scales with viewport
  marginBottom: "0.5rem",
});

const DetailText = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#444",
  fontSize: "clamp(0.75rem, 2vw, 0.875rem)", // Scales with viewport
  lineHeight: 1.6,
});

const NoteCard = styled(Box)({
  backgroundColor: "#FFFFE0",
  padding: "clamp(1rem, 2vw, 1.25rem)", // Scales padding
  borderRadius: "8px",
  border: "1px solid #d4d4d4",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  position: "relative",
  width: "100%",
  maxWidth: "clamp(16rem, 40vw, 22rem)", // Responsive max-width
});

const ApplyButton = styled(Button)({
  backgroundColor: "#0D5602",
  color: "#fff",
  textTransform: "none",
  padding: "clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  fontSize: "clamp(0.75rem, 2vw, 0.875rem)", // Scales with viewport
  fontFamily: "'Roboto', sans-serif",
  borderRadius: "8px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#1a6b1a",
    transform: "scale(1.03)",
  },
});

export default function JobVacancies() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        <ContentWrapper>
          <Box sx={{ background: "linear-gradient(to bottom right, #ffffff, #f9f9f9)", borderRadius: "12px", border: "1px solid #e8ecef", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", overflow: "hidden" }}>
            <HeroSection>
              <Box sx={{ zIndex: 10 }}>
                <HeroTitle>Join the Kenya Forest Service</HeroTitle>
                <HeroSubtitle>
                  Be part of a legacy in conserving Kenya’s forests for a sustainable future.
                </HeroSubtitle>
              </Box>
            </HeroSection>

            <Box sx={{ borderBottom: "1px solid #e8ecef", mx: "clamp(1rem, 2vw, 2rem)", my: "0.5rem" }} />

            <IntroSection sx={{ m: "clamp(1rem, 2vw, 2rem)" }}>
              <SectionTitle>About Kenya Forest Service</SectionTitle>
              <IntroText>
                Kenya Forest Service (KFS) is a State Corporation established under the Forest Conservation & Management Act (FCMA), 2016. The Mandate of KFS is to protect, conserve, develop and sustainably manage forests and allied resources for environmental stability and social-economic benefits for the present and future generations. KFS has partnered with the Global Environment Facility (GEF-7) through Food and Agricultural Organization of the United Nation (FAO) to support implementation of the Integrated Landscape Management for Conservation and Restoration of Mt. Elgon Ecosystem Project in Western Kenya. The Service wishes to recruit qualified personnel for a one-year renewable temporary contract.
              </IntroText>
            </IntroSection>

            <Box sx={{ borderBottom: "1px solid #e8ecef", mx: "clamp(1rem, 2vw, 2rem)", my: "0.5rem" }} />

            <Box sx={{ p: "clamp(1rem, 2vw, 2rem)", textAlign: "center" }}>
              <SectionTitle>Available Positions</SectionTitle>
              <JobCard sx={{ maxWidth: "clamp(40rem, 80vw, 60rem)", mx: "auto" }}>
                <JobTitle>Communication Expert KFS Grade 6 (REF KFS/CE/2025) - One (1) Post</JobTitle>
                <ExpandButton onClick={handleExpandClick}>
                  {expanded ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </ExpandButton>
              </JobCard>

              {expanded && (
                <DetailsSection sx={{ maxWidth: "clamp(40rem, 80vw, 60rem)", mx: "auto" }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "clamp(1rem, 2vw, 1.25rem)" }}>
                    <Box sx={{ flex: 1 }}>
                      <DetailTitle>Job Specification</DetailTitle>
                      <DetailText>
                        The Communication Expert shall report directly to the Project Manager and work in liaison with the Service’s corporate communication department and in collaboration with other Project staff and partners.
                      </DetailText>
                      <DetailTitle sx={{ mt: "1rem" }}>Duties and Responsibilities</DetailTitle>
                      <Box component="ul" sx={{ pl: "clamp(1rem, 2vw, 1.25rem)", listStyleType: "disc", textAlign: "left" }}>
                        {["Implement relevant communication strategies.", "Facilitate all communication training programs targeting staff, KALRO, FAO, external staff, and other stakeholders within the project area.", "Participate and contribute in interdepartmental planning and monitoring project activities.", "Spearhead effective exchange of information between the project and its publics.", "Undertake communication research activities and dissemination of research findings to relevant audience within the project area.", "Mentoring and coaching."].map((item, index) => (
                          <DetailText component="li" key={index} sx={{ py: "0.25rem" }}>{item}</DetailText>
                        ))}
                      </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <DetailTitle>Person Specification</DetailTitle>
                      <Box component="ul" sx={{ pl: "clamp(1rem, 2vw, 1.25rem)", listStyleType: "disc", textAlign: "left" }}>
                        {["Bachelor’s degree in Communication, Social Sciences, Journalism, International Relations or other related fields of study.", "Served for at least six (6) years in a relevant position.", "Member of a professional body such as PRSK.", "Proficiency in Computer applications.", "Fulfil the requirements of Chapter Six of the Constitution."].map((item, index) => (
                          <DetailText component="li" key={index} sx={{ py: "0.25rem" }}>{item}</DetailText>
                        ))}
                      </Box>
                      <DetailTitle sx={{ mt: "1rem" }}>Skills and Attributes</DetailTitle>
                      <Box component="ul" sx={{ pl: "clamp(1rem, 2vw, 1.25rem)", listStyleType: "disc", textAlign: "left" }}>
                        {["Good oral and written communication skills in Kiswahili and English.", "Time management and proper planning.", "Good analytical skills.", "Team player."].map((item, index) => (
                          <DetailText component="li" key={index} sx={{ py: "0.25rem" }}>{item}</DetailText>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </DetailsSection>
              )}
            </Box>

            <Box sx={{ borderBottom: "1px solid #e8ecef", mx: "clamp(1rem, 2vw, 2rem)", my: "0.5rem" }} />

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "clamp(1rem, 2vw, 1.25rem)", p: "clamp(1rem, 2vw, 2rem)", justifyContent: "center" }}>
              <NoteCard>
                <Box sx={{ position: "absolute", top: "-1rem", left: "1.25rem", width: "2rem", height: "2rem", bgcolor: "#1a1a1a", border: "2px solid #333", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", transform: "rotate(45deg)" }} />
                <Box sx={{ position: "absolute", top: "-1rem", right: "1.25rem", width: "2rem", height: "2rem", bgcolor: "#1a1a1a", border: "2px solid #333", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", transform: "rotate(45deg)" }} />
                <DetailTitle sx={{ color: "#333" }}>How to Apply</DetailTitle>
                <DetailText sx={{ mb: "1rem" }}><strong>Step 1:</strong> Visit the official Kenya Forest Service website:</DetailText>
                <Link href="https://www.kenyaforestservice.org">
                  <ApplyButton>Apply Online</ApplyButton>
                </Link>
                <DetailText sx={{ mt: "1rem" }}><strong>Step 2:</strong> Submit a hard copy application with relevant documents.</DetailText>
              </NoteCard>
              <NoteCard>
                <Box sx={{ position: "absolute", top: "-1rem", left: "1.25rem", width: "2rem", height: "2rem", bgcolor: "#1a1a1a", border: "2px solid #333", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", transform: "rotate(45deg)" }} />
                <Box sx={{ position: "absolute", top: "-1rem", right: "1.25rem", width: "2rem", height: "2rem", bgcolor: "#1a1a1a", border: "2px solid #333", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", transform: "rotate(45deg)" }} />
                <DetailTitle sx={{ color: "#333" }}>Note</DetailTitle>
                <Box component="ul" sx={{ textAlign: "left", pl: "clamp(1rem, 2vw, 1.25rem)", listStyleType: "disc" }}>
                  {["The application process includes both online and hard copy submissions.", "Shortlisted candidates must provide original documents.", "KFS is an equal opportunity employer."].map((item, index) => (
                    <DetailText component="li" key={index} sx={{ py: "0.25rem" }}>{item}</DetailText>
                  ))}
                </Box>
              </NoteCard>
            </Box>
          </Box>
        </ContentWrapper>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}