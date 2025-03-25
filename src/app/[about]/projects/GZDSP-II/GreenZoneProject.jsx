"use client";
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

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
});

const Title = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: "#0f5a28",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
  fontSize: "2.5rem",
  lineHeight: 1.2,
});

const Description = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 400,
  color: "#333",
  lineHeight: 1.8,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
});

const ProjectList = styled(List)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1rem",
  padding: 0,
});

const ProjectItem = styled(ListItem)({
  background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
  },
});

const ProjectText = styled(ListItemText)({
  "& .MuiTypography-root": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    color: "#0D3C00",
    fontSize: "1rem",
  },
});

const GreenZonesPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <PageContainer>
      <ContentCard initial="hidden" animate="visible" variants={cardVariants}>
        <Title variant="h1">Green Zones Development Support Project</Title>
        <Description>
          The Green Zones Development Support Project aims to promote conservation
          and sustainable management of forest resources while improving the
          livelihoods of communities living around forests.
        </Description>
        <ProjectList>
          <ProjectItem>
            <ProjectText primary="Afforestation and Reforestation Programs" />
          </ProjectItem>
          <ProjectItem>
            <ProjectText primary="Community Empowerment and Livelihood Support" />
          </ProjectItem>
          <ProjectItem>
            <ProjectText primary="Watershed Management and Soil Conservation" />
          </ProjectItem>
          <ProjectItem>
            <ProjectText primary="Sustainable Agroforestry Practices" />
          </ProjectItem>
        </ProjectList>
      </ContentCard>
    </PageContainer>
  );
};

export default GreenZonesPage;
