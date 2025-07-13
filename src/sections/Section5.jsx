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
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: index * 0.15,
        ease: "power2.out",
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
      className="group relative grid grid-cols-1 md:grid-cols-2 py-6 border-b border-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="text-lg font-medium text-secondary/70 cursor-pointer group-hover:text-secondary z-20">
        {left}
      </div>

      {hovered && isDesktop && (
        <div
          className="fixed z-30 pointer-events-none shadow-xl overflow-hidden"
          style={{
            top: `${coords.y}px`,
            left: `${coords.x}px`,
            width: "384px",
            height: "240px",
            transition: "opacity 0.2s ease",
          }}
        >
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

const Section5 = () => {
  const items = [
    [
      "Ship, jack-up & platform design",
      "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg",
    ],
    [
      "New build project management",
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600",
    ],
    [
      "Ocean engineering & feasibility studies",
      "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg",
    ],
    [
      "Digitization & renewable energy systems",
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600",
    ],
    [
      "Port & shipyard development",
      "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg",
    ],
    [
      "Marine electrical & mechanical integration",
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600",
    ],
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience & Scope of Services
          </h2>
        </div>
        <div className="border-t border-gray-300 relative">
          {items.map(([left, image], i) => (
            <HoverImageItem key={i} left={left} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
