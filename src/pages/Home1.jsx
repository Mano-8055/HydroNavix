import React, { useLayoutEffect, useRef } from 'react';
import shipImg from '../assets/ship.png';
import waveVideo from '../assets/v1.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home1 = () => {
  // Refs for DOM elements we need to animate
  const main = useRef();
  const shipContainerRef = useRef();
  const waveVideoRef = useRef();
  const waveSectionRef = useRef();
  const heroTextContainerRef = useRef();
  const heroH1Ref = useRef();

  useLayoutEffect(() => {
    // GSAP Context for safe cleanup of all animations and ScrollTriggers
    const ctx = gsap.context(() => {
      const waveSection = waveSectionRef.current;
      const ship = shipContainerRef.current;
      const heroTextContainer = heroTextContainerRef.current;
      const heroH1 = heroH1Ref.current;

      // --- PAGE LOAD ANIMATION (with correct word wrapping) ---
      const text = heroH1.textContent;
      heroH1.innerHTML = ''; // Clear original text to rebuild it

      // 1. Split the original text into an array of words.
      text.split(' ').forEach(word => {
        // 2. For each word, create a container span. This is the key to keeping words intact.
        const wordContainer = document.createElement('span');
        wordContainer.style.display = 'inline-block'; // Treat the word as a single block
        wordContainer.className = 'word-container';
        
        // 3. Split the word into individual characters.
        word.split('').forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block'; // Allow transforms on each character
          charSpan.className = 'char-span'; // Target for the animation
          wordContainer.appendChild(charSpan); // Add the character to its word container
        });

        // 4. Add the complete word (now full of character spans) to the main h1.
        heroH1.appendChild(wordContainer);

        // 5. Add a space after each word container to reconstruct the sentence.
        const space = document.createElement('span');
        space.innerHTML = ' '; // Use a non-breaking space entity
        heroH1.appendChild(space);
      });

      // Animate the individual character spans ('.char-span') into view
      gsap.from(heroH1.querySelectorAll('.char-span'), {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.03, // Stagger creates the wave, animating each character sequentially
      });

      // --- SCROLL-BASED ANIMATIONS ---
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: waveSection,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
        }
      });

      masterTimeline
        .fromTo(ship, { scale: 0.2 }, {
          scale: 1.5,
          ease: "power1.inOut"
        }, 0)
        .to(heroTextContainer, {
          scale: 8,
          opacity: 0,
          ease: "power1.in"
        }, 0.1);

    }, main);
    
    // Cleanup function to revert all GSAP animations and ScrollTriggers on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} style={{ backgroundColor: '#000' }}>
      {/* Section 1: All animations happen within this single, pinned section */}
      <section ref={waveSectionRef} className="wave-section h-screen w-full relative overflow-hidden">
        <video
          ref={waveVideoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={waveVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Hero Text Container */}
        <div ref={heroTextContainerRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 w-full p-4">
          <h1 ref={heroH1Ref} className="text-3xl md:text-6xl font-bold max-w-3xl mx-auto">
            Navigating the Future of Marine & Energy with AI Precision
          </h1>
        </div>
        {/* Ship Container */}
        <div ref={shipContainerRef} className="absolute top-[45vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <img src={shipImg} alt="Ship" className="w-64 md:w-96" />
        </div>
      </section>
    </div>
  );
};

export default Home1;