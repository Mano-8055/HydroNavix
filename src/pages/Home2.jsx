import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Upload, Eye, Settings, Download, Play } from 'lucide-react';
import v1Video from '../assets/v1.mp4';
import v2Video from '../assets/v2.mp4';
import v3Video from '../assets/v3.mp4';


export default function HydronavixHomepage() {

  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const vrSectionRef = useRef(null);
  const vrContentRef = useRef(null);
  const vrVideoRef = useRef(null);
 
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Upload, text: "Upload GA drawings in seconds", desc: "Drag & drop support for all major CAD formats" },
    { icon: Eye, text: "AI-analyzed 3D models with annotation layers", desc: "Automated detection of structural elements" },
    { icon: Settings, text: "Simulate machinery layouts and cable routing", desc: "Real-time validation and optimization" },
    { icon: Download, text: "Export to design tools or BIM environments", desc: "Seamless integration with existing workflows" }
  ];

  return (
    <div className="text-secondary ">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={v1Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative z-20 flex items-center h-full px-4">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div 
              ref={textRef} 
              className={`text-primary transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="border-l-4 border-LightBlue pl-6 mb-8">
                <p className="text-LightBlue text-sm font-bold tracking-widest uppercase mb-2">AI-POWERED MARINE ENGINEERING</p>
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
                  NAVIGATING THE FUTURE OF 
                  <span className="text-LightBlue"> OFFSHORE DESIGN</span>
                </h1>
              </div>
              
              <p className="text-md md:text-lg text-primary leading-relaxed mb-8 max-w-xl">
                Where intelligent design, immersive technology, and global experience converge to define the next era of ocean innovation
              </p>

              <div className="flex space-x-4">
                <button className="group bg-LightBlue text-secondary px-4 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-LightBlue hover:shadow-xl transform hover:-translate-y-1">
                  GET STARTED
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group border-2 border-primary text-primary px-4 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-primary hover:text-secondary">
                  <Play className="w-5 h-5" />
                  WATCH DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="min-h-screen bg-primary text-secondary flex items-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-gray-50" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[250px] border-r-transparent border-t-[250px] border-t-gray-50" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={`grid-${i}`} className="border-r border-b border-secondary/70" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 py-20">
          <div className="text-center mb-14">
            <div className="inline-block border-2 border-secondary px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest uppercase">AI INNOVATION PREVIEW</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 font-sans">
              FROM 2D TO <span className="text-LightBlue">3D AI</span>
            </h2>
            <p className="text-md md:text-lg text-secondary/80 max-w-4xl mx-auto leading-relaxed">
              The world's first AI-powered marine design system that instantly transforms 2D GA drawings into intelligent 3D models with spatial intelligence and engineering validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Video with Overlay */}
            <div className="relative">
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
                    <div className="text-primary text-sm font-bold mb-1">AI PROCESSING</div>
                    <div className="text-LightBlue text-xs">Converting 2D drawings to 3D models...</div>
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

            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={`feature-${index}`}
                  className={`border-2 border-secondary/20 bg-primary transition-all duration-300 cursor-pointer ${
                    hoveredFeature === index ? 'border-secondary shadow-xl transform translate-x-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="p-3">
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 border-2 ${hoveredFeature === index ? 'border-LightBlue bg-LightBlue/10 text-LightBlue' : 'border-secondary/20 text-secondary'} transition-all duration-300`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-md md:text-lg mb-0">{item.text}</h3>
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

      {/* VR/AR Experience Section */}
      <section
        ref={vrSectionRef}
        className="min-h-screen bg-secondary text-primary overflow-hidden relative"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            <div ref={vrContentRef} className="space-y-8">
              <div className="border-l-4 border-LightBlue pl-6">
                <p className="text-LightBlue text-sm font-bold tracking-widest uppercase mb-4">
                  IMMERSIVE TECHNOLOGY — COMING SOON
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
                  EXPERIENCE THE VESSEL
                  <span className="text-LightBlue"> BEFORE IT'S BUILT</span>
                </h2>
              </div>
              
              <p className="text-md md:text-lg text-primary leading-relaxed">
                Step inside your design with cutting-edge AR/VR technology. Walk through vessels, inspect systems, validate sizes, and extract engineering details before construction begins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Real-time walkthroughs",
                  "Auto-tag tank sizes",
                  "3D scanning integration", 
                  "Clash detection overlays"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-primary/5 border border-secondary/20 p-4">
                    <div className="w-2 h-2 bg-LightBlue" />
                    <span className="text-sm font-semibold capitalize">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-LightBlue text-secondary px-4 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-LightBlue hover:shadow-xl transform hover:-translate-y-1">
                EXPLORE VR/AR PREVIEW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right Side Video */}
            <div ref={vrVideoRef} className="relative">
              <div className="aspect-video border-4 border-primary overflow-hidden bg-gray-900 relative shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                   <source src={v3Video} type="video/mp4" />
                </video>

                {/* VR Interface Overlay */}
                <div className="absolute inset-0">
                  {/* Top HUD */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-secondary/80 backdrop-blur-sm border border-LightBlue/50 p-3">
                      <div className="text-LightBlue text-xs font-bold">VR MODE ACTIVE</div>
                      <div className="text-primary text-sm">Vessel Inspection</div>
                    </div>
                    <div className="bg-secondary/80 backdrop-blur-sm border border-primary/30 p-3">
                      <div className="text-primary text-xs">DEPTH: 12.5m</div>
                      <div className="text-primary text-xs">ZONE: ENGINE RM</div>
                    </div>
                  </div>

                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 border-2 border-LightBlue/70">
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-LightBlue" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-LightBlue" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-LightBlue" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-LightBlue" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Panel */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-secondary/90 backdrop-blur-sm border border-primary/30 p-4">
                      <div className="flex justify-between items-center">
                        <div className="text-primary text-sm">Tank Volume: 2,450 L</div>
                        <div className="text-LightBlue text-sm font-bold">SCANNING...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}