import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SlideUp = ({ children, keyId }) => (
  <motion.div
    key={keyId}
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="absolute inset-0"
  >
    {children}
  </motion.div>
);

const SlideDown = ({ children, keyId }) => (
  <motion.div
    key={keyId}
    initial={{ y: "-100%" }}
    animate={{ y: "0%" }}
    exit={{ y: "100%" }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="absolute inset-0"
  >
    {children}
  </motion.div>
);

const SplitShowcaseCarousel = ({ data, scrollIndex }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useMotionValueEvent(scrollIndex, "change", (val) => {
    const rounded = Math.round(val);
    if (rounded !== index && rounded >= 0 && rounded < data.length) {
      setPrevIndex(index);
      setIndex(rounded);
    }
  });

  const current = data[index];
  const previous = prevIndex !== null ? data[prevIndex] : null;
  const chips = current.content["content-data"];

  return (
    <div className="relative w-full h-screen overflow-hidden text-primary cursor-follow">
      {/* Left SlideUp */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden z-0">
        <AnimatePresence initial={false}>
          {previous && (
            <SlideUp keyId={previous.id + "-left-exit"}>
              <div className="w-full h-full" style={{ backgroundColor: previous.color }} />
            </SlideUp>
          )}
          <SlideUp keyId={current.id + "-left-enter"}>
            <div className="w-full h-full" style={{ backgroundColor: current.color }} />
          </SlideUp>
        </AnimatePresence>
      </div>

      {/* Right SlideDown */}
      <div className="absolute right-0 bottom-0 md:top-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden z-0">
        <AnimatePresence initial={false}>
          {previous && (
            <SlideDown keyId={previous.id + "-right-exit"}>
               <div className="relative w-full h-full">
                  <img src={previous.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-secondary/50" />
                </div>
            </SlideDown>
          )}
          <SlideDown keyId={current.id + "-right-enter"}>
             <div className="relative w-full h-full">
              <img src={current.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/50" />
            </div>
          </SlideDown>
        </AnimatePresence>
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 mt-[24vh] md:mt-0 z-10 md:flex md:items-center md:justify-center text-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current.id + "-title"}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            {current.content["content-title"]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Bottom Chips */}
      <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-between flex-wrap gap-y-3 z-10">
        <div className="flex flex-wrap gap-2 w-full md:max-w-[45%]">
          {chips.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-1 px-2 py-1.5 bg-secondary md:bg-primary/20 drop-shadow-md rounded-full transition-transform transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <CheckCircle size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm md:text-md font-medium leading-none">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SplitShowcaseCarousel;
