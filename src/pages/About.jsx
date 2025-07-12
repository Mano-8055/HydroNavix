import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/about/image.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const componentRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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

      const sections = gsap.utils.toArray("section");
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
              start: "top 80%"
          }
      });


      const parallaxImages = gsap.utils.toArray(".parallax-img");
      parallaxImages.forEach(img => {
          gsap.to(img, {
              yPercent: -15, 
              ease: "none",
              scrollTrigger: {
                  trigger: img,
                  scrub: 1.5 
              }
          });
      });


    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-primary text-secondary py-10">
      {/* Hero Banner */}
      <div className="w-full h-[250px] md:h-[500px] overflow-hidden relative">
        <img
          ref={heroImgRef}
          src={image}
          alt="Marine Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-40 flex items-center justify-center">
          <h1 ref={heroTitleRef} className="text-primary text-2xl md:text-5xl font-bold text-center">
            Sea Delta Marine & Offshore
          </h1>
        </div>
      </div>

      {/* About Company */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-secondary/80 mb-2">About Us</h2>
          <h3 className="text-xl md:text-4xl font-bold leading-tight mb-4">
            Unique Solution Provider for Marine, Offshore, Oil & Gas
          </h3>
          <p className="text-lg text-secondary/60">
            Based across the Middle East, India and Europe, we provide complete engineering and consulting solutions
            from design to delivery, all under one roof.
          </p>
        </div>
        <div className="overflow-hidden">
             <img
              src="https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Offshore Engineering"
              className="w-full h-80 object-cover shadow-2xl parallax-img"
            />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background px-6 py-10 text-center">
        <h2 className="text-xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-md md:text-lg text-secondary/60 max-w-3xl mx-auto">
          Deliver bespoke, innovative, practical and cost-effective solutions with professional integrity and marine engineering excellence.
        </p>
        <div className="w-full max-w-5xl h-96 mx-auto mt-10 shadow-xl overflow-hidden">
             <img
              src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXB8ZW58MHx8MHx8fDA%3D"
              alt="Mission"
              className="w-full h-full object-cover parallax-img"
            />
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Why Clients Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 why-us-grid">
          {[
            {
              title: "Full-Cycle Support",
              text: "From initial concept through to project delivery, we support every step.",
              img: "https://images.unsplash.com/photo-1496347326319-2935d381b307?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcHxlbnwwfHwwfHx8Mg%3D%3D",
            },
            {
              title: "Integrated Engineering",
              text: "Cross-disciplinary expertise: Naval, Electrical, Structural, Sustainability.",
              img: "https://images.unsplash.com/photo-1437385545573-fcf5b4b7fb57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXB8ZW58MHx8MHx8fDA%3D",
            },
            {
              title: "Sustainable Innovation",
              text: "We embed decarbonization and renewable design thinking by default.",
              img: "https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcHxlbnwwfHwwfHx8MA%3D%3D",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-md group why-us-card cursor-pointer" 
            >
              <img src={card.img} alt={card.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-secondary/60">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Services */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Experience & Scope of Services</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left text-lg text-gray-700 max-w-4xl mx-auto services-grid">
            {[
              "Ship, jack-up & platform design",
              "New build project management",
              "Ocean engineering & feasibility studies",
              "Digitization & renewable energy systems",
              "Port & shipyard development",
              "Marine electrical & mechanical integration",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 service-item"> {/* Added a class for targeting */}
                <span className="text-blue-600 font-bold text-xl">■</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Strength */}
      <section className="relative py-20 px-6 w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1473642676276-2d4ab561542e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZ3xlbnwwfHwwfHx8Mg%3D%3D"
            alt="Team"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team’s Strength</h2>
          <p className="text-gray-800 text-lg mb-4">
            Our team spans Naval Architects, Marine & Electrical Engineers, Process Engineers, Sustainability Experts, and Surveyors.
          </p>
          <p className="text-gray-800 text-lg">
            We deliver precise, passionate, and end-to-end consultancy with proven real-world impact.
          </p>
        </div>
      </section>


    </div>
  );
};

export default About;