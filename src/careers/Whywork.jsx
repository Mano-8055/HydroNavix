import React, { useEffect } from "react";
import { Waves, Cpu, Globe, Wrench, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Whywork = () => {
  useEffect(() => {
    gsap.fromTo(
      "#why-section-title",
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: "#why-section",
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".why-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: "#why-section",
          start: "top 90%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  const reasons = [
    {
      title: "Ocean-Focused Innovation",
      description: "Shape the future of marine and offshore industries.",
      icon: Waves,
    },
    {
      title: "Smart Tech, Real Impact",
      description: "Work with AI, VR, and digital design tools.",
      icon: Cpu,
    },
    {
      title: "Global Collaboration",
      description: "Projects across Middle East, Asia, and Europe.",
      icon: Globe,
    },
    {
      title: "Engineering-First Culture",
      description: "Built by engineers — for engineers.",
      icon: Wrench,
    },
    {
      title: "Growth That Matters",
      description: "Scale your skills for the future.",
      icon: TrendingUp,
    },
  ];

  return (
    <div id="why-section" className="relative flex items-center py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full items-center">
          {/* Left section title */}
          <div id="why-section-title" className="lg:col-span-1">
            <div className="space-y-6">
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
            </div>
          </div>

          {/* Right animated cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className={`why-card group relative bg-primary border-2 border-secondary hover:bg-secondary/5 transition-colors duration-300 ${
                      index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                    style={{
                      minHeight: index < 2 ? "200px" : "180px",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="p-4 h-full flex flex-col">
                      <div className="h-16 w-16 mb-4 border border-secondary flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                        <IconComponent
                          size={32}
                          className="text-secondary group-hover:text-secondary transition-colors duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-bold mb-2 leading-tight text-secondary">
                        {reason.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-secondary/70 group-hover:text-secondary/90 transition-colors duration-300 flex-1">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whywork;
