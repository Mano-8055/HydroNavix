import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiCircleCheck } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const points = [
  'Above & below waterline hull inspections',
  'Ballast & cargo tank internal scans',
  'Offshore flare stacks & platform reviews',
  'Propeller, rudder, and fouling condition checks',
  'Thermal scans of safety-critical systems',
  'Class compliance support',
];

const DroneSection3 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.fade-up');

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <h2 className="fade-up text-2xl md:text-4xl font-semibold text-secondary mb-8 text-center">
        Where We Add Value
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((point, index) => (
          <li
            key={index}
            className="fade-up flex items-start gap-3 p-4 border border-secondary/20 hover:shadow-md transition"
          >
            <CiCircleCheck className="text-secondary mt-1 flex-shrink-0" size={20} />
            <span className="text-secondary text-base md:text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroneSection3;
