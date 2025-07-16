import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  useEffect(() => {
    gsap.fromTo(".why-us-card",{
      opacity:0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.4,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-us-grid",
        start: "top 80%",
      },
    });
  }, []);

  const cards = [
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
  ];

  return (
    <section 
      className="px-4 py-16 max-w-6xl mx-auto relative bg-white"
      style={{ 
        zIndex: 20,
        marginTop: '-50vh' // Negative margin to overlap with Section 3
      }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Why Clients Choose Us
      </h2>
      <div className="grid md:grid-cols-3 gap-8 why-us-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className="overflow-hidden shadow-md group why-us-card cursor-pointer bg-white rounded-lg"
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
  );
};

export default Section4;