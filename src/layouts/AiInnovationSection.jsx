import { ArrowRight, Upload, Eye, Settings, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import v2Video from "../assets/v2.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function AiInnovationSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
const rightRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Upload,
      text: "Upload GA drawings in seconds",
      desc: "Drag & drop support for all major CAD formats",
    },
    {
      icon: Eye,
      text: "AI-analyzed 3D models with annotation layers",
      desc: "Automated detection of structural elements",
    },
    {
      icon: Settings,
      text: "Simulate machinery layouts and cable routing",
      desc: "Real-time validation and optimization",
    },
    {
      icon: Download,
      text: "Export to design tools or BIM environments",
      desc: "Seamless integration with existing workflows",
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


  return (
    <section
      className="min-h-screen bg-primary text-secondary flex items-center relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-gray-50" />
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[250px] border-r-transparent border-t-[250px] border-t-gray-50" />
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

      <div  ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 relative z-10 py-20">
        <div className="text-center mb-14">
          <div className="inline-block border-2 border-secondary px-4 py-2 mb-6">
            <span className="text-sm font-bold tracking-widest uppercase">
              AI INNOVATION PREVIEW
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 font-sans">
            FROM 2D TO <span className="text-LightBlue">3D AI</span>
          </h2>
          <p className="text-md md:text-lg text-secondary/80 max-w-4xl mx-auto leading-relaxed">
            The world's first AI-powered marine design system that instantly
            transforms 2D GA drawings into intelligent 3D models with spatial
            intelligence and engineering validation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative cursor-follow" ref={leftRef}>
            <div className="aspect-video border-4 border-secondary overflow-hidden bg-secondary relative shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={v2Video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-secondary/80 backdrop-blur-sm border border-primary/30 p-4">
                  <div className="text-primary text-sm font-bold mb-1">
                    AI PROCESSING
                  </div>
                  <div className="text-LightBlue text-xs">
                    Converting 2D drawings to 3D models...
                  </div>
                  <div className="w-full bg-gray-700 h-1 mt-2">
                    <div className="bg-LightBlue h-1 w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-LightBlue" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-LightBlue" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-LightBlue" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-LightBlue" />
            </div>
          </div>

          <div className="space-y-6" ref={rightRef}>
            {features.map((item, index) => (
              <div
                key={`feature-${index}`}
                className={`border-2 border-secondary/20 bg-primary transition-all duration-300 cursor-pointer ${
                  hoveredFeature === index
                    ? "border-secondary shadow-xl transform translate-x-2"
                    : ""
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="p-3">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2.5 border-2 ${
                        hoveredFeature === index
                          ? "border-LightBlue bg-LightBlue/10 text-LightBlue"
                          : "border-secondary/20 text-secondary"
                      } transition-all duration-300`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-md md:text-lg mb-0">
                        {item.text}
                      </h3>
                      <p className="text-secondary/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  {hoveredFeature === index && (
                    <div className="border-t-2 border-LightBlue mt-2 pt-2">
                      <button className="text-sm font-bold text-LightBlue flex items-center gap-2 hover:gap-3 transition-all">
                        LEARN MORE <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button className="w-full bg-secondary text-primary py-4 font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 hover:bg-secondary/80 hover:shadow-xl group">
              ACCESS AI PLATFORM
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
