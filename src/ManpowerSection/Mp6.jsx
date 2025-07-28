import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope } from 'react-icons/fa';

// Assuming image is in a path relative to this component
import ImageCTA from '../assets/images/hero.png';

gsap.registerPlugin(ScrollTrigger);

const Mp6 = () => {
  const section6Ref = useRef(null);

  useEffect(() => {
    const el = section6Ref.current;
    // Animate the section on scroll
    gsap.fromTo(
      el,
      { opacity: 0.5, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ImageCTA})`, zIndex: 0 }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/60 z-10" />
      
      {/* Content */}
      <section ref={section6Ref} className="relative z-20 text-primary mx-2 md:mx-20 my-20 px-10 py-14 md:py-20 flex justify-center items-center">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
            Need support? <span className="text-primary">We're here</span>
          </h2>
          <p className="text-sm md:text-lg text-primary mb-6">
            Hydronavix can step in with the right people — at the right time.
          </p>
          <a
            href="mailto:manpower@hydronavixmarine.com"
            className="flex items-center gap-2 bg-primary text-secondary text-md font-medium rounded-full px-6 py-3 w-fit hover:bg-accent hover:text-primary hover:shadow-lg transform transition-all duration-300 ease-in-out"
          >
            <FaEnvelope /> manpower@hydronavixmarine.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mp6;
