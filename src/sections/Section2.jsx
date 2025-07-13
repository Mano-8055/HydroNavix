import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      
      <div ref={leftRef}>
        <h2 className="text-sm font-medium uppercase tracking-wider text-secondary/80 mb-2">
          About Us
        </h2>
        <h3 className="text-xl md:text-4xl font-bold leading-tight mb-4">
          Unique Solution Provider for Marine, Offshore, Oil & Gas
        </h3>
        <p className="text-lg text-secondary/60">
          Based across the Middle East, India and Europe, we provide complete
          engineering and consulting solutions from design to delivery, all
          under one roof.
        </p>
      </div>

      <div ref={rightRef} className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600"
          alt="Offshore Engineering"
          className="w-full h-80 object-cover shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Section2;
