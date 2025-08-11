import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.utils.toArray(".fade-para").forEach((el) => {
        gsap.fromTo(
          el,
          { color: "#888" },
          {
            color: "#000",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: leftRef.current,
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
      <div className="max-w-7xl mx-auto px-4">
        <div ref={leftRef} className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-4xl text-center font-semibold leading-tight text-secondary">
              ABOUT US 
            </h2>
          </div>

          <div className="space-y-6 text-secondary text-justify text-lg md:text-xl font-medium leading-relaxed">
            <p className="fade-para">
              HydroNavix Marine and Offshore Engineering is a next-generation engineering firm redefining how marine, offshore, and oil & gas projects are designed, built, and maintained. Based in the UAE and driven by innovation, we blend traditional naval engineering expertise with cutting-edge technologies including AI, VR/AR, Digital Twins, and drone-based intelligence to deliver faster, smarter, and more efficient solutions to our clients worldwide.
            </p>
            <p className="fade-para">
              From 2D/3D design and structural analysis to predictive maintenance, immersive digital walkthroughs, and real-time inspections, we cover the full lifecycle of marine and offshore assets. Our agile, cross-disciplinary team consists of experienced engineers, certified inspectors, and future-facing technologists working together to bring precision, safety, and innovation to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
