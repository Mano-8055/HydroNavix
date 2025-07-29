import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MarineXBanner from '../layouts/MarineXBanner';
import ScrollControlledCarousel from "../components/ScrollControlledCarousel";
import Marinex from '../json/Marinex';

import ShipIcon from "../assets/studio/ship.svg";
import ScanIcon from "../assets/studio/scan.svg";
import RetrofitIcon from "../assets/studio/puzzle.svg";
import WalkthroughIcon from "../assets/studio/layout.svg";

gsap.registerPlugin(ScrollTrigger);

const MarinexStudio = () => {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(headingRef.current, {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    const gridItems = gridRef.current.querySelectorAll(".grid-item");
    gsap.fromTo(gridItems,{ 
       opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center py-32">
      <div className="relative z-10 w-full px-4">
        <MarineXBanner />
      </div>

      <ScrollControlledCarousel data={Marinex} />

      <div className="relative z-10 text-black text-center max-w-7xl px-auto px-4 py-20">
        <div
          ref={headingRef}
          className="flex flex-col items-center justify-center text-center gap-0.5"
        >
          <h3 className="text-2xl sm:text-4xl text-secondary font-semibold tracking-tight mb-1">
            Immersive Digital Content
          </h3>
          <p className="max-w-4xl text-md md:text-lg text-secondary/60">
            All built to inform, impress, and accelerate engineering decisions
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {[
            { title: "High-quality 3D ship and rig models", icon: ShipIcon },
            { title: "Walkthroughs of machinery & deck layouts", icon: WalkthroughIcon },
            { title: "Retrofit before/after comparisons", icon: RetrofitIcon },
            { title: "Scan-to-model case studies", icon: ScanIcon },
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid-item flex flex-col items-center justify-start hover:scale-105 cursor-pointer bg-secondary text-primary shadow-md px-6 py-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-md md:text-lg font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarinexStudio;
