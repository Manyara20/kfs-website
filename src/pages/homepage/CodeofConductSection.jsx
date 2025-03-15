"use client";
import React from "react";
import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";

const objectives = [
  {
    title: "KRA 1: Forest and Tree Cover Expansion for Climate Mitigation and Adaptation",
    details: [
      "Increase the National Tree Cover from 13% to 21.03% in 5 years towards 30% by 2032.",
      "Increase the National Forest Cover from 8.3% to 10% in 5 years towards 10% by 2030.",
    ],
  },
  {
    title: "KRA 2: Conservation and Protection of Forests for Climate Change Resilience",
    details: [
      "Strengthen enforcement capacity in forest protection and secure corporate assets.",
      "Improve governance for sustainable forest management.",
      "Strengthen climate change actions and response capacities.",
      "Reverse degradation of Mangrove ecosystems for climate mitigation.",
    ],
  },
  {
    title: "KRA 3: Economic Development and Livelihood Improvement",
    details: [
      "Strengthen nature-based enterprises for improving livelihoods and climate resilience.",
      "Develop commercial forest plantations on public, community, and private lands.",
      "Collaborate with private sectors for climate finance and carbon project development.",
    ],
  },
  {
    title: "KRA 4: Organizational Capacity Building and Collaboration",
    details: [
      "Promote operational efficiency and effectiveness to deliver on mandate.",
      "Strengthen partnerships and increase resource mobilization capacity.",
    ],
  },
];

const CodeOfConductSection = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 4, md: 16 } }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* Left Side: Image with Card on Top */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%", // Fills the height of the Grid item
              backgroundImage: `url("/images/foresty.jpg")`, // Local path placeholder
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Card
              sx={{
                backgroundColor: "transparent", // No background
                boxShadow: "none", // Remove shadow for a cleaner look
                borderRadius: "16px",
                p: 3,
                position: "relative", // Stays on top of the image
                zIndex: 1, // Ensures card is above the image
                maxWidth: "80%", // Limits card width for balance
                mx: "auto", // Centers the card horizontally
                mt: { xs: 2, md: 4 }, // Adds top margin for spacing
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="#4A7C12"
                  fontWeight="bold"
                  sx={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  About Kenya Forest Service
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "black" }}>
                  In carrying out its mandate, the functions of KFS include among others:
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "black" }}>
                  1. Conserve, protect and manage all Public Forests
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "black" }}>
                  2. Prepare and implement management plans for all public forests, and, where requested, assist in preparation
                  of management plans for community forests or private forests in consultation with the relevant owners
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "black" }}>
                  3. Receive and consider applications for licenses or permits in
                  relation to forest resources or management of forests or any other relevant matter in accordance with the Act
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#4A7C12",
                      borderColor: "#4A7C12",
                      "&:hover": { backgroundColor: "#4A7C12", color: "white" },
                      mt: 2,
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Right Side: Strategic Objectives */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontSize: "1.875rem", fontWeight: "bold", mb: 4, textAlign: "center", color: "black" }}
          >
            Strategic Objectives
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", mb: 6, textAlign: "center", color: "black" }}>
            The Strategic Objectives serve as a roadmap to achieve the Kenya Forest Service’s mission and vision. The service will therefore focus on the following strategic objectives:
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {objectives.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  p: 2,
                  borderRadius: "8px",
                  bgcolor: "#16a34a", // green-600 equivalent
                  color: "white",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#15803d", // green-700 equivalent
                  },
                  "&:hover .details": { // Target the details class on hover
                    opacity: 1,
                    maxHeight: "1000px", // Large enough to accommodate content
                  },
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontSize: "1.125rem", fontWeight: "semibold" }}>{item.title}</Typography>
                <Box
                  className="details" // Add className for targeting
                  sx={{
                    mt: 1,
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                  component="div"
                >
                  {item.details.map((detail, i) => (
                    <Typography key={i} sx={{ fontSize: "0.875rem", color: "white" }}>
                      • {detail}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodeOfConductSection;