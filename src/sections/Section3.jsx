import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const missionRef = useRef(null);
  const missionImgRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionTextRef = useRef(null);
  const whiteOverlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(missionImgRef.current, { scale: 0.6 }, { scale: 1.2, ease: "none" })
        .fromTo(
          missionHeadingRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "<30%"
        )
        .fromTo(
          missionTextRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "<50%"
        )
        .fromTo(
          whiteOverlayRef.current,
          { y: "100%" },
          { y: "0%", ease: "power1.inOut" },
          "+=0.2"
        );
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={missionRef}
      className="relative h-screen text-primary overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <img
            ref={missionImgRef}
            src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2069"
            alt="Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/20 z-10 pointer-events-none" />
          <div
            ref={whiteOverlayRef}
            className="absolute inset-0 bg-primary z-20 pointer-events-none"
          />
        </div>
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 h-full max-w-4xl mx-auto">
        <h2
          ref={missionHeadingRef}
          className="text-4xl md:text-6xl font-bold mb-6 opacity-0"
        >
          Our Mission
        </h2>
        <p
          ref={missionTextRef}
          className="text-xl md:text-2xl text-primary font-medium opacity-0"
        >
          Deliver bespoke, innovative, practical and cost-effective solutions with
          professional integrity and marine engineering excellence.
        </p>
      </div>
    </section>
  );
};

export default Section3;
