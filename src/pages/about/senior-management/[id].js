import { useRouter } from "next/router";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from '@/components/FooterBottom';
import Link from "next/link"; // Import the Link component


const managementDetails = {
  ceo: {
    image: "https://www.kenyaforestservice.org/wp-content/uploads/2023/08/CCF-Board-300x291.jpg",
    name: "Alex Lemarkoko",
    title: "Chief Conservator of Forests",
    bio: "Alex Lemarkoko is the Chief Conservator of Forests with over 20 years of experience...",
  },
  "charity-munyasya": {
    image:"",
    name: "CHARITY MUNYASIA",
    title: "Principal Deputy to the CCF - Directorate of Strategy, Partnerships & Resource Mobilization",
    bio: "Charity Munyasya is the Principal Deputy to the CCF with expertise in...",
  },
  "mohamed-mohamed": {
    image:"",
    name: "MOHAMED .A. MOHAMED",
    title: "Commandant",
    bio: "",
  },
  "lucy-kiboi": {
    image:"",
    name: "LUCY KIBOI",
    title: "Senior Manager, Corporate Services",
    bio: "",
  },
  "stephen-mugi": {
    image:"",
    name: "STEPHEN MUGI",
    title: "Ag. Manager, Internal Audit",
    bio: "Mr. Mugi is in charge of Internal Audit and has over thirteen (13) years’ experience in Auditing in the public sector. He holds a Master of Science Degree in Finance, a Bachelor’s Degree in Accounting and is a member of Institute of the Internal Auditors (IIA) – Kenyan Chapter and Institute of Certified Public Accountants of Kenya (ICPAK).",
  },
  "clement-ng'oriareng": {
    image:"",
    name: "Dr. CLEMENT NG'ORIARENG",
    title: "RDeputy Chief Conservator of Forests - Drylands and Private Forests Development Coordination",
    bio: "",
  },
  "zipporah-toroitich": {
    image:"",
    name: "ZIPPORAH TOROITICH",
    title: "Deputy Chief Conservator of Forests - Forest Advisory, County Liaison and Investment",
    bio: "",
  },
  "anastacia-musaya": {
    image:"",
    name: "ANASTACIA MUASYA",
    title: "Manager - Finance and Accounts",
    bio: "",

  },
  "juliana-ochieng": {
    image:"",
    name: "Juliana Ochieng",
    title: "Manager - Human Resources Management",
    bio: "Mrs. Ochieng is charge of Human Resource Management. She holds a Master’s degree in Business Administration, a First class Bachelor’s Degree in Human Resource Management and an advanced Diploma in Human Resource Planning and Development. Other Skills and development courses undertaken include Strategic Leadership Development Programme, mentoring & coaching skills, training of trainers in public service and Senior Management Course. She is also a certified pension trustee and a member of the Institute of Human Resource Management (IHRM). She has over twenty-eight (28) years’ experience in human resource management",
  },
  "esther-keige": {
    image:"",
    name: "Esther Keige",
    title: "Manager - Legal Services",
    bio: "Ms Esther Keige is the Manager, Legal Services. She holds a master’s degree in Environmental Law, a Bachelors degree in Law (LLB) Hons and a post graduate diploma in Law.Professionally, the officer is an Advocate of the High Court of Kenya, a Certified Secretary (CS) and Certified Professional Mediator. She is a member of the Law Society of Kenya and the Institute of Certified Secretaries.She has over twenty (20) Years experience as an Advocate and Certified Secretary in the Private and Public Sector.",
  },
  "stephen-cheboi": {
    image:"",
    name: "stephen cheboi",
    title: "Ag. Manager - Information Communication and Technology",
    bio: "Head – Information Communication and Technology",
  },
  "anne-muthamia": {
    image:"",
    name: "Anne Muthamia",
    title: "Ag. Manager - Corporate Communication",
    bio: "Ms. Muthamia is in charge of Corporate Communications Department with over 18 years’ work experience. She holds an M.A. International Studies from the University of Nairobi and is a graduate of the National Defence College, Kenya. She also holds an M.A. Communication Studies from the University of Nairobi and B.A. Communication from Daystar University. She is a member of the Public Relations Society of Kenya (PRSK) and the Association of Media Women in Kenya (AMWIK).",
  },
  "victor-kobia": {
    image:"",
    name: "Victor Kobia",
    title: "Ag. Manager - Supply Chain Management",
    bio: "Mr. Kobia is the Head, Supply Chain Management. He holds a Master of Science in Procurement and Logistics, a Bachelor’s Degree and Diploma in Procurement and Supply Management. He has over 20 years’ experience in Supply Chain Management and is a member of the Chartered Institute of Procurement and Supply (UK) and Kenya Institute of Supplies Management.",
  },
  "isaac-wekesa": {
    image:"",
    name: "ISAAC WEKESA",
    title: "Ag. Manager - Administration, Infrastructure Development & Maintenance",
    bio: "",
  },
  "ronald-mbaji": {
    image:"",
    name: "Col.(Rtd) Ronald Mbaji",
    title: "Head - Airwing",
    bio: "",
  },
  "laura-yego": {
    image:"",
    name: "Laura Yego",
    title: "Principal Legal Officer & Board Secretariat",
    bio: "Ms Yego is the Chief Legal Officer. She holds a Bachelor of Laws Degree (LLB) (Hons) and is currently pursuing a master’s degree in Environmental Law from the University of Nairobi. She is also a Certified Secretary (CS) and an Advocate of the High Court with over 15 years’ experience, a Commissioner for Oaths and a Notary Public. She is a member of the Law Society of Kenya, Institute of Certified Secretaries (Kenya) and the East Africa Law Society in good standing",
  },
};

const ManagementProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const profile = managementDetails[id];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <TopNavBar />
        <MainNavBar />
          <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
          <h2 className="text-xl text-gray-600 mb-8">{profile.title}</h2>
          <p className="text-gray-700">{profile.bio}</p>
      </div>
      <FooterBottom />
    </>
  );
};

export default ManagementProfile;