"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

const ceo = {
  name: "Mr. Titus Kipkoech Korir",
  title: "Chairman",
  image: "/images/KFS-Board/Titus-Korir.jpg",
};

const boardMembers = [
  { name: "Ms. Jane Simita Munka", title: "Rep. CFA", image: "/images/KFS-Board/Jane-Simitia-Munka.jpg" },
  { name: "Kunal Chowdhari", title: "Rep. Timber Industry and Chairman, Finance and Resource Mobilization Committee", image: "/images/KFS-Board/Kunal-Chowdhari.jpg" },
  { name: "Abdala Komesha", title: "Rep. IG, National Police Service", image: "/images/KFS-Board/Abdala-Komesha.jpg" },
  { name: "Isabella Kogei", title: "Rep. PS National Treasury", image: "/images/KFS-Board/Isabella-Kogei.jpg" },
  { name: "Dr. George Muthike", title: "Rep. KEFRI and Chairman, Technical, Planning, Development and KFC Committee", image: "/images/KFS-Board/Dr. George Muthike.jpg" },
  { name: "Dr. Doris Mutta", title: "Rep. FSK. Chair, Audit Committee", image: "/images/KFS-Board/Dr. Doris Mutta.jpg" },
  { name: "Ahmed Mohammed", title: "Rep. CoG and Chairman, Human Resource and Administration Committee", image: "/images/KFS-Board/Ahmed-Mohammed.jpg" },
  { name: "Mr. Evans Mutari", title: "Rep. PS State Department of Forestry", image: "/images/KFS-Board/Evans-Mutari.jpg" },
  { name: "Alex Lemarkoko", title: "Secretary to the Board", image: "/images/KFS-Board/Alex Lemarkoko.jpg" },
];

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#ffffff",
  padding: "clamp(1rem, 2vw, 4rem)", // Responsive padding
  width: "100vw", // Full viewport width
  overflowX: "hidden", // Prevent horizontal overflow
  boxSizing: "border-box",
});

const TitleContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "clamp(2rem, 4vw, 5rem)", // Responsive margin
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(1.5rem, 4vw, 2.25rem)", // Scales with viewport
  color: "#023011",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
});

const Description = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // Scales with viewport
  color: "#666666",
  maxWidth: "clamp(40rem, 80vw, 50rem)", // Responsive max-width
  margin: "0 auto",
});

const CEOCard = styled(Box)({
  backgroundColor: "#ffffff",
  border: "2px solid #e5e7eb",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: "clamp(15rem, 30vw, 21.875rem)", // Responsive width
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  },
});

const CEOContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "clamp(2rem, 4vw, 3rem)", // Responsive margin
});

const ChairmanLabel = styled("span")({
  display: "inline-block",
  backgroundColor: "#6A961F",
  color: "#ffffff",
  padding: "clamp(0.25rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)", // Responsive padding
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  fontSize: "clamp(0.625rem, 1vw, 0.75rem)", // Scales with viewport
  fontWeight: "bold",
  textTransform: "uppercase",
  fontFamily: "'Peugeot', Helvetica, sans-serif",
});

const ImageWrapper = styled(Box)({
  position: "relative",
  width: "clamp(6rem, 12vw, 9.375rem)", // Responsive image size
  height: "clamp(6rem, 12vw, 9.375rem)",
  margin: "0 auto",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
});

const MemberName = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", // Scales with viewport
  fontWeight: 500,
  color: "#000000",
  marginBottom: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
});

const MemberTitle = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)", // Scales with viewport
  color: "#666666",
});

const BoardMembersContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(clamp(12rem, 25vw, 15rem), 1fr))", // Responsive grid
  gap: "clamp(1rem, 2vw, 1.5rem)", // Responsive gap
  justifyItems: "center",
  width: "100%", // Full width
});

const MemberCard = styled(Box)({
  backgroundColor: "#ffffff",
  border: "2px solid #e5e7eb",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  textAlign: "center",
  transition: "all 0.3s ease",
  width: "clamp(15rem, 25vw, 21.875rem)", // Responsive width
  height: "100%", // Ensure consistent height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  },
});

export default function KFSBoardPage() {
  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <TopNavBar />
      <MainNavBar />
      <PageContainer>
        {/* Title and Description */}
        <TitleContainer>
          <Title variant="h1">KFS Board of Directors</Title>
          <Description>
            This section covers details regarding the board members of KFS.
          </Description>
        </TitleContainer>

        {/* CEO Section */}
        <CEOContainer>
          <CEOCard>
            <ChairmanLabel>Chairman</ChairmanLabel>
            <ImageWrapper>
              <Image
                src={ceo.image}
                alt={ceo.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-2 border-[#6A961F] shadow-sm"
              />
            </ImageWrapper>
            <MemberName>{ceo.name}</MemberName>
            <MemberTitle>{ceo.title}</MemberTitle>
          </CEOCard>
        </CEOContainer>

        {/* Board Members Section */}
        <BoardMembersContainer>
          {boardMembers.map((member, index) => (
            <MemberCard key={index}>
              <div>
                <ImageWrapper>
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-2 border-[#6A961F] shadow-sm"
                  />
                </ImageWrapper>
                <MemberName>{member.name}</MemberName>
                <MemberTitle>{member.title}</MemberTitle>
              </div>
            </MemberCard>
          ))}
        </BoardMembersContainer>
      </PageContainer>
      <FooterBottom />
    </div>
  );
}