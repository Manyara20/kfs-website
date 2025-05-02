// pages/KFSGalleryPage.js
"use client";

import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Photo gallery data
const photos = [
  { id: 1, src: "/images/Photogallery/image-1.jpg", caption: "0B9A6344" },
  { id: 2, src: "/images/Photogallery/image-2.jpg", caption: "0B9A6351" },
  { id: 3, src: "/images/Photogallery/image-3.jpg", caption: "2K5A9412" },
  { id: 4, src: "/images/Photogallery/image-4.jpg", caption: "OLYMPUS DIGITAL CAMERA" },
  { id: 5, src: "/images/Photogallery/image-5.jpg", caption: "A well conserved catchment forest in Karura Forest" },
  { id: 6, src: "/images/Photogallery/image-6.jpg", caption: "Bamboo" },
  { id: 7, src: "/images/Photogallery/image-7.jpg", caption: "DSC09809" },
  { id: 8, src: "/images/Photogallery/image-8.jpg", caption: "Ecotourism Boardwalk in Gazi Kwale County" },
  { id: 9, src: "/images/Photogallery/image-9.jpg", caption: "Ecotourism Gazi Boardwalk" },
  { id: 10, src: "/images/Photogallery/image-10.jpg", caption: "Ngare Ndare" },
  { id: 11, src: "/images/Photogallery/image-11.jpg", caption: "Walking path inside Michuki Memorial Park" },
  { id: 12, src: "/images/Photogallery/image-12.jpg", caption: "Waterfalls in Kereita Forest" },
];

export default function KFSGalleryPage() {
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
            KFS Photo Gallery
          </h1>
          <p
            className="text-gray-600 mb-8 max-w-[800px] mx-auto"
            style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
          >
            Our moments through the lens — showcasing conservation, forestry, and nature.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white border-2 border-gray-200 shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full max-w-[300px]"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p
                className="text-sm text-center text-gray-700"
                style={{ fontFamily: "'Peugeot', Helvetica, sans-serif" }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}
