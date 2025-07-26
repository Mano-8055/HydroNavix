import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import v2 from "../assets/v1.mp4";
import v3 from "../assets/v3.mp4";

gsap.registerPlugin(ScrollTrigger);

function Home2() {
  const heroRef = useRef();
  const aiRef = useRef();
  const aiTextRef = useRef();
  const arVrRef = useRef();
  const arVrTextRef = useRef();

  useEffect(() => {
    // Smooth scroll setup with Lenis
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP + Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });

    // Hero Entrance Animation
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // AI Section Video Parallax & Text Fade-in
    gsap.timeline({
      scrollTrigger: {
        trigger: aiRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    })
      .fromTo(
        aiRef.current.querySelector("video"),
        { scale: 1 },
        { scale: 1.15, ease: "none" },
        0
      )
      .fromTo(
        aiTextRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: "power3.out", duration: 1 },
        0.2
      );

    // AR/VR Section Right Slide Image + Left Slide Text
    gsap.timeline({
      scrollTrigger: {
        trigger: arVrRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    })
      .to(arVrRef.current.querySelector("img"), {
        x: 200,
        scale: 1.1,
        opacity: 0.4,
        ease: "power2.out",
      })
      .fromTo(
        arVrTextRef.current,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<"
      );
  }, []);

  return (
    <div className="text-secondary">
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src={v2} type="video/mp4" />
        </video>
        <div className="relative z-10 text-primary flex items-center justify-center h-full text-center px-4">
          <div ref={heroRef}>
            <h1 className="text-4xl md:text-6xl font-bold">
              Navigating the Future of Marine and Offshore Engineering with AI Precision
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Where intelligent design, immersive technology, and global experience converge.
            </p>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section ref={aiRef} className="relative min-h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src={v3} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center h-full">
          <div className="text-white" ref={aiTextRef}>
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
        </div>
      </section>

      {/* AR/VR SECTION */}
      <section ref={arVrRef} className="relative h-screen bg-black flex items-center">
        <img
          src="/images/engineer-vr.png"
          className="absolute right-0 h-full object-contain opacity-20"
          alt="Engineer in VR"
        />
        <div className="relative z-10 max-w-2xl px-10 text-white" ref={arVrTextRef}>
          <h2 className="text-4xl font-bold mb-4">Experience the Vessel Before It’s Built</h2>
          <p className="mb-6">
            Step inside your design. Hydronavix uses AR/VR so you and your team can virtually walk through vessels and extract details before construction.
          </p>
          <ul className="list-disc list-inside mb-6 text-white/80">
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
