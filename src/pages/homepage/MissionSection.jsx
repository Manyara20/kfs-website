import Image from "next/image";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const data = [
  {
    title: "Mission",
    image: "/images/OIP.jpg",
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

export default function MissionVisionGoal() {
  return (
    <Box
      sx={{
        width: "100%", // Full width on all screens
        p: { xs: 2, md: 3 }, // Responsive padding
        bgcolor: "#f5f5f5", // Background to emphasize full width
      }}
    >
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid
            item
            xs={12} // Full width on small screens
            sm={6}  // Two columns on medium screens
            md={4}  // Three columns on large screens, but we'll stretch each card
            key={index}
            sx={{ display: "flex" }} // Ensure Grid item stretches content
          >
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: 3,
                position: "relative",
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%", // Card takes full width of its Grid item
                mx: { md: 0, lg: "auto" }, // Center on medium, stretch on large
                maxWidth: { lg: "none" }, // Remove max-width constraint on large screens
              }}
            >
              <Box sx={{ position: "relative", height: 250, overflow: "hidden" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    textAlign: "center",
                    py: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  px: { xs: 2, lg: 4 }, // More padding on large screens
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="center"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}