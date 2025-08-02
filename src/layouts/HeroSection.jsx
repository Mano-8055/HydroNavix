import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';
import v1Video from "../assets/hero4.mp4";
import heroPoster from '../assets/images/heroPoster.png';

export default function HeroSection() {
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center cursor-follow">

      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover z-0"
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={v1Video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-secondary/60" />

        {/* Fog Effect - Top Left */}
        <div className="absolute -top-36 -left-36 w-[420px] md:w-[450px] h-[420px] md:h-[450px] bg-primary opacity-60 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-4">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div ref={textRef} className="text-primary">
            <div className="border-l-4 border-LightBlue pl-6 mb-8">
              <p className="text-LightBlue text-sm font-bold tracking-widest uppercase mb-2">
                AI-POWERED MARINE ENGINEERING
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                NAVIGATING THE FUTURE OF
                <span className="text-LightBlue"> OFFSHORE DESIGN</span>
              </h1>
            </div>
            <p className="text-md md:text-lg text-primary leading-relaxed mb-8 max-w-xl">
              Where intelligent design, immersive technology, and global
              experience converge to define the next era of ocean innovation
            </p>
            <div className="flex justify-center md:justify-normal space-x-2 md:space-x-4">
              <button
                onClick={() => navigate('/contact-us')}
                className="group bg-LightBlue text-secondary px-3 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-1 md:gap-3 hover:bg-LightBlue hover:shadow-xl transform hover:-translate-y-1"
              >
                GET STARTED
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              {/* <button className="group border-2 border-primary text-primary px-2 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-1 md:gap-3 hover:bg-primary hover:text-secondary">
                <Play className="w-5 h-5" />
                WATCH DEMO
              </button> */}
            </div>
          </div>

          {/* Right Column  */}
          <div className="hidden lg:block">
            <div className="w-full h-[400px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
