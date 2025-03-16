import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import GoalIcon from "@mui/icons-material/TrackChanges";
import MissionIcon from "@mui/icons-material/EmojiObjects";
import VisionIcon from "@mui/icons-material/Visibility";

const StrategicSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "16px", sm: "24px", md: "32px", lg: "40px" },
        backgroundColor: "#e6f5e6",
        minHeight: "100%", // Ensure it takes full height if needed
        display: "flex", // Center content vertically and horizontally
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Centered Grid */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "1100px", lg: "1200px" },
          mx: "auto", // Center the grid horizontally
        }}
      >
        {/* Our Mission */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center", // Center content vertically
              padding: { xs: "12px", sm: "15px", md: "20px" },
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: { xs: "none", sm: "scale(1.03)" }, // Disable hover scale on xs
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              },
              bgcolor: "white",
              minHeight: { xs: "240px", sm: "260px", md: "280px" }, // Ensure consistent height
              animation: {
                xs: "slideIn 0.5s ease-in-out forwards", // Slide animation on xs screens
                sm: "none", // No animation on larger screens
              },
              "@keyframes slideIn": {
                "0%": { transform: "translateX(-100%)", opacity: 0 },
                "100%": { transform: "translateX(0)", opacity: 1 },
              },
            }}
          >
            <MissionIcon
              sx={{
                fontSize: { xs: 40, sm: 50, md: 60 },
                color: "#6A961F",
                mb: { xs: 1, sm: 1.5, md: 2 },
              }}
            />
            <CardContent
              sx={{
                textAlign: "center",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 0, // Remove default padding from CardContent
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: "bold",
                  color: "#0E2E0E",
                  mb: { xs: 1, sm: 1.5 },
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#4A4A4A",
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 }, // Add padding on xs for readability
                }}
              >
                Conservation, management, development, and sustainable utilization of forests and allied resources for current and future generations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Vision */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "12px", sm: "15px", md: "20px" },
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: { xs: "none", sm: "scale(1.03)" },
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              },
              bgcolor: "white",
              minHeight: { xs: "240px", sm: "260px", md: "280px" },
              animation: {
                xs: "slideIn 0.5s ease-in-out forwards 0.2s", // Delay for second card
                sm: "none",
              },
              "@keyframes slideIn": {
                "0%": { transform: "translateX(-100%)", opacity: 0 },
                "100%": { transform: "translateX(0)", opacity: 1 },
              },
            }}
          >
            <VisionIcon
              sx={{
                fontSize: { xs: 40, sm: 50, md: 60 },
                color: "#6A961F",
                mb: { xs: 1, sm: 1.5, md: 2 },
              }}
            />
            <CardContent
              sx={{
                textAlign: "center",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 0,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: "bold",
                  color: "#0E2E0E",
                  mb: { xs: 1, sm: 1.5 },
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#4A4A4A",
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 },
                }}
              >
                To be an internationally recognized organization of excellence in knowledge-based sustainable forest resources development, conservation, and management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Strategic Goal */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "12px", sm: "15px", md: "20px" },
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: { xs: "none", sm: "scale(1.03)" },
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              },
              bgcolor: "white",
              minHeight: { xs: "240px", sm: "260px", md: "280px" },
              animation: {
                xs: "slideIn 0.5s ease-in-out forwards 0.4s", // Delay for third card
                sm: "none",
              },
              "@keyframes slideIn": {
                "0%": { transform: "translateX(-100%)", opacity: 0 },
                "100%": { transform: "translateX(0)", opacity: 1 },
              },
            }}
          >
            <GoalIcon
              sx={{
                fontSize: { xs: 40, sm: 50, md: 60 },
                color: "#6A961F",
                mb: { xs: 1, sm: 1.5, md: 2 },
              }}
            />
            <CardContent
              sx={{
                textAlign: "center",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 0,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: "bold",
                  color: "#0E2E0E",
                  mb: { xs: 1, sm: 1.5 },
                }}
              >
                Strategic Goal
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#4A4A4A",
                  lineHeight: 1.6,
                  px: { xs: 1, sm: 0 },
                }}
              >
                Sustainably manage all forests and build resilient forest ecosystems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StrategicSection;