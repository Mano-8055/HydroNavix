import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assetImg from "../assets/images/asset.png";
import { AssetSolutions } from "../json/AssetSolutions";

gsap.registerPlugin(ScrollTrigger);

const AssetSection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const container = containerRef.current;

    let ctx = gsap.context(() => {
      const totalHeight = content.scrollHeight - container.clientHeight;

      gsap.to(content, {
        y: -totalHeight,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top+=9vh",
          end: `+=${totalHeight}`,
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen pt-0 md:pt-[8vh] w-full flex flex-col md:flex-row bg-background text-secondary relative overflow-hidden"
    >
      {/* Left Fixed Image */}
      <div className="w-full md:w-[40%] h-full flex items-center justify-center sticky top-0 md:top-[9vh] z-10">
        <img
          src={assetImg}
          alt="Asset"
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>

      {/* Right Side — Animated Scroll Content */}
      <div className="w-full md:w-[60%] h-full relative overflow-hidden">
        {/* Sticky Title */}
        <div className="sticky top-0 bg-background z-20 p-5">
          <p className="text-2xl text-center md:text-left md:text-4xl font-semibold">
            Asset Integrity Solutions
          </p>
        </div>

        {/* Scrollable Content */}
        <div
          ref={contentRef}
          className="absolute top-0 left-0 right-0 mt-20 space-y-2 md:space-y-4 px-5 md:px-10 hide-scroll"
          style={{ height: `${AssetSolutions.length * 120}px` }}
        >
          {AssetSolutions.map((item, index) => (
            <div
              key={index}
              className="text-xl flex items-center gap-4 border-b border-b-secondary/60 min-h-[80px]"
            >
              <p className="text-lg leading-snug">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetSection;
