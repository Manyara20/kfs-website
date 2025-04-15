"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWheelchair, FaEnvelope, FaIdBadge, FaTree } from "react-icons/fa";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const SidebarContainer = styled(Box)({
  position: "fixed",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "clamp(0.5rem, 1vw, 1rem)", // Responsive gap
  zIndex: 1000,
});

const AccessButton = styled(Box)({
  backgroundColor: "#1f5d2f",
  color: "#ffffff",
  width: "clamp(2.5rem, 5vw, 3.5rem)", // Responsive width
  height: "clamp(2.5rem, 5vw, 3.5rem)", // Responsive height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // Responsive icon size
  borderRadius: "8px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#2a7a3d",
  },
});

const MenuContainer = styled(Box)({
  position: "absolute",
  right: "clamp(3rem, 6vw, 4rem)", // Responsive positioning
  top: 0,
  backgroundColor: "#ffffff",
  border: "1px solid #e8ecef",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  width: "clamp(10rem, 20vw, 14rem)", // Responsive width
  zIndex: 1001,
});

const MenuButton = styled(Button)({
  width: "100%",
  textAlign: "left",
  padding: "clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 1vw, 1rem)", // Responsive padding
  fontSize: "clamp(0.75rem, 2vw, 1rem)", // Responsive font size
  fontFamily: "'Roboto', sans-serif",
  color: "#666",
  justifyContent: "flex-start",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const IconButton = styled(Box)({
  backgroundColor: "#1f5d2f",
  color: "#ffffff",
  width: "clamp(2.5rem, 5vw, 3.5rem)", // Responsive width
  height: "clamp(2.5rem, 5vw, 3.5rem)", // Responsive height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // Responsive icon size
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#2a7a3d",
  },
});

const FloatingSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState(16); // Default font size in pixels
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isLinksUnderlined, setIsLinksUnderlined] = useState(false);

  // Function to increase text size
  const increaseText = () => {
    setTextSize((prev) => {
      const newSize = Math.min(prev + 2, 24); // Max size 24px
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
  };

  // Function to decrease text size
  const decreaseText = () => {
    setTextSize((prev) => {
      const newSize = Math.max(prev - 2, 12); // Min size 12px
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
  };

  // Function to toggle grayscale
  const toggleGrayscale = () => {
    setIsGrayscale((prev) => {
      const newState = !prev;
      document.body.style.filter = newState ? "grayscale(100%)" : "none";
      return newState;
    });
  };

  // Function to toggle links underline
  const toggleLinksUnderline = () => {
    setIsLinksUnderlined((prev) => {
      const newState = !prev;
      const links = document.getElementsByTagName("a");
      for (let link of links) {
        link.style.textDecoration = newState ? "underline" : "none";
      }
      return newState;
    });
  };

  // Function to reset all accessibility settings
  const resetSettings = () => {
    setTextSize(16);
    setIsGrayscale(false);
    setIsLinksUnderlined(false);
    document.documentElement.style.fontSize = "16px";
    document.body.style.filter = "none";
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      link.style.textDecoration = "none";
    };
  };

  return (
    <SidebarContainer>
      {/* Accessibility Button with Hover Menu */}
      <Box
        sx={{ position: "relative" }}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <AccessButton>
          <FaWheelchair />
        </AccessButton>
        {isMenuOpen && (
          <MenuContainer>
            <MenuButton onClick={increaseText}>
              <Box component="span" sx={{ mr: "clamp(0.25rem, 1vw, 0.5rem)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>🔍</Box>
              Increase Text
            </MenuButton>
            <MenuButton onClick={decreaseText}>
              <Box component="span" sx={{ mr: "clamp(0.25rem, 1vw, 0.5rem)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>🔎</Box>
              Decrease Text
            </MenuButton>
            <MenuButton onClick={toggleGrayscale}>
              <Box component="span" sx={{ mr: "clamp(0.25rem, 1vw, 0.5rem)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>🖼️</Box>
              Grayscale
            </MenuButton>
            <MenuButton onClick={toggleLinksUnderline}>
              <Box component="span" sx={{ mr: "clamp(0.25rem, 1vw, 0.5rem)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>🔗</Box>
              Links Underline
            </MenuButton>
            <MenuButton onClick={resetSettings}>
              <Box component="span" sx={{ mr: "clamp(0.25rem, 1vw, 0.5rem)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>🔄</Box>
              Reset
            </MenuButton>
          </MenuContainer>
        )}
      </Box>

      {/* Other Sidebar Links */}
      <Link
        href="https://mail.kenyaforestservice.org/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.kenyaforestservice.org%2fowa%2f"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <FaEnvelope />
        </IconButton>
      </Link>
      <Link
        href="https://enursery.kenyaforestservice.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <FaIdBadge />
        </IconButton>
      </Link>
      <Link
        href="https://sawmillers.kenyaforestservice.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <FaTree />
        </IconButton>
      </Link>
    </SidebarContainer>
  );
};

export default FloatingSidebar;