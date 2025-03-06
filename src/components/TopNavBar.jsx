"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import {
  Email,
  Call,
  AccountBox,
  Assignment,
  AccessTime,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const TopNavBar = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs")); // <360px
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMedium = useMediaQuery(theme.breakpoints.down("md")); // <900px

  // Menu items
  const allItems = [
    { icon: <Email />, text: "Staff Email", priority: 2 },
    { icon: <Assignment />, text: "E-Registration", priority: 3 },
    { icon: <AccountBox />, text: "Research License", priority: 3 },
    { icon: <Call />, text: "0800 123 456 - Toll Free", priority: 1 },
    {
      icon: <AccessTime />,
      text: "Mon-Fri (8am - 5pm) Sat & Sun CLOSED",
      priority: 2,
    },
    { icon: <Email />, text: "info@kenyaforestservice.org", priority: 1 },
  ];

  // Filter items based on screen size and priority
  const visibleItems = allItems.filter((item) => {
    if (isExtraSmall) return item.priority === 1; // Show only highest priority
    if (isSmall) return item.priority <= 2; // Show priority 1 and 2
    return true; // Show all on larger screens
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0D3C00",
        padding: { xs: "2px 0", sm: "4px 0" },
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "95%", sm: "90%", md: "85%" },
          margin: "auto",
          padding: { xs: "0 4px", sm: "0 8px", md: "0 12px" },
          minHeight: "auto !important",
          display: "flex",
          alignItems: "center",
          overflowX: isMedium ? "auto" : "hidden", // Enable horizontal scrolling on medium and below
          whiteSpace: "nowrap", // Prevent wrapping within the scrollable area
          "&::-webkit-scrollbar": { height: "4px" }, // Thin scrollbar
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "4px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1, md: 1.5 },
            flexShrink: 0, // Prevent items from shrinking too much
          }}
        >
          {visibleItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  padding: { xs: "2px", sm: "4px" },
                }}
              >
                {React.cloneElement(item.icon, {
                  fontSize: isExtraSmall
                    ? "small"
                    : isSmall
                    ? "medium"
                    : "inherit", // Dynamic icon sizing
                })}
              </IconButton>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.7rem",
                    md: "0.75rem",
                  },
                  whiteSpace: "nowrap", // Keep text in one line
                }}
              >
                {item.text}
              </Typography>
              {index < visibleItems.length - 1 && (
                <Box
                  sx={{
                    width: "1px",
                    height: "16px",
                    backgroundColor: "white",
                    mx: { xs: 0.25, sm: 0.5, md: 1 },
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;