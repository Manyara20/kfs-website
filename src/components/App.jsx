import React from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import CodeOfConductSection from "@/components/CodeofConductSection";
import About from "@/components/About";
import NewsSection from "@/components/NewsSection";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import MagazineSection from "@/components/MagazineSection";
import Principles from "@/components/Principles";
import PatnersSection from "@/components/Patners";
import FooterBottom from "@/components/FooterBottom";


function App() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <HeroSection />
      <MissionSection />
      <CodeOfConductSection /> 
      <About />
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

export default App;
