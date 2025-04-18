"use client";

import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Placeholder image for fallback
const placeholderImage = "/images/placeholder.jpg";

// Management details mapping with local image paths
const managementDetails = {
  ceo: {
    image: "/images/Alex Lemarkoko.jpg",
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
  "anastacia-musaya": {
    image: "/images/senior-management/Anastasia Muasya.png",
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

// Styled Components
const PageContainer = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f3f4f6",
  width: "100vw",
  overflowX: "hidden",
  boxSizing: "border-box",
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "clamp(1rem, 2vw, 2rem)", // Responsive padding
});

const ProfileCard = styled(Box)({
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  border: "2px solid #d1d5db",
  width: "clamp(90%, 95vw, 100%)", // Responsive width
  maxWidth: "clamp(25rem, 50vw, 31.25rem)", // Responsive max-width
  padding: "clamp(1.5rem, 3vw, 2rem)", // Responsive padding
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ErrorCard = styled(Box)({
  backgroundColor: "#ffffff",
  padding: "clamp(1rem, 2vw, 1.5rem)", // Responsive padding
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  border: "2px solid #d1d5db",
});

const ImageWrapper = styled(Box)({
  position: "relative",
  width: "clamp(8rem, 16vw, 10rem)", // Responsive image size
  height: "clamp(8rem, 16vw, 10rem)",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
});

const Name = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(1.25rem, 3vw, 1.5rem)", // Scales with viewport
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "clamp(0.25rem, 0.5vw, 0.5rem)", // Responsive margin
  textAlign: "center",
  textTransform: "capitalize",
});

const Title = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)", // Scales with viewport
  color: "#4b5563",
  marginBottom: "clamp(0.5rem, 1vw, 1rem)", // Responsive margin
  textAlign: "center",
  textTransform: "capitalize",
});

const Bio = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)", // Scales with viewport
  color: "#374151",
  lineHeight: 1.6,
  textAlign: "center",
});

const ErrorMessage = styled(Typography)({
  fontFamily: "'Peugeot', Helvetica, sans-serif",
  fontSize: "clamp(0.875rem, 1.5vw, 1rem)", // Scales with viewport
  color: "#374151",
});

const ManagementProfile = () => {
  const params = useParams();
  const { id } = params;

  // Ensure id is defined and exists in the managementDetails object
  if (!id || !managementDetails[id]) {
    return (
      <PageContainer>
        <ContentContainer>
          <ErrorCard>
            <ErrorMessage>Profile not found</ErrorMessage>
          </ErrorCard>
        </ContentContainer>
      </PageContainer>
    );
  }

  const profile = managementDetails[id];

  return (
    <PageContainer>
      <TopNavBar />
      <MainNavBar />
      <ContentContainer>
        <ProfileCard>
          <ImageWrapper>
            <Image
              src={profile.image}
              alt={profile.name}
              layout="fill"
              objectFit="cover"
              className="border-2 border-gray-300"
              onError={(e) => (e.target.src = placeholderImage)}
            />
          </ImageWrapper>
          <Name>{profile.name}</Name>
          <Title>{profile.title}</Title>
          <Bio>{profile.bio || "No biography available."}</Bio>
        </ProfileCard>
      </ContentContainer>
      <FooterBottom />
    </PageContainer>
  );
};

export default ManagementProfile;