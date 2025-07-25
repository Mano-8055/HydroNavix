// src/components/ScrollControlledCarousel.jsx

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SplitShowcaseCarousel from "./SplitShowcaseCarousel";

const ScrollControlledCarousel = ({ data }) => {
  const targetRef = useRef(null);

  // Track the scroll progress of the target element (the entire section).
  // The animation starts when the top of the section hits the top of the viewport
  // and ends when the bottom of the section hits the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map the scroll progress (a value from 0 to 1) to a slide index.
  // This motion value will smoothly transition from 0 to data.length - 1.
  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, data.length - 1]
  );

  // The total height of the scrollable section.
  // Each slide gets 100vh of "scroll space" to transition.
  const componentHeight = `${data.length * 100}vh`;

  return (
    // This is the scrollable container with a dynamic height.
    <section
      ref={targetRef}
      style={{ height: componentHeight }}
      className="relative w-full"
    >
      {/* This is the sticky container that holds the visible content. */}
      {/* It remains fixed on screen while the parent section scrolls. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <SplitShowcaseCarousel data={data} scrollIndex={scrollIndex} />
      </div>
    </section>
  );
};

export default ScrollControlledCarousel;