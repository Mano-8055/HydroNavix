import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax overlay
      gsap.to(overlayRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // R&D cards animation
      gsap.fromTo(".rd-card", {
        opacity: 0,
        y: 100,
        rotationX: 20,
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".rd-grid",
          start: "top 85%",
        },
      });

      // Vision box animation
      gsap.fromTo(".vision-box", {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
      }, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".vision-box",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const currentRD = [
    "AI-driven engineering workflows",
    "Real-time digital twin deployment", 
    "Virtual and augmented reality for engineering collaboration",
    "Predictive maintenance and analytics",
    "Integration of sensors and cyber-physical systems"
  ];

  return (
    <section ref={sectionRef} className="relative px-8 md:px-16 py-32 max-w-7xl mx-auto overflow-hidden">
      {/* Parallax Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-tr from-accent-50 to-primary-50 opacity-50 -z-10"
      />

      {/* Sharp Geometric Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary-600 opacity-10 transform -rotate-12" />
      <div className="absolute bottom-20 right-0 w-28 h-28 bg-accent-500 opacity-10 transform rotate-45" />

      <div className="text-center mb-20">
        <h2 className="font-syne text-4xl md:text-6xl font-800 text-secondary-900 mb-8">
          R&D AND OUR <span className="text-primary-600">2040 OUTLOOK</span>
        </h2>
        <div className="w-32 h-1 bg-accent-500 mx-auto mb-8" />
        <p className="font-syne text-xl md:text-2xl font-500 text-secondary-600 max-w-4xl mx-auto leading-relaxed">
          Innovation is at the core of Hydronavix. We believe the marine and offshore sector in 2040 will be smarter, automated, and far more connected than today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <h3 className="font-syne text-3xl font-700 text-secondary-800 mb-12">
            Our current R&D efforts focus on:
          </h3>
          <div className="space-y-6 rd-grid">
            {currentRD.map((item, index) => (
              <div key={index} className="rd-card p-6 bg-white shadow-lg border-l-4 border-primary-500 hover:border-accent-500 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-primary-600 flex-shrink-0 mt-2" />
                  <p className="font-syne text-lg md:text-xl font-600 text-secondary-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vision-box relative">
          <div className="bg-gradient-to-br from-secondary-900 to-primary-900 p-12 relative overflow-hidden">
            {/* Sharp Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent-400 opacity-20" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary-400 opacity-20" />
            
            <h3 className="font-syne text-3xl font-700 mb-8 text-white">2040 Vision</h3>
            <p className="font-syne text-lg md:text-xl font-500 leading-relaxed mb-8 text-secondary-200">
              Hydronavix aims to lead the transformation toward a smarter, automated, and more connected marine industry.
            </p>
            <div className="bg-white/10 backdrop-blur-strong p-8 border border-accent-400/30 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-400" />
              <p className="font-syne text-xl md:text-2xl font-700 text-accent-300 italic text-center leading-tight">
                "The ocean will remain constant — but how we work with it must evolve."
              </p>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl p-6 border-t-4 border-accent-500">
            <div className="font-syne text-4xl font-800 text-accent-600">2040</div>
            <div className="font-syne text-sm font-600 text-secondary-600">Future Vision</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;