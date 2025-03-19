"use client";
import { Box, Typography, Grid, Avatar } from "@mui/material";

export default function KFSBoardSection() {
  const ceo = {
    name: "Mr. Titus Kipkoech Korir",
    title: "Chairman",
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/10/Titus-Korir.jpg",
  };

  const boardMembers = [
    { name: "Ms. Jane Simita Munka", title: "Rep. CFA", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/10/Jane-Simitia-Munka.jpg" },
    { name: "Kunal Chowdhari", title: "Rep. Timber Industry and Chairman, Finance and Resource Mobilization Committee", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/20230328162727_1B4A0697-scaled.jpg" },
    { name: "Abdala Komesha", title: "Rep. IG, National Police Service", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/20230328162405_1B4A0671-scaled.jpg" },
    { name: "Isabella Kogei", title: "Rep. PS National Treasury", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/20230328162502_1B4A0678-scaled.jpg" },
    { name: "Dr. George Muthike", title: "Rep. KEFRI and Chairman, Technical, Planning, Development and KFC Committee", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/20230328162617_1B4A0688-scaled.jpg" },
    { name: "Dr. Doris Mutta", title: "Rep. FSK. Chair, Audit Committee", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/20230328162914_1B4A0718-1-scaled.jpg" },
    { name: "Ahmed Mohammed", title: "Rep. CoG and Chairman, Human Resource and Administration Committee", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/05/Ahmed-Mohamed-REP-COG-2.jpg" },
    { name: "Mr. Evans Mutari", title: "Rep. PS State Department of Forestry", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/10/Evans-Mutari.jpg" },
    { name: "Alex Lemarkoko", title: "Secretary to the Board", image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/08/CCF-Board-scaled.jpg" },
  ];

  return (
    <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      {/* Title and Description; Placeholder */}
      <Typography variant="h1" sx={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#023011" }}>
        KFS BOARD OF DIRECTORS
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem", color: "#666" }}>
        This section covers details regarding the board members of KFS.
      </Typography>

      {/* CEO Section */}
      <Box sx={{ marginBottom: "3rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <Typography 
      variant="h6"
        >
        
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

      {/* Board Members Section */}
      <Box>
        <Grid container spacing={3} justifyContent="center">
          {boardMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={4} md={4}>
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
                  alt={member.name}
                  src={member.image}
                />
                <Typography variant="h6" sx={{ fontWeight: 500, color: "#000000" }}>{member.name}</Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>{member.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}