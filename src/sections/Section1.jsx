import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import marineImg from "../assets/about/image.png"; // ✅ Replace with your actual path

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const overlayRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background parallax effect
    gsap.to(bgRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroTitleRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Overlay and content animation
    tl.fromTo(
      overlayRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.5, ease: "power3.out" }
    )
      .fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 80, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={marineImg}
          alt="Marine Engineering"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Geometric Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-transparent clip-polygon"
      />

      {/* Sharp Edge Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white clip-polygon-reverse" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="text-left text-white max-w-4xl">
          <h1
            ref={heroTitleRef}
            className="font-syne text-5xl md:text-7xl lg:text-8xl font-800 leading-none tracking-tight mb-8 text-shadow-lg"
          >
            ABOUT US –<br />
            <span className="text-accent-400">HYDRONAVIX</span>
          </h1>
          <p
            ref={heroSubtitleRef}
            className="font-syne text-xl md:text-2xl lg:text-3xl font-500 opacity-90 leading-tight max-w-3xl"
          >
            Engineering the future of marine and offshore industries through
            intelligence, sustainability, and practical impact
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-accent-400 animate-float opacity-60" />
      <div
        className="absolute bottom-40 right-40 w-6 h-6 bg-primary-400 animate-float opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-3 h-3 bg-white animate-float opacity-50"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};

export default Section1;
