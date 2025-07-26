import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax overlay
      gsap.to(overlayRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Cards animation
      gsap.fromTo(".future-card", {
        opacity: 0,
        y: 120,
        rotationX: 30,
        scale: 0.8,
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".future-grid",
          start: "top 80%",
        },
      });

      // Solutions animation
      gsap.fromTo(".solution-item", {
        opacity: 0,
        x: -60,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solutions-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const industryNeeds = [
    {
      title: "Faster Design Cycles",
      text: "Accelerated project timelines through digital optimization and streamlined workflows.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    },
    {
      title: "Better Coordination",
      text: "Seamless collaboration between teams, stakeholders, and global project partners.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    },
    {
      title: "Real-time Insight",
      text: "Live project monitoring, predictive analytics, and data-driven decision making.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    },
    {
      title: "Smart Decision Making",
      text: "AI-powered analysis and tech-enabled solutions for complex marine challenges.",
      img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600",
    },
  ];

  const solutions = [
    "Vessels are modeled, simulated, and optimized digitally before build",
    "Retrofits are scanned and completed with precision",
    "Offshore systems are managed through digital dashboards",
    "Clients can visualize and track every stage, remotely",
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative px-8 md:px-16 py-32 max-w-7xl mx-auto overflow-hidden"
      style={{ 
        zIndex: 20,
        marginTop: '0' 
      }}
    >
      {/* Parallax Background Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-40 -z-10"
      />

      {/* Sharp Geometric Elements */}
      <div className="absolute top-20 right-0 w-32 h-32 bg-primary-500 opacity-10 transform rotate-45" />
      <div className="absolute bottom-40 left-0 w-24 h-24 bg-accent-500 opacity-10 transform -rotate-12" />

      <div className="text-center mb-20">
        <h2 className="font-syne text-4xl md:text-6xl font-800 text-secondary-900 mb-8">
          WHY WE ARE THE FUTURE OF<br />
          <span className="text-primary-600">MARINE & OFFSHORE</span>
        </h2>
        <div className="w-32 h-1 bg-accent-500 mx-auto mb-8" />
        <p className="font-syne text-xl md:text-2xl font-500 text-secondary-600 max-w-4xl mx-auto leading-relaxed">
          The industry is evolving. Hydronavix is purpose-built for this transformation.
        </p>
      </div>

      <div className="mb-24">
        <h3 className="font-syne text-3xl md:text-4xl font-700 text-secondary-800 mb-12 text-center">
          Projects Need:
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 future-grid">
          {industryNeeds.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-xl group future-card cursor-pointer bg-white border-t-4 border-primary-500 hover:border-accent-500 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-syne text-xl font-700 mb-4 text-secondary-900">{item.title}</h3>
                <p className="font-syne text-secondary-600 leading-relaxed font-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary-900 to-primary-900 p-12 md:p-16 relative overflow-hidden">
        {/* Sharp Corner Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-400 opacity-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400 opacity-20" />
        
        <h3 className="font-syne text-3xl md:text-4xl font-700 text-black mb-12 text-center">
          We are developing solutions where:
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-item flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-strong border-l-4 border-accent-400">
              <div className="w-4 h-4 bg-accent-400 flex-shrink-0 mt-2" />
              <p className="font-syne text-lg md:text-xl text-black leading-relaxed font-500">{solution}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="font-syne text-2xl md:text-3xl font-700 text-accent-300">
            This is not tomorrow's idea — this is our current direction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;