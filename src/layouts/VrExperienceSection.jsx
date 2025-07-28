import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import v3Video from "../assets/v3.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function VrExperienceSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        bgRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          leftRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          rightRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-secondary text-primary overflow-hidden relative cursor-follow"
    >
      <div
        ref={bgRef}
        className="relative z-10 max-w-7xl mx-auto px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div ref={leftRef} className="space-y-8">
            <div className="border-l-4 border-LightBlue pl-6">
              <p className="text-LightBlue text-sm font-bold tracking-widest uppercase mb-4">
                IMMERSIVE TECHNOLOGY — COMING SOON
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 font-sans">
                EXPERIENCE THE VESSEL
                <span className="text-LightBlue"> BEFORE IT'S BUILT</span>
              </h2>
            </div>

            <p className="text-md md:text-lg text-primary leading-relaxed">
              Step inside your design with cutting-edge AR/VR technology. Walk
              through vessels, inspect systems, validate sizes, and extract
              engineering details before construction begins.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Real-time walkthroughs",
                "Auto-tag tank sizes",
                "3D scanning integration",
                "Clash detection overlays",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-primary/5 border border-secondary/20 p-4"
                >
                  <div className="w-2 h-2 bg-LightBlue" />
                  <span className="text-sm font-semibold capitalize">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="group bg-LightBlue text-secondary px-4 md:px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-3 hover:bg-LightBlue hover:shadow-xl transform hover:-translate-y-1">
              EXPLORE VR/AR PREVIEW
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side Video */}
          <div ref={rightRef} className="relative cursor-follow">
            <div className="aspect-video border-4 border-primary overflow-hidden bg-gray-900 relative shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={v3Video} type="video/mp4" />
              </video>

              {/* VR Interface Overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-secondary/80 backdrop-blur-sm border border-LightBlue/50 p-3">
                    <div className="text-LightBlue text-xs font-bold">
                      VR MODE ACTIVE
                    </div>
                    <div className="text-primary text-sm">Vessel Inspection</div>
                  </div>
                  <div className="bg-secondary/80 backdrop-blur-sm border border-primary/30 p-3">
                    <div className="text-primary text-xs">DEPTH: 12.5m</div>
                    <div className="text-primary text-xs">ZONE: ENGINE RM</div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-8 border-2 border-LightBlue/70">
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-LightBlue" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-LightBlue" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-LightBlue" />
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-LightBlue" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-secondary/90 backdrop-blur-sm border border-primary/30 p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-primary text-sm">
                        Tank Volume: 2,450 L
                      </div>
                      <div className="text-LightBlue text-sm font-bold">
                        SCANNING...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}
