import React, { useRef, useEffect } from 'react';
import HeroVideo from '../assets/Hero.mp4';
import gsap from 'gsap';

const Mp1 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.to(text, {
      xPercent: -50,
      ease: 'none',
      repeat: -1,
      duration: 20,
    });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex flex-col items-center justify-center px-4 py-16">
      {/* Background Looping Text */}
      <div className="absolute top-[40%] left-0 w-[300%] transform -translate-y-1/2 z-0 pointer-events-none">
        <div
          ref={textRef}
          className="whitespace-nowrap text-[10vw] md:text-[20vw] font-extrabold text-secondary leading-none tracking-tight opacity-100"
        >
          HYDRO NAVIX HYDRO NAVIX HYDRO NAVIX HYDRO NAVIX
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex flex-col items-center gap-12 max-w-6xl mx-auto">
        <br />
        {/* Pill-Shaped Video (Reduced Height) */}
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

        {/* Text Section Below */}
        <div className="w-full md:w-3/4 text-center md:text-left">
          <h2 className="text-2xl lg:text-4xl font-semibold leading-snug text-secondary mt-2">
            Empowering Projects with <span className="text-secondary/70">Expert Manpower</span>
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
