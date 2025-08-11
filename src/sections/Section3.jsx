import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vision from '../assets/about/vision.png'

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -100, rotationX: 20 },
        {
          opacity: 1,
          x: 0,
          rotationX: 0,
          duration: 1.5,
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
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
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
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-4">
        <div ref={leftRef}>
          <div className="overflow-hidden">
            <img
              src={vision}
              alt="Vision Engineering"
              className="w-full h-[250px] md:h-[400px] object-cover shadow-2xl"
            />
          </div>
        </div>

        <div
          ref={rightRef}
          className="text-center md:text-left space-y-4 md:space-y-6 text-secondary"
        >
          <h2 className="text-2xl sm:text-4xl text-secondary leading-tight font-semibold mb-5">
            OUR VISION
          </h2>
          <h3 className="text-xl md:text-2xl leading-tight text-justify">
           To shape a globally adaptive marine future by pioneering intelligent infrastructure, advancing environmental resilience, and building long-term value through transformative engineering.
          </h3>
          <p className="text-md md:text-lg leading-relaxed text-justify">
            We see a connected world where vessels, platforms, and marine assets
            operate smarter, safer, and more efficiently powered by digital
            technologies and solid engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
