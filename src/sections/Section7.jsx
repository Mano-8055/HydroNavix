import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HoverImageItem({ left, image, index }) {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const itemRef = useRef(null);

  const isDesktop = window.innerWidth >= 1024;

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, x: 80, rotationY: 10 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="group relative py-8 border-b border-secondary-200 hover:bg-secondary-50 transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center justify-between">
        <div className="font-syne text-xl md:text-2xl font-600 text-secondary-700 cursor-pointer group-hover:text-primary-600 transition-colors duration-300 z-10">
          {left}
        </div>
        <div className="w-8 h-8 bg-primary-500 group-hover:bg-accent-500 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-bold">→</span>
        </div>
      </div>

      {hovered && isDesktop && (
        <div
          className="fixed z-30 pointer-events-none shadow-2xl overflow-hidden border-4 border-white"
          style={{
            top: `${coords.y - 120}px`,
            left: `${coords.x}px`,
            width: "320px",
            height: "240px",
            transition: "opacity 0.2s ease",
          }}
        >
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover z-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
        </div>
      )}
    </div>
  );
}

const Section7 = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Parallax overlay
    gsap.to(overlayRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const services = [
    [
      "Ship, jack-up & platform design",
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600",
    ],
    [
      "New build project management",
      "https://images.unsplash.com/photo-1496347326319-2935d381b307?w=600",
    ],
    [
      "Ocean engineering & feasibility studies",
      "https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=600",
    ],
    [
      "Digitization & renewable energy systems",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    ],
    [
      "Port & shipyard development",
      "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=600",
    ],
    [
      "Marine electrical & mechanical integration",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    ],
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-8 md:px-16 bg-secondary-50 overflow-hidden">
      {/* Parallax Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50"
      />

      {/* Sharp Geometric Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-5 transform rotate-45 translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 opacity-5 transform -rotate-12 -translate-x-24 translate-y-24" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-syne text-4xl md:text-6xl font-800 text-secondary-900 mb-8">
            Experience & Scope of <span className="text-primary-600">Services</span>
          </h2>
          <div className="w-32 h-1 bg-accent-500 mx-auto" />
        </div>
        
        <div className="bg-white shadow-2xl p-12 md:p-16 border-t-8 border-primary-600 relative overflow-hidden">
          {/* Sharp Corner Accents */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-accent-400 opacity-10" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary-400 opacity-10" />
          
          {services.map(([left, image], i) => (
            <HoverImageItem key={i} left={left} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;