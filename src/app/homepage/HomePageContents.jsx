// pages/index.js (or wherever your HomePageContents is located)
import React from "react";
import FooterBottom from "@/components/FooterBottom";
import HeroSection from "@/app/homepage/HeroSection";
import MissionSection from "@/app/homepage/MissionSection";
import CodeOfConductSection from "@/app/homepage/CodeofConductSection";
import NewsSection from "@/app/homepage/NewsSection";
import CoreValues from "@/app/homepage/CoreValues";
import Footer from "@/app/homepage/Footer";
import FeedSection from "@/app/homepage/FeedSection";
import Principles from "@/app/homepage/Principles";
import PatnersSection from "@/app/homepage/Patners";
import Sidebar from "@/app/homepage/Sidebar";
import MomentsSection from "@/app/homepage/MomentsSection";
import Exploreourforests from "@/components/Exploreourforests";

function HomePageContents() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <CodeOfConductSection />
      <Exploreourforests/>
      <Principles />
      <CoreValues />
      <MomentsSection />
      <PatnersSection />
      <NewsSection />
      <FeedSection />
      <Footer />
      <FooterBottom />
      <Sidebar/>
    </div>
  );
}

export default HomePageContents;