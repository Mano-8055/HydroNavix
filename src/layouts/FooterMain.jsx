import React, { useEffect, useRef } from 'react';

const AnimatedFooter = () => {
  const footerRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const watermarkRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaSubtitleRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const companyInfoRef = useRef(null);
  const locationsGridRef = useRef(null);
  const quickLinksRef = useRef(null);
  const quickLinksItemsRef = useRef([]);
  const copyrightRef = useRef(null);
  const footerLinksRef = useRef([]);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      script2.onload = () => {
        const { gsap } = window;
        gsap.registerPlugin(window.ScrollTrigger);

        // Parallax background effect
        gsap.to(parallaxBgRef.current, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        // Watermark animation
        gsap.fromTo(watermarkRef.current, 
          { opacity: 0, scale: 0.8 },
          {
            opacity: 0.03,
            scale: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1
            }
          }
        );

        // CTA Section animations
        const ctaTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        ctaTimeline
          .to(ctaTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          })
          .to(ctaSubtitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.5")
          .to(ctaButtonRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, "-=0.3");

        // Main content animations
        gsap.to(companyInfoRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".main-content",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.to(locationsGridRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".main-content",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.to(quickLinksRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: ".main-content",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Quick links items staggered animation
        gsap.to(quickLinksItemsRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.8,
          scrollTrigger: {
            trigger: quickLinksRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Bottom footer animations
        gsap.to(copyrightRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".bottom-footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });

        gsap.to(footerLinksRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".bottom-footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script1);

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const handleButtonHover = (isHover) => {
    if (window.gsap) {
      window.gsap.to(ctaButtonRef.current, { 
        scale: isHover ? 1.05 : 1, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  const quickLinksItems = [
    'Home', 'About Us', 'Services', 'Digital Expertise', 'Projects',
    'Asset Integrity', 'Sustainability', 'Clients', 'Enquiry', 'Contact Us'
  ];

  const footerLinksItems = [
    { text: 'Facebook', href: '#' },
    { text: 'LinkedIn', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Design by idodesigns.in', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Spacer for demo */}
      <div className="h-screen flex items-center justify-center text-white text-2xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        Scroll down to see the animated footer
      </div>

      <footer ref={footerRef} className="bg-black text-white relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          ref={parallaxBgRef}
          className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)'
          }}
        />

        {/* Watermark - extremely subtle, almost invisible */}
        <div 
          ref={watermarkRef}
          className="absolute inset-0 opacity-0 text-center text-5xl md:text-7xl font-bold select-none pointer-events-none flex justify-center items-center z-10"
        >
          HYDRONAVIXMARINE
        </div>

        {/* CTA Section */}
        <div className="cta-section relative z-20 py-16 px-6 md:px-20 text-center">
          <div 
            style={{
              background: 'linear-gradient(90deg, #000 0%, #1a1a1a 50%, #000 100%)'
            }}
            className="absolute inset-0"
          />
          <div className="relative z-10">
            <h2 
              ref={ctaTitleRef}
              className="text-3xl md:text-5xl font-semibold mb-4 opacity-0 transform translate-y-12"
            >
              We'd love to hear from you!
            </h2>
            <p 
              ref={ctaSubtitleRef}
              className="text-gray-300 mb-8 text-lg opacity-0 transform translate-y-8"
            >
              If you'd like to speak to someone at Sea Delta Marine, feel free to write us.
            </p>
            <button 
              ref={ctaButtonRef}
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors opacity-0 transform translate-y-8"
              onMouseEnter={() => handleButtonHover(true)}
              onMouseLeave={() => handleButtonHover(false)}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="main-content relative z-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-16 bg-black">
          {/* Company Info */}
          <div 
            ref={companyInfoRef}
            className="opacity-0 transform -translate-x-12"
          >
            <h3 className="text-2xl font-bold mb-4">Sea Delta Marine</h3>
            <p className="text-gray-400 mb-2 text-sm">info@seadeltamarine.com</p>
            <p className="text-gray-400 text-sm">+971-4-5708222</p>
          </div>

          {/* Location Columns */}
          <div 
            ref={locationsGridRef}
            className="grid grid-cols-2 gap-4 text-sm text-gray-400 opacity-0 transform translate-y-12"
          >
            <div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">UAE</p>
                <p>Office 602, 6th Floor<br/>Dubai Maritime City</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">Mumbai</p>
                <p>Boomerang Building,<br/>Chandivali Road, Powai</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">Kolkata</p>
                <p>#8, Chandi Ghosh Road,<br/>Tollygunge</p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">Kochi</p>
                <p>Panampilly Nagar,<br/>Manorama Junction</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">Kuwait</p>
                <p>Al-Khaleeq Tower,<br/>Hawalli</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-white mb-1">Abu Dhabi</p>
                <p>Mussafah M-9,<br/>3rd Salami Street</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            ref={quickLinksRef}
            className="opacity-0 transform translate-x-12"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinksItems.map((item, index) => (
                <li 
                  key={index}
                  ref={el => quickLinksItemsRef.current[index] = el}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer opacity-0 transform translate-x-5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bottom-footer relative z-20 border-t border-gray-800 text-sm text-gray-500 px-6 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div 
            ref={copyrightRef}
            className="opacity-0 transform translate-y-5"
          >
            © 2025. All rights reserved.
          </div>
          <div className="flex space-x-6 flex-wrap justify-center">
            {footerLinksItems.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                ref={el => footerLinksRef.current[index] = el}
                className="hover:text-white transition-colors opacity-0 transform translate-y-5"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedFooter;