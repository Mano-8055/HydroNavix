import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    title: "Ocean-Focused Innovation",
    description: "Shape the future of marine and offshore industries.",
    imageType: "offshore",
  },
  {
    title: "Smart Tech, Real Impact",
    description: "Work with AI, VR, and digital design tools.",
    imageType: "tech",
  },
  {
    title: "Global Collaboration",
    description: "Projects across Middle East, Asia, and Europe.",
    imageType: "global",
  },
  {
    title: "Engineering-First Culture",
    description: "Built by engineers — for engineers.",
    imageType: "engineering",
  },
  {
    title: "Growth That Matters",
    description: "Scale your skills for the future.",
    imageType: "growth",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// Dummy SVGs
const renderImage = (type) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary grayscale">
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-secondary">
        <circle cx="20" cy="20" r="15" fill="currentColor" />
      </svg>
    </div>
  );
};

const Whywork = () => {
  return (
    <section id="why-section" className="relative flex items-center py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary text-primary text-xs font-medium tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-secondary leading-tight">
              Why Work at
              <br />
              <span className="relative">Hydronavix?</span>
            </h2>
            <p className="text-base text-secondary/70 max-w-sm">
              Five compelling reasons to join our team of ocean innovators
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                className={`group relative bg-primary border-2 border-secondary ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ minHeight: index < 2 ? '200px' : '180px' }}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="h-16 w-16 mb-4 border border-current">
                    {renderImage(reason.imageType)}
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-tight text-secondary">
                    {reason.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-secondary/70 group-hover:opacity-100 flex-1">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Whywork;
