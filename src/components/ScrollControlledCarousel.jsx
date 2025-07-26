import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SplitShowcaseCarousel from "./SplitShowcaseCarousel";

const ScrollControlledCarousel = ({ data }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, data.length - 1]
  );
  const componentHeight = `${data.length * 100}vh`;

  return (
    <section
      ref={targetRef}
      style={{ height: componentHeight }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <SplitShowcaseCarousel data={data} scrollIndex={scrollIndex} />
      </div>
    </section>
  );
};

export default ScrollControlledCarousel;