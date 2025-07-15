import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const logoRefs = useRef([]);

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Spotify_logo_with_text.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Systems_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nike_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Intel_logo_2020.svg',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle heading behind
      gsap.fromTo(
        headingRef.current,
        { opacity: 2 },
        {
          opacity: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );

      // Clean grid layout — no overlap
      const columns = 4;
      const spacingX = 100 / (columns + 1);
      const spacingY = 80 / (Math.ceil(logos.length / columns) + 1);

      logoRefs.current.forEach((logo, index) => {
        if (!logo) return;

        const col = index % columns;
        const row = Math.floor(index / columns);
        const x = spacingX * (col + 1) + (Math.random() * 6 - 3); // ±3% jitter
        const y = 100 + spacingY * row + Math.random() * 10;

        gsap.set(logo, {
          top: `${y}vh`,
          left: `${x}%`,
          xPercent: -50,
          opacity: 0,
          scale: 1,
        });

        gsap.to(logo, {
          y: '-150vh',
          opacity: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 0.4 + Math.random() * 0.6,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div
        ref={sectionRef}
        className="relative w-full min-h-[300vh] bg-white text-black overflow-hidden"
      >
        {/* Subtle fixed heading */}
        <h1
          ref={headingRef}
          className="text-6xl sm:text-8xl md:text-[12vw] font-extrabold uppercase tracking-wide text-center z-0"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            whiteSpace: 'nowrap',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            color: '#000',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        >
          OUR CLIENTS
        </h1>

        {/* Floating logos */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {logos.map((src, i) => (
            <img
              key={i}
              ref={(el) => (logoRefs.current[i] = el)}
              src={src}
              alt={`Logo ${i}`}
              className="absolute w-24 sm:w-28 md:w-32 xl:w-36 object-contain"
              style={{
                borderRadius: '0.25rem',
                opacity: 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
