import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {


      gsap.fromTo(
        ".rd-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".rd-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".rd-subtext",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".rd-subtext",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".rd-card",
        {
          opacity: 0,
          y: 60,
          rotationX: 20,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".rd-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".rd-followup",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".rd-followup",
            start: "top 90%",
          },
        }
      );

      gsap.fromTo(
        ".rd-quote",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".rd-quote",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentRD = [
    "AI-driven engineering workflows",
    "Real-time digital twin deployment",
    "Virtual and augmented reality for engineering collaboration",
    "Predictive maintenance and analytics",
    "Integration of sensors and cyber-physical systems",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-20 max-w-7xl mx-auto overflow-hidden"
    >
      
      <div className="text-center mb-10">
        <h2 className="rd-heading text-2xl sm:text-4xl font-semibold text-secondary mb-2.5">
          R&D AND OUR 2040 OUTLOOK
        </h2>
        <p className="rd-subtext text-lg md:text-xl font-normal text-secondary/60 max-w-4xl mx-auto leading-relaxed">
          Innovation is at the core of Hydronavix. Our current R&D efforts focus on
        </p>
      </div>

      <div className="items-center">
        <div className="space-y-4 rd-grid">
          {currentRD.map((item, index) => (
            <div
              key={index}
              className="rd-card px-2 py-6 border-b-2 border-secondary/30"
            >
              <div className="flex items-start space-x-4">
                <p className="text-lg md:text-xl font-medium text-secondary-700 leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="rd-followup text-lg md:text-xl font-medium leading-relaxed mb-2.5 text-center text-secondary/60 mt-10">
          Hydronavix aims to lead the transformation toward a smarter, automated,
          and more connected marine industry.
        </p>

        <p className="rd-quote text-xl md:text-2xl font-semibold text-secondary italic text-center leading-tight">
          "The ocean will remain constant <br /> but how we work with it must evolve."
        </p>
      </div>
    </section>
  );
};

export default Section6;
