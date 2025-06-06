"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import FooterBottom from "@/components/FooterBottom";

export default function video() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("audio");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[linear-gradient(rgba(15,90,40,0.8),rgba(15,90,40,0.8)),url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')]
      bg-cover bg-center bg-fixed relative p-8 overflow-hidden"
    >
      {/* subtle leaf pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] pointer-events-none"
        aria-hidden="true"
      />

      <TopNavBar />
      <MainNavBar />

      <main className="flex-grow flex justify-center items-start pt-8 z-10">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={cardVariants}
          className="bg-white bg-opacity-95 max-w-4xl w-full p-12 border border-white border-opacity-30 rounded-none relative z-20"
        >
          {/* Tabs */}
          <nav className="mb-8 border-b border-green-900 flex gap-8">
            <button
              onClick={() => setActiveTab("audio")}
              className={`pb-2 font-bold text-lg ${
                activeTab === "audio"
                  ? "border-b-4 border-green-900 text-green-900"
                  : "text-green-700 hover:text-green-900"
              } transition-colors`}
            >
              Audio Service Charter
            </button>
            <button
              onClick={() => setActiveTab("signlanguage")}
              className={`pb-2 font-bold text-lg ${
                activeTab === "signlanguage"
                  ? "border-b-4 border-green-900 text-green-900"
                  : "text-green-700 hover:text-green-900"
              } transition-colors`}
            >
              Sign Language
            </button>
          </nav>

          {activeTab === "audio" && (
            <>
              <h1 className="font-peugeot font-extrabold text-3xl text-green-900 mb-8 capitalize">
                Audio Service Charter
              </h1>
              <p className="font-peugeot font-normal text-black text-base leading-relaxed mb-6 tracking-wide">
                Kenya Forest Service (KFS) is committed to providing accessible services to all,
                including individuals with visual or hearing impairments. Our Audio Service Charter
                ensures effective communication and inclusion in all our service delivery points.
              </p>
              <p className="font-peugeot font-normal text-black text-base leading-relaxed mb-6 tracking-wide">
                Watch Our Sign Language Charter Video (Note: Update to Audio if available):
              </p>
              <div className="w-full rounded-lg overflow-hidden">
                {isLoaded && (
                  <iframe
                    className="w-full h-72 sm:h-96 rounded-lg border-0"
                    src="https://www.youtube.com/embed/674CgQpSzOk?si=0uD8HSaohm-nPCzx"
                    title="Sign Language Service Charter"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </>
          )}

          {activeTab === "signlanguage" && (
            <section>
              <h1 className="font-peugeot font-extrabold text-3xl text-[#0f5a28] mb-8 capitalize">
                Sign Language Service Charter
              </h1>
              <p className="font-peugeot font-normal text-black text-base leading-relaxed mb-6 tracking-wide">
                Kenya Forest Service (KFS) is committed to providing accessible services to all,
                including individuals with hearing impairments. Our Sign Language Service Charter
                ensures effective communication and inclusion in all our service delivery points.
              </p>
              <p className="font-peugeot font-normal text-black text-base leading-relaxed mb-6 tracking-wide">
                Watch Our Sign Language Charter Video:
              </p>
              <div className="w-full rounded-lg overflow-hidden">
                {isLoaded && (
                  <iframe
                    className="w-full h-72 sm:h-96 rounded-lg border-0"
                    src="https://www.youtube.com/embed/ZXXwvbU-zDA?si=Z8sN8oIYal0arF2-"
                    title="Sign Language Service Charter"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </section>
          )}
        </motion.div>
      </main>

      <FooterBottom />
    </div>
  );
}
