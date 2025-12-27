import React, { useEffect, useState } from 'react';
import { ArrowDown, Play } from 'lucide-react';
import heroImage from '../assets/about1.png'; 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary transform skew-x-12 translate-x-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-secondary text-primary text-sm font-medium tracking-wide uppercase">
                  Careers
                </span>
              </div>
              <h1 className="text-3xl lg:text-6xl font-bold text-secondary leading-none tracking-tight">
                Join the Future of
                <br />
                <span className="relative">
                  Marine & Offshore
                </span>
                <br />
                Engineering
              </h1>

              {/* Description */}
              <div className="space-y-4 text-lg text-secondary/60 max-w-xl">
                <p>
                  At <strong className="text-secondary">Hydronavix</strong>, we're not just hiring we're building a team that will redefine how the world builds, operates, and innovates across the oceans.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a href='/careers/#open-roles' className="group bg-secondary text-primary px-8 py-4 flex items-center justify-center md:justify-normal gap-3 hover:bg-secondary/80 transition-all duration-200 font-medium">
                  View Open Roles
                  <ArrowDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
{/*                 
                <a href='/careers/#submit-resume' className="group border-2 border-secondary text-secondary px-8 py-4 flex items-center justify-center md:justify-normal gap-3 hover:bg-secondary hover:text-primary transition-all duration-200 font-medium">
                  Submit Resume
                  <span className="text-sm opacity-75">(Future Opportunities)</span>
                </a> */}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-full overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Hydronavix Offshore Platform"
                className="object-cover w-full h-60 lg:h-full"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
