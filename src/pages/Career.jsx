import React, { useRef } from "react";
import Hero from "../careers/Hero";
import WhyHydronavix from "../careers/Whywork";
import Openpos from "../careers/Openpos";      
  

const Career = () => {
  const componentRef = useRef(null); 

  return (
    <div ref={componentRef} className="text-secondary py-10 relative">
      <Hero />      
      <WhyHydronavix />
      <Openpos />
    </div>
  );
};

export default Career;
