import React, { useEffect, useRef } from "react";
import Hero from "../careers/Hero";
import WhyHydronavix from "../careers/Whywork";
import Openpos from "../careers/Openpos";      
import Mp6 from "../ManpowerSection/Mp6"; 

const Career = () => {
  const componentRef = useRef(null); 
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={componentRef} className="text-secondary pt-10 relative">
      <Hero />      
      <WhyHydronavix />
      <div id="open-roles">
      <Openpos />
      </div>
      <Mp6 />
    </div>
  );
};

export default Career;
