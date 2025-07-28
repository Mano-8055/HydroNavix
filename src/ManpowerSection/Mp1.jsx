import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assuming images are in a path relative to this component
// You might need to adjust the path based on your project structure
import aboutImg1 from '../assets/images/about1.png';
import aboutImg2 from '../assets/images/about2.png';

gsap.registerPlugin(ScrollTrigger);

const Mp1 = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    // GSAP animation context
    const ctx = gsap.context(() => {
      // Animate the first image
      gsap.fromTo(
        img1Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: img1Ref.current, start: 'top 80%' },
        }
      );
      // Animate the second image
      gsap.fromTo(
        img2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: img2Ref.current, start: 'top 85%' },
        }
      );
    });
    // Cleanup function to revert animations
    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left side content */}
      <div className="flex flex-col items-center lg:items-start justify-center px-5 md:px-10 py-16 lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl text-center md:text-left font-semibold leading-snug text-secondary mt-5 md:mt-0">
          Empowering Projects with <span className="text-secondary/70">Expert Manpower</span>
        </h2>
        <p className="text-sm lg:text-base text-justify text-secondary/80 mt-6 max-w-lg">
          Hydronavix provides highly qualified engineering personnel for marine, offshore, and oil & gas projects worldwide. Whether you need a single expert or an entire team — we deliver experienced professionals ready to support from design to delivery.
        </p>
      </div>
      {/* Right side images */}
      <div className="relative w-full lg:w-1/2 h-[320px] lg:h-auto overflow-visible flex justify-center lg:justify-end">
        <img ref={img1Ref} src={aboutImg1} alt="Manpower" className="w-full lg:w-[80%] h-full object-cover" />
        <div ref={img2Ref} className="absolute bottom-[-20%] left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 lg:top-1/2 lg:bottom-auto lg:transform lg:-translate-y-1/2 w-[220px] lg:w-[320px] shadow-xl">
          <img src={aboutImg2} alt="Overlay" className="w-full h-[220px] lg:h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Mp1;
