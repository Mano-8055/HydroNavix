import { motion } from "framer-motion";

const FadeWords = ({ text, controls, targetColor = "#0D0812", className = "" }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 10, color: "#333" },
            visible: {
              opacity: 1,
              y: 0,
              color: targetColor,
              transition: { delay: index * 0.08, duration: 0.4 },
            },
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default FadeWords;
