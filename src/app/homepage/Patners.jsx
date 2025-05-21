"use client";

import { useEffect, useState } from "react";

const partners = [
  "https://whatthelogo.com/storage/logos/wwf-world-wildlife-fund-51730.png",
  "https://whatthelogo.com/storage/logos/african-wildlife-foundation-225883.png",
  "https://whatthelogo.com/storage/logos/the-united-nations-environment-programme-96813.png",
  "https://whatthelogo.com/storage/logos/usaid-united-states-agency-for-international-136898.png",
  "https://whatthelogo.com/storage/logos/fao-food-and-agriculture-organizations-98044.png",
  "https://whatthelogo.com/storage/logos/national-environment-management-authority-83365.png",
  "https://www.un.org/sites/un2.un.org/files/field/image/world-bank-logo_0.jpg",
  "https://whatthelogo.com/storage/logos/undp-136787.png",
  "https://www.kefri.org/assets/images/kefri_logo.png",
  "https://www.rhinoark.org/wp-content/uploads/2021/12/cropped-rhino-ark-logo-2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmDPqcVy-UyLi-DX0pMl0zEV51gSoq6ap-w&s"
];

const PartnersSection = () => {
  return (
    <section className="bg-[#e6f5e6] py-12">
      <h2 className="text-3xl font-bold text-center mb-8  text-[#0d3c00]">Our Partners</h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex space-x-8 animate-move" style={{ minWidth: "max-content" }}>
          {[...partners, ...partners].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index % partners.length}`}
              className="w-24 h-24 object-contain"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-move {
          animation: move 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
