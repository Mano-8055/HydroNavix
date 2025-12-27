import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section8 = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background
      gsap.to(sectionRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        }
      );

      // Skills animation
      gsap.fromTo(".skill-tag", {
        opacity: 0,
        y: 30,
        scale: 0.8,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden py-32 px-8 md:px-16 bg-secondary-900"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2069')`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Text */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden pointer-events-none">
        <div className="animate-parallax-slow font-syne font-800 text-6xl md:text-8xl text-white/5 whitespace-nowrap">
          Engineering Excellence ~ Innovation & Precision ~ Marine Expertise ~ Engineering Excellence ~ Innovation & Precision ~ Marine Expertise ~
        </div>
      </div>

      {/* Sharp Geometric Elements */}
      <div className="absolute top-20 right-0 w-32 h-32 bg-accent-400 opacity-10 transform rotate-45" />
      <div className="absolute bottom-20 left-0 w-24 h-24 bg-primary-400 opacity-10 transform -rotate-12" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div ref={imageRef} className="w-full lg:w-1/2">
          <div className="relative w-80 h-96 mx-auto shadow-2xl overflow-hidden border-4 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1645932647969-6a92e3d6667f?q=80&w=1170&auto=format&fit=crop"
              alt="Team"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Sharp Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-2 bg-accent-400" />
          </div>
        </div>

        <div ref={contentRef} className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="font-syne text-4xl md:text-5xl font-800 mb-12 text-white">
            Our Team's <span className="text-accent-400">Strength</span>
          </h2>
          <div className="w-24 h-1 bg-accent-400 mb-12 mx-auto lg:mx-0" />
          
          <blockquote className="font-syne text-xl md:text-2xl leading-relaxed text-secondary-200 italic mb-12 border-l-4 border-accent-400 pl-8">
            "Our team spans Naval Architects, Marine & Electrical Engineers, Process Engineers,
            Sustainability Experts, and Surveyors. We deliver precise, passionate, and
            end-to-end consultancy with proven real-world impact."
          </blockquote>
          
          <div className="skills-container flex flex-wrap gap-4 justify-center lg:justify-start">
            {['Naval Architecture', 'Marine Engineering', 'Electrical Systems', 'Process Engineering', 'Sustainability', 'Surveying'].map((skill, index) => (
              <span 
                key={index} 
                className="skill-tag px-6 py-3 bg-primary-600 hover:bg-accent-500 text-white font-syne font-600 text-sm transition-all duration-300 border border-primary-400 hover:border-accent-400"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { number: '50+', label: 'Projects' },
              { number: '15+', label: 'Years' },
              { number: '100%', label: 'Success' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-syne text-3xl md:text-4xl font-800 text-accent-400">{stat.number}</div>
                <div className="font-syne text-sm font-600 text-secondary-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;