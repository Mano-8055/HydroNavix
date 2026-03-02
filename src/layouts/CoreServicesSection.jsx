import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/investors-anime/bg/video4.mp4';
import compassImg from '../assets/investors-anime/compass/Compass.png';
import needleImg from '../assets/investors-anime/compass/needle.png';
import service1 from '../assets/investors-anime/servies-big/serrvice 1 BIG.png';
import service2 from '../assets/investors-anime/servies-big/service 2 BIG.png';
import service3 from '../assets/investors-anime/servies-big/service 3 BIG.png';
import service4 from '../assets/investors-anime/servies-big/service 4 BIG.png';
import service5 from '../assets/investors-anime/servies-big/service 5 BIG.png';
import service6 from '../assets/investors-anime/servies-big/service 6 BIG.png';
import service7 from '../assets/investors-anime/servies-big/service 7 big.png';

import serviceGif1 from '../assets/investors-anime/services-gifs/service1-ezgif.com-video-to-gif-converter.gif';
import serviceGif2 from '../assets/investors-anime/services-gifs/service2-ezgif.com-video-to-gif-converter.gif';
import serviceGif3 from '../assets/investors-anime/services-gifs/service3-ezgif.com-video-to-gif-converter.gif';
import serviceGif4 from '../assets/investors-anime/services-gifs/service4-ezgif.com-video-to-gif-converter.gif';
import serviceGif5 from '../assets/investors-anime/services-gifs/service5-ezgif.com-video-to-gif-converter.gif';
import serviceGif6 from '../assets/investors-anime/services-gifs/service6-ezgif.com-video-to-gif-converter.gif';
import serviceGif7 from '../assets/investors-anime/services-gifs/service7-ezgif.com-video-to-gif-converter.gif';

import line1 from '../assets/investors-anime/lines/line 1.png';
import shockLine1 from '../assets/investors-anime/lines/SHOCK LINE.png';
import service1Glow from '../assets/investors-anime/services-glow/serrvice 1 Glow.png';
import service2Glow from '../assets/investors-anime/services-glow/service 2 glow.png';
import service3Glow from '../assets/investors-anime/services-glow/service 3 glow.png';
import service4Glow from '../assets/investors-anime/services-glow/service 4 glow.png';
import service5Glow from '../assets/investors-anime/services-glow/service 5 glow.png';
import service6Glow from '../assets/investors-anime/services-glow/service 6 glow.png';
import service7Glow from '../assets/investors-anime/services-glow/service 7 glow.png';

const CoreServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      img: service1,
      hoverImg: service1Glow,
      gif: serviceGif1,
      line: line1,
      shockLine: shockLine1,
      angle: 315,
      scale: 1.2,
      offsetX: -7,
      offsetY: 8,
      title: "Heavy Lift & Load-Out Engineering",
      id: "structural-weighing-cog-analysis",
      description: "Specializing in live structural weighing, Center of Gravity (COG) analysis, and load-out engineering support. We ensure safety and stability for offshore modules, jackets, and complex heavy lift operations using advanced weighing technologies."
    }, // Top Left
    {
      img: service2,
      hoverImg: service2Glow,
      gif: serviceGif2,
      line: line1,
      shockLine: shockLine1,
      angle: 68,
      scale: 1.1,
      offsetX: 4,
      offsetY: -3,
      title: "ENGINEERING & DESIGN",
      id: "engineering-design-services",
      description: "Comprehensive marine engineering solutions including vessel architecture, structural analysis, piping design, and mechanical systems. We deliver classification-ready designs for ships, offshore platforms, and special vessels, ensuring compliance with international standards."
    }, // Left
    {
      img: service3,
      hoverImg: service3Glow,
      gif: serviceGif3,
      line: line1,
      shockLine: shockLine1,
      angle: 104,
      scale: 1.1,
      offsetX: 6,
      offsetY: -3,
      title: "DIGITAL SOLUTIONS",
      id: "simulation-and-performance",
      description: "Advanced digital solutions encompassing CFD simulations, sea-keeping analysis, and Digital Twin development. We optimize vessel performance, energy efficiency, and operational safety through data-driven intelligence and predictive modeling."
    }, // Bottom Left
    {
      img: service4,
      hoverImg: service4Glow,
      gif: serviceGif4,
      line: line1,
      shockLine: shockLine1,
      angle: 145,
      scale: 1.1,
      offsetX: 8,
      offsetY: -3,
      title: "FIELD & INSPECTION SERVICES",
      id: "qaqc-inspection",
      description: "Rigorous QA/QC inspection services including Non-Destructive Testing (NDT), welding inspection, and dimensional checks. We ensure meaningful quality control, documentation, and compliance for marine and industrial assets during construction and operation."
    }, // Bottom
    {
      img: service5,
      hoverImg: service5Glow,
      gif: serviceGif5,
      line: line1,
      shockLine: shockLine1,
      angle: 180,
      scale: 1.1,
      offsetX: 0,
      offsetY: 0,
      title: "TECHNICAL SUPPORT & PROJECT SUPPORT",
      id: "regulatory-and-environmental-compliance",
      description: "Expert technical consulting and project management support found on regulatory compliance and environmental standards. We support EEXI compliance, BWTS retrofits, and provide end-to-end management for seamless marine project execution."
    }, // Bottom Right
    {
      img: service6,
      hoverImg: service6Glow,
      gif: serviceGif6,
      line: line1,
      shockLine: shockLine1,
      angle: 220,
      scale: 1.25,
      offsetX: -10,
      offsetY: -3,
      title: "Marine Automation Design, Engineering, Supply, Installation & Commissioning",
      id: "energy-power-and-renewables",
      description: "Integrated marine automation and power solutions. From hybrid propulsion and solar integration to instrumentation and control systems, we deliver efficient, sustainable, and automated marine technologies for modern fleets."
    },  // Right
    {
      img: service7,
      hoverImg: service7Glow,
      gif: serviceGif7,
      line: line1,
      shockLine: shockLine1,
      angle: 260,
      scale: 1.2,
      offsetX: -2,
      offsetY: 0,
      title: "SHIPBUILDING & FABRICATION",
      id: "offshore-and-jackup-support",
      description: "Complete support for shipbuilding and offshore fabrication. Our expertise covers jack-up rigs, fixed platforms, and substructure design, ensuring robust construction, structural integrity, and timely delivery of complex marine assets."
    },  // Top Right
  ];

  // Radius as percentage of container
  const radiusPercent = 35;

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden bg-white ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] text-center px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          Our Core Services
        </h2>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center" style={{ marginTop: '-150px' }}>

          {/* Compass (Center) */}
          <div className="absolute z-20 w-[50%] max-w-[340px]">
            <img
              src={compassImg}
              alt="Compass"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center translate-x-1">
              <img
                src={needleImg}
                alt="Needle"
                className="w-[12%] h-auto object-contain animate-spin-slow"
              />
            </div>
          </div>

          {/* Services (Surrounding) */}
          {services.map((service, index) => {
            // Convert angle to radians (0 is Top, Clockwise)
            const radian = service.angle * (Math.PI / 180);
            const x = radiusPercent * Math.sin(radian);
            const y = radiusPercent * -Math.cos(radian);

            // Apply manual offsets
            const finalX = x + (service.offsetX || 0);
            const finalY = y + (service.offsetY || 0);

            // Calculate line position and rotation (midpoint between service and center)
            const lineMidX = finalX / 2;
            const lineMidY = finalY / 2;
            const lineAngle = Math.atan2(finalY, finalX) * (180 / Math.PI);
            const lineLength = Math.sqrt(finalX * finalX + finalY * finalY);

            return (
              <React.Fragment key={index}>
                {/* Line connecting service to compass */}
                {service.line && (
                  <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                      left: `${50 + lineMidX}%`,
                      top: `${50 + lineMidY - 0.5}%`,
                      width: `${lineLength}%`,
                      transform: `translate(-50%, -50%) rotate(${lineAngle}deg)`,
                    }}
                  >
                    <img
                      src={hoveredService === index && service.shockLine ? service.shockLine : service.line}
                      alt="connection line"
                      className="w-full h-auto object-contain transition-all duration-300"
                    />
                  </div>
                )}

                {/* Service Icon */}
                <div
                  className="absolute w-[30%] max-w-[200px] flex items-center justify-center z-10 hover:z-30 group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    left: `${50 + finalX}%`,
                    top: `${50 + finalY}%`,
                    transform: `translate(-50%, -50%) scale(${service.scale || 1})`
                  }}
                >
                  <img
                    src={hoveredService === index && service.hoverImg ? service.hoverImg : service.img}
                    alt={service.title}
                    className="w-full h-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                  {/* Creative Tooltip */}
                  <div
                    className="absolute top-full mt-4 left-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-50"
                    style={{ transform: `translateX(-50%) scale(${1 / (service.scale || 1)})` }}
                  >
                    <div className="relative">
                      {/* Connecting Line */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-gradient-to-b from-transparent via-cyan-400 to-cyan-500"></div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

                      {/* Tooltip Content */}
                      <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3 min-w-max">
                        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                        <div>
                          <p className="text-white text-sm font-bold tracking-wide uppercase font-exo">{service.title}</p>
                          <p className="text-gray-400 text-[10px] uppercase tracking-wider">Click to explore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedService(null)}>
          <div
            className="relative w-full max-w-7xl min-h-[70vh] bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 min-h-[400px] md:h-auto bg-white flex items-center justify-center p-12 relative overflow-hidden">
              <img
                src={selectedService.gif}
                alt={selectedService.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Right Side - Description */}
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-left bg-white">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 inline-block w-fit pb-4">
                {selectedService.title}
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                {selectedService.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={`/engineering-services/${selectedService.id}`}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
                >
                  Know More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreServicesSection;
