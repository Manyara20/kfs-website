"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoDocumentTextOutline } from "react-icons/io5";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function PressReleasesPage() {
  const pressReleases = [
    { title: "Public Views on Disposal (Harvesting) Of Forest Plantation Materials in Public Forests", link: "#" },
    { title: "Public Notice Call for Public Views on Disposal (Harvesting) Of Forest Plantation Materials in Public Forests", link: "#" },
    { title: "Forest Plantation Management and Development", link: "#" },
    { title: "Clarification on The Use of Movement Permits to Regulate Harvesting of Trees in The Country", link: "#" },
    { title: "Revocation of Illegal Forest Title Deeds", link: "#" },
    { title: "KFS Board invites EACC to look into Forest Destruction", link: "#" },
    { title: "Amendment of FCMA", link: "#" },
    { title: "Press Release – 2021 Mangrove Day", link: "#" },
    { title: "PRESS STATEMENT UPON DEATH OF JOANNA STUCHBURRY", link: "#" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <MainNavBar />
      <TopNavBar />
      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-8 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 50, 20, 0.8), rgba(0, 50, 20, 0.8)), url('/images/background-template/background.jpg')`,
        }}
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-10 z-0"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/leaf.png')`,
          }}
        ></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#ffffff] drop-shadow-md mb-12 text-[3rem] text-center capitalize">
            Press Releases
          </h1>
          <div>
            {pressReleases.map((press, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-95 rounded-xl p-6 flex justify-between items-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl mb-6 md:flex-row flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="flex items-center gap-4">
                  <IoDocumentTextOutline className="text-[#0f5a28] text-4xl" />
                  <div>
                    <h2 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-xl text-[#0f5a28] mb-1">
                      {press.title}
                    </h2>
                    <p className="font-['Peugeot',Helvetica,sans-serif] text-sm text-gray-600">
                      1 file(s)
                    </p>
                  </div>
                </div>
                <Link href={press.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#0f5a28] text-white font-['Peugeot',Helvetica,sans-serif] text-sm py-2 px-6 rounded-lg hover:bg-[#388e3c] hover:shadow-md transition-all">
                    Download
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <FooterBottom />
    </div>
  );
}