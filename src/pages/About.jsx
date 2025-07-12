import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import image from "../assets/about/image.png";

gsap.registerPlugin(ScrollTrigger);
function HoverImageItem({ left, right, image }) {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  return (
    <div
      className="group relative z-10 grid grid-cols-1 md:grid-cols-2 py-6 border-b border-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="text-lg font-medium text-gray-800 cursor-pointer group-hover:text-blue-600">
        {left}
      </div>
      <div className="text-lg text-gray-500 md:text-right mt-2 md:mt-0">{right}</div>

      {/* Floating Image */}
      {hovered && (
        <div
          className="fixed z-50 pointer-events-none shadow-xl rounded overflow-hidden"
          style={{
            top: `${coords.y}px`,
            left: `${coords.x}px`,
            width: "384px", // w-96
            height: "240px", // h-60
            transition: "opacity 0.2s ease",
          }}
        >
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover rounded"
          />
        </div>
      )}
    </div>
  );
}
const About = () => {
  const componentRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const missionRef = useRef(null);
  const missionImgRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionTextRef = useRef(null);
  const whiteOverlayRef = useRef(null);
  const whiteGapRef = useRef(null);

  const navigate = useNavigate();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        heroImgRef.current,
        { scale: 1.2, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        }
      );
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      // Scroll reveals for sections
      const sections = gsap.utils.toArray("section:not(.mission-section)");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Parallax & Staggered
      const cards = gsap.utils.toArray(".why-us-card");
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-us-grid",
          start: "top 80%",
        },
      });

      const serviceItems = gsap.utils.toArray(".service-item");
      gsap.from(serviceItems, {
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });

      const parallaxImages = gsap.utils.toArray(".parallax-img");
      parallaxImages.forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: 1.5,
          },
        });
      });

      // OUR MISSION Scroll Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        missionImgRef.current,
        { scale: 0.8 },
        { scale: 1.3, ease: "none" }
      )
        .fromTo(
          missionHeadingRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "<30%"
        )
        .fromTo(
          missionTextRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "<50%"
        )
        .fromTo(
          whiteOverlayRef.current,
          { y: "100%" },
          { y: "0%", ease: "power1.inOut" },
          "+=0.2"
        );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleHeroClick = () => {
    navigate("/projects");
  };

  return (
    <div ref={componentRef} className="bg-primary text-secondary py-10 relative">
      {/* HERO */}
      <div
        className="relative w-full h-screen overflow-hidden"
        onClick={handleHeroClick}
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
        onMouseMove={handleMouseMove}
        style={{ cursor: "none" }}
      >
        <img
          ref={heroImgRef}
          src={image}
          alt="Marine Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-start px-6 md:px-20 pb-20 bg-black/30">
          <h1
            ref={heroTitleRef}
            className="text-white text-[48px] md:text-[120px] font-bold leading-none tracking-tight"
          >
            Sea Delta<br />Marine & Offshore
          </h1>
        </div>

        {isHoveringHero && (
          <div
            className="pointer-events-none fixed z-50"
            style={{
              top: cursorPos.y - 40,
              left: cursorPos.x - 80,
              width: "160px",
              height: "80px",
              border: "1px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(255,255,255,0.1)",
              fontFamily: "sans-serif",
              borderRadius: "6px",
            }}
          >
            VIEW PROJECT
          </div>
        )}
      </div>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-secondary/80 mb-2">About Us</h2>
          <h3 className="text-xl md:text-4xl font-bold leading-tight mb-4">
            Unique Solution Provider for Marine, Offshore, Oil & Gas
          </h3>
          <p className="text-lg text-secondary/60">
            Based across the Middle East, India and Europe, we provide complete engineering and consulting solutions from design to delivery, all under one roof.
          </p>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600"
            alt="Offshore Engineering"
            className="w-full h-80 object-cover shadow-2xl parallax-img"
          />
        </div>
      </section>

      {/* OUR MISSION Section (Sticky Scroll + Zoom + Text Reveal + White Transition) */}
      <section ref={missionRef} className="relative mission-section h-screen text-white overflow-hidden">
        <img
          ref={missionImgRef}
          src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mission"
          className="absolute inset-0 w-full h-full object-cover mission-image"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full max-w-4xl mx-auto">
          <h2 ref={missionHeadingRef} className="text-4xl md:text-5xl font-bold mb-6 opacity-0">
            Our Mission
          </h2>
          <p
            ref={missionTextRef}
            className="text-lg md:text-xl text-white/90 opacity-0"
          >
            Deliver bespoke, innovative, practical and cost-effective solutions with professional integrity and marine engineering excellence.
          </p>
        </div>
        {/* White Screen Overlay Scroll */}
        <div
          ref={whiteOverlayRef}
          className="absolute inset-0 bg-white z-20"
        />
      </section>

      {/* Minimal White Gap before next section */}
      <section
        ref={whiteGapRef}
        className="h-16 bg-white"
      />

       {/* WHY CHOOSE US */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Why Clients Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 why-us-grid">
          {[
            {
              title: "Full-Cycle Support",
              text: "From initial concept through to project delivery, we support every step.",
              img: "https://images.unsplash.com/photo-1496347326319-2935d381b307?w=600",
            },
            {
              title: "Integrated Engineering",
              text: "Cross-disciplinary expertise: Naval, Electrical, Structural, Sustainability.",
              img: "https://images.unsplash.com/photo-1437385545573-fcf5b4b7fb57?w=600",
            },
            {
              title: "Sustainable Innovation",
              text: "We embed decarbonization and renewable design thinking by default.",
              img: "https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=600",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-md group why-us-card cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-secondary/60">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

   <section className="relative bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">Experience & Scope of Services</h2>
      <p className="text-xl text-gray-400 font-light">/ 6</p>
    </div>

    {/* Floating image on hover */}
    <div className="border-t border-gray-300 relative">
      {[
        ["Ship, jack-up & platform design", "Design Engineering", "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg"],
        ["New build project management", "Project Delivery", "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600"],
        ["Ocean engineering & feasibility studies", "Marine Analysis", "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg"],
        ["Digitization & renewable energy systems", "Sustainable Innovation", "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600"],
        ["Port & shipyard development", "Infrastructure", "https://images.pexels.com/photos/32910812/pexels-photo-32910812.jpeg"],
        ["Marine electrical & mechanical integration", "Systems Integration", "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600"],
      ].map(([left, right, image], i) => (
        <HoverImageItem key={i} left={left} right={right} image={image} />
      ))}
    </div>
  </div>
</section>



<section className="w-full overflow-hidden bg-white relative py-32 px-6">
  {/* Top Marquee */}
  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <h2 className="animate-marquee whitespace-nowrap font-bold text-[11vw] leading-none tracking-tight">
      Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~
    </h2>
  </div>

  {/* Bottom Marquee */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <h2 className="animate-marquee whitespace-nowrap font-bold text-[11vw] leading-none tracking-tight">
      Our Team’s Strength ~ Our Team’s Strength ~ Our Team’s Strength ~
    </h2>
  </div>

  {/* Portrait image — now pulled left and centered vertically */}
  <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 w-[240px] h-[400px] z-10 shadow-xl">
    <img
      src="https://images.unsplash.com/photo-1645932647969-6a92e3d6667f?q=80&w=1170&auto=format&fit=crop"
      alt="Team"
      className="w-full h-full object-cover grayscale"
    />
  </div>

  {/* Quote Text Content */}
  <div className="relative z-20 max-w-5xl mx-auto text-left pl-[300px] pr-8">
    <p className="text-[18px] md:text-[20px] font-light text-gray-900 leading-relaxed mb-4"><br />
      “Our team spans Naval Architects, Marine & Electrical Engineers, Process Engineers, 
      Sustainability Experts, and Surveyors. We deliver precise, passionate, and 
      end-to-end consultancy with proven real-world impact.”
    </p><br />
  </div>

  {/* Marquee Animation */}
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
  `}</style>
</section>
    </div>
  );
};

export default About;
