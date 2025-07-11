import { useEffect, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { opacity: 0.5, y: 100 },
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
    <section
  ref={sectionRef}
  style={{
   boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
  }}
  className="bg-secondary text-primary rounded-[3rem] mx-5 md:mx-20 my-20 px-10 py-14 flex justify-center items-center"
>

      {/* Left Section */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-xl">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Ready to find your <span className="text-primary">flow</span>?
        </h2>
        <p className="text-sm md:text-lg text-gray-300">
          Join a community of driven professionals built for focus, flexibility,
          and real connection. Your desk is waiting.
        </p>
        <button
          onClick={() => navigate("/contact-us")}
          className="bg-primary text-secondary rounded-full px-6 py-3 flex items-center gap-3 w-fit group transition"
        >
          Contact us <FaEnvelope className="group-hover:animate-bounce group-hover:text-accent duration-200 transition-colors ease-in" />
        </button>
      </div>
    </section>
  );
}
