'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";
import Image from "next/image";

export default function MenengaiForestPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("forest-activities");
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFontSizeChange = (increase) => {
    setFontSize((prev) => {
      const newSize = increase ? prev + 1 : prev - 1;
      return Math.max(12, Math.min(20, newSize));
    });
  };

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
    { id: "forest-activities", label: "Forest Activities" },
    { id: "how-to-get-there", label: "How to Get There" },
    { id: "park-entry-fee", label: "Park Entry Fee" },
    { id: "key-features", label: "Key Features" },
    { id: "attractions", label: "Attractions" },
    { id: "contact-us", label: "Contact Us" },
  ];

  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" 
           style={{ backgroundImage: `url('/images/background-template/background.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Menengai Forest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Peugeot',Helvetica,sans-serif] text-lg md:text-xl text-white/90 max-w-2xl"
          >
            Explore the majestic Menengai Caldera and its vibrant ecosystem in the Great Rift Valley
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
             style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
      </div>

      {/* Tab Section */}
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-['Peugeot',Helvetica,sans-serif] font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-white p-8"
          >
            {/* Forest Activities Tab */}
            {activeTab === "forest-activities" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Forest Activities
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    "Educational tours",
                    "Nature walking",
                    "Bird watching",
                    "Butterfly watching",
                    "Hiking",
                    "Picnicking",
                    "Camping",
                    "Rock climbing",
                    "Cycling",
                    "Horse riding",
                    "Jogging",
                  ].map((activity, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* How to Get There Tab */}
            {activeTab === "how-to-get-there" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  How to Get There & Around
                </h2>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Getting There
                </h3>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Menengai Caldera is located in Nakuru town, 160 km west of Nairobi. To reach it, take the road towards Nairobi, turn left after the railway bridge, turn right after 300 meters onto Milimani Road, and finally, turn left after 700 meters onto Menengai Road. The main gate is 1.2 km from this turn.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Getting Around
                </h3>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The forest features a network of driving tracks and walking trails.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] mb-2" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Guides
                </h3>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Experienced guides are available at a fee. Inquire about guiding services at the main gate.
                </p>
              </section>
            )}

            {/* Park Entry Fee Tab */}
            {activeTab === "park-entry-fee" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Park Entry Fee
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Forest conservation fees are charged at the entry point. For current rates, contact the provided details in the Contact Us section.
                </p>
              </section>
            )}

            {/* Key Features Tab */}
            {activeTab === "key-features" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Key Features
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    "The Menengai Caldera, one of the largest in the world.",
                    "Geothermal energy production site.",
                    "Fumaroles showcasing volcanic activity.",
                    "Caves with geological significance.",
                    "Viewpoint offering panoramic vistas.",
                    "Curio shops and campsites for visitors.",
                    "Visiting hours: 6:00 am to 6:00 pm, unless overnight stay arranged.",
                    "Wear comfortable shoes, lightweight clothing, and carry binoculars.",
                    "No single-use plastic bottles allowed.",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Attractions Tab */}
            {activeTab === "attractions" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Attractions
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  The Menengai Caldera in Menengai Forest Station is a large shield volcano located in the Great Rift Valley, 10 km North of Nakuru town. It covers an area of approximately 90 km², with a diameter of 12 km and a depth of almost half a kilometer. It is one of the largest calderas in the world and the second most visited caldera globally.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Biodiversity
                </h3>
                <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Flora
                </h4>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-4" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Over 169 species of flowering plants and 17 species of grasses have been recorded, including Leleshwa (Tarconanthus camphorates), Euphorbia species, and Acacia species. Common grasses include geothermal grass (Fibristylis exilis) and Boma Rhode grass.
                </p>
                <h4 className="font-['Peugeot',Helvetica,sans-serif] font-medium text-[#0f5a28] text-lg mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Fauna
                </h4>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Menengai is home to various mammals, including Rock Hyrax, Tree Hyrax, Olive Baboons, Black-faced Vervet Monkeys, Mountain Reedbucks, Kirk’s Dik-diks, and Slender Mongoose.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Bird species found here include Varreaux Eagles (exclusive to Menengai in Nakuru), Abyssinian Ground Hornbills, Lesser Spotted Eagles, African Marsh Harriers, Horus Swift Apus Hours, Turn-tailed Ravens, and Red-winged Starlings.
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-6" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Insects include Arachnids, Molluscs, and diverse butterfly species.
                </p>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Top Attractions
                </h3>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
                  {[
                    "The Menengai Caldera",
                    "Viewpoint",
                    "Geothermal energy production",
                    "Caves",
                    "Nature trails",
                    "Picnic sites",
                    "Fumaroles",
                    "Curio shops and campsites",
                  ].map((attraction, index) => (
                    <li
                      key={index}
                      className="bg-[#1a3c34] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-4"
                      style={{ fontSize: `${fontSize * 0.85}px` }}
                    >
                      <span className="font-['Peugeot',Helvetica,sans-serif] font-medium text-white text-[0.85rem] leading-[1.6] capitalize">
                        {attraction}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="font-['Peugeot',Helvetica,sans-serif] font-semibold text-[#0f5a28] text-xl mb-3 mt-6" style={{ fontSize: `${fontSize * 0.95}px` }}>
                  Photo Gallery
                </h3>
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
            )}

            {/* Contact Us Tab */}
            {activeTab === "contact-us" && (
              <section>
                <h2 className="font-['Peugeot',Helvetica,sans-serif] font-bold text-[#0f5a28] text-2xl mb-4" style={{ fontSize: `${fontSize * 1.1}px` }}>
                  Contact Us
                </h2>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Forest Manager: +254794869229 / +254755839561
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Kenya Forest Service
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Karura, Off Kiambu Road
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  P.O. Box 30513 – 00100 Nairobi, Kenya
                </p>
                <p className="font-['Peugeot',Helvetica,sans-serif] font-normal text-black leading-[1.8] text-[0.9rem] mb-2" style={{ fontSize: `${fontSize * 0.9}px` }}>
                  Email:{" "}
                  <a href="mailto:zmnakuru@kenyaforestservice.org" className="text-blue-600 underline">
                    zmnakuru@kenyaforestservice.org
                  </a>
                  ,{" "}
                  <a href="mailto:info@kenyaforestservice.org" className="text-blue-600 underline">
                    info@kenyaforestservice.org
                  </a>
                  ,{" "}
                  <a href="mailto:ecotourism@kenyaforestservice.org" className="text-blue-600 underline">
                    ecotourism@kenyaforestservice.org
                  </a>
                </p>
              </section>
            )}
          </motion.div>

          <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <button
              onClick={() => handleFontSizeChange(true)}
              className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
              aria-label="Increase font size"
            >
              <IoMdHelpCircle className="text-white text-lg" />
            </button>
            <button
              onClick={() => handleFontSizeChange(false)}
              className="bg-[#1a3c34] p-2 rounded-full hover:bg-green-800"
              aria-label="Decrease font size"
            >
              <IoMdHelpCircle className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}