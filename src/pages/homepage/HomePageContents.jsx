import React from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/pages/homepage/HeroSection";
import MissionSection from "@/pages/homepage/MissionSection";
import CodeOfConductSection from "@/pages/homepage/CodeofConductSection";
import AboutSection from "@/pages/homepage/AboutSection";
import NewsSection from "@/pages/homepage/NewsSection";
import NewsCard from "@/pages/homepage/NewsCard";
import CoreValues from "@/pages/homepage/CoreValues";
import Footer from "@/pages/homepage/Footer";
import MagazineSection from "@/pages/homepage/MagazineSection";
import Principles from "@/pages/homepage/Principles";
import PatnersSection from "@/pages/homepage/Patners";
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
      <NewsCard/>
      <CoreValues/>
      <PatnersSection/>
      <MagazineSection/>
      <Footer/>
      <FooterBottom />
    </div>
  );
}

export default HomePageContents;