import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUserCheck, FaThermometerHalf, FaShieldAlt, FaCogs, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: <FaUserCheck size={24} className="text-secondary" />,
    title: 'Trained UAV + ROV Professionals',
    desc: 'Certified operators and third-party collaborators ensure reliable deployment.',
  },
  {
    icon: <FaThermometerHalf size={24} className="text-secondary" />,
    title: 'Advanced Sensor Packages',
    desc: 'LiDAR, RTK, thermal and optical-grade sensors tailored for marine tasks.',
  },
  {
    icon: <FaShieldAlt size={24} className="text-secondary" />,
    title: 'Regulatory Compliance',
    desc: 'Fully compliant with UAE GCAA and maritime safety standards.',
  },
  {
    icon: <FaCogs size={24} className="text-secondary" />,
    title: 'CAD/BIM Integration',
    desc: 'Engineered for compatibility with CAD, BIM, and asset management platforms.',
  },
  {
    icon: <FaClock size={24} className="text-secondary" />,
    title: 'Fast & Safe Deployment',
    desc: 'Rapid execution with minimal disruption and quick data turnaround.',
  },
];

const DroneSection6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.fade-up');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-secondary mb-12">
        Why Choose <span className='text-LightBlue'>HydroNavix</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="fade-up p-6 hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <div className="mb-4 text-secondary">{item.icon}</div>
            <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
            <p className="text-sm text-secondary/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneSection6;
