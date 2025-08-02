import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BgImage from '../assets/drone/across.png'; 

gsap.registerPlugin(ScrollTrigger);

const DroneSection5 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
     className="relative h-[60vh] md:h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h2
          ref={textRef}
          className="text-white text-2xl md:text-4xl font-bold leading-snug"
        >
          Regional Reach Deployed Across the GCC
        </h2>
        <p className="text-white/80 text-base md:text-lg mt-4">
          HydroNavix operates across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah,
          and key offshore locations throughout the GCC. We are mobilized,
          certified, and always ready.
        </p>
      </div>
    </section>
  );
};

export default DroneSection5;
