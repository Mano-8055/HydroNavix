import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import v2 from "../assets/v1.mp4";
import v3 from "../assets/v3.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home2() {
  
    const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom', 
        end: 'bottom top',   
        scrub: 1,
      },
    });
  }, []);

   const sectionRef = useRef(null);
  const AitextRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left (Text) animation
      gsap.fromTo(
        textRef.current,
        { x: -100, y: 50, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // when section top hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // Right (Video) animation
      gsap.fromTo(
        videoRef.current,
        { x: 100, y: 50, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-secondary">
     <section className="relative h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src={v2} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div ref={textRef} className="text-primary">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Navigating the Future of Marine and Offshore Engineering with AI Precision
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Where intelligent design, immersive technology, and global experience converge to define the next era of ocean innovation
          </p>
        </div>
      </div>
    </section>
    
      {/* AI SECTION */}
     <section
      ref={sectionRef}
      className="min-h-screen max-w-7xl overflow-hidden flex flex-col-reverse md:flex-row items-center gap-10 px-4"
    >
      <div ref={AitextRef} className="text-secondary w-full md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">AI Innovation Preview – Coming Soon</h2>
        <p className="mb-6">
          Hydronavix introduces the world’s first AI-powered marine design feature that transforms 2D GA drawings into 3D models with spatial intelligence.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Upload GA drawings in seconds</li>
          <li>Get annotated 3D models</li>
          <li>Simulate machinery layouts and cable routing</li>
          <li>Export to BIM tools</li>
        </ul>
        <button className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-secondary/80 transition">
          Explore AI
        </button>
      </div>

      <video
        ref={videoRef}
        className="h-full object-cover w-full md:w-1/2"
        autoPlay
        muted
        loop
      >
        <source src={v3} type="video/mp4" />
      </video>
    </section>

      {/* AR/VR SECTION */}
      <section className="relative min-h-screen bg-secondary flex items-center">
        <img
          src=""
          className="absolute right-0 h-full object-contain opacity-20"
          alt="Engineer in VR"
        />
        <div className="relative z-10 max-w-2xl px-10 text-primary" >
          <h2 className="text-4xl font-bold mb-4">Experience the Vessel Before It’s Built</h2>
          <p className="mb-6">
            Step inside your design. Hydronavix uses AR/VR so you and your team can virtually walk through vessels and extract details before construction.
          </p>
          <ul className="list-disc list-inside mb-6 text-primary/80">
            <li>Real-time walkthroughs</li>
            <li>Auto-tag tank sizes & zones</li>
            <li>3D scan integration</li>
            <li>Live clash detection overlays</li>
          </ul>
          <button className="bg-green-500 px-6 py-2 rounded">
            View AR/VR Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home2;
