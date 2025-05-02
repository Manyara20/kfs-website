// pages/KFSBoardPage.js
"use client"; // This is a Client Component


import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";


const ceo = {
  name: "Mr. Titus Kipkoech Korir",
  title: "Chairman",
  image: "/images/KFS-Board/Titus-Korir.jpg",
};

const boardMembers = [
  { name: "Ms. Jane Simita Munka", title: "Rep. CFA", image: "/images/KFS-Board/Jane-Simitia-Munka.jpg" },
  { name: "Kunal Chowdhari", title: "Rep. Timber Industry and Chairman, Finance and Resource Mobilization Committee", image: "/images/KFS-Board/Kunal-Chowdhari.jpg" },
  { name: "Abdala Komesha", title: "Rep. IG, National Police Service", image: "/images/KFS-Board/Abdala-Komesha.jpg" },
  { name: "Isabella Kogei", title: "Rep. PS National Treasury", image: "/images/KFS-Board/Isabella-Kogei.jpg" },
  { name: "Dr. George Muthike", title: "Rep. KEFRI and Chairman, Technical, Planning, Development and KFC Committee", image: "/images/KFS-Board/Dr. George Muthike.jpg" },
  { name: "Dr. Doris Mutta", title: "Rep. FSK. Chair, Audit Committee", image: "/images/KFS-Board/Dr. Doris Mutta.jpg" },
  { name: "Ahmed Mohammed", title: "Rep. CoG and Chairman, Human Resource and Administration Committee", image: "/images/KFS-Board/Ahmed-Mohammed.jpg" },
  { name: "Mr. Evans Mutari", title: "Rep. PS State Department of Forestry", image: "/images/KFS-Board/Evans-Mutari.jpg" },
  { name: "Alex Lemarkoko", title: "Secretary to the Board", image: "/images/KFS-Board/Alex Lemarkoko.jpg" },
];

export default function KFSBoardPage() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div className="p-4 md:p-12 bg-white min-h-screen">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl mb-4 text-[#023011]"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            KFS Board of Directors
          </h1>
          <p
            className="text-gray-600 mb-8 max-w-[800px] mx-auto"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            This section covers details regarding the board members of KFS.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-white border-2 border-gray-200 shadow-lg w-full sm:w-[350px] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              className="inline-block bg-[#6A961F] text-white px-4 py-1 mb-4 text-sm font-bold uppercase"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              Chairman
            </span>
            <div className="relative w-[150px] h-[150px] mx-auto mb-4">
              <Image
                src={ceo.image}
                alt={ceo.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-2 border-[#6A961F] shadow-sm"
              />
            </div>
            <h6
              className="text-lg font-medium text-black mb-2"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              {ceo.name}
            </h6>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
            >
              {ceo.title}
            </p>
          </div>
        </div>

        {/* Board Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between w-full max-w-[350px]"
            >
              <div>
                <div className="relative w-[120px] h-[120px] mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-2 border-[#6A961F] shadow-sm"
                  />
                </div>
                <h6
                  className="text-lg font-medium text-black mb-2"
                  style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                >
                  {member.name}
                </h6>
                <p
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
                >
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterBottom />

    </div>
  );
}