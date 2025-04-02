"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function PublicDocumentsPage() {
  const documents = [
    { title: "THE FORESTS (FEES AND CHARGES) REGULATIONS, 2016", size: "233 KB", link: "#" },
    { title: "KFC APPLICATION FORM", size: "287 KB", link: "#" },
    { title: "STRATEGIC PLAN 2023-2027", size: "23 MB", link: "#" },
    { title: "KFS SERVICE CHARTER", size: "430 KB", link: "#" },
    { title: "MKATABA WA HUDUMA (KFS SERVICE CHARTER – KISWAHILI VERSION)", size: "3 MB", link: "#" },
    { title: "PUBLIC NOTICE – THE CLIMATE CHANGE (AMENDMENT) BILL, 2023", size: "620 KB", link: "#" },
    { title: "THE CLIMATE CHANGE (AMENDMENT) BILL, 2023", size: "326 KB", link: "#" },
    { title: "APPLICATION FOR TRAINING PROGRAMMES 2023/2024 ACADEMIC YEAR", size: "283 KB", link: "#" },
    { title: "KFC APPLICATION FORM", size: "223 KB", link: "#" },
    { title: "Filming and Photoshoot Application Form", size: "56 KB", link: "#" },
    { title: "MKATABA WA HUDUMA (KFS SERVICE CHARTER – KISWAHILI VERSION)", size: "3 MB", link: "#" },
    { title: "CUSTOMER FEEDBACK QUESTIONNAIRE", size: "328 KB", link: "#" },
    { title: "NETFUND RESEARCH REPORT ON FACTORS INFLUENCING HOUSEHOLD ADOPTION OF RENEWABLE ENERGY TECHNOLOGIES IN RURAL KENYA", size: "4.00 KB", link: "#" },
    { title: "NATIONAL MANGROVE MANAGEMENT PLAN SUMMARY FOR POLICY MAKERS", size: "811 KB", link: "#" },
    { title: "NATIONAL MANGROVE ECOSYSTEM MANAGEMENT PLAN", size: "811 KB", link: "#" },
    { title: "Forest Conservation and Management Act No 34 of 2016", size: "821 KB", link: "#" },
    { title: "KFS 3RD STRATEGIC PLAN 2018-2022", size: "4.00 KB", link: "#" },
    { title: "UN STRATEGIC PLAN FOR FORESTS 2017 TO 2030", size: "469 KB", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar />

      {/* Main Navigation Bar */}
      <MainNavBar />

      {/* Page Container */}
      <div
        className="min-h-screen bg-cover bg-center bg-fixed p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 90, 40, 0.8), rgba(15, 90, 40, 0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto py-12 px-4 relative z-10">
          {/* Header Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-lg tracking-wide">
            Public Documents
          </h1>

          {/* Documents Section */}
          <div>
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-95 rounded-xl p-6 flex justify-between items-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6 md:flex-row flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                {/* Document Info */}
                <div className="flex items-center gap-4">
                  {/* File Icon (SVG replacement for MUI Icon) */}
                  <svg
                    className="w-8 h-8 text-[#0f5a28]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {/* Document Text */}
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-[#0f5a28]">{doc.title}</h2>
                    <p className="text-sm text-[#666] mt-1">1 file(s) {doc.size}</p>
                  </div>
                </div>

                {/* Download Button */}
                <Link href={doc.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="bg-[#0f5a28] text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-[#388e3c] hover:shadow-md transition-all">
                    Download
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterBottom />
    </div>
  );
}