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
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const width = window.innerWidth;
      let columns = 4;
      if (width < 768) {
        columns = 3;
      }

      const spacingX = 100 / (columns + 1);
      const rowHeight = 25;
      const spacingY = 25;
      const scrollEnd = 100 + Math.ceil(logos.length / columns) * spacingY;

      logoRefs.current.forEach((logo, index) => {
        if (!logo) return;

        let count = 0;
        let found = false;
        let row = 0;
        let col = 0;

        for (let r = 0; !found; r++) {
          for (let c = 0; c < columns; c++) {
            if ((r + c) % 2 === 0) {
              if (count === index) {
                row = r;
                col = c;
                found = true;
                break;
              }
              count++;
            }
          }
        }

        const x = spacingX * (col + 1);
        const y = 100 + row * rowHeight;

        gsap.set(logo, {
          top: `${y}vh`,
          left: `${x}%`,
          xPercent: -50,
          yPercent: -50,
          opacity: 1,
        });

        gsap.to(logo, {
          y: '-150vh',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${scrollEnd}%`,
            scrub: 0.5 + Math.random() * 0.5,
          },
        });
      });

      gsap.fromTo(
        headingRef.current,
        { opacity: 0 },
        {
          opacity: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div
        ref={sectionRef}
        className="relative w-full min-h-[220vh] overflow-hidden"
      >
        {/* Title in background */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-[10vw] font-bold uppercase tracking-wide text-center px-4"
          style={{
            whiteSpace: 'nowrap',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            color: '#000',
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        >
          OUR CLIENTS
        </h1>

        {/* Floating logos  */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {logos.map((src, i) => (
            <img
              key={i}
              ref={(el) => (logoRefs.current[i] = el)}
              src={src}
              alt={`Logo ${i}`}
              className="absolute w-20 sm:w-24 md:w-28 xl:w-32 object-contain"
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
