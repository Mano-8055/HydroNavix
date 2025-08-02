import React, { useState, useEffect, useRef } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Requirement Collection',
    description: `We engage with your technical team to identify inspection goals such as hull condition, corrosion detection, tank scanning, or propeller health. We ensure all safety and access parameters are understood upfront.`,
  },
  {
    title: 'Scheduling & Planning',
    description: `We align with your operational calendar and finalize the date, scope, drone type (aerial or underwater), and coverage area ensuring zero disruption.`,
  },
  {
    title: 'Field Execution',
    description: `Our certified operators deploy drones equipped with:
 Thermal cameras for electrical & heat signature analysis, 
 4K zoom optics for visual defect detection, 
 LiDAR & photogrammetry for structural mapping, 
 Underwater ROVs for subsea hull and propeller scans`,
  },
  {
    title: 'Data Delivery – Fast Turnaround',
    description: `Within 48 hours, we provide annotated reports, high-res visuals, thermal maps, and 3D digital twins ready for classification, engineering, or maintenance review.`,
  },
  {
    title: 'End-to-End Support',
    description: `From planning to post-inspection interpretation, our engineers and drone specialists remain available for integration support, result discussions, and follow-up missions.`,
  },
];

const DroneSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.fade-up');

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-secondary mb-10">
        Drone Inspection Services
      </h2>

      <div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="fade-up border-b border-b-secondary/40 px-2 py-6 transition-all duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(index)}
            >
              <h3 className="text-lg md:text-xl font-medium text-secondary">
                {step.title}
              </h3>
              <div
                className={`text-xl md:text-2xl text-secondary transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              >
                <IoAddOutline />
              </div>
            </div>

            {openIndex === index && (
              <div className="mt-3 text-sm md:text-base text-secondary/60 whitespace-pre-line">
                {step.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneSection2;
