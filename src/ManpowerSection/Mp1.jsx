import React, { useRef, useEffect } from 'react';
import HeroVideo from '../assets/manpower.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mp1 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {

    // Fade-up animation for the section
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen w-full flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="relative z-10 w-full flex flex-col items-center gap-12 max-w-6xl mx-auto">
        <div className="w-[90vw] md:w-[65vw] md:aspect-[2.6/1] rounded-[100px] overflow-hidden shadow-2xl bg-secondary">
          <video
            src={HeroVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="w-full md:w-3/4 text-center md:text-left">
          <h2
            className="text-2xl lg:text-4xl font-semibold leading-snug text-secondary mt-2"
          >
            Empowering Projects with{' '}
            <span className="text-secondary/70">Expert Manpower</span>
          </h2>
          <p className="text-sm lg:text-base font-medium text-secondary/80 mt-6 text-justify">
            Hydronavix provides highly qualified engineering personnel for marine, offshore, and oil & gas projects worldwide.
            Whether you need a single expert or an entire team we deliver experienced professionals ready to support from design to delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mp1;
