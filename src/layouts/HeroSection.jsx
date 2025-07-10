import { useEffect, useRef } from "react";
import HeroImg from "../assets/images/hero.png";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const HeroSection = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 30,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImg}
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full px-6 md:px-20 py-16" ref={contentRef}>
        <div className="max-w-2xl">
          <h1 className="text-primary text-4xl md:text-6xl font-serif font-semibold leading-tight">
           Navigating the Future of Marine & Energy with AI Precision
          </h1>
        </div>

        <div className="w-full h-[1.5px] rounded-full bg-primary my-4"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <p className="text-primary text-left text-sm md:text-base max-w-2xl">
            HydroNavix blends innovation with precision, delivering advanced design solutions, technical consulting, and project support for the marine, shipbuilding, and oil & gas sectors
          </p>
          <button onClick={()=>navigate('/services')} className="hidden md:flex items-center gap-3 border border-primary text-primary pl-4 pr-2 py-2 rounded-full group">
            View Services
            <GoArrowRight className="w-8 h-8 p-1.5 bg-primary text-secondary rounded-full -rotate-45 group-hover:rotate-0 transition duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
