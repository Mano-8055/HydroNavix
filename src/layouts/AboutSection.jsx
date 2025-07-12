import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg1 from '../assets/images/about1.png';
import aboutImg2 from '../assets/images/about2.png';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img1Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img1Ref.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        img2Ref.current,
        {  opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img2Ref.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* left side */}
      <div className="flex flex-col items-center lg:items-start justify-center px-5 md:px-10 py-16 lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl text-center md:text-left font-semibold leading-snug text-secondary mt-5 md:mt-0">
          Precision Engineered.{" "}<span className='text-secondary/70'>Globally Delivered.</span>
        </h2>
        <h2 className="text-xl lg:text-2xl text-center md:text-left font-light leading-snug text-secondary mt-2">
          Welcome to HydroNavix
        </h2>
        <p className="text-sm lg:text-base text-justify text-secondary/80 mt-6 max-w-lg">
          HydroNavix is a cutting-edge marine and offshore engineering company operating across India, the Middle East, and Europe. We specialize in providing end-to-end solutions — from advanced design and compliance to surveys, manpower, and equipment supply. Since our inception, HydroNavix has remained committed to innovation, reliability, and engineering excellence, delivering seamless services that drive projects forward with precision and integrity.
        </p>
        <button onClick={()=>navigate('/about')} className="mt-8 w-fit border border-secondary/80 text-secondary/80 px-6 py-2 rounded-full text-sm hover:bg-gray-800 duration-300 ease-in-out hover:text-white transition-all">
          Learn More
        </button>
      </div>

      {/* right side */}
      <div className="relative w-full lg:w-1/2 h-[320px] lg:h-auto overflow-visible flex justify-center lg:justify-end">
        
        <img
          ref={img1Ref}
          src={aboutImg1}
          alt="Ocean Activities"
          className="w-full lg:w-[80%] h-full object-cover"
        />
        <div
          ref={img2Ref}
          className="absolute bottom-[-20%] left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 lg:top-1/2 lg:bottom-auto lg:transform lg:-translate-y-1/2 w-[220px] lg:w-[320px] shadow-xl"
        >
          <img
            src={aboutImg2}
            alt="Overlay"
            className="w-full h-[220px] lg:h-auto object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}
