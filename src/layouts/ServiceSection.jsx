import { useEffect, useRef } from "react";
import gsap from "gsap";
import Card1 from "../components/Card1";
import { Services } from "../json/services";

const CARD_WIDTH = 300;
const CARD_MARGIN = 24;

const ServiceSection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tween = useRef(null);

  const repeatedServices = [...Services, ...Services, ...Services];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = (CARD_WIDTH + CARD_MARGIN) * Services.length;

    gsap.set(track, { x: -totalWidth });

    const loop = () => {
      tween.current = gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`, 
        },
      });
    };

    const updateScale = () => {
      const cards = track.querySelectorAll(".card-container");
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(containerCenter - cardCenter);
        const maxDistance = containerRect.width / 2;

        const scale = distanceFromCenter < 150 ? 1.1 : 0.95;
        gsap.to(card, { scale, duration: 0.3, ease: "power2.out" });
      });
    };

    loop();

    const handleScroll = () => {
      requestAnimationFrame(updateScale);
    };

    containerRef.current.addEventListener("scroll", handleScroll);
    gsap.ticker.add(updateScale);

    return () => {
      tween.current?.kill();
      gsap.ticker.remove(updateScale);
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pause = () => tween.current?.pause();
  const play = () => tween.current?.play();

  return (
    <div className="py-10">
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={play}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6"
          style={{ willChange: "transform" }}
        >
          {repeatedServices.map((service, index) => (
            <div
              key={index}
              className="card-container shrink-0 w-[300px]"
              style={{ willChange: "transform" }}
            >
              <Card1
                title={service.title}
                id={service.id}
                img={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;