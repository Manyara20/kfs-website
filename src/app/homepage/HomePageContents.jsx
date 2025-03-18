import React from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/app/homepage/HeroSection";
import MissionSection from "@/app/homepage/MissionSection";
import CodeOfConductSection from "@/app/homepage/CodeofConductSection";
import NewsSection from "@/app/homepage/NewsSection";
import CoreValues from "@/app/homepage/CoreValues";
import Footer from "@/app/homepage/Footer";
import FeedSection from "@/app/homepage/FeedSection";
import Principles from "@/app/homepage/Principles";
import PatnersSection from "@/app/homepage/Patners";
import FooterBottom from "@/components/FooterBottom";


function HomePageContents() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <HeroSection />
      <MissionSection />
      <CodeOfConductSection />
      <Principles/>
      <NewsSection/>
      <CoreValues/>
      <PatnersSection/>
      <FeedSection/>
      <Footer/>
      <FooterBottom />
    </div>
  );
}

export default HomePageContents;