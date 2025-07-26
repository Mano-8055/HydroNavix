import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card1 from "../components/Card1";
import { Services } from "../json/services";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const scrollWrapperRef = useRef(null);
  const scrollTween = useRef(null);

  useEffect(() => {
    if (!scrollWrapperRef.current) return;

    const wrapper = scrollWrapperRef.current;
    const clone = wrapper.innerHTML;
    wrapper.innerHTML += clone;

    const totalWidth = wrapper.scrollWidth / 2;

    scrollTween.current = gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => scrollTween.current?.kill();
  }, []);

  const handleMouseEnter = () => scrollTween.current?.pause();
  const handleMouseLeave = () => scrollTween.current?.play();

  return (
    <div className="py-10">
      <div
        className="overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={scrollWrapperRef} className="flex gap-6 w-max">
          {Services.map((service) => (
            <div key={service.id} className="shrink-0 w-[300px]">
              <Card1 title={service.title} id={service.id} img={service.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
