import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope } from 'react-icons/fa';

import aboutImg1 from '../assets/images/about1.png';
import aboutImg2 from '../assets/images/about2.png';
import ImageCTA from '../assets/images/hero.png';
import IndustryImg1 from '../assets/images/industry1.jpg';
import IndustryImg2 from '../assets/images/industry2.jpg';
import IndustryImg3 from '../assets/images/industry3.jpg';
import IndustryImg4 from '../assets/images/industry4.jpg';
import IndustryImg5 from '../assets/images/industry5.jpg';
import industryDefault from '../assets/images/industry1.jpg';

gsap.registerPlugin(ScrollTrigger);

import {
  FaTools,
  FaBuilding,
  FaSnowflake,
  FaBolt,
  FaShip,
  FaSearch,
  FaDraftingCompass,
  FaProjectDiagram,
} from "react-icons/fa";

const offerCards = [
  {
    title: "Piping Engineers",
    desc: "2D/3D piping layout, ISO, MTO",
    fullDesc: "We offer piping engineers with offshore/onshore design experience using PDMS/E3D.",
    image: industryDefault,
    icon: <FaTools />,
  },
  {
    title: "Structural Engineers",
    desc: "Steel design, STAAD, SACS modeling",
    fullDesc: "Expertise in structural analysis and 3D model coordination for heavy industries.",
    image: industryDefault,
    icon: <FaBuilding />,
  },
  {
    title: "Mechanical & HVAC",
    desc: "Thermal load, ducting, mech layout",
    fullDesc: "HVAC & mechanical layout experts for vessels, buildings, plants, and rigs.",
    image: industryDefault,
    icon: <FaSnowflake />,
  },
  {
    title: "Electrical Engineers",
    desc: "Power, lighting, instrumentation",
    fullDesc: "Designing integrated power and automation systems for complex projects.",
    image: industryDefault,
    icon: <FaBolt />,
  },
  {
    title: "Marine Consultants",
    desc: "Ship design, stability, systems",
    fullDesc: "Naval architects & marine piping engineers for shipbuilding and retrofits.",
    image: industryDefault,
    icon: <FaShip />,
  },
  {
    title: "QA/QC Inspectors",
    desc: "NDT, inspection, reporting",
    fullDesc: "Certified QA/QC inspectors for offshore and shipyard quality assurance.",
    image: industryDefault,
    icon: <FaSearch />,
  },
  {
    title: "CAD & 3D Modelers",
    desc: "AutoCAD, AVEVA, Tekla",
    fullDesc: "Drafters & modelers for intelligent 2D/3D designs across platforms.",
    image: industryDefault,
    icon: <FaDraftingCompass />,
  },
  {
    title: "Project Managers",
    desc: "Planning, coordination, reporting",
    fullDesc: "Leaders managing end-to-end project execution with engineering insight.",
    image: industryDefault,
    icon: <FaProjectDiagram />,
  },
];



const Manpower = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const section6Ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(img1Ref.current, { x: 100, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: img1Ref.current, start: 'top 80%' },
      });
      gsap.fromTo(img2Ref.current, { opacity: 0 }, {
        opacity: 1, duration: 1.2, delay: 0.4, ease: 'power2.out',
        scrollTrigger: { trigger: img2Ref.current, start: 'top 85%' },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = section6Ref.current;
    gsap.fromTo(el, { opacity: 0.5, y: 50 }, {
      opacity: 1, y: 0, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 80%' },
    });
  }, []);

  return (
    <div>

      {/* Section 1 - MANPOWER SUPPLY */}
      <section className="flex flex-col-reverse lg:flex-row min-h-screen">
        <div className="flex flex-col items-center lg:items-start justify-center px-5 md:px-10 py-16 lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl text-center md:text-left font-semibold leading-snug text-secondary mt-5 md:mt-0">
            Empowering Projects with <span className='text-secondary/70'>Expert Manpower</span>
          </h2>
          <p className="text-sm lg:text-base text-justify text-secondary/80 mt-6 max-w-lg">
            Hydronavix provides highly qualified engineering personnel for marine, offshore, and oil & gas projects worldwide. Whether you need a single expert or an entire team we deliver experienced professionals ready to support from design to delivery.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-[320px] lg:h-auto overflow-visible flex justify-center lg:justify-end">
          <img ref={img1Ref} src={aboutImg1} alt="Manpower" className="w-full lg:w-[80%] h-full object-cover" />
          <div ref={img2Ref} className="absolute bottom-[-20%] left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 lg:top-1/2 lg:bottom-auto lg:transform lg:-translate-y-1/2 w-[220px] lg:w-[320px] shadow-xl">
            <img src={aboutImg2} alt="Overlay" className="w-full h-[220px] lg:h-auto object-cover" />
          </div>
        </div>
      </section>

<section className="py-20">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-secondary">What We Offer</h2>
  </div>
  <div className="mx-auto w-[95%] md:w-[90%] lg:w-[80%] overflow-hidden">

    {/* Top Row - Left to Right */}
    <div className="relative w-full overflow-hidden mb-10">
      <div className="flex gap-6 animate-scrollX1 pause-on-hover whitespace-nowrap w-max">
        {[...offerCards.slice(0, 4), ...offerCards.slice(0, 4)].map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-[260px] max-w-[260px] group rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 transition-all duration-300 hover:scale-105"
          >
            <div className="p-6 z-10 relative">
              <div className="w-10 h-10 bg-[#e0f7fa] rounded-xl mb-4 flex items-center justify-center text-[#007a99] text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#003d4d] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>

            {/* Hover Overlay Image */}
            <div
              className="absolute inset-0 z-10 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute bottom-6 left-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm">{item.fullDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Row - Right to Left */}
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6 animate-scrollX2 pause-on-hover whitespace-nowrap w-max">
        {[...offerCards.slice(4, 8), ...offerCards.slice(4, 8)].map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-[260px] max-w-[260px] group rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 transition-all duration-300 hover:scale-105"
          >
            <div className="p-6 z-10 relative">
              <div className="w-10 h-10 bg-[#e0f7fa] rounded-xl mb-4 flex items-center justify-center text-[#007a99] text-xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#003d4d] mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>

            {/* Hover Overlay Image */}
            <div
              className="absolute inset-0 z-10 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute bottom-6 left-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm">{item.fullDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* Section 3 - Deployment Types */}
<section className="px-6 py-20 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-[#007a99] text-center mb-14">Deployment Types</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          id: "01",
          title: "On-Site Deployment",
          desc: "Workforce for global sites including UAE, GCC, EU & Asia."
        },
        {
          id: "02",
          title: "Remote Engineering",
          desc: "Virtual expert support for project continuity worldwide."
        },
        {
          id: "03",
          title: "Contract / Long-Term",
          desc: "Flexible workforce model based on your duration needs."
        },
        {
          id: "04",
          title: "Emergency Staffing",
          desc: "Deploy skilled professionals at short notice."
        }
      ].map((item, idx) => (
        <div key={idx} className="group relative rounded-2xl overflow-hidden border border-[#8ed1ec] transition-all duration-300 hover:shadow-xl">
          
          {/* Top Card Section */}
          <div className="bg-white px-6 py-6 rounded-t-2xl transition-all duration-300">
            <span className="text-3xl font-bold text-[#007a99] opacity-40">{item.id}</span>
            <h3 className="mt-2 text-xl font-bold text-[#003d4d]">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm font-medium">{item.desc}</p>
          </div>

          {/* Hover Reveal Section */}
          <div className="absolute bottom-[-100px] group-hover:bottom-0 left-0 right-0 bg-[#8ed1ec] py-5 px-4 rounded-b-2xl flex justify-between items-center transition-all duration-300 ease-in-out shadow-inner">
            <span className="text-[#003d4d] text-2xl">*</span>
            <button className="bg-[#003d4d] hover:bg-[#005066] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300">
              Hire Now
            </button>
            <span className="text-[#003d4d] text-2xl">*</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Section 4 - INDUSTRY SECTORS COVERED */}
<section className="px-6 py-20 bg-gray-900">
  <div className="text-center mb-12">
    <h2 className="text-5xl font-extrabold tracking-wide text-white uppercase">Industry Sectors Covered</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      { img: IndustryImg1, title: 'Shipbuilding & Retrofits' },
      { img: IndustryImg2, title: 'Offshore Platforms & Jack-Ups' },
      { img: IndustryImg3, title: 'Marine Equipment & Systems Integration' },
      { img: IndustryImg4, title: 'Oil & Gas EPC Projects' },
      { img: IndustryImg5, title: 'Port & Marine Infrastructure' }
    ].map((item, index) => (
      <div key={index} className="relative rounded-xl overflow-hidden group">
        <img src={item.img} alt={item.title} className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-4 px-6 text-lg font-medium">
          {item.title}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Section 5 - OUR ADVANTAGE */}
      <section className="px-6 py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-secondary">Our Advantage</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            'Global talent pool',
            'Technically screened professionals',
            'Fast mobilization and compliance support',
            'Backed by in-house marine engineering experts'
          ].map((adv, idx) => (
            <div key={idx} className="bg-secondary text-white p-6 rounded-xl shadow-lg hover:bg-secondary/90">
              {adv}
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 - SUPPORT CTA */}
      <div className="relative w-full min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${ImageCTA})`, zIndex: 0 }} />
        <div className="absolute inset-0 bg-secondary/60 z-10" />
        <section ref={section6Ref} className="relative z-20 text-primary mx-2 md:mx-20 my-20 px-10 py-14 md:py-20 flex justify-center items-center">
          <div className="flex flex-col items-center text-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
              Need support? <span className="text-primary">We're here</span>
            </h2>
            <p className="text-sm md:text-lg text-primary mb-6">
              Hydronavix can step in with the right people — at the right time.
            </p>
            <a href="mailto:manpower@hydronavixmarine.com" className="flex items-center gap-2 bg-primary text-secondary text-md font-medium rounded-full px-6 py-3 w-fit hover:bg-accent hover:text-primary hover:shadow-lg transform transition-all duration-300 ease-in-out">
              <FaEnvelope /> manpower@hydronavixmarine.com
            </a>
          </div>
        </section>

    </div>
  </div>
  );
};

export default Manpower;

