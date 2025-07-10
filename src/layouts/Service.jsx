import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Zap, 
  Waves, 
  Wind, 
  Phone, 
  Mail, 
  ArrowRight, 
  Star,
  ChevronRight,
  Globe,
  Settings,
  Fuel,
  Award,
  Users,
  Target
} from 'lucide-react';

// Service Data
const services = [
  {
    id: 1,
    title: 'Marine & Naval Architecture',
    icon: Ship,
    image: '/images/marine-architecture.jpg',
    points: [
      'Ship & Yacht Design (structural, mechanical, piping, E&I)',
      'CFD Simulations, Seakeeping, Piping Optimization',
      'EEXI, EEDI, BWTS Engineering Packages',
    ],
    stats: { projects: '200+', years: '15+' }
  },
  {
    id: 2,
    title: 'Jack-Ups & Offshore Platforms',
    icon: Settings,
    image: '/images/jackup-rig.jpg',
    points: [
      'Jack-Up Barge & Rig Design – structural, electrical, fatigue, helidecks',
      'Platform Engineering – jackets, dolphins, bridges, piping, conductor',
    ],
    stats: { projects: '50+', years: '10+' }
  },
  {
    id: 3,
    title: 'Oil & Gas Infrastructure',
    icon: Fuel,
    image: '/images/oil-gas.jpg',
    points: [
      'Platform and Refinery Upgrades',
      'Mooring and Transportation Engineering – dolphins, buoys, gangways',
    ],
    stats: { projects: '100+', years: '12+' }
  },
  {
    id: 4,
    title: 'Renewable Energy & Alternative Fuels',
    icon: Wind,
    image: '/images/renewable-energy.jpg',
    points: [
      'Wind, Solar, and Wave Energy Integration',
      'Electric, Methanol, Hydrogen Propulsion – fuel cells, storage, retrofits',
    ],
    stats: { projects: '75+', years: '8+' }
  },
];

// Geometric Background Component
const GeometricBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Sharp geometric shapes */}
      <div 
        className="absolute w-96 h-96 bg-black/5 transform rotate-45"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(45deg)`,
          left: '5%',
          top: '10%',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 80%)'
        }}
      />
      <div 
        className="absolute w-64 h-64 bg-black/3 transform rotate-12"
        style={{
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px) rotate(12deg)`,
          right: '10%',
          bottom: '15%',
          clipPath: 'polygon(20% 0, 100% 20%, 80% 100%, 0 80%)'
        }}
      />
      <div 
        className="absolute w-48 h-48 bg-black/4 transform -rotate-12"
        style={{
          transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px) rotate(-12deg)`,
          left: '70%',
          top: '50%',
          clipPath: 'polygon(0 0, 80% 0, 100% 80%, 20% 100%)'
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url(data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)] opacity-50" />
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = service.icon;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative overflow-hidden bg-white border-2 border-black transition-all duration-500 ${
        isHovered ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] translate-x-[-4px] translate-y-[-4px]' : 'shadow-none'
      } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sharp accent line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-black transition-all duration-300 ${
        isHovered ? 'h-2' : 'h-1'
      }`} />
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className={`p-4 bg-black text-white transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
            }`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black leading-tight mb-2">{service.title}</h3>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black" />
                  <span className="font-semibold">{service.stats.projects} Projects</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black" />
                  <span className="font-semibold">{service.stats.years} Experience</span>
                </span>
              </div>
            </div>
          </div>
          <ChevronRight className={`w-6 h-6 transition-all duration-300 ${
            isHovered ? 'translate-x-2 text-black' : 'text-gray-400'
          }`} />
        </div>

        {/* Services list */}
        <div className="space-y-4 flex-1 mb-8">
          {service.points.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-4 group/item">
              <div className={`w-3 h-3 bg-black mt-1 flex-shrink-0 transition-all duration-300 ${
                isHovered ? 'rotate-45' : 'rotate-0'
              }`} />
              <span className="text-sm text-gray-800 leading-relaxed font-medium group-hover/item:text-black transition-colors duration-200">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`w-full bg-black text-white py-4 px-6 border-2 border-black font-bold text-sm tracking-wide uppercase transition-all duration-300 ${
          isHovered ? 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]' : 'bg-black text-white'
        }`}>
          Learn More
          <ArrowRight className={`w-4 h-4 ml-2 inline-block transition-transform duration-300 ${
            isHovered ? 'translate-x-2' : 'translate-x-0'
          }`} />
        </button>
      </div>
    </div>
  );
};

// Stats Component
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Expert Engineers', value: '50+', icon: Users },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <div key={index} className={`text-center group transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: `${index * 100}ms` }}>
          <div className="bg-black text-white p-6 mb-4 transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
            <stat.icon className="w-8 h-8 mx-auto" />
          </div>
          <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
          <div className="text-gray-600 text-sm font-semibold uppercase tracking-wide">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Contact Banner Component
const ContactBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-black text-white p-12 border-4 border-black transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Sharp geometric accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
      }} />
      
      <div className="relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Start Your Project?
        </h3>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Let's discuss how Sea Delta Marine can bring your vision to life with our expert engineering solutions.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-10">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white text-black">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Email us</p>
              <p className="font-bold text-lg">info@seadeltamarine.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white text-black">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Call us</p>
              <p className="font-bold text-lg">+971-4-5708222</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-black py-4 px-8 border-2 border-white font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 inline-block" />
          </button>
          <button className="bg-black text-white py-4 px-8 border-2 border-white font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Services Page Component
const Service = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Geometric background elements */}
      <GeometricBackground />
      
      <div className="relative z-10 px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div 
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-8 text-black leading-none tracking-tight">
                OUR SERVICES
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Sea Delta Marine delivers specialized engineering & consulting solutions for marine, offshore, renewables, and port infrastructure worldwide.
              </p>
              <div className="flex items-center justify-center space-x-4 text-black">
                <div className="w-12 h-px bg-black" />
                <span className="text-lg font-bold uppercase tracking-wider">Excellence in Marine Engineering</span>
                <div className="w-12 h-px bg-black" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <StatsSection />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center mb-20">
            <div className="h-px bg-black w-full max-w-md" />
            <div className="px-8">
              <div className="w-4 h-4 bg-black rotate-45" />
            </div>
            <div className="h-px bg-black w-full max-w-md" />
          </div>

          {/* Contact Banner */}
          <ContactBanner />
        </div>
      </div>
    </div>
  );
};

export default Service;