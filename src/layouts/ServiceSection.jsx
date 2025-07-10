import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card1 from "../components/Card1";
import { Services } from "../json/services";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const scrollTween = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", 
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      descRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

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
    <div className="py-10 md:py-20">

      {/* title */}
      <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 pb-10 md:pb-20 gap-5 md:gap-5 lg:gap-10">
        <p
          ref={titleRef}
          className="text-2xl md:text-4xl text-center md:text-left font-semibold w-full md:max-w-xl leading-snug opacity-0"
        >
          Trusted Engineering Solutions for the Marine World
        </p>
        <p
          ref={descRef}
          className="text-md font-medium w-full md:max-w-xl text-justify opacity-0"
        >
          HydroNavix delivers end-to-end engineering services with precision and
          reliability covering everything from marine and offshore design to
          surveys, manpower and equipment supply. We blend innovation, compliance,
          and execution into one streamlined engineering workflow.
        </p>
      </div>

      {/* card 1 component */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={scrollWrapperRef} className="flex gap-6 w-max">
          {Services.map((service, index) => (
            <div key={`${service.id}-${index}`} className="shrink-0 w-[300px]">
              <Card1 title={service.title} id={service.id} img={service.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
