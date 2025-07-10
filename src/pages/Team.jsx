import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Chief Executive Officer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Visionary leader driving innovation and strategic growth across global markets.',
  },
  {
    name: 'Bob Smith',
    role: 'Chief Technology Officer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: 'Technical architect building scalable solutions for tomorrow\'s challenges.',
  },
  {
    name: 'Priya Mehra',
    role: 'Design Lead',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    description: 'Creative director crafting exceptional user experiences through purposeful design.',
  },
  {
    name: 'Ravi Kapoor',
    role: 'Engineering Manager',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    description: 'Engineering excellence advocate delivering robust, high-performance systems.',
  },
  {
    name: 'Elena Garcia',
    role: 'Marketing Head',
    image: 'https://randomuser.me/api/portraits/women/48.jpg',
    description: 'Brand strategist amplifying our voice in competitive global landscapes.',
  },
  {
    name: 'Kenji Tanaka',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/49.jpg',
    description: 'Product visionary transforming complex requirements into elegant solutions.',
  },
];

const ITEM_HEIGHT = 120;

export default function Team() {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  const selectedMember = teamMembers[selected];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserScrolling.current && !isHovered) {
        setSelected(prev => (prev + 1) % teamMembers.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Programmatic scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: selected * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  }, [selected]);

  const handleScroll = () => {
    isUserScrolling.current = true;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollTop / ITEM_HEIGHT);
        if (index !== selected && index >= 0 && index < teamMembers.length) {
          setSelected(index);
        }
      }
    }, 150);
  };

  return (
    <div className="w-full relative text-secondary py-20 overflow-hidden">
      
    

      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-screen">
        
        {/* Header */}
        <div className="pt-5 pb-6 border-b border-secondary/60">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">TEAM</h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-secondary/60">
                {String(selected + 1).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

       <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-12 h-[60vh]">
          {/* Left Column: Rotary Selector */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div 
              className="relative h-[100px] md:h-[400px] w-full max-w-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Selection indicator */}
              <div className="absolute top-1/2 left-0 w-full z-30 pointer-events-none">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-secondary transform rotate-45 mr-4"></div>
                  <div 
                    className="flex-1 border-t-2 border-secondary"
                    style={{ height: '2px' }}
                  />
                  <div className="w-4 h-4 bg-secondary transform rotate-45 ml-4"></div>
                </div>
              </div>

              {/* Scrollable list */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-none z-20 relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div style={{ height: `calc(50% - ${ITEM_HEIGHT / 2}px)` }} />
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="snap-center flex items-center justify-center transition-all duration-500 cursor-pointer group"
                    style={{ height: ITEM_HEIGHT }}
                    onClick={() => setSelected(index)}
                  >
                    <div className={`
                      text-center transition-all duration-500 transform
                      ${selected === index ? 'scale-110 opacity-100' : 'scale-90 opacity-30'}
                      group-hover:opacity-70
                    `}>
                      <div className={` ${selected === index ? 'text-xl md:text-2xl' : 'text-md md:text-lg'} font-bold tracking-wider mb-2`}>
                        {member.name.toUpperCase()}
                      </div>
                      <div className={`
                        text-sm font-light tracking-widest
                        ${selected === index ? 'text-secondary' : 'text-secondary/50'}
                      `}>
                        {member.role.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ height: `calc(50% - ${ITEM_HEIGHT / 2}px)` }} />
              </div>

            </div>
          </div>

          {/* Right Column: Member Details */}
          <div className="lg:col-span-3 flex items-center justify-start">
            <div 
              key={selected} 
              className={`
                w-full max-w-2xl transition-all duration-700 transform
                ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
              `}
              style={{ animation: 'slideInRight 0.7s ease-out' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-secondary/10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative overflow-hidden bg-secondary">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-60 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-primary text-xs tracking-widest">
                      {selectedMember.role.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
                      {selectedMember.name.toUpperCase()}
                    </h2>
                    <div className="w-16 h-0.5 bg-secondary mb-4"></div>
                    <p className="text-md md:text-lg font-light text-secondary/80 leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes slideInRight {
          0% { 
            transform: translateX(50px); 
            opacity: 0; 
          }
          100% { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }
        
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}