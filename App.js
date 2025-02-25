// App.js
import React from 'react';
import TopNavBar from './components/TopNavBar';  
import MainNavBar from './components/MainNavBar'; 
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import CodeOfConductSection from './components/CodeofConductSection';
import About from './components/About'
function App() {
  return (
    <div>
      <TopNavBar />  {/* Existing Top Navigation Bar */}
      <MainNavBar />  {/* New Main Navigation Bar with Dropdowns */}
      <HeroSection/>
      <MissionSection/>
      <CodeOfConductSection/>
      <About/>
      {/* Other components and content */}
    </div>
  );
}

export default App;
