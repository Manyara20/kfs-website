"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Box)(({ className }) => ({
  backgroundColor: "#f5f5f5",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  flex: 1, // Equal width
  minWidth: 0,
  ...className, // Allow additional custom classes if passed
}));

const ImageSection = styled(Box)(({ imageUrl }) => ({
  height: "clamp(12rem, 25vw, 15.625rem)", // Responsive height
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  flexShrink: 0, // No shrinking
}));

const ContentSection = styled(Box)({
  padding: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive padding
  display: "flex",
  flexDirection: "column",
  flexGrow: 1, // Fill remaining space
});

const CardTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 800,
  color: "#0D3C00",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)", // Scales with viewport
});

const MetaContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  gap: "clamp(0.5rem, 1vw, 1rem)", // Responsive gap
  fontSize: "clamp(0.75rem, 1.5vw, 1rem)", // Scales with viewport
  color: "#000000",
  margin: "clamp(0.5rem, 1vw, 0.75rem) 0", // Responsive margin
});

const MetaItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "clamp(0.25rem, 0.5vw, 0.375rem)", // Responsive gap
});

const CardDescription = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 400,
  color: "#666",
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)", // Scales with viewport
  flexGrow: 1, // Stretches to fill space
});

const ReadMoreButton = styled(Button)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 800,
  color: "#000000",
  textTransform: "none",
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)", // Scales with viewport
  marginTop: "clamp(0.75rem, 1.5vw, 1rem)", // Responsive margin
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "transparent",
  },
});

const NewsCard = ({ title, description, imageUrl, author, date, comments, className }) => {
  return (
    <CardContainer className={className}>
      <ImageSection imageUrl={imageUrl} />
      <ContentSection>
        <CardTitle>{title}</CardTitle>
        <MetaContainer>
          <MetaItem>
            <Image src="/icons/user.png" alt="Author" width={16} height={16} />
            {author}
          </MetaItem>
          <MetaItem>
            <Image src="/icons/calendar.png" alt="Date" width={16} height={16} />
            {date}
          </MetaItem>
          <MetaItem>
            <Image src="/icons/comment.png" alt="Comments" width={16} height={16} />
            {comments} Comments
          </MetaItem>
        </MetaContainer>
        <CardDescription>{description}</CardDescription>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ReadMoreButton>READ MORE</ReadMoreButton>
        </Box>
      </ContentSection>
    </CardContainer>
  );
};

export default NewsCard;