import React from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import CodeOfConductSection from "@/components/CodeOfConductSection";
import About from "@/components/About";

function App() {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <HeroSection />
      <MissionSection />
      <CodeOfConductSection />
      <About />
    </div>
  );
}

export default App;
