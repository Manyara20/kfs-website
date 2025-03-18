"use client";
import { Box, Typography, Grid, Avatar, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

export default function SeniorManagementSection() {
  const ceo = {
    id: "ceo",
    name: "Alex Lemarkoko",
    title: "Chief Conservator of Forests",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/08/CCF-Board-300x291.jpg",
  };

  const boardMembers = [
    { id: "charity-munyasya", name: "CHARITY MUNYASIA", title: "Principal Deputy to the CCF - Directorate of Strategy, Partnerships & Resource Mobilization", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Charity-Munyasya-1-300x300.jpg" },
    { id: "head", name: "Head", title: "Directorate of Forest Conservation and Management", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/05/AVERTER2-300x300-1-300x300.png" },
    { id: "mohamed-mohamed", name: "MOHAMED .A. MOHAMED", title: "Commandant", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/commandant-300x300.png" },
    { id: "lucy-kiboi", name: "LUCY KIBOI", title: "Senior Manager, Corporate Services", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Lucy-Kiboi2-300x300.png" },
    { id: "stephen-mugi", name: "STEPHEN MUGI", title: "Ag. Manager, Internal Audit", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/02/Stephen-Mugi-241x300.png" },
    { id: "clement-ngoriareng", name: "Dr. CLEMENT NG'ORIARENG", title: "Deputy Chief Conservator of Forests - Drylands and Private Forests Development Coordination", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Dr.-CLEMENT-NGORIARENG-300x300.png" },
    { id: "zipporah-toroitich", name: "ZIPPORAH TOROITICH", title: "Deputy Chief Conservator of Forests - Forest Advisory, County Liaison and Investment", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Zipporah-Toroitich-300x300.png" },
    { id: "anastacia-muasya", name: "ANASTACIA MUASYA", title: "Manager - Finance and Accounts", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Anastasia-Muasya2-300x300.png" },
    { id: "juliana-ochieng", name: "JULIANA OCHIENG", title: "Manager - Human Resources Management", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/01/Juliana-Ochieng-253x300.png" },
    { id: "esther-keige", name: "ESTHER KEIGE", title: "Manager - Legal Services", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/05/ESTHER-KIEGE-2-300x300.png" },
    { id: "stephen-cheboi", name: "STEPHEN CHEBOI", title: "Ag. Manager - Information Communication and Technology", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/02/Stephen-Cheboi-254x300.png" },
    { id: "anne-muthamia", name: "ANNE MUTHAMIA", title: "Ag. Manager - Corporate Communication", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/01/Anne-Muthamia-246x300.png" },
    { id: "victor-kobia", name: "VICTOR KOBIA", title: "Ag. Manager - Supply Chain Management", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/01/Victor-Kobia-274x300.png" },
    { id: "isaac-wekesa", name: "ISAAC WEKESA", title: "Ag. Manager - Administration, Infrastructure Development & Maintenance", image: "https://www.kenyaforestservice.org/wp-content/uploads/2024/06/Isaac-Wanyonyi-300x300.jpg" },
    { id: "ronald-mbaji", name: "Col.(Rtd) RONALD MBAJI", title: "Head - Airwing", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/03/Captain-Mbaji-3-256x300.jpg" },
    { id: "laura-yego", name: "LAURA YEGO", title: "Principal Legal Officer & Board Secretariat", image: "https://www.kenyaforestservice.org/wp-content/uploads/2022/01/Laura-Yego-279x300.png" },
  ];

  return (
    <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      {/* Title and Description */}
      <Typography variant="h1" sx={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#023011" }}>
        Senior Management
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", color: "#666" }}>
        This section covers details regarding the board members of KFS with descriptions.
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
          CCF
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar
            sx={{
              width: 180,
              height: 180,
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

          {/* Add Info Icon with Link */}
          <Link href={`/senior-management/${ceo.id}`} passHref>
            <IconButton
              sx={{
                color: "#6A961F",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(106, 150, 31, 0.1)",
                },
              }}
              aria-label="View Profile"
            >
              <InfoIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Box>

      {/* Board Members Section */}
      <Box>
        <Grid container spacing={3} justifyContent="center">
          {boardMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={4} md={4}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 180,
                    height: 180,
                    marginBottom: "1rem",
                    border: "2px solid #6A961F",
                    borderRadius: "50%",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  alt={member.name}
                  src={member.image}
                />
                <Typography variant="h6" sx={{ fontWeight: 500, color: "#000000" }}>{member.name}</Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>{member.title}</Typography>

                {/* Add Info Icon with Link for Each Board Member */}
                <Link href={`/senior-management/${member.id}`} passHref>
                  <IconButton
                    sx={{
                      color: "#6A961F",
                      marginTop: "1rem",
                      "&:hover": {
                        backgroundColor: "rgba(106, 150, 31, 0.1)",
                      },
                    }}
                    aria-label="View Profile"
                  >
                    <InfoIcon fontSize="large" />
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}