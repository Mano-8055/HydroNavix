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

export default function TeamDisplayPage() {
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
    <div className="w-full min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Redirect Button */}
      <button
        className="fixed top-6 right-6 z-50 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition"
        onClick={() => navigate('/team')}
      >
        Redirect
      </button>
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-screen">
        {/* Header */}
        <div className="pt-12 pb-8 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">LEADERSHIP TEAM</h1>
              <div className="mt-2 w-24 h-0.5 bg-white"></div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/60">
                {String(selected + 1).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 h-[calc(100vh-180px)]">
          {/* Left Column: Rotary Selector */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div 
              className="relative h-[600px] w-full max-w-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Selection indicator */}
              <div className="absolute top-1/2 left-0 w-full z-30 pointer-events-none">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-white transform rotate-45 mr-4"></div>
                  <div 
                    className="flex-1 border-t-2 border-white"
                    style={{ height: '2px' }}
                  />
                  <div className="w-4 h-4 bg-white transform rotate-45 ml-4"></div>
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
                      <div className="text-2xl font-bold tracking-wider mb-2">
                        {member.name.toUpperCase()}
                      </div>
                      <div className={`
                        text-sm font-light tracking-widest
                        ${selected === index ? 'text-white' : 'text-white/50'}
                      `}>
                        {member.role.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ height: `calc(50% - ${ITEM_HEIGHT / 2}px)` }} />
              </div>

              {/* Fade overlays */}
              <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-25">
                <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-black via-black/80 to-transparent" />
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent" />
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
                  <div className="absolute inset-0 bg-white/10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative overflow-hidden bg-white">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white text-xs font-mono tracking-widest">
                      {selectedMember.role.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold tracking-tight mb-2">
                      {selectedMember.name.toUpperCase()}
                    </h2>
                    <div className="w-16 h-0.5 bg-white mb-4"></div>
                    <p className="text-lg font-light text-white/80 leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Stats/Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div>
                      <div className="text-2xl font-bold">05+</div>
                      <div className="text-xs text-white/60 tracking-widest">YEARS EXP</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">A+</div>
                      <div className="text-xs text-white/60 tracking-widest">RATING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              className={`
                w-2 h-2 transition-all duration-300 cursor-pointer
                ${selected === index ? 'bg-white' : 'bg-white/30'}
              `}
              onClick={() => setSelected(index)}
            />
          ))}
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