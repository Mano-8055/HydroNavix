import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleBg from '../assets/drone/app.png'; // replace with your background image

gsap.registerPlugin(ScrollTrigger);

const DroneSection1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.fade-up');

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Title with Background Image */}
      <div
        className="relative h-[280px] md:h-[300px] cursor-follow flex items-center justify-center rounded-[3rem] overflow-hidden mb-10"
        style={{
          backgroundImage: `url(${TitleBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/50 z-0" />
        <p className="fade-up relative z-10 text-primary text-2xl md:text-4xl text-center font-semibold px-4">
          Setting a New Standard in <br />Marine & Offshore Intelligence
        </p>
      </div>

      {/* Description */}
      <p className="fade-up text-secondary/70 text-lg md:text-xl font-medium text-justify">
        At HydroNavix, we harness cutting-edge drone technology to deliver high-precision inspection, modelling, and mapping services specifically tailored for the marine and offshore environment. From cargo vessels and oil rigs to port infrastructure and underwater assets, we empower clients with faster, safer, and smarter data access.
        <br /><br />
        All our drone operations are executed either by our in-house specialists or in collaboration with certified third-party partners—each fully licensed and compliant with UAE aviation and maritime safety regulations. Whether it's aerial or underwater, safety and precision are always guaranteed.
      </p>
    </div>
  );
};

export default DroneSection1;
