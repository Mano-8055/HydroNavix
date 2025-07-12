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
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserScrolling.current && !isHovered) {
        setSelected(prev => (prev + 1) % teamMembers.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

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
    <div className="w-full relative text-secondary py-24 overflow-hidden min-h-screen">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="pt-4 pb-6 border-b border-secondary/60">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">Team</h1>
            <div className="text-sm text-secondary/60">
              {String(selected + 1).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-8 lg:gap-12 mt-8 lg:h-[65vh]">
          {/* Left Column: Selector */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div
              className="relative h-[100px] sm:h-[400px] w-full max-w-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute top-1/2 left-0 w-full z-30 pointer-events-none">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-secondary transform rotate-45 mr-4"></div>
                  <div className="flex-1 border-t-[1.5px] border-secondary h-[1px]" />
                  <div className="w-4 h-4 bg-secondary transform rotate-45 ml-4"></div>
                </div>
              </div>

              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-none z-20 relative"
              >
                <div style={{ height: `calc(50% - ${ITEM_HEIGHT / 2}px)` }} />
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="snap-center flex items-center justify-center transition-all duration-500 cursor-pointer group"
                    style={{ height: ITEM_HEIGHT }}
                    onClick={() => setSelected(index)}
                  >
                    <div
                      className={`text-center transition-all duration-500 transform
                        ${selected === index ? 'scale-110 opacity-100' : 'scale-90 opacity-30'}
                        group-hover:opacity-70`}
                    >
                      <div className={`text-sm sm:text-lg md:text-2xl font-bold tracking-wider mb-1`}>
                        {member.name.toUpperCase()}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-light tracking-widest ${
                          selected === index ? 'text-secondary' : 'text-secondary/50'
                        }`}
                      >
                        {member.role.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ height: `calc(50% - ${ITEM_HEIGHT / 2}px)` }} />
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-3 flex items-center justify-start">
            <div
              key={selected}
              className={`
                w-full transition-all duration-700 transform
                ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
              `}
              style={{ animation: 'slideInRight 0.7s ease-out' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <div className="relative group cursor-follow">
                  <div className="absolute inset-0 bg-secondary/10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative overflow-hidden bg-secondary">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-60 md:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-primary text-xs sm:text-sm tracking-widest">
                      {selectedMember.role.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight">
                    {selectedMember.name.toUpperCase()}
                  </h2>
                  <div className="hidden md:block w-12 sm:w-16 h-0.5 bg-secondary"></div>
                  <p className="hidden md:block text-sm sm:text-base md:text-lg font-light text-secondary/80 leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
