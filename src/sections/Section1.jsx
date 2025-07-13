import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../assets/about/image.png";

const Section1 = () => {
  const heroTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0.5, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
      <img
        src={image}
        alt="Marine Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 bg-secondary/30">
        <h1
          ref={heroTitleRef}
          className="text-primary text-center text-2xl md:text-4xl lg:text-6xl font-bold leading-none tracking-tight"
        >
          HydroNavix<br />Marine & Offshore
        </h1>
      </div>
    </div>
  );
};

export default Section1;
