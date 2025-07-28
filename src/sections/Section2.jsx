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
              OUR STORY
            </h2>
          </div>

          <div className="space-y-6 text-secondary text-justify text-lg md:text-xl font-medium leading-relaxed">
            <p className="fade-para">
              Hydronavix was not created in a boardroom; it was shaped by real experiences, on real waters. Our roots lie in a deep understanding of marine and offshore challenges, gained through years of hands-on exposure and engineering work in the field.
            </p>
            <p className="fade-para">
              Raised with a mindset to help and improve lives, we've always believed that every challenge has a solution. Entering the marine world wasn't a choice it was a natural evolution. We studied the sea, understood its forces, and worked with the structures, systems, and vessels that move it forward.
            </p>
            <p className="fade-para">
              Through years of engineering design, construction, retrofits, and innovation, we've gained the expertise to deliver solutions that are practical, intelligent, and future-ready. Hydronavix is the result of that journey designed to meet the evolving needs of global marine and offshore industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
