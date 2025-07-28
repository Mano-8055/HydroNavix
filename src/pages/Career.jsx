import React, { useEffect, useRef } from "react";
import Hero from "../careers/Hero";
import WhyHydronavix from "../careers/Whywork";
import Openpos from "../careers/Openpos";      
  

const Career = () => {
  const componentRef = useRef(null); 
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={componentRef} className="text-secondary py-10 relative">
      <Hero />      
      <WhyHydronavix />
      <Openpos />
    </div>
  );
};

export default Career;
