// pages/about/senior-management.js
"use client";

import { Box, Typography, Grid, IconButton, Avatar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Management Details Object
const managementDetails = {
  ceo: {
    image: "/images/senior-management/Alex Lemarkoko.jpg",
    name: "Alex Lemarkoko",
    title: "Chief Conservator of Forests",
    bio: "Alex Lemarkoko is the Chief Conservator of Forests with over 20 years of experience...",
  },
  "charity-munyasya": {
    image: "/images/senior-management/Charity Munyasia.jpg",
    name: "Charity Munyasya",
    title: "Principal Deputy to the CCF - Directorate of Strategy, Partnerships & Resource Mobilization",
    bio: "Charity Munyasya is the Principal Deputy to the CCF with expertise in...",
  },
  "mohamed-mohamed": {
    image: "/images/senior-management/Commandant.jpg",
    name: "Mohamed A. Mohamed",
    title: "Commandant",
    bio: "",
  },
  "lucy-kiboi": {
    image: "/images/senior-management/Lucy Kiboi.png",
    name: "Lucy Kiboi",
    title: "Senior Manager, Corporate Services",
    bio: "",
  },
  "stephen-mugi": {
    image: "/images/senior-management/Stephen Mugi.png",
    name: "Stephen Mugi",
    title: "Ag. Manager, Internal Audit",
    bio: "Mr. Mugi is in charge of Internal Audit and has over thirteen (13) years’ experience in Auditing in the public sector. He holds a Master of Science Degree in Finance, a Bachelor’s Degree in Accounting and is a member of Institute of the Internal Auditors (IIA) – Kenyan Chapter and Institute of Certified Public Accountants of Kenya (ICPAK).",
  },
  "clement-ng'oriareng": {
    image: "/images/senior-management/Dr. Clement.png",
    name: "Dr. Clement Ng'oriareng",
    title: "Deputy Chief Conservator of Forests - Drylands and Private Forests Development Coordination",
    bio: "",
  },
  "zipporah-toroitich": {
    image: "/images/senior-management/Zipporah Toroitich.png",
    name: "Zipporah Toroitich",
    title: "Deputy Chief Conservator of Forests - Forest Advisory, County Liaison and Investment",
    bio: "",
  },
  "anastacia-muasya": {
    image: "/images/senior-management/Anastacia Muasya.png",
    name: "Anastacia Muasya",
    title: "Manager - Finance and Accounts",
    bio: "",
  },
  "juliana-ochieng": {
    image: "/images/senior-management/Juliana Ochieng.png",
    name: "Juliana Ochieng",
    title: "Manager - Human Resources Management",
    bio: "Mrs. Ochieng is in charge of Human Resource Management. She holds a Master’s degree in Business Administration, a First class Bachelor’s Degree in Human Resource Management and an advanced Diploma in Human Resource Planning and Development. Other Skills and development courses undertaken include Strategic Leadership Development Programme, mentoring & coaching skills, training of trainers in public service and Senior Management Course. She is also a certified pension trustee and a member of the Institute of Human Resource Management (IHRM). She has over twenty-eight (28) years’ experience in human resource management",
  },
  "esther-keige": {
    image: "/images/senior-management/Esther Keige.png",
    name: "Esther Keige",
    title: "Manager - Legal Services",
    bio: "Ms Esther Keige is the Manager, Legal Services. She holds a master’s degree in Environmental Law, a Bachelors degree in Law (LLB) Hons and a post graduate diploma in Law. Professionally, the officer is an Advocate of the High Court of Kenya, a Certified Secretary (CS) and Certified Professional Mediator. She is a member of the Law Society of Kenya and the Institute of Certified Secretaries. She has over twenty (20) Years experience as an Advocate and Certified Secretary in the Private and Public Sector.",
  },
  "stephen-cheboi": {
    image: "/images/senior-management/Stephen Cheboi.png",
    name: "Stephen Cheboi",
    title: "Ag. Manager - Information Communication and Technology",
    bio: "Head – Information Communication and Technology",
  },
  "anne-muthamia": {
    image: "/images/senior-management/Anne Muthama.png",
    name: "Anne Muthamia",
    title: "Ag. Manager - Corporate Communication",
    bio: "Ms. Muthamia is in charge of Corporate Communications Department with over 18 years’ work experience. She holds an M.A. International Studies from the University of Nairobi and is a graduate of the National Defence College, Kenya. She also holds an M.A. Communication Studies from the University of Nairobi and B.A. Communication from Daystar University. She is a member of the Public Relations Society of Kenya (PRSK) and the Association of Media Women in Kenya (AMWIK).",
  },
  "victor-kobia": {
    image: "/images/senior-management/Victor Kobia.png",
    name: "Victor Kobia",
    title: "Ag. Manager - Supply Chain Management",
    bio: "Mr. Kobia is the Head, Supply Chain Management. He holds a Master of Science in Procurement and Logistics, a Bachelor’s Degree and Diploma in Procurement and Supply Management. He has over 20 years’ experience in Supply Chain Management and is a member of the Chartered Institute of Procurement and Supply (UK) and Kenya Institute of Supplies Management.",
  },
  "isaac-wekesa": {
    image: "/images/senior-management/Isaac Wekesa.jpg",
    name: "Isaac Wekesa",
    title: "Ag. Manager - Administration, Infrastructure Development & Maintenance",
    bio: "",
  },
  "ronald-mbaji": {
    image: "/images/senior-management/Captain-Mbaji.jpg",
    name: "Col.(Rtd) Ronald Mbaji",
    title: "Head - Airwing",
    bio: "",
  },
  "laura-yego": {
    image: "/images/senior-management/Laura Yego.png",
    name: "Laura Yego",
    title: "Principal Legal Officer & Board Secretariat",
    bio: "Ms Yego is the Chief Legal Officer. She holds a Bachelor of Laws Degree (LLB) (Hons) and is currently pursuing a master’s degree in Environmental Law from the University of Nairobi. She is also a Certified Secretary (CS) and an Advocate of the High Court with over 15 years’ experience, a Commissioner for Oaths and a Notary Public. She is a member of the Law Society of Kenya, Institute of Certified Secretaries (Kenya) and the East Africa Law Society in good standing",
  },
};

// Main Page Component
export default function KFSSeniorManagementPage() {
  // Extract CEO and board members from managementDetails
  const ceo = {
    id: "ceo",
    name: managementDetails.ceo.name,
    title: managementDetails.ceo.title,
    image: managementDetails.ceo.image,
  };

  const boardMembers = Object.keys(managementDetails)
    .filter((key) => key !== "ceo")
    .map((key) => ({
      id: key,
      name: managementDetails[key].name,
      title: managementDetails[key].title,
      image: managementDetails[key].image,
    }));

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <Box sx={{ padding: { xs: "0.5rem", md: "1.5rem" }, backgroundColor: "#ffffff", minHeight: "100vh" }}>
        {/* Title and Description */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.4rem", md: "1.8rem" }, // Further reduced from 1.5rem/2rem
              fontWeight: "bold",
              color: "#023011",
              mb: 0.5, // Reduced from 1
              fontFamily: "'Peugeot', Helvetica, sans-serif",
              textTransform: "capitalize",
              letterSpacing: "0.3px", // Reduced from 0.5px
            }}
          >
            Senior Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: { xs: "0.85rem", md: "0.9rem" }, // Further reduced from 0.9rem/1rem
              maxWidth: "600px", // Reduced from 700px
              margin: "0 auto",
              fontFamily: "'Peugeot', Helvetica, sans-serif",
            }}
          >
            Meet the dedicated leaders of the Kenya Forest Service, committed to sustainable forest management and conservation.
          </Typography>
        </Box>

        {/* CEO Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Box
            sx={{
              backgroundColor: "white",
              border: "2px solid #e0e0e0",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)", // Further reduced shadow
              width: { xs: "100%", sm: "280px" }, // Reduced from 300px
              p: 1.5, // Reduced from 2
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)", // Reduced from -5px
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)", // Further reduced shadow
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#6A961F",
                color: "white",
                padding: "0.2rem 0.6rem", // Reduced from 0.3rem 0.8rem
                display: "inline-block",
                mb: 0.5, // Reduced from 1
                fontSize: "0.75rem", // Reduced from 0.8rem
                fontWeight: "bold",
                fontFamily: "'Peugeot', Helvetica, sans-serif",
                textTransform: "capitalize",
              }}
            >
              CCF
            </Typography>
            <Avatar
              sx={{
                width: 100, // Reduced from 120
                height: 100, // Reduced from 120
                mx: "auto",
                mb: 0.5, // Reduced from 1
                border: "2px solid #6A961F",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)", // Reduced shadow
              }}
              alt={ceo.name}
              src={ceo.image}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#023011",
                mb: 0.3, // Reduced from 0.5
                fontSize: "0.9rem", // Reduced from 1rem
                fontFamily: "'Peugeot', Helvetica, sans-serif",
                textTransform: "capitalize",
              }}
            >
              {ceo.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                mb: 0.5, // Reduced from 1
                fontSize: "0.7rem", // Reduced from 0.8rem
                fontFamily: "'Peugeot', Helvetica, sans-serif",
                textTransform: "capitalize",
              }}
            >
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
                <InfoIcon fontSize="small" />
              </IconButton>
            </Link>
          </Box>
        </Box>

        {/* Board Members Section */}
        <Grid container spacing={1.5} justifyContent="center">
          {boardMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={4} md={3} lg={3}>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "2px solid #e0e0e0",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)", // Further reduced shadow
                  p: 1.5, // Reduced from 2
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)", // Reduced from -5px
                    boxShadow: "0 6px 12px rgba(0,0,0,0.15)", // Further reduced shadow
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
                      width: 90, // Reduced from 100
                      height: 90, // Reduced from 100
                      mx: "auto",
                      mb: 0.5, // Reduced from 1
                      border: "2px solid #6A961F",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.1)", // Reduced shadow
                    }}
                    alt={member.name}
                    src={member.image}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#023011",
                      mb: 0.3, // Reduced from 0.5
                      fontSize: "0.85rem", // Reduced from 0.9rem
                      fontFamily: "'Peugeot', Helvetica, sans-serif",
                      textTransform: "capitalize",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: "0.7rem", // Reduced from 0.75rem
                      mb: 0.5, // Reduced from 1
                      fontFamily: "'Peugeot', Helvetica, sans-serif",
                      textTransform: "capitalize",
                    }}
                  >
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
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <FooterBottom />
    </div>
  );
}