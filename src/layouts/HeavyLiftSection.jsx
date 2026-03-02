import { ArrowRight, Zap, Target, Shield, Cog, Weight, Truck, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heavylift1 from "../assets/heavylift/Gemini_Generated_Image_11xwvf11xwvf11xw.png";
import heavylift2 from "../assets/heavylift/Gemini_Generated_Image_bbedaubbedaubbed.png";
import craneIcon from "../assets/icons/crane1.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeavyLiftSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bgRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [heavylift1, heavylift2];

  const capabilities = [
    {
      icon: Weight,
      title: "Ultra-Heavy Load Handling",
      desc: "Capable of lifting and transporting loads exceeding 1000 tons with precision engineering.",
      metric: "1000+ TON CAPACITY"
    },
    {
      iconType: 'image',
      iconSrc: craneIcon,
      title: "Advanced Loadout Operations",
      desc: "Seamless integration of crane operations with specialized transport solutions.",
      metric: "PRECISION ±1MM"
    },
    {
      icon: Shield,
      title: "Structural Integrity Analysis",
      desc: "Comprehensive assessment ensuring safe lifting and transportation of critical assets.",
      metric: "99.9% SAFETY RATE"
    },
    //500+ PROJECTS for metrics
    {
      icon: Wrench,
      title: "Custom Rigging Solutions",
      desc: "Engineered rigging systems tailored for complex offshore and marine installations.",
      metric: ""
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen bg-primary text-secondary flex items-center relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-secondary/5" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[250px] border-r-transparent border-t-[250px] border-t-secondary/5" />
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={`grid-${i}`}
              className="border-r border-b border-secondary/70"
            />
          ))}
        </div>
      </div>

      <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 relative z-10 py-20">
        <div className="text-center mb-14">
          <div className="inline-block border-2 border-secondary px-4 py-2 mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">
              HEAVY LIFT ENGINEERING
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 font-sans">
            POWERFUL <span className="text-LightBlue">LIFTING SOLUTIONS</span>
          </h2>
          <p className="text-md md:text-lg text-secondary/80 max-w-4xl mx-auto leading-relaxed">
            Specialized engineering solutions for the most demanding heavy lift and loadout operations in marine and offshore environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative cursor-follow" ref={leftRef}>
            <div className="aspect-video border-4 border-secondary overflow-hidden bg-secondary relative shadow-2xl">
              <img
                src={images[currentImageIndex]}
                alt="Heavy Lift Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 md:bottom-6 left-6 right-6">
                <div className="bg-secondary/80 backdrop-blur-sm border border-primary/30 p-2 md:p-4">
                  <div className="text-primary text-sm font-normal md:font-bold mb-1">
                    HEAVY LIFT OPERATIONS
                  </div>
                  <div className="text-LightBlue text-xs">
                    Executing precision loadout engineering...
                  </div>
                  <div className="w-full bg-gray-700 h-1 mt-2">
                    <div className="bg-LightBlue h-1 w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute top-2 md:top-4 left-2 md:left-4 w-4 h-4 border-l-2 border-t-2 border-LightBlue" />
              <div className="absolute top-2 md:top-4 right-2 md:right-4 w-4 h-4 border-r-2 border-t-2 border-LightBlue" />
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-4 h-4 border-l-2 border-b-2 border-LightBlue" />
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-4 h-4 border-r-2 border-b-2 border-LightBlue" />
            </div>
          </div>

          <div className="space-y-6" ref={rightRef}>
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="border-2 border-secondary/20 bg-primary transition-all duration-300 cursor-pointer hover:border-LightBlue/50 hover:shadow-lg"
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 border-2 border-LightBlue/30 bg-LightBlue/5 transition-all duration-300">
                      {item.iconType === 'image' ? (
                        <img src={item.iconSrc} alt="Crane" className="w-5 h-5" />
                      ) : typeof item.icon === 'string' ? (
                        <span className="material-icons text-LightBlue" style={{ fontSize: '20px' }}>
                          {item.icon}
                        </span>
                      ) : (
                        <item.icon className="w-5 h-5 text-LightBlue" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 text-secondary">
                        {item.title}
                      </h3>
                      <p className="text-secondary/70 text-sm mb-2">{item.desc}</p>
                      <div className="text-LightBlue font-bold text-xs tracking-wider uppercase">
                        {item.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => navigate("/engineering-services/structural-weighing-cog-analysis")}
              className="w-full bg-secondary uppercase text-primary py-4 font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 hover:bg-secondary/80 hover:shadow-xl group"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
