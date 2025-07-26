import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax overlay effect
      gsap.to(overlayRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
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
    <section ref={sectionRef} className="relative py-32 bg-secondary-900 overflow-hidden">
      {/* Parallax Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-accent-900/20"
      />

      {/* Sharp Geometric Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 opacity-10 transform rotate-45 translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500 opacity-10 transform -rotate-12 -translate-x-24 translate-y-24" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">
        <div ref={leftRef} className="relative order-2 md:order-1">
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=800"
              alt="Vision Engineering"
              className="w-full h-[500px] object-cover shadow-2xl"
            />
            {/* Sharp Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/60 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-2 bg-accent-400" />
          </div>
        </div>

        <div ref={rightRef} className="space-y-8 order-1 md:order-2">
          <div className="space-y-6">
            <h2 className="font-syne text-4xl md:text-6xl font-800 leading-tight blue-text">
              OUR VISION
            </h2>
            <div className="w-24 h-1 bg-accent-400" />
          </div>
          
          <div className="space-y-6">
            <h3 className="font-syne text-2xl md:text-3xl font-700 text-accent-300 leading-tight">
              To engineer a future where marine and offshore projects are driven by intelligence, sustainability, and practical impact.
            </h3>
            <p className="font-syne text-lg md:text-xl font-500 text-primary-200 leading-relaxed">
              We see a connected world where vessels, platforms, and marine assets operate smarter, safer, and more efficiently — powered by digital technologies and solid engineering.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            {['Intelligence', 'Sustainability', 'Innovation', 'Impact'].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-strong p-4 border-l-4 border-accent-400">
                <div className="font-syne text-lg font-700 text-black">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;