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
    <Box sx={{ padding: { xs: "1rem", md: "3rem" }, backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Title and Description */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            marginBottom: "1rem",
            color: "#023011",
          }}
        >
          KFS Board of Directors
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            marginBottom: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          This section covers details regarding the board members of KFS.
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
            Chairman
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
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#000000", mb: 1 }}>
            {ceo.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
            {ceo.title}
          </Typography>
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
                <Typography variant="h6" sx={{ fontWeight: 500, color: "#000000", mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                  {member.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}