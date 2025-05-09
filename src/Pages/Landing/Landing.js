import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Navbar from "../../Components/Navbar/Navbar";
import WhySection from "../../Components/WhySection/WhySection";

const Landing = () => {
  return (
    <div className="h-lvh w-lvw bg-amber-50 px-20 py-4">
      <Navbar />
      <HeroSection />
      <WhySection />
    </div>
  );
};

export default Landing;
