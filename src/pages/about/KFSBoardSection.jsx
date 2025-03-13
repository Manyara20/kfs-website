"use client";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import Image from "next/image";

export default function KFSBoardSection() {
  const ceo = {
    name: "Mr. Titus Kipkoech Korir",
    title: "CHAIRMAN",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/10/Titus-Korir.jpg",
  };

  return (
    <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      {/* Title and Description */}
      <Typography variant="h1" sx={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#023011" }}>
        KFS Board Members
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", color: "#666" }}>
        *Small Collective introduction*
      </Typography>

      {/* CEO Section */}
      <Box sx={{ marginBottom: "3rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#6A961F",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          CEO
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              marginBottom: "1rem",
              border: "2px solid #6A961F",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            alt={ceo.name}
            src={ceo.image}
          />
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#000000" }}>{ceo.name}</Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>{ceo.title}</Typography>
        </Box>
      </Box>
    </Box>
  );
}