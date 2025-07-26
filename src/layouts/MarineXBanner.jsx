import { useEffect } from "react";
import FadeWords from "../components/FadeWords";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const MarineXBanner = () => {
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start("visible");
  }, [titleControls]);

  return (
    <div className="text-secondary text-center flex flex-col gap-1 max-w-4xl mx-auto pb-10">
      <FadeWords
        text="Where Innovation Meets the Ocean"
        controls={titleControls}
        className="text-2xl sm:text-4xl text-secondary font-semibold tracking-tight text-center mb-1.5"
      />

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className=" text-md md:text-lg text-secondary/60 leading-relaxed mb-10"
      >
        MarineX Studio is Hydronavix’s digital powerhouse where advanced tools,
        immersive media, and high-performance design software come together to
        transform marine and offshore engineering.
      </motion.p>
    </div>
  );
};

export default MarineXBanner;
