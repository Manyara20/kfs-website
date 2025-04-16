"use client";

import { Box, Typography } from "@mui/material";
import { styled, css, keyframes } from "@mui/system";

const partners = [
  "https://whatthelogo.com/storage/logos/kenya-forest-service-96842.png",
  "https://whatthelogo.com/storage/logos/wwf-world-wildlife-fund-51730.png",
  "https://whatthelogo.com/storage/logos/african-wildlife-foundation-225883.png",
  "https://whatthelogo.com/storage/logos/the-united-nations-environment-programme-96813.png",
  "https://whatthelogo.com/storage/logos/usaid-united-states-agency-for-international-136898.png",
  "https://whatthelogo.com/storage/logos/fao-food-and-agriculture-organizations-98044.png",
  "https://whatthelogo.com/storage/logos/national-environment-management-authority-83365.png",
  "https://www.un.org/sites/un2.un.org/files/field/image/world-bank-logo_0.jpg",
  "https://whatthelogo.com/storage/logos/undp-136787.png",
  "https://www.kefri.org/assets/images/kefri_logo.png",
  "https://www.rhinoark.org/wp-content/uploads/2021/12/cropped-rhino-ark-logo-2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmDPqcVy-UyLi-DX0pMl0zEV51gSoq6ap-w&s",
];

// Define keyframes using MUI's keyframes utility
const move = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SectionContainer = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(2rem, 4vw, 3rem) 0", // Responsive padding
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontWeight: 700,
  color: "#0d3c00",
  fontSize: "clamp(1.5rem, 4vw, 2rem)", // Scales with viewport
  textAlign: "center",
  marginBottom: "clamp(1.5rem, 3vw, 2rem)", // Responsive margin
});

const SliderContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
});

const LogoStrip = styled(Box)({
  display: "flex",
  gap: "clamp(1rem, 2vw, 2rem)", // Responsive gap
  minWidth: "max-content",
  animation: `${move} 12s linear infinite`, // Apply animation
});

const PartnerLogo = styled("img")({
  width: "clamp(4rem, 10vw, 6rem)", // Responsive width
  height: "clamp(4rem, 10vw, 6rem)", // Responsive height
  objectFit: "contain",
});

const PartnersSection = () => {
  return (
    <SectionContainer>
      <Title>Our Partners</Title>
      <SliderContainer>
        <LogoStrip>
          {[...partners, ...partners].map((logo, index) => (
            <PartnerLogo
              key={index}
              src={logo}
              alt={`Partner ${index % partners.length}`}
            />
          ))}
        </LogoStrip>
      </SliderContainer>
    </SectionContainer>
  );
};

export default PartnersSection;