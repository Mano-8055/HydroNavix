import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import droneVideo from "../assets/v4.mp4";
import { Eye, Radar, ScanLine, Layers3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function DroneOverviewModern() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Radar className="w-5 h-5 text-LightBlue" />,
      title: "Dual-sensor Drone Missions",
    },
    {
      icon: <ScanLine className="w-5 h-5 text-LightBlue" />,
      title: "Multi-spectral Payloads",
    },
    {
      icon: <Eye className="w-5 h-5 text-LightBlue" />,
      title: "Digital Twin Generation",
    },
    {
      icon: <Layers3 className="w-5 h-5 text-LightBlue" />,
      title: "Class-ready Deliverables",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-primary text-secondary overflow-hidden"
    >
      {/* Optional Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={`grid-${i}`}
              className="border-r border-b border-secondary/40"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 items-center gap-12">
        {/* left */}
        <div ref={videoRef} className="relative cursor-follow">
          <div className="relative aspect-video w-full overflow-hidden shadow-xl border-4 border-secondary group">
            <video
              src={droneVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-secondary/10 to-transparent z-10" />
            <div className="absolute top-2 md:top-4 left-2 md:left-4 z-20 border border-primary/30 flex flex-col items-start text-xs text-primary space-y-1 bg-secondary/50 px-1.5 md:px-3 py-1 md:py-2 shadow-md">
              <div className="font-medium md:font-semibold tracking-wider text-LightBlue">
                MISSION ID: #HX-A23
              </div>
              <div>Altitude: 32.5m</div>
              <div>Signal: ★★★★☆</div>
              <div>Payload: Optical + Thermal</div>
            </div>

            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-20 border border-primary/30 bg-secondary/70 px-2 md:px-4  py-1.5 md:py-3 text-primary max-w-xs backdrop-blur-sm">
              <div className="text-xs font-semibold tracking-wider text-LightBlue mb-1">
                SYSTEM LOG
              </div>
              <div className="text-xs md:text-sm font-light text-primary">
                Capturing hull curvature
                <br />
                Thermal signature processing...
                <br />
                Mesh generation 64%
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div ref={textRef}>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
            Drone-Driven{" "}
            <span className="text-LightBlue">Asset Intelligence</span>
          </h2>
          <p className="text-secondary/80 text-md md:text-lg mb-6">
            From hull inspections to complete 3D reconstructions, HydroNavix
            delivers faster data and smarter insights through air and subsea
            drones.
          </p>

          <div className="space-y-3 mb-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm md:text-base font-medium"
              >
                {s.icon}
                <span>{s.title}</span>
              </div>
            ))}
          </div>

          <button onClick={() => navigate('/drone')} className="inline-flex items-center gap-3 border-2 border-secondary px-5 py-3 font-semibold hover:bg-secondary hover:text-primary transition-all">
            Explore Drone Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
