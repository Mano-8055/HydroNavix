import { useEffect, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCTA from "../assets/images/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0.5, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] overflow-hidden cursor-follow">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${ImageCTA})`,
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/60 z-10" />

      {/* Foreground Content */}
      <section
        ref={sectionRef}
        className="relative z-20 text-primary mx-2 md:mx-20 my-20 px-10 py-14 md:py-20 flex justify-center items-center"
      >
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
            Ready to find your <span className="text-primary">flow</span>?
          </h2>
          <p className="text-sm md:text-lg text-primary mb-6">
            Join a community of driven professionals built for focus,
            flexibility, and real connection. Your desk is waiting.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="bg-primary text-secondary text-md font-medium rounded-full px-6 py-3 w-fit 
                      hover:bg-accent hover:text-primary hover:shadow-lg 
                      transform transition-all duration-300 ease-in-out"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
