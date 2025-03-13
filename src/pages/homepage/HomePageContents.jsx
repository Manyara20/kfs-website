import React from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/app/pages/homepage/HeroSection";
import MissionSection from "@/app/pages/homepage/MissionSection";
import CodeOfConductSection from "@/app/pages/homepage/CodeOfConductSection";
import AboutSection from "@/app/pages/homepage/AboutSection";
import NewsSection from "@/app/pages/homepage/NewsSection";
import CoreValues from "@/app/pages/homepage/CoreValues";
import Footer from "@/app/pages/homepage/Footer";
import MagazineSection from "@/app/pages/homepage/MagazineSection";
import Principles from "@/app/pages/homepage/Principles";
import PatnersSection from "@/app/pages/homepage/Patners";
import FooterBottom from "@/components/FooterBottom";


function HomePageContents() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <HeroSection />
      <MissionSection />
      <CodeOfConductSection />
      <AboutSection />
      <Principles/>
      <NewsSection/>
      <CoreValues/>
      <PatnersSection/>
      <MagazineSection/>
      <Footer/>
      <FooterBottom />
    </div>
  );
}

export default HomePageContents;