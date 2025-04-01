// components/TopNavBar.js
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

  // Menu items split into two groups
  const group1 = [
    { icon: <Email />, text: "Staff Email", priority: 2 },
    { icon: <Assignment />, text: "E-Registration", priority: 3 },
    { icon: <AccountBox />, text: "Research License", priority: 3 },
  ];

  const group2 = [
    { icon: <Call />, text: "0800 123 456 - Toll Free", priority: 1 },
    {
      icon: <AccessTime />,
      text: "Mon-Fri (8am - 5pm) Sat & Sun CLOSED",
      priority: 2,
    },
    { icon: <Email />, text: "info@kenyaforestservice.org", priority: 1 },
  ];

  // Filter items based on screen size and priority
  const visibleGroup1 = group1.filter((item) => {
    if (isExtraSmall) return item.priority === 1;
    if (isSmall) return item.priority <= 2;
    return true;
  });

  const visibleGroup2 = group2.filter((item) => {
    if (isExtraSmall) return item.priority === 1;
    if (isSmall) return item.priority <= 2;
    return true;
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#0D3C00",
        padding: { xs: "1px 0", sm: "2px 0" }, // Reduced padding
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "95%", sm: "90%", md: "85%" },
          margin: "auto",
          padding: { xs: "0 2px", sm: "0 4px", md: "0 8px" }, // Reduced padding
          minHeight: "auto !important",
          display: "flex",
          alignItems: "center",
          overflowX: isMedium ? "auto" : "hidden",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { height: "4px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "4px",
          },
        }}
      >
        <Box
          sx={{
            display: isSmall ? "none" : "flex", // Hide completely on small screens
            alignItems: "center",
            gap: { xs: 0.25, sm: 0.5, md: 1 }, // Reduced gap between groups
            flexShrink: 0,
            width: "100%",
            justifyContent: "space-between", // Space between groups
          }}
        >
          {/* Group 1 */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.25, sm: 0.5, md: 1 } }}>
            {visibleGroup1.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  sx={{ color: "white", padding: { xs: "1px", sm: "2px" } }} // Reduced padding
                >
                  {React.cloneElement(item.icon, {
                    fontSize: isExtraSmall ? "small" : isSmall ? "small" : "medium", // Reduced icon size
                  })}
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.55rem", sm: "0.6rem", md: "0.6rem" }, // Reduced font size
                    fontFamily: "'Peugeot', Helvetica, sans-serif", // Apply Peugeot font
                    textTransform: "capitalize", // Capitalize first letter of each word
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </Typography>
                {index < visibleGroup1.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "12px", // Reduced height
                      backgroundColor: "white",
                      mx: { xs: 0.1, sm: 0.25, md: 0.5 }, // Reduced margin
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* Group 2 */}
          <Box sx={{ display: "flex", alignItems: "left", gap: { xs: 0.25, sm: 0.5, md: 1 } }}>
            {visibleGroup2.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton
                  sx={{ color: "white", padding: { xs: "1px", sm: "2px" } }} // Reduced padding
                >
                  {React.cloneElement(item.icon, {
                    fontSize: isExtraSmall ? "small" : isSmall ? "small" : "medium", // Reduced icon size
                  })}
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.55rem", sm: "0.6rem", md: "0.6rem" }, // Reduced font size
                    fontFamily: "'Peugeot', Helvetica, sans-serif", // Apply Peugeot font
                    textTransform: "capitalize", // Capitalize first letter of each word
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </Typography>
                {index < visibleGroup2.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "12px", // Reduced height
                      backgroundColor: "white",
                      mx: { xs: 0.1, sm: 0.25, md: 0.5 }, // Reduced margin
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;