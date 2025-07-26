import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const missionRef = useRef(null);
  const missionImgRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionTextRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bulletItems = gsap.utils.toArray(
        missionTextRef.current.querySelectorAll(".mission-card")
      );

      gsap.set(bulletItems, {
        opacity: 0,
        y: 100,
        rotationX: 45,
        transformOrigin: "center bottom",
        scale: 0.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Background image parallax
      tl.fromTo(
        missionImgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.3, y: -100, ease: "none" }
      )
      // Overlay animation
      .fromTo(
        overlayRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 0.8, ease: "power2.out" },
        0.2
      )
      // Heading animation
      .fromTo(
        missionHeadingRef.current,
        { opacity: 0, y: 80, rotationX: 45 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, ease: "power3.out" },
        0.4
      )
      // Text container
      .fromTo(
        missionTextRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0.6
      )
      // Mission cards staggered
      .to(
        bulletItems,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: {
            amount: 0.6,
            from: "start",
          },
        },
        0.8
      );
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionRef}
      className="relative h-screen text-white overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <img
            ref={missionImgRef}
            src="https://images.unsplash.com/photo-1496347326319-2935d381b307?w=1200"
            alt="Mission"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Geometric Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-secondary-900/95 via-primary-900/90 to-secondary-800/95 z-20"
      />

      {/* Sharp Edge Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 opacity-10 transform rotate-45 translate-x-48 -translate-y-48 z-25" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 opacity-10 transform -rotate-12 -translate-x-32 translate-y-32 z-25" />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-8 md:px-16 h-full max-w-6xl mx-auto">
        <h2
          ref={missionHeadingRef}
          className="font-syne text-5xl md:text-7xl font-800 mb-12 opacity-0 text-shadow-lg"
        >
          OUR MISSION
        </h2>

        <div ref={missionTextRef} className="opacity-0 w-full">
          <p className="font-syne text-xl md:text-3xl font-600 text-accent-200 mb-16 max-w-5xl mx-auto leading-tight">
            To deliver high-performance engineering solutions by combining precision, innovation, and smart technology — helping marine and offshore industries work faster, safer, and with greater clarity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              "Set new benchmarks in marine design and project delivery",
              "Integrate AI, digital twins, and immersive tools into real workflows",
              "Support safety, compliance, and sustainability",
              "Empower clients with smart platforms and expert collaboration",
            ].map((text, index) => (
              <div
                key={index}
                className="mission-card relative p-8 bg-white/10 backdrop-blur-strong border border-accent-400/30 text-left transform-gpu"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-400" />
                <div className="absolute top-6 left-6 text-accent-400 text-2xl font-800">
                  ▶
                </div>
                <p className="font-syne pl-12 text-lg md:text-xl font-600 text-white leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[100vh]" />
    </section>
  );
};

export default Section4;