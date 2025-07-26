import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Whywork = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: "Ocean-Focused Innovation",
      description: "Shape the future of marine and offshore industries.",
      imageType: "offshore"
    },
    {
      title: "Smart Tech, Real Impact", 
      description: "Work with AI, VR, and digital design tools.",
      imageType: "tech"
    },
    {
      title: "Global Collaboration",
      description: "Projects across Middle East, Asia, and Europe.",
      imageType: "global"
    },
    {
      title: "Engineering-First Culture",
      description: "Built by engineers — for engineers.",
      imageType: "engineering"
    },
    {
      title: "Growth That Matters",
      description: "Scale your skills for the future.",
      imageType: "growth"
    }
  ];

  const renderImage = (type, index) => {
    const baseClasses = "w-full h-full object-cover grayscale";
    
    switch(type) {
      case 'offshore':
        return (
          <div className={baseClasses + " bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center"}>
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-gray-600">
              <rect x="20" y="15" width="20" height="20" fill="currentColor" />
              <rect x="15" y="10" width="30" height="5" fill="currentColor" />
              <rect x="10" y="35" width="5" height="5" fill="currentColor" />
              <rect x="45" y="35" width="5" height="5" fill="currentColor" />
              <path d="M0 37 Q15 35 30 37 T60 37 L60 40 L0 40 Z" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
        );
      case 'tech':
        return (
          <div className={baseClasses + " bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center"}>
            <svg width="50" height="40" viewBox="0 0 50 40" className="text-gray-600">
              <rect x="5" y="8" width="40" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="8" y="11" width="34" height="15" fill="currentColor" opacity="0.3" />
              <circle cx="15" cy="30" r="1.5" fill="currentColor" />
              <circle cx="35" cy="30" r="1.5" fill="currentColor" />
            </svg>
          </div>
        );
      case 'global':
        return (
          <div className={baseClasses + " bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center"}>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-600">
              <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 20 Q13 10 20 20 T32 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="13" cy="18" r="1" fill="currentColor" />
              <circle cx="27" cy="15" r="1" fill="currentColor" />
            </svg>
          </div>
        );
      case 'engineering':
        return (
          <div className={baseClasses + " bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center"}>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-600">
              <rect x="10" y="15" width="20" height="10" fill="currentColor" />
              <rect x="8" y="12" width="24" height="3" fill="currentColor" />
              <circle cx="15" cy="19" r="1.5" fill="white" />
              <circle cx="25" cy="19" r="1.5" fill="white" />
            </svg>
          </div>
        );
      case 'growth':
        return (
          <div className={baseClasses + " bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center"}>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-600">
              <path d="M8 32 L13 27 L18 30 L23 22 L28 25 L33 17" stroke="currentColor" strokeWidth="2" fill="none" />
              <polygon points="30,17 33,14 36,20" fill="currentColor" />
              <rect x="10" y="28" width="2" height="6" fill="currentColor" opacity="0.6" />
              <rect x="16" y="25" width="2" height="9" fill="currentColor" opacity="0.6" />
              <rect x="22" y="22" width="2" height="12" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        );
      default:
        return <div className={baseClasses + " bg-gray-300"}></div>;
    }
  };

  return (
    <div id="why-section" className="h-screen bg-white relative overflow-hidden flex items-center">
      {/* Sharp geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-16 h-16 bg-black"></div>
        <div className="absolute bottom-0 left-0 w-24 h-2 bg-black"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-16 bg-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-center">
          
          {/* Left Header Section */}
          <div className={`lg:col-span-1 transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              {/* Small tag */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Why Work at
                <br />
                <span className="relative">
                  Hydronavix?
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-black"></div>
                </span>
              </h2>

              <p className="text-base text-gray-700 max-w-sm">
                Five compelling reasons to join our team of ocean innovators.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <button className="group bg-black text-white px-6 py-3 text-sm font-medium flex items-center gap-2 hover:bg-gray-900 transition-all">
                  EXPLORE CAREERS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className={`lg:col-span-2 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`group relative bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ${
                    index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    minHeight: index < 2 ? '200px' : '180px'
                  }}
                >
                  {/* Number */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-bold group-hover:bg-white group-hover:text-black transition-colors">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Image */}
                    <div className="h-16 w-16 mb-4 border border-current group-hover:bg-white group-hover:text-black transition-colors">
                      {renderImage(reason.imageType, index)}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold mb-2 leading-tight">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs leading-relaxed opacity-80 group-hover:opacity-100 flex-1">
                      {reason.description}
                    </p>

                    {/* Accent line */}
                    <div className="w-8 h-px bg-current mt-3"></div>
                  </div>

                  {/* Sharp corner accent */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black group-hover:bg-white transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whywork;