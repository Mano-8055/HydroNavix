import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCubes, FaMapMarkedAlt, FaSatellite, FaVideo } from 'react-icons/fa';

import ModellingImg from '../assets/drone/d1.png';
import SurveyImg from '../assets/drone/d2.png';
import GeoImg from '../assets/drone/d3.png';
import VisualImg from '../assets/drone/d4.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: '3D Modelling & Digital Twins',
    image: ModellingImg,
    points: [
      'Full structure capture: hulls, ports, rigs, vessels',
      'High-accuracy mesh + texturing',
      'Overlay of inspection, corrosion, or thermal data',
      'Creation of digital twins for asset lifecycle management',
    ],
  },
  {
    title: 'Topographic Surveying & Terrain Mapping',
    image: SurveyImg,
    points: [
      'RTK-enabled UAVs for terrain-level precision',
      'Used for: Coastal & port development, dry dock planning, volume calculations & dredging',
    ],
  },
  {
    title: 'Orthomosaic & Geospatial Mapping',
    image: GeoImg,
    points: [
      'High-res, geo-stitched orthophotos',
      'Ideal for: Pre-construction surveying, change detection, progress tracking',
    ],
  },
  {
    title: 'Visual Recon & Project Walkthroughs',
    image: VisualImg,
    points: [
      'Fly-through videos and immersive renders',
      'Ideal for progress reports, approvals, or client presentations',
    ],
  },
];

const DroneSection4 = () => {
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
          duration: 0.8,
          delay: i * 0.2,
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
      <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-12 text-center">
        Drone-Based 3D Modelling, Surveying & Visualisation
      </h2>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`fade-up flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-8 cursor-follow bg-secondary border border-secondary/20 p-4 md:p-8 shadow-sm hover:shadow-md transition`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 object-cover max-h-60"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{service.title}</h3>
              </div>
              <ul className="list-disc pl-5 text-primary/80 space-y-2 text-sm md:text-base">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneSection4;
