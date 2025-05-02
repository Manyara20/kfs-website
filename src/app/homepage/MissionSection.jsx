"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const data = [
  {
    title: "Mission",
    image: "/images/aerial_forest.jpg",
    description:
      "Conservation, management, development and sustainable utilization of forests and allied resources for current and future generation.",
  },
  {
    title: "Vision",
    image: "/images/20210614_kenya-Kanaan-Mataathia_0312.webp",
    description:
      "To be an internationally recognized organization of excellence in knowledge-based sustainable forest resources development, conservation, and management.",
  },
  {
    title: "Strategic Goal",
    image: "/images/kenyas_goal_of_ac5f8973a9d77a1.jpg",
    description:
      "Sustainably manage all forests and build resilient forest ecosystems.",
  },
];

const Container = styled(Box)({
  width: "100%",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  backgroundColor: "#f5f5f5",
});

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Card = styled(Box)({
  display: "flex",
  height: "clamp(20rem, 40vw, 25rem)", // Responsive height
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "0",
});

const ImageContainer = styled(Box)({
  position: "relative",
  height: "clamp(12rem, 25vw, 15.625rem)", // Responsive height
  overflow: "hidden",
});

const Overlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#ffffff",
  textAlign: "center",
  padding: "clamp(0.5rem, 1vw, 0.75rem)", // Responsive padding
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
});

const DescriptionContainer = styled(Box)({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  padding: "clamp(1rem, 2vw, 2rem)", // Responsive padding
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.875rem, 2vw, 1rem)", // Scales with viewport
  textAlign: "center",
});

export default function MissionVisionGoal() {
  return (
    <Container>
      <GridContainer>
        {data.map((item, index) => (
          <Card key={index}>
            <ImageContainer>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <Overlay>
                <Title>{item.title}</Title>
              </Overlay>
            </ImageContainer>
            <DescriptionContainer>
              <Description>{item.description}</Description>
            </DescriptionContainer>
          </Card>
        ))}
      </GridContainer>
    </Container>
  );
}