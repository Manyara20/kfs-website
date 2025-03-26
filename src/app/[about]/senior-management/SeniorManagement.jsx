"use client";
import { Box, Typography, Grid, IconButton, Avatar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

export default function SeniorManagementSection() {
  const ceo = {
    id: "ceo",
    name: "Alex Lemarkoko",
    title: "Chief Conservator of Forests",
    image: "/images/Alex Lemarkoko.jpg", // Local path
  };

  const boardMembers = [
    { id: "charity-munyasya", name: "Charity Munyasia", title: "Principal Deputy to the CCF - Directorate of Strategy, Partnerships & Resource Mobilization", image: "/images/Charity Munyasia.jpg" },
    { id: "head", name: "Head", title: "Directorate of Forest Conservation and Management", image: "/images/AVERTER2.png" },
    { id: "mohamed-mohamed", name: "Mohamed A. Mohamed", title: "Commandant", image: "/images/Commandant.jpg" },
    { id: "lucy-kiboi", name: "Lucy Kiboi", title: "Senior Manager, Corporate Services", image: "/images/Lucy Kiboi.png" },
    { id: "stephen-mugi", name: "Stephen Mugi", title: "Ag. Manager, Internal Audit", image: "/images/Stephen Mugi.png" },
    { id: "clement-ngoriareng", name: "Dr. Clement Ng'oriareng", title: "Deputy Chief Conservator of Forests - Drylands and Private Forests Development Coordination", image: "/images/Dr. Clement.png" },
    { id: "zipporah-toroitich", name: "Zipporah Toroitich", title: "Deputy Chief Conservator of Forests - Forest Advisory, County Liaison and Investment", image: "/images/Zipporah Toroitich.png" },
    { id: "anastacia-muasya", name: "Anastacia Muasya", title: "Manager - Finance and Accounts", image: "/images/Anastasia Muasya.png" },
    { id: "juliana-ochieng", name: "Juliana Ochieng", title: "Manager - Human Resources Management", image: "/images/Juliana Ochieng.png" },
    { id: "esther-keige", name: "Esther Keige", title: "Manager - Legal Services", image: "/images/Esther Keige.png" },
    { id: "stephen-cheboi", name: "Stephen Cheboi", title: "Ag. Manager - Information Communication and Technology", image: "/images/Stephen Cheboi.png" },
    { id: "anne-muthamia", name: "Anne Muthamia", title: "Ag. Manager - Corporate Communication", image: "/images/Anne Muthama.png" },
    { id: "victor-kobia", name: "Victor Kobia", title: "Ag. Manager - Supply Chain Management", image: "/images/Victor Kobia.png" },
    { id: "isaac-wekesa", name: "Isaac Wekesa", title: "Ag. Manager - Administration, Infrastructure Development & Maintenance", image: "/images/Isaac Wekesa.jpg" },
    { id: "ronald-mbaji", name: "Col.(Rtd) Ronald Mbaji", title: "Head - Airwing", image: "/images/Captain-Mbaji.jpg" },
    { id: "laura-yego", name: "Laura Yego", title: "Principal Legal Officer & Board Secretariat", image: "/images/Laura Yego.png" },
  ];

  return (
    <Box sx={{ padding: { xs: "1rem", md: "3rem" }, backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Title and Description */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "#023011",
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Senior Management
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: { xs: "1rem", md: "1.1rem" },
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Meet the dedicated leaders of the Kenya Forest Service, committed to sustainable forest management and conservation.
        </Typography>
      </Box>

      {/* CEO Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <Box
          sx={{
            backgroundColor: "white",
            border: "2px solid #e0e0e0",
            boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
            width: { xs: "100%", sm: "350px" },
            p: 3,
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#6A961F",
              color: "white",
              padding: "0.5rem 1rem",
              display: "inline-block",
              mb: 2,
              fontSize: "0.9rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            CCF
          </Typography>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              mx: "auto",
              mb: 2,
              border: "2px solid #6A961F",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            alt={ceo.name}
            src={ceo.image}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#023011", mb: 1 }}>
            {ceo.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 2, fontSize: "0.9rem" }}>
            {ceo.title}
          </Typography>
          <Link href={`/about/senior-management/${ceo.id}`} passHref>
            <IconButton
              sx={{
                color: "#6A961F",
                "&:hover": {
                  backgroundColor: "rgba(106, 150, 31, 0.1)",
                },
              }}
              aria-label="View Profile"
            >
              <InfoIcon fontSize="medium" />
            </IconButton>
          </Link>
        </Box>
      </Box>

      {/* Board Members Section */}
      <Grid container spacing={3} justifyContent="center">
        {boardMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                backgroundColor: "white",
                border: "2px solid #e0e0e0",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    border: "2px solid #6A961F",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  alt={member.name}
                  src={member.image}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#023011", mb: 1, fontSize: "1.1rem" }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.85rem", mb: 2 }}>
                  {member.title}
                </Typography>
              </Box>
              <Link href={`/about/senior-management/${member.id}`} passHref>
                <IconButton
                  sx={{
                    color: "#6A961F",
                    "&:hover": {
                      backgroundColor: "rgba(106, 150, 31, 0.1)",
                    },
                  }}
                  aria-label="View Profile"
                >
                  <InfoIcon fontSize="medium" />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}