import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/about1.png'; // Adjust path as needed

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Sharp geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-black"></div>
        <div className="absolute top-1/4 left-1/6 w-3 h-16 bg-black"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-2 bg-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-8">
              {/* Tag */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-black text-white text-sm font-medium tracking-wide uppercase">
                  Careers
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-none tracking-tight">
                Join the Future of
                <br />
                <span className="relative">
                  Marine & Offshore
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-black"></div>
                </span>
                <br />
                Engineering
              </h1>

              {/* Description */}
              <div className="space-y-4 text-lg text-gray-700 max-w-xl">
                <p>
                  At <strong className="text-black">Hydronavix</strong>, we're not just hiring — we're building a team that will redefine how the world builds, operates, and innovates across the oceans.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-gray-900 transition-all duration-200 font-medium">
                  View Open Roles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group border-2 border-black text-black px-8 py-4 flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-200 font-medium">
                  Submit Resume
                  <span className="text-sm opacity-75">(Future Opportunities)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={heroImage}
                alt="Hydronavix Offshore Platform"
                className="object-cover w-full h-full"
                loading="lazy"
              />


              {/* Sharp geometric decorations */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-black"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
    </div>
  );
};

export default Hero;
