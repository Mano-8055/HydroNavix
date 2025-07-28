import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Upload, Eye, Settings, Download, Play } from 'lucide-react';
import v1Video from '../assets/v1.mp4';
import v2Video from '../assets/v2.mp4';
import v3Video from '../assets/v3.mp4';


export default function HydronavixHomepage() {
  // Hero Section State
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  
  // AI Section State
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  // VR Section Refs
  const vrSectionRef = useRef(null);
  const vrContentRef = useRef(null);
  const vrVideoRef = useRef(null);

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
    <div className="text-black bg-white font-mono">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={v1Video} type="video/mp4" />


        </video>

        {/* Sharp Geometric Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-black/20" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[150px] border-r-transparent border-t-[150px] border-t-black/30" />
        </div>

        

        {/* Hero Content with Text Overlay */}
        <div className="relative z-20 flex items-center h-full px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Main Content */}
            <div 
              ref={textRef} 
              className={`text-white transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="border-l-4 border-cyan-400 pl-6 mb-8">
                <p className="text-cyan-300 text-sm font-bold tracking-widest uppercase mb-2">AI-POWERED MARINE ENGINEERING</p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-sans">
                  NAVIGATING THE FUTURE OF 
                  <span className="text-cyan-300"> OFFSHORE DESIGN</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl">
                Where intelligent design, immersive technology, and global experience converge to define the next era of ocean innovation.
              </p>

              <div className="flex space-x-4">
                <button className="group bg-cyan-400 text-black px-8 py-4 font-bold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-cyan-300 hover:shadow-xl transform hover:-translate-y-1">
                  GET STARTED
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 font-bold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-white hover:text-black">
                  <Play className="w-5 h-5" />
                  WATCH DEMO
                </button>
              </div>
            </div>

            
          </div>
        </div>

        {/* Sharp Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-15">
          <div className="absolute top-32 left-16 w-4 h-4 border-2 border-cyan-400/30 rotate-45" />
          <div className="absolute top-64 right-32 w-6 h-6 border border-white/20 rotate-12" />
          <div className="absolute bottom-48 left-48 w-2 h-2 bg-cyan-400/50" />
          <div className="absolute bottom-32 right-64 w-8 h-1 bg-white/30" />
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="min-h-screen bg-white text-black flex items-center relative">
        {/* Sharp Angular Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-gray-50" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[250px] border-r-transparent border-t-[250px] border-t-gray-50" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={`grid-${i}`} className="border-r border-b border-gray-200" />
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-8 relative z-10 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-black px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest uppercase">AI INNOVATION PREVIEW</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 font-sans">
              FROM 2D TO <span className="text-cyan-500">3D AI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The world's first AI-powered marine design system that instantly transforms 2D GA drawings into intelligent 3D models with spatial intelligence and engineering validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Video with Overlay */}
            <div className="relative">
              <div className="aspect-video border-4 border-black overflow-hidden bg-black relative shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                   <source src={v2Video} type="video/mp4" />
                </video>
                
                {/* Video Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-sm border border-white/30 p-4">
                    <div className="text-white text-sm font-bold mb-1">AI PROCESSING</div>
                    <div className="text-cyan-300 text-xs">Converting 2D drawings to 3D models...</div>
                    <div className="w-full bg-gray-700 h-1 mt-2">
                      <div className="bg-cyan-400 h-1 w-3/4 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Corner Markers */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />
              </div>
            </div>

            {/* Right: Features */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={`feature-${index}`}
                  className={`border-2 border-gray-300 bg-white transition-all duration-300 cursor-pointer ${
                    hoveredFeature === index ? 'border-black shadow-xl transform translate-x-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-3 border-2 ${hoveredFeature === index ? 'border-cyan-400 bg-cyan-50' : 'border-gray-300'} transition-all duration-300`}>
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{item.text}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    {hoveredFeature === index && (
                      <div className="border-t-2 border-cyan-400 pt-3">
                        <button className="text-sm font-bold text-cyan-600 flex items-center gap-2 hover:gap-3 transition-all">
                          LEARN MORE <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <button className="w-full bg-black text-white py-4 font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 hover:bg-gray-900 hover:shadow-xl group">
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
        className="min-h-screen bg-black text-white overflow-hidden relative"
      >
        {/* Sharp Angular Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-0 border-r-[300px] border-r-transparent border-b-[300px] border-b-gray-900" />
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[250px] border-l-transparent border-t-[250px] border-t-gray-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            {/* Left Side Content */}
            <div ref={vrContentRef} className="space-y-8">
              <div className="border-l-4 border-cyan-400 pl-6">
                <p className="text-cyan-300 text-sm font-bold tracking-widest uppercase mb-4">
                  IMMERSIVE TECHNOLOGY — COMING SOON
                </p>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-sans">
                  EXPERIENCE THE VESSEL
                  <span className="text-cyan-300"> BEFORE IT'S BUILT</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Step inside your design with cutting-edge AR/VR technology. Walk through vessels, inspect systems, validate sizes, and extract engineering details before construction begins.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Real-time walkthroughs",
                  "Auto-tag tank sizes",
                  "3D scanning integration", 
                  "Clash detection overlays"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 p-4">
                    <div className="w-2 h-2 bg-cyan-400" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-cyan-400 text-black px-8 py-4 font-bold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-cyan-300 hover:shadow-xl transform hover:-translate-y-1">
                EXPLORE VR/AR PREVIEW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Right Side Video */}
            <div ref={vrVideoRef} className="relative">
              <div className="aspect-video border-4 border-white overflow-hidden bg-gray-900 relative shadow-2xl">
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
                    <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 p-3">
                      <div className="text-cyan-300 text-xs font-bold">VR MODE ACTIVE</div>
                      <div className="text-white text-sm">Vessel Inspection</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm border border-white/30 p-3">
                      <div className="text-white text-xs">DEPTH: 12.5m</div>
                      <div className="text-white text-xs">ZONE: ENGINE RM</div>
                    </div>
                  </div>

                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 border-2 border-cyan-400/70">
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Panel */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/90 backdrop-blur-sm border border-white/30 p-4">
                      <div className="flex justify-between items-center">
                        <div className="text-white text-sm">Tank Volume: 2,450 L</div>
                        <div className="text-cyan-300 text-sm font-bold">SCANNING...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Technical Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-32 w-6 h-6 border-2 border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-64 right-48 w-8 h-8 border border-white/20 rotate-12" />
          <div className="absolute bottom-48 left-64 w-3 h-3 bg-cyan-400/50 animate-pulse" />
          <div className="absolute bottom-32 right-80 w-12 h-1 bg-white/30" />
        </div>
      </section>
    </div>
  );
}