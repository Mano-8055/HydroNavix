import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const SplitShowcaseCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);

  const current = data[index];
  const next = nextIndex !== null ? data[nextIndex] : null;

  useEffect(() => {
    const timer = setInterval(() => {
      setNextIndex((index + 1) % data.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    if (nextIndex !== null) {
      const timeout = setTimeout(() => {
        setIndex(nextIndex);
        setNextIndex(null);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [nextIndex]);

  const chips = current.content["content-data"];

  return (
    <div className="relative w-full h-screen overflow-hidden text-primary  cursor-follow">
      {/* Left Color Slide Up */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden z-0">
        <AnimatePresence initial={false}>
          <SlideUp keyId={current.id + "-left"}>
            <div className="w-full h-full" style={{ backgroundColor: current.color }} />
          </SlideUp>
          {next && (
            <SlideUp keyId={next.id + "-left"}>
              <div className="w-full h-full" style={{ backgroundColor: next.color }} />
            </SlideUp>
          )}
        </AnimatePresence>
      </div>

      {/* Right Image Slide Down */}
      <div className="absolute right-0 bottom-0 md:top-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden z-0">
        <AnimatePresence initial={false}>
          <SlideDown keyId={current.id + "-right"}>
            <img
              src={current.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </SlideDown>
          {next && (
            <SlideDown keyId={next.id + "-right"}>
              <img
                src={next.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </SlideDown>
          )}
        </AnimatePresence>
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 mt-[24vh] md:mt-0 z-10 md:flex md:items-center md:justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current.id + "-title"}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {current.content["content-title"]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Bottom Chips */}
      <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-between flex-wrap gap-y-3 z-10">
        <div className="flex flex-wrap gap-2 -full md:max-w-[45%]">
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

      {/* Navigation Dots */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col space-y-4">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setNextIndex(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === index ? "bg-primary scale-125" : "bg-primary/40 scale-90"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default SplitShowcaseCarousel;
