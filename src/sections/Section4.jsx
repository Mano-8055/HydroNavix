import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mission from '../assets/about/mission.png'

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

      tl.fromTo(
        missionImgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.3, y: -100, ease: "none" }
      )
      .fromTo(
        overlayRef.current,
        { scaleY: 0, transformOrigin: "bottom center" },
        { scaleY: 1, duration: 0.8, ease: "power2.out" },
        0.2
      )
      .fromTo(
        missionHeadingRef.current,
        { opacity: 0, y: 80, rotationX: 45 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, ease: "power3.out" },
        0.4
      )
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
      className="relative h-screen text-primary overflow-hidden cursor-follow"
      style={{ zIndex: 10 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <img
            ref={missionImgRef}
            src={mission}
            alt="Mission"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>


      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 h-full max-w-6xl mx-auto">
        
        <h2
          ref={missionHeadingRef}
          className="text-2xl sm:text-4xl font-semibold mb-10 opacity-0 text-shadow-lg"
        >
          OUR MISSION
        </h2>

        <div ref={missionTextRef} className="opacity-0 w-full">
          <p className="text-xl md:text-3xl font-600 text-accent-200 mb-16 max-w-5xl mx-auto leading-tight">
            To execute high-impact technical programs through data-rich modeling, modular project strategies, immersive spatial visualization, and next-gen automation enabling faster decision-making, enhanced uptime, and lifecycle-driven asset performance across maritime domains.
          </p>
        </div>
      </div>

      <div className="h-[100vh]" />
    </section>
  );
};

export default Section4;