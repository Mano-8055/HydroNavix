import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="relative px-4 py-20 max-w-7xl mx-auto overflow-hidden"
      style={{ 
        zIndex: 20,
        marginTop: '0' 
      }}
    >

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-medium text-secondary mb-8">
          WHY WE ARE THE FUTURE <br /> OF MARINE & OFFSHORE
        </h2>
      </div>

      <div className="mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 future-grid">
          {industryNeeds.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden group future-card cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary">{item.title}</h3>
                <p className="text-md  text-justify text-secondary/60 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <h3 className="text-3xl md:text-5xl font-medium text-secondary mb-10 text-center">
          We are developing solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-item flex items-start space-x-6 p-6 bg-primary/10 backdrop-blur-strong border-l-4">
              <p className="text-lg md:text-xl text-secondary leading-relaxed font-500">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;