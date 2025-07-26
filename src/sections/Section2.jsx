import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bgOverlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background overlay parallax
      gsap.to(bgOverlayRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Content animations
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -120, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
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
        { opacity: 0, x: 120, scale: 0.8 },
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
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Overlay */}
      <div 
        ref={bgOverlayRef}
        className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-primary-50 opacity-60"
      />

      {/* Sharp Edge Top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white clip-polygon" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">
        <div ref={leftRef} className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-syne text-4xl md:text-6xl font-800 leading-tight text-secondary-900">
              OUR STORY
            </h2>
            <div className="w-24 h-1 bg-accent-500" />
          </div>
          
          <div className="space-y-6 text-secondary-700">
            <p className="font-syne text-lg md:text-xl font-500 leading-relaxed">
              Hydronavix was not created in a boardroom — it was shaped by real experiences, on real waters. Our roots lie in a deep understanding of marine and offshore challenges, gained through years of hands-on exposure and engineering work in the field.
            </p>
            <p className="font-syne text-lg md:text-xl font-500 leading-relaxed">
              Raised with a mindset to help and improve lives, we've always believed that every challenge has a solution. Entering the marine world wasn't a choice — it was a natural evolution. We studied the sea, understood its forces, and worked with the structures, systems, and vessels that move it forward.
            </p>
            <p className="font-syne text-lg md:text-xl font-500 leading-relaxed">
              Through years of engineering design, construction, retrofits, and innovation, we've gained the expertise to deliver solutions that are practical, intelligent, and future-ready. Hydronavix is the result of that journey — designed to meet the evolving needs of global marine and offshore industries.
            </p>
            <div className="pt-6">
              <p className="font-syne text-2xl font-700 text-primary-600">
                We're here to set new standards — and build what's next.
              </p>
            </div>
          </div>
        </div>

        <div ref={rightRef} className="relative">
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800"
              alt="Offshore Engineering"
              className="w-full h-[500px] object-cover shadow-2xl"
            />
            {/* Geometric Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500 opacity-20" />
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-8 -right-8 bg-white shadow-xl p-6 border-l-4 border-primary-500">
            <div className="font-syne text-3xl font-800 text-primary-600">15+</div>
            <div className="font-syne text-sm font-600 text-secondary-600">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Sharp Edge Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-secondary-900 clip-polygon-reverse" />
    </section>
  );
};

export default Section2;