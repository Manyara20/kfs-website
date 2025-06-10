"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import Image from "next/image";

export default function MenengaiForestPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const galleryImages = [
    {
      src: "/images/menengai/forest1.jpg",
      alt: "Lush green Menengai Forest",
      caption: "Lush green Menengai Forest",
    },
    {
      src: "/images/menengai/crater.jpg",
      alt: "Menengai Crater View",
      caption: "Menengai Crater View",
    },
    {
      src: "/images/menengai/hiking.jpg",
      alt: "Hiking Trails",
      caption: "Hiking Trails",
    },
  ];

  const tabs = [
    { id: "overview", title: "Menengai Forest" },
    { id: "biodiversity", title: "Biodiversity" },
    { id: "attractions & activities", title: "Attractions & Activities" },
    { id: "access", title: "Getting There & Around" },
    { id: "guidelines", title: "Guidelines & Info" },
    { id: "contact", title: "Contact Info" },
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />

      <div
        className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start p-8 relative overflow-hidden"
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
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-white/95 p-12 max-w-6xl w-full relative z-10 border border-white/30"
        >
          <h1 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] mb-8 text-[2.2rem] leading-[1.3] capitalize">
            Menengai Forest Ecosystem
          </h1>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-[1rem] capitalize ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#0f5a28] text-[#0f5a28]"
                    : "text-[#333] hover:text-[#0f5a28]"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-4">
                The Menengai Caldera in Menengai Forest Station is a large shield
                volcano located in the Great Rift Valley, 10 km North of Nakuru
                town. It covers an area of approximately 90 km², with a diameter
                of 12 km and a depth of almost half a kilometer. It is one of the
                largest calderas in the world and the second most visited caldera
                globally.
              </p>
            </div>
          )}

          {activeTab === "biodiversity" && (
            <div>
              <h3 className="font-semibold text-[#0f5a28] mb-2">Flora</h3>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-4">
                Over 169 species of flowering plants and 17 species of grasses
                have been recorded, including Leleshwa (Tarconanthus camphorates),
                Euphorbia species, and Acacia species. Common grasses include
                geothermal grass (Fibristylis exilis) and Boma Rhode grass.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Fauna</h3>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-2">
                Menengai is home to various mammals, including Rock Hyrax, Tree
                Hyrax, Olive Baboons, Black-faced Vervet Monkeys, Mountain
                Reedbucks, Kirk’s Dik-diks, and Slender Mongoose.
              </p>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-2">
                Bird species found here include Varreaux Eagles (exclusive to
                Menengai in Nakuru), Abyssinian Ground Hornbills, Lesser Spotted
                Eagles, African Marsh Harriers, Horus Swift Apus Hours,
                Turn-tailed Ravens, and Red-winged Starlings.
              </p>
              <p className="text-[#333] text-[1rem] leading-[1.8] mb-6">
                Insects include Arachnids, Molluscs, and diverse butterfly species.
              </p>
            </div>
          )}

          {activeTab === "attractions & activities" && (
            <div>
              <h3 className="font-semibold text-[#0f5a28] mb-4">Top Attractions</h3>
              <ol className="list-decimal pl-6 space-y-2 text-[#333] text-[1rem] leading-[1.8]">
                <li>The Menengai Caldera</li>
                <li>Viewpoint</li>
                <li>Geothermal energy production</li>
                <li>Caves</li>
                <li>Nature trails</li>
                <li>Picnic sites</li>
                <li>Fumaroles</li>
                <li>Facilities such as Curio shops and Campsites</li>
              </ol>

              <div>
              <h3 className="font-semibold text-[#0f5a28] mb-4">Activities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#333] text-[1rem] leading-[1.8]">
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Educational tours</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Nature walking</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Bird watching</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Butterfly watching</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Hiking</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Picnicking</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Camping</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Rock climbing</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Cycling</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Horse riding</li>
                <li className="bg-[#1a3c34] text-white p-3 rounded-md">Jogging</li>
              </ul>
            </div>
            </div>
            
          )}

          {activeTab === "access" && (
            <div className="space-y-4 text-[#333] text-[1rem] leading-[1.8]">
              <h3 className="font-semibold text-[#0f5a28] mb-2">Getting There</h3>
              <p>
                Menengai Caldera is located in Nakuru town, 160 km west of Nairobi.
                To reach it, take the road towards Nairobi, turn left after the
                railway bridge, turn right after 300 meters onto Milimani Road, and
                finally, turn left after 700 meters onto Menengai Road. The main
                gate is 1.2 km from this turn.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Getting Around</h3>
              <p>
                The forest features a network of driving tracks and walking trails.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Guides</h3>
              <p>
                Experienced guides are available at a fee. Inquire about guiding
                services at the main gate.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Entry Fees</h3>
              <p>
                Forest conservation fees are charged at the entry point. For current
                rates, contact the provided details.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Visiting Hours</h3>
              <p>Visitors are allowed from 6:00 am to 6:00 pm unless they arrange for an overnight stay.</p>
            </div>
          )}

          {activeTab === "guidelines" && (
            <div className="space-y-4 text-[#333] text-[1rem] leading-[1.8]">
              <h3 className="font-semibold text-[#0f5a28] mb-2">What to Wear and Carry</h3>
              <p>
                Wear comfortable walking shoes, trainers, and loose-fitting lightweight clothing.
                A hat, sunglasses, and sunscreen are useful. Carry binoculars and a camera.
              </p>

              <h3 className="font-semibold text-[#0f5a28] mb-2">Important Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be careful at viewpoints and cliffs as they are deep and dangerous.</li>
                <li>Do not feed wild animals.</li>
                <li>Do not start fires.</li>
                <li>Do not remove plants, animals, or their parts.</li>
                <li>Do not deface trees, rocks, or landmarks.</li>
                <li>Avoid excessive noise.</li>
                <li>Drive cautiously and keep speeds below 40 kph.</li>
                <li>Dispose of all litter properly.</li>
                <li>Stay on designated tracks and paths.</li>
                <li>Use a guide for an enriched experience.</li>
                <li>Single-use plastic bottles are not allowed.</li>
              </ul>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4 text-[#333] text-[1rem] leading-[1.8]">
              <h3 className="font-semibold text-[#0f5a28] mb-2">Contact Information</h3>
              <p>Forest Manager: +254794869229 / +254755839561</p>
              <p>Kenya Forest Service</p>
              <p>Karura, Off Kiambu Road</p>
              <p>P.O. Box 30513 – 00100 Nairobi, Kenya</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:zmnakuru@kenyaforestservice.org"
                  className="text-[#0f5a28] underline"
                >
                  zmnakuru@kenyaforestservice.org
                </a>
                ,{" "}
                <a
                  href="mailto:info@kenyaforestservice.org"
                  className="text-[#0f5a28] underline"
                >
                  info@kenyaforestservice.org
                </a>
                ,{" "}
                <a
                  href="mailto:ecotourism@kenyaforestservice.org"
                  className="text-[#0f5a28] underline"
                >
                  ecotourism@kenyaforestservice.org
                </a>
              </p>
            </div>
          )}

          {/* Gallery Section */}
          <section className="mt-12 mb-12">
            <h2 className="text-[#0f5a28] text-2xl mb-4 font-bold">
              Menengai Forest Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 overflow-hidden rounded-md shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                  <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <FooterBottom />
    </div>
  );
}
