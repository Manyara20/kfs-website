"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdHelpCircle } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

// Helper function
const toProxyUrl = (url) => {
  const kfsBaseUrl = "https://www.kenyaforestservice.org/";
  if (url.startsWith(kfsBaseUrl)) {
    return url.replace(kfsBaseUrl, "/proxy/kfs/");
  }
  return url;
};

export default function FLEAAssessmentPage() {
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sections = ["Background", "Objectives", "Methodology", "Results"];

  const imageUrls = [
    toProxyUrl("/images/FLEA-1.jpg"),
    toProxyUrl("/images/FLEA-2.jpg"),
    toProxyUrl("/images/FLEA-3.jpg"),
    toProxyUrl("/images/FLEA-1.jpg"),
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div>
      <TopNavBar />
      <MainNavBar />

      {/* Background Container */}
      <div
        className="min-h-screen flex justify-center items-center p-8 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15,90,40,0.8), rgba(15,90,40,0.8)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leaf.png')" }}></div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={cardVariants}
          className="relative bg-white/95 border border-white/30 p-12 max-w-4xl w-full z-10"
        >
          {/* Title */}
          <h1 className="font-bold text-3xl text-[#0f5a28] mb-8 capitalize leading-snug tracking-wide">
            Forest Landscape and Ecological Assessment (FLEA)
          </h1>

          {/* Image Slider */}
          <div className="my-4">
            <Slider {...sliderSettings}>
              {imageUrls.map((url, index) => (
                <div key={index} className="px-2">
                  <div className="w-full h-48 relative border border-white/30 overflow-hidden">
                    <Image
                      src={url}
                      alt={`FLEA Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Description */}
          <div className="text-black text-[0.9rem] leading-relaxed space-y-6">
            <p>
              The Forest Landscape and Ecological Assessment (FLEA) is a strategic initiative by
              the Kenya Forest Service (KFS) to evaluate the ecological status of forest landscapes
              across Kenya. Launched under the Forest Conservation and Management Act 2016, FLEA
              aims to provide a comprehensive understanding of forest health and guide conservation
              efforts.
            </p>
            <p>
              This assessment integrates data on biodiversity, land use, and climate change impacts
              to support sustainable forest management and policy development.
            </p>
            <p>Key components of the FLEA initiative include:</p>
          </div>

          {/* Sections List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#1a3c34] text-white p-6 transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-medium capitalize text-[0.85rem] leading-6 tracking-wide">{section}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Controls */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
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

      <FooterBottom />
    </div>
  );
}
