"use client";

import Link from "next/link";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import InfoIcon from "@mui/icons-material/Info";

const ceo = {
  name: "Mr. Titus Kipkoech Korir",
  title: "Chairman",
  image: "/images/KFS-Board/Titus-Korir.jpg",
  id: "titus-korir",
};

const boardMembers = [
  { id: "jane-munka", name: "Ms. Jane Simita Munka", title: "Rep. CFA", image: "/images/KFS-Board/Jane-Simitia-Munka.jpg" },
  { id: "kunal-chowdhari", name: "Kunal Chowdhari", title: "Rep. Timber Industry and Chairman, Finance and Resource Mobilization Committee", image: "/images/KFS-Board/Kunal-Chowdhari.jpg" },
  { id: "abdala-komesha", name: "Abdala Komesha", title: "Rep. IG, National Police Service", image: "/images/KFS-Board/Abdala-Komesha.jpg" },
  { id: "isabella-kogei", name: "Isabella Kogei", title: "Rep. PS National Treasury", image: "/images/KFS-Board/Isabella-Kogei.jpg" },
  { id: "george-muthike", name: "Dr. George Muthike", title: "Rep. KEFRI and Chairman, Technical, Planning, Development and KFC Committee", image: "/images/KFS-Board/Dr. George Muthike.jpg" },
  { id: "doris-mutta", name: "Dr. Doris Mutta", title: "Rep. FSK. Chair, Audit Committee", image: "/images/KFS-Board/Dr. Doris Mutta.jpg" },
  { id: "ahmed-mohammed", name: "Ahmed Mohammed", title: "Rep. CoG and Chairman, Human Resource and Administration Committee", image: "/images/KFS-Board/Ahmed-Mohammed.jpg" },
  { id: "evans-mutari", name: "Mr. Evans Mutari", title: "Rep. PS State Department of Forestry", image: "/images/KFS-Board/Evans-Mutari.jpg" },
  { id: "alex-lemarkoko", name: "Alex Lemarkoko", title: "Secretary to the Board", image: "/images/KFS-Board/Alex Lemarkoko.jpg" },
];

export default function KFSBoardPage() {
  return (
    <div>
      <MainNavBar />
      <div className="bg-white min-h-screen px-4 md:px-6 py-4">
        {/* Title and Description */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#023011] mb-2 font-['Peugeot',Helvetica,sans-serif] capitalize tracking-tight">
            KFS Board of Directors
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto font-['Peugeot',Helvetica,sans-serif]">
            This section covers details regarding the board members of KFS.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md w-full sm:w-80 p-4 text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="inline-block bg-[#6A961F] text-white text-xs font-bold uppercase px-3 py-1 mb-2 font-['Peugeot',Helvetica,sans-serif]">
              Chairman
            </span>
            <div className="relative w-54 h-54 mx-auto mb-2">
              <Image
                src={ceo.image}
                alt={ceo.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-[#6A961F] shadow-sm"
              />
            </div>
            <h6 className="text-base font-semibold text-[#023011] mb-1 uppercase font-['Peugeot',Helvetica,sans-serif]">
              {ceo.name}
            </h6>
            <p className="text-gray-600 text-sm mb-2 capitalize font-['Peugeot',Helvetica,sans-serif]">
              {ceo.title}
            </p>
            <Link href={`/about/board/${ceo.id}`} passHref>
              <button
                className="text-[#6A961F] hover:bg-[#6A961F]/10 p-2 rounded-full transition-colors duration-200"
                aria-label="View Profile"
              >
                <InfoIcon fontSize="small" />
              </button>
            </Link>
          </div>
        </div>

        {/* Board Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative w-53 h-53 mx-auto mb-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-[#6A961F] shadow-sm"
                  />
                </div>
                <h6 className="text-base font-semibold text-[#023011] mb-1 uppercase font-['Peugeot',Helvetica,sans-serif]">
                  {member.name}
                </h6>
                <p className="text-gray-600 text-sm mb-2 capitalize font-['Peugeot',Helvetica,sans-serif]">
                  {member.title}
                </p>
              </div>
              <Link href={`/about/board/${member.id}`} passHref>
                <button
                  className="text-[#6A961F] hover:bg-[#6A961F]/10 p-2 rounded-full transition-colors duration-200"
                  aria-label="View Profile"
                >
                  <InfoIcon fontSize="small" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}