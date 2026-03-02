import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../layouts/Logo";
import service1 from "../assets/services/s1.webp";
import service2 from "../assets/services/s2.webp";
import service3 from "../assets/services/s75.webp";
import service4 from "../assets/services/s4.webp";
import service5 from "../assets/services/s11.webp";
import service6 from "../assets/services/s12.webp";
import service7 from "../assets/services/s13.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaCogs, FaRobot, FaGlobe, FaChartLine, FaWater } from "react-icons/fa";
import s75 from "../assets/investors/4782.jpg";
import heroGif from "../assets/investors/4782.jpg";
import shipsGif from "../assets/investors/120455.jpg";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import shipModel from "../assets/investors/Ship.glb";
gsap.registerPlugin(ScrollTrigger);


import HeroSection from "../layouts/HeroSection";
import Header from "../layouts/Header";
import CoreServicesSection from "../layouts/CoreServicesSection";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroVideo from "../assets/investors/hero.mp4";
import shipVideo from "../assets/investors/ship.mp4";
import shipsVideo from "../assets/investors/ships.mp4";
import ships1Video from "../assets/investors/ships(1).mp4";
import ships2Video from "../assets/investors/ships(2).mp4";
import {
  Building,
  Settings,
  Target,
  Wrench,
  DollarSign,
  Navigation,
  Scale,
  Hammer,
  Waves,
  Flag,
  Users,
  Zap,
  Rocket,
  TrendingUp,
  Bot,
  Glasses,
  Plane,
  Cloud,
  Globe,
  Construction,
  Ship,
  Droplets,
  Award,
  Star,
  Sparkles,
  User,
  Briefcase,
  Shield
} from "lucide-react";

const Investors = () => {
  const componentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentInterest: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".investor-section:nth-child(1) .max-w-7xl",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".investor-section:nth-child(1)",
            start: "top 80%",
          },
        }
      );

      // Animate cards in Company Snapshot
      gsap.fromTo(
        ".investor-section:nth-child(2) .grid.grid-cols-1",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".investor-section:nth-child(2)",
            start: "top 75%",
          },
        }
      );

      // Animate What We Do section
      gsap.fromTo(
        ".investor-section:nth-child(3) .grid.grid-cols-1",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".investor-section:nth-child(3)",
            start: "top 75%",
          },
        }
      );

      // Animate Video Section
      gsap.fromTo(
        ".investor-section:nth-child(5) video",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".investor-section:nth-child(5)",
            start: "top 75%",
          },
        }
      );

      // Animate Why Invest section
      gsap.fromTo(
        ".investor-section:nth-child(6) .grid.grid-cols-1",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".investor-section:nth-child(6)",
            start: "top 75%",
          },
        }
      );


      // Animate Investor Enquiry
      gsap.fromTo(
        ".investor-section:nth-child(7) form",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".investor-section:nth-child(7)",
            start: "top 75%",
          },
        }
      );


    }, componentRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to API or console log
    console.log("Investor form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      investmentInterest: "",
      message: "",
    });
  };

  const handleInvestorEnquiryClick = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('investor-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Invest in Hydronavix Marine - Investor Deck & Opportunities</title>
        <meta name="description" content="Explore investment opportunities in Hydronavix Marine, a leading marine technology company offering innovative solutions in AI, drones, VR, and engineering services." />
        <meta name="keywords" content="invest in Hydronavix Marine, marine technology investment, investor deck, marine engineering startup" />
        <meta property="og:title" content="Invest in Hydronavix Marine - Investor Deck & Opportunities" />
        <meta property="og:description" content="Discover our growth vision and competitive edge in the marine technology sector. Connect with strategic investors." />
        <meta property="og:type" content="website" />
      </Helmet>


      {/* Internal CSS for Mobile View Improvements and Card Flip */}
      <style>
        {`
          /* Header Transparency for Investors Page */
          .investor-header-transparent header {
            background-color: transparent !important;
            color: black !important;
          }

          .investor-header-transparent header nav a {
            color: rgba(0, 0, 0, 0.7) !important;
          }

          .investor-header-transparent header nav a:hover,
          .investor-header-transparent header nav a.active {
            color: black !important;
          }

          .investor-header-transparent header button span {
            background-color: black !important;
          }

          /* Card Flip Styles */
          .perspective-1000 {
            perspective: 1000px;
          }

          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }

          .backface-hidden {
            backface-visibility: hidden;
          }

          .rotate-y-180 {
            transform: rotateY(180deg);
          }

          /* Mobile Hero Section Enhancements */
          @media (max-width: 768px) {
            .investor-section.min-h-screen {
              min-height: 100vh;
              padding: 2rem 0;
            }

            .investor-section .max-w-7xl {
              max-width: 100%;
              padding: 0;
            }

            .investor-section h1 {
              font-size: 2rem !important;
              line-height: 1.2 !important;
              margin-bottom: 2.5rem !important;
              padding: 0;
            }

            .investor-section h1 + p {
              font-size: 1.125rem !important;
              line-height: 1.4 !important;
              margin-bottom: 2rem !important;
              padding: 0;
              max-width: 100% !important;
            }

            .investor-section .swiper {
              margin-bottom: 2rem !important;
              max-width: 100% !important;
            }

            .investor-section .swiper .swiper-slide {
              padding: 1rem !important;
            }

            .investor-section .swiper .swiper-slide p {
              font-size: 0.95rem !important;
              line-height: 1.4 !important;
            }

            .investor-section a.inline-block {
              display: inline-block !important;
              padding: 0.75rem 1.5rem !important;
              font-size: 0.875rem !important;
              font-weight: 600 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              background-color: #0B5384 !important;
              color: white !important;
              border-radius: 0.375rem !important;
              transition: all 0.3s ease !important;
              text-decoration: none !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
              margin-top: 1rem;
            }

            .investor-section a.inline-block:hover {
              background-color: rgba(11, 83, 132, 0.8) !important;
              transform: translateY(-2px) !important;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
            }

            /* Ensure text is readable on mobile */
            .investor-section.relative.z-10 {
              position: relative !important;
              z-index: 10 !important;
            }

            /* Background image adjustments for mobile */
            .investor-section img.absolute {
              object-position: center center !important;
            }

            /* Improve spacing and readability */
            .investor-section .swiper-pagination {
              bottom: 10px !important;
            }

            .investor-section .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.7) !important;
              opacity: 1 !important;
            }

            .investor-section .swiper-pagination-bullet-active {
              background: white !important;
            }
          }

          /* Extra small mobile devices */
          @media (max-width: 480px) {
            .investor-section h1 {
              font-size: 1.75rem !important;
              padding: 0 0.25rem;
            }

            .investor-section h1 + p {
              font-size: 1rem !important;
              padding: 0 0.5rem;
            }

            .investor-section a.inline-block {
              padding: 0.625rem 1.25rem !important;
              font-size: 0.8125rem !important;
            }
          }
        `}
      </style>



      {/* Hero Section */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center py-20 cursor-pointer relative overflow-hidden">
        {/* Background Video */}
        {/* <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video> */}

        {/* Overlay */}
        <div className="absolute inset-0 z-10">
          {/* <div className="absolute inset-0 bg-secondary/60" /> */}
          {/* <Header isInsideHero={true} /> */}

          {/* Fog Effect - Top Left */}
          <div className="absolute -top-36 -left-36 w-[420px] md:w-[520px] h-[220px] bg-primary opacity-60 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Navbar inside hero */}

        <div className="relative z-20 w-full px-6 md:px-20 pt-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-12">
              Invest in the Future of <span style={{ color: '#0B5384' }}>Marine Technology</span>
            </h1>

            <div className="w-full max-w-6xl h-[600px] mb-0">
              <Canvas camera={{ position: [0, 2, 15], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ShipModel />
                <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
              </Canvas>
            </div>

            <div className="max-w-4xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Join us in revolutionizing marine engineering through cutting-edge AI, VR, and autonomous solutions that drive safety, efficiency, and sustainability in the maritime industry.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Hydronavix is building an engineering-first marine intelligence platform, evolving from real project execution into scalable digital infrastructure.
              </p>
              <ul className="text-center list-disc list-inside text-lg md:text-xl text-gray-700 leading-relaxed space-y-2 mb-8 inline-block">
                <li>Leading provider of advanced marine navigation and intelligence</li>
                <li>Strategic UAE location in the heart of offshore and energy activities</li>
                <li>Engineering-first approach with scalable technology solutions</li>
              </ul>
              <button
                onClick={handleInvestorEnquiryClick}
                className="inline-block bg-secondary uppercase text-primary px-8 py-4 font-semibold tracking-wider transition-all duration-300 hover:bg-secondary/80 hover:shadow-xl"
              >
                Apply For Investor Discussion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <CoreServicesSection />
      </div>

      {/* Company Snapshot */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 relative" style={{ backgroundImage: `url(${heroGif})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              <span style={{ color: '#0B5384' }}>Marine & Offshore</span> <span style={{ color: 'white' }}>Capabilities at a Glance</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto" style={{ color: 'white' }}>
              HydroNavix Marine & Offshore Engineering is headquartered in the United Arab Emirates, a strategic hub for marine, offshore, and energy projects across the Middle East and beyond. The company specializes in practical, reliable, and cost-effective engineering solutions tailored to the needs of marine and offshore clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="backdrop-blur-md bg-white/30 p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg">
              <Building className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: 'white' }}>Location</h3>
              <p className="text-gray-700 leading-relaxed" style={{ color: 'white' }}>
                United Arab Emirates – strategically positioned within a global center for offshore, marine, and energy activity.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/30 p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg">
              <Settings className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: 'white' }}>Industry</h3>
              <p className="text-gray-700 leading-relaxed" style={{ color: 'white' }}>
                Marine & Offshore Engineering – operating in a technically demanding, high-value engineering sector.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/30 p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg">
              <Target className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: 'white' }}>Core Focus</h3>
              <p className="text-gray-700 leading-relaxed" style={{ color: 'white' }}>
                Engineering design, Structural weighing, Heavy lift, technical consulting, and project support services for marine and offshore developments, with a strong emphasis on safety, compliance, and operational performance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto" style={{ color: 'white' }}>
              HydroNavix combines advanced engineering, data-driven insights, and domain expertise to solve real marine challenges at scale.
            </p>
          </div>
        </div>
      </div>


      {/* SECTION 3 – FOUNDER SIGNAL */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 relative" style={{ backgroundImage: `url(${shipsGif})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span style={{ color: 'white' }}>A Founder-Led, Long-Term</span> <span style={{ color: '#0B5384' }}>Build</span>
            </h2>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mb-4" style={{ color: 'white' }}>
              What sets HydroNavix apart:
            </p>
            <ul className="text-left list-disc list-inside text-lg md:text-xl text-gray-600 leading-relaxed space-y-2 mb-6" style={{ color: 'white' }}>
              <li>Built by engineers with real-world operational experience, leveraging AI in operations</li>
              <li>Decisions shaped by understanding operational, financial, and human consequences through AI-driven insights</li>
              <li>Not just services, but infrastructure for the marine industry's future powered by AI</li>
              <li>Engineering-first approach with long-term vision, enhanced by AI technologies</li>
            </ul>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed" style={{ color: 'white' }}>
              Our foundation is built on deep industry expertise and a commitment to solving complex marine challenges through innovative engineering intelligence.
            </p>
          </div>
          <div className="order-2 lg:order-2">
            <img
              data-aos="zoom-in"
              src={s75}
              alt="Founder-Led Engineering"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* SECTION 4 – CORE INSIGHT & BUILDING FUTURE */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* THE CORE INSIGHT */}
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Target className="w-12 h-12" style={{ color: '#0B5384' }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              The Industry Is Changing Faster Than Its <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Engineering Systems</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InsightCard
                  icon="💰"
                  title="Fragmented Decision-Making"
                  description="Trillion-dollar marine assets still rely on disconnected systems"
                  detail="Legacy infrastructure creates inefficiencies in operations, maintenance, and strategic planning across the maritime sector."
                  color="blue"
                />
                <InsightCard
                  icon="🔗"
                  title="Data Disconnection"
                  description="Engineering data remains isolated from operational intelligence"
                  detail="Critical engineering insights are siloed from real-time operations, lifecycle management, and predictive analytics."
                  color="green"
                />
                <InsightCard
                  icon="🧠"
                  title="Missing Intelligence Layer"
                  description="The industry lacks a unified engineering intelligence platform"
                  detail="No comprehensive system connects engineering design, operational data, and strategic decision-making across marine ecosystems."
                  color="purple"
                />
              </div>
            </div>
          </div>

          {/* WHAT HYDRONAVIX IS REALLY BUILDING */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl mb-6">
                <FaRocket size={32} className="text-LightBlue" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                From Engineering Execution to Engineering <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Intelligence</span>
              </h3>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Our evolutionary journey from traditional engineering to AI-powered marine intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BuildingCard
                phase="Today"
                icon={<FaCogs size={32} className="text-LightBlue" />}
                title="Foundation Phase"
                description="Real-world engineering execution grounded in operational reality"
                details={[
                  "Established cash-flow positive operations",
                  "Proven engineering delivery track record",
                  "Strong client relationships in marine sector",
                  "Regulatory compliance and safety focus"
                ]}
                gradient="from-blue-50 to-blue-100"
                borderColor="border-blue-200"
              />

              <BuildingCard
                phase="Now"
                icon={<FaRobot size={32} className="text-LightBlue" />}
                title="Intelligence Phase"
                description="AI-assisted engineering and intelligent operations"
                details={[
                  "Active AI integration across operations",
                  "Predictive maintenance systems",
                  "Digital twin implementations",
                  "Data-driven decision support"
                ]}
                gradient="from-green-50 to-green-100"
                borderColor="border-green-200"
              />

              <BuildingCard
                phase="Future"
                icon={<FaGlobe size={32} className="text-LightBlue" />}
                title="Platform Phase"
                description="Scalable marine intelligence platform ecosystem"
                details={[
                  "Global expansion ready architecture",
                  "Unified engineering intelligence layer",
                  "Network effects across marine ecosystem",
                  "Autonomous operations capability"
                ]}
                gradient="from-purple-50 to-purple-100"
                borderColor="border-purple-200"
              />
            </div>
          </div>

          {/* Market Analysis - Investor Focused */}
          <div>
            <div className="text-center mb-20">
              <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <FaChartLine size={48} className="text-LightBlue" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                Market <span style={{ color: '#0B5384' }}>Analysis</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Investment-ready insights into the marine technology sector's unprecedented growth potential and competitive advantages.
              </p>
            </div>

            {/* Market Stats Swiper */}
            <div className="mb-16">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 }
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="pb-12"
              >
                <SwiperSlide>
                  <MarketStatCard
                    value="Multi-trillion-dollar global marine & offshore market"
                    label="Market Size"

                    color="green"
                    icon={<DollarSign className="w-8 h-8" />}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MarketStatCard
                    value="Steady annual growth accelerating through 2030"
                    label="Growth Trajectory"

                    color="blue"
                    icon={<TrendingUp className="w-8 h-8" />}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MarketStatCard
                    value="Hundreds of billions in maritime digital transformation opportunity"
                    label="Digital Opportunity"

                    color="purple"
                    icon={<Cloud className="w-8 h-8" />}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MarketStatCard
                    value="Significant efficiency and lifecycle cost improvements enabled by AI"
                    label="AI Efficiency Gains"

                    color="red"
                    icon={<Zap className="w-8 h-8" />}
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Investment Thesis Interactive Panel */}
            <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                  Investment Thesis & Market Drivers
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Six compelling drivers creating unprecedented investment opportunity in marine technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <DriverCard
                    icon={<DollarSign className="w-6 h-6" />}
                    title="High-Value Asset Base"
                    description="Trillion-dollar marine assets represent a massive upgrade opportunity with fragmented, outdated systems."
                    color="blue"
                  />
                  <DriverCard
                    icon={<Bot className="w-6 h-6" />}
                    title="Digital Transformation Wave"
                    description="Industry-wide shift to digital operations creates first-mover advantage for engineering intelligence platforms."
                    color="green"
                  />
                  <DriverCard
                    icon={<TrendingUp className="w-6 h-6" />}
                    title="Scalable Business Model"
                    description="Asset-light, high-margin software solutions with network effects in marine ecosystems."
                    color="purple"
                  />
                </div>
                <div className="space-y-6">
                  <DriverCard
                    icon={<Shield className="w-6 h-6" />}
                    title="Regulatory & Safety Pressures"
                    description="Stricter environmental and safety standards drive adoption of advanced monitoring and intelligence systems."
                    color="red"
                  />
                  <DriverCard
                    icon={<Globe className="w-6 h-6" />}
                    title="Global Energy Transition"
                    description="Shift to renewable offshore energy and sustainable operations creates new market segments."
                    color="orange"
                  />
                  <DriverCard
                    icon={<Award className="w-6 h-6" />}
                    title="First-Mover Positioning"
                    description="Limited competition in unified engineering intelligence layer creates defensible market position."
                    color="teal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              We Are Going to Play the <span style={{ color: '#0B5384' }}>Trailer</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Discover our vision for the future of marine technology through this immersive trailer showcasing innovation and engineering excellence.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
              <video
                id="investor-video"
                className="w-full h-auto object-cover"
                poster="../assets/investors/120455.jpg"
                preload="metadata"
                style={{ aspectRatio: '16/9' }}
                muted
                loop
                playsInline
              >
                <source src={shipsVideo} type="video/mp4" />
              </video>

              {/* Play Button Overlay */}
              <div
                id="play-overlay"
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm z-10"
                onClick={() => {
                  const video = document.getElementById('investor-video');
                  const overlay = document.getElementById('play-overlay');
                  if (video && overlay) {
                    video.play();
                    overlay.style.display = 'none';
                  }
                }}
              >
                <div className="relative group">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>

                  {/* Main play button */}
                  <div className="relative bg-gradient-to-br from-white to-gray-100 hover:from-gray-100 hover:to-white rounded-full p-6 shadow-2xl transition-all duration-300 transform hover:scale-110 group-hover:shadow-3xl">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Invest in HydroNavix */}
      <div data-aos="fade-right" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Why <span style={{ color: '#0B5384' }}>Invest</span> in HydroNavix
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Investing in HydroNavix means backing a specialized engineering business operating within a high-value, mission-critical global industry. The company is built on an engineering-first mindset, with solutions designed for real environments and long-term adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <FaWater size={32} className="text-LightBlue" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">High-Value Global Industry</h3>
              <p className="text-gray-600 leading-relaxed">
                Marine and offshore engineering continues to benefit from long-term demand driven by energy, infrastructure, coastal development, and maritime trade.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Flag className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Strategic UAE Market Presence</h3>
              <p className="text-gray-600 leading-relaxed">
                Located in a region that serves as a central hub for offshore, marine, and energy projects, creating access to regional and international opportunities.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Experienced Engineering Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Led by professionals with strong technical knowledge and hands-on industry experience, with a track record of supporting regional marine and offshore projects.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Zap className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Scalable, Asset-Light Business Model</h3>
              <p className="text-gray-600 leading-relaxed">
                A flexible, service-driven, asset-light model that can scale efficiently as project volume, clients, and geographic reach grow.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Rocket className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology-Ready and Future-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Architecture and processes designed for scalability, digital integration, and future navigation and intelligence solutions.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <TrendingUp className="w-16 h-16 mb-4" style={{ color: '#0B5384' }} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Long-Term Growth Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear potential to expand service offerings, deepen client relationships, and enter additional regional and international markets over time.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">

            <p className="text-lg md:text-xl font-bold text-gray-800" style={{ fontStyle: 'italic' }}>
              "Hydronavix represents a rare opportunity to invest early in a safety-critical, engineering-led platform business within a conservative, highbarrier global industry"
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack Section 
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Technology <span className="text-teal-600" style={{color:'#0B5384'}}>Stack</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our cutting-edge technological foundation powering marine innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Bot className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI & Machine Learning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Predictive maintenance algorithms</li>
                <li>• Autonomous navigation systems</li>
                <li>• Pattern recognition for marine data</li>
                <li>• Real-time decision support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Glasses className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AR/VR & Digital Twins</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Immersive engineering walkthroughs</li>
                <li>• Virtual reality training modules</li>
                <li>• Digital twin simulations</li>
                <li>• Remote collaboration tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Plane className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Drone & Sensor Technology</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Autonomous inspection drones</li>
                <li>• Underwater ROV systems</li>
                <li>• IoT sensor networks</li>
                <li>• Real-time data collection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Cloud className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud & Big Data</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Scalable cloud infrastructure</li>
                <li>• Big data analytics platform</li>
                <li>• Real-time data processing</li>
                <li>• Secure data management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Blockchain & Security</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Secure data transactions</li>
                <li>• Supply chain traceability</li>
                <li>• Compliance verification</li>
                <li>• Cyber security protocols</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="w-16 h-16 mb-4" style={{color: '#0B5384'}} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IoT & Connectivity</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 5G marine communications</li>
                <li>• Satellite connectivity</li>
                <li>• Edge computing solutions</li>
                <li>• Real-time monitoring systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Our Competitive Edge 
      <div className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Competitive Edge</h2>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
              What differentiates Hydronavix Marine:
            </p>
            <ul className="text-left list-disc list-inside text-lg md:text-xl text-gray-600 leading-relaxed space-y-2">
              <li>Engineering-first mindset – products built for real environments</li>
              <li>Operational understanding – solutions aligned with on-ground marine needs</li>
              <li>Technology scalability – architecture designed for growth and expansion</li>
              <li>Execution focus – emphasis on delivery, adoption, and measurable impact</li>
            </ul>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mt-4 mb-6">
              This combination creates a strong foundation for sustainable growth and defensible market positioning. Our deep industry expertise and commitment to excellence set us apart in a crowded market.
            </p>
            <Link
              to="/team"
              className="inline-block bg-secondary uppercase text-primary px-6 py-3 font-semibold tracking-wider transition-all duration-300 hover:bg-secondary/80 hover:shadow-xl"
            >
              Know More About Our Team
            </Link>
          </div>
          <div className="order-2 lg:order-1">
            <img
              data-aos="flip-right"
              src={service1}
              alt="Competitive Edge"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div> */}

      {/* Growth Vision 
      <div data-aos="slide-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Growth <span style={{color:'#0B5384'}}>Vision</span></h2>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
              Our growth strategy is structured around:
            </p>
            <ul className="text-left list-disc list-inside text-lg md:text-xl text-gray-600 leading-relaxed space-y-2">
              <li>Expanding solution capabilities across marine use cases</li>
              <li>Strategic partnerships within the maritime ecosystem</li>
              <li>Continuous technology enhancement and innovation</li>
              <li>Entering high-potential regional and international markets</li>
            </ul>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
              We aim to build a globally trusted marine technology brand with long-term investor value. Our vision is to lead the industry in marine navigation and intelligence, creating lasting impact and sustainable returns.
            </p>
          </div>
          <div className="order-2 lg:order-2">
            <img
              data-aos="zoom-in-up"
              src={service2}
              alt="Growth Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>  */}

      {/* Investment Proposition 
      <div className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              data-aos="zoom-in"
              src={service3}
              alt="Investment Proposition"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Investment Proposition</h2>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
              Investing in Hydronavix Marine means backing:
            </p>
            <ul className="text-left list-disc list-inside text-lg md:text-xl text-gray-600 leading-relaxed space-y-2">
              <li>A company solving real problems in a high-value industry</li>
              <li>A scalable platform with long-term relevance</li>
              <li>A disciplined, execution-oriented growth roadmap</li>
              <li>A vision focused on sustainable returns and industry leadership</li>
            </ul>
            <p className="fade-para text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
              We believe in building value through technology excellence, operational credibility, and strategic growth. Join us in shaping the future of marine technology and securing a stake in this transformative industry.
            </p>
          </div>
        </div>
      </div> */}

      {/* Case Studies Section 
      <div data-aos="fade-left" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Success <span className="text-green-600" style={{color:'#0B5384'}}>Stories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Real-world impact through innovative marine engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4" style={{color: '#0B5384'}}>🏗️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Offshore Platform Design</h3>
              <p className="text-gray-600 mb-4">
                Delivered comprehensive engineering design for a $500M offshore platform in the North Sea, incorporating advanced structural analysis and safety systems.
              </p>
              <div className="text-sm text-green-600 font-semibold">• 30% cost reduction achieved</div>
              <div className="text-sm text-green-600 font-semibold">• 6 months ahead of schedule</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4" style={{color: '#0B5384'}}>🚢</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vessel Retrofit Project</h3>
              <p className="text-gray-600 mb-4">
                Modernized a fleet of 15 cargo vessels with AI-powered navigation systems and predictive maintenance capabilities.
              </p>
              <div className="text-sm text-green-600 font-semibold">• 40% improvement in fuel efficiency</div>
              <div className="text-sm text-green-600 font-semibold">• 25% reduction in maintenance costs</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4" style={{color: '#0B5384'}}>🌊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Marine Infrastructure Project</h3>
              <p className="text-gray-600 mb-4">
                Designed and engineered a $200M marine terminal with advanced automation and digital twin technology.
              </p>
              <div className="text-sm text-green-600 font-semibold">• 50% faster cargo handling</div>
              <div className="text-sm text-green-600 font-semibold">• Zero accidents during construction</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Financial Projections Section 
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative">
        <img
          src={service4}
          alt="Financial Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Financial <span className="text-orange-600" style={{color:'#0B5384'}}>Projections</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Projected growth trajectory and investment returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-xl mb-2 text-green-500">2024</div>
              <div className="text-xl font-bold text-gray-800 mb-2">$50M</div>
              <p className="text-gray-600">Current Revenue</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-xl mb-2 text-blue-500">2026</div>
              <div className="text-xl font-bold text-gray-800 mb-2">$150M</div>
              <p className="text-gray-600">Projected Revenue</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-xl mb-2 text-purple-500">25%</div>
              <div className="text-xl font-bold text-gray-800 mb-2">3x</div>
              <p className="text-gray-600">Expected Growth Rate</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-xl mb-2 text-red-500">2030</div>
              <div className="text-xl font-bold text-gray-800 mb-2">$500M</div>
              <p className="text-gray-600">Target Revenue</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Investment Returns</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600 mb-2">5x</div>
                <p className="text-gray-600">Expected ROI in 5 years</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600 mb-2">15%</div>
                <p className="text-gray-600">Annual revenue growth</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600 mb-2">$200M</div>
                <p className="text-gray-600">Projected valuation by 2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      {/* Team Overview Section 
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Leadership <span className="text-indigo-600" style={{color:'#0B5384'}}>Team</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Experienced professionals driving innovation in marine engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">👨‍🔬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Ahmed Al-Rashid</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Executive Officer</p>
              <p className="text-gray-600">25+ years in marine engineering, former Shell executive</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sarah Chen</h3>
              <p className="text-green-600 font-semibold mb-2">Chief Technology Officer</p>
              <p className="text-gray-600">AI expert with 15+ years in maritime tech innovation</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Michael Thompson</h3>
              <p className="text-purple-600 font-semibold mb-2">Chief Operations Officer</p>
              <p className="text-gray-600">Operations specialist with offshore industry expertise</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our leadership team combines deep industry knowledge with cutting-edge technical expertise, ensuring HydroNavix remains at the forefront of marine engineering innovation.
            </p>
          </div>
        </div>
      </div> */}

      {/* Partnerships and Awards Section 
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Partnerships & <span className="text-cyan-600" style={{color:'#0B5384'}}>Awards</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Recognition and collaboration that drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Strategic Partnerships</h3>
              <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <div className="text-4xl mr-4" style={{color: '#0B5384'}}>🏢</div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Shell International</h4>
              <p className="text-gray-600">Joint development of offshore digital solutions</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <div className="text-4xl mr-4" style={{color: '#0B5384'}}>🚢</div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Maersk Line</h4>
              <p className="text-gray-600">AI-powered vessel optimization partnership</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
            <div className="text-4xl mr-4" style={{color: '#0B5384'}}>⚡</div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">Siemens Energy</h4>
              <p className="text-gray-600">Digital twin technology collaboration</p>
            </div>
          </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Awards & Recognition</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-2" style={{color: '#0B5384'}}>🏆</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Marine Innovation Award 2024</h4>
                  <p className="text-gray-600">Recognized for breakthrough AI navigation systems</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-2" style={{color: '#0B5384'}}>⭐</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Sustainability Excellence 2023</h4>
                  <p className="text-gray-600">Awarded for carbon reduction initiatives</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-2" style={{color: '#0B5384'}}>🌟</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Engineering Excellence Award</h4>
                  <p className="text-gray-600">Outstanding achievement in offshore design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      {/* Investor Enquiry */}
      <div id="investor-form" data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-polygon text-4xl md:text-6xl font-bold text-gray-800 mb-8">
            Investor <span className="text-blue-600" style={{ color: '#0B5384' }}>Enquiry</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            HydroNavix welcomes discussions with investors and strategic partners who share a vision for advancing marine and offshore engineering and navigation intelligence. Submit your details to receive a confidential investor overview and explore potential investment or partnership structures.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-12 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="md:col-span-2">
                <InputFieldDark
                  placeholder="Full Name (Required)"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <InputFieldDark
                placeholder="Email Address (Required)"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
              <InputFieldDark
                placeholder="Phone / WhatsApp (Required)"
                name="phone"
                value={formData.phone || ''}
                onChange={handleChange}
                type="tel"
                required
              />
              <div className="md:col-span-2">
                <select
                  name="investmentInterest"
                  value={formData.investmentInterest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 px-1 py-2 focus:outline-none focus:border-gray-600 transition"
                  required
                >
                  <option value="">Investment Interest</option>
                  <option value="Equity Investment">Equity Investment</option>
                  <option value="Strategic Partnership">Strategic Partnership</option>
                  <option value="Joint Venture">Joint Venture</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <TextAreaFieldDark
                  placeholder="Message (Optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-secondary uppercase text-primary px-12 py-4 font-semibold tracking-wider transition-all duration-300 hover:bg-secondary/80 hover:shadow-xl"
            >
              Submit Investor Enquiry
            </button>
          </form>
        </div>
      </div>



    </>
  );
};



// Input component
const InputField = ({ placeholder, name, value, onChange, className = "" }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full bg-transparent border-b border-white/50 text-white placeholder-white/60 px-1 py-2 focus:outline-none focus:border-white transition ${className}`}
  />
);

// Textarea component
const TextAreaField = ({ placeholder, name, value, onChange }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={4}
    className="w-full bg-transparent border-b border-white/50 text-white placeholder-white/60 px-1 py-2 focus:outline-none focus:border-white transition resize-none"
  />
);

// Dark Input component
const InputFieldDark = ({ placeholder, name, value, onChange, className = "" }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 px-1 py-2 focus:outline-none focus:border-gray-600 transition ${className}`}
  />
);

// Dark Textarea component
const TextAreaFieldDark = ({ placeholder, name, value, onChange }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={4}
    className="w-full bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 px-1 py-2 focus:outline-none focus:border-gray-600 transition resize-none"
  />
);

// Insight Card Component - Interactive cards for core insights
const InsightCard = ({ icon, title, description, detail, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses = {
    blue: {
      hover: 'hover:bg-blue-50 hover:border-blue-300',
      text: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    green: {
      hover: 'hover:bg-green-50 hover:border-green-300',
      text: 'text-green-600',
      bg: 'bg-green-100'
    },
    purple: {
      hover: 'hover:bg-purple-50 hover:border-purple-300',
      text: 'text-purple-600',
      bg: 'bg-purple-100'
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg border-2 border-transparent transition-all duration-300 cursor-pointer transform hover:scale-105 ${colorClasses[color].hover} ${isExpanded ? 'ring-2 ring-blue-300' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-center mb-4">
        <div className={`inline-block p-3 rounded-full ${colorClasses[color].bg} mb-3`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-3 border-t border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className={`text-xs font-medium ${colorClasses[color].text} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
    </div>
  );
};

// Building Card Component - Expandable cards for evolution phases
const BuildingCard = ({ phase, icon, title, description, details, gradient, borderColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white p-8 rounded-2xl shadow-xl border-2 ${borderColor} transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl overflow-hidden`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className={`inline-block p-4 rounded-2xl ${gradient} mb-4`}>
          {icon}
        </div>
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{phase}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Expandable Content */}
      <div className={`transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >


        </button>
      </div>
    </div>
  );
};

// Market Stat Card Component - Flip card with icon front and details back
const MarketStatCard = ({ value, label, description, detail, color, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const colorClasses = {
    green: {
      primary: 'from-green-500 to-emerald-600',
      secondary: 'text-green-600',
      bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
      accent: 'bg-green-100',
      glow: 'shadow-green-500/20'
    },
    blue: {
      primary: 'from-blue-500 to-cyan-600',
      secondary: 'text-blue-600',
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      accent: 'bg-blue-100',
      glow: 'shadow-blue-500/20'
    },
    purple: {
      primary: 'from-purple-500 to-violet-600',
      secondary: 'text-purple-600',
      bg: 'bg-gradient-to-br from-purple-50 to-violet-50',
      accent: 'bg-purple-100',
      glow: 'shadow-purple-500/20'
    },
    red: {
      primary: 'from-red-500 to-rose-600',
      secondary: 'text-red-600',
      bg: 'bg-gradient-to-br from-red-50 to-rose-50',
      accent: 'bg-red-100',
      glow: 'shadow-red-500/20'
    }
  };

  return (
    <div
      className={`h-56 w-full rounded-2xl cursor-pointer group perspective-1000`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front of card - Icon */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl ${colorClasses[color].bg} border border-white/50 backdrop-blur-sm shadow-lg flex flex-col items-center justify-center`}>
          <div className={`p-6 rounded-full ${colorClasses[color].accent} shadow-lg mb-4`}>
            <div className={colorClasses[color].secondary}>
              {icon}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 text-center px-4">{label}</h3>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>

        {/* Back of card - Details */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-col p-6`}>
          <div className="text-center mb-4">
            <div className={`inline-block p-2 rounded-full ${colorClasses[color].accent} mb-3`}>
              <div className={colorClasses[color].secondary}>
                {icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{label}</h3>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className={`text-sm font-bold mb-2 ${colorClasses[color].secondary}`}>
              {value}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Driver Card Component - Interactive investment drivers
const DriverCard = ({ icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: {
      icon: 'text-blue-600',
      bg: 'hover:bg-blue-50',
      border: 'hover:border-blue-300',
      title: 'hover:text-blue-700'
    },
    green: {
      icon: 'text-green-600',
      bg: 'hover:bg-green-50',
      border: 'hover:border-green-300',
      title: 'hover:text-green-700'
    },
    purple: {
      icon: 'text-purple-600',
      bg: 'hover:bg-purple-50',
      border: 'hover:border-purple-300',
      title: 'hover:text-purple-700'
    },
    red: {
      icon: 'text-red-600',
      bg: 'hover:bg-red-50',
      border: 'hover:border-red-300',
      title: 'hover:text-red-700'
    },
    orange: {
      icon: 'text-orange-600',
      bg: 'hover:bg-orange-50',
      border: 'hover:border-orange-300',
      title: 'hover:text-orange-700'
    },
    teal: {
      icon: 'text-teal-600',
      bg: 'hover:bg-teal-50',
      border: 'hover:border-teal-300',
      title: 'hover:text-teal-700'
    }
  };

  return (
    <div
      className={`p-6 rounded-xl border-2 border-transparent bg-white shadow-md transition-all duration-300 cursor-pointer transform hover:scale-102 hover:shadow-lg ${colorClasses[color].bg} ${colorClasses[color].border}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg bg-gray-50 transition-colors duration-300 ${isHovered ? colorClasses[color].icon : 'text-gray-400'}`}>
          {icon}
        </div>

        <div className="flex-1">
          <h4 className={`text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 ${colorClasses[color].title}`}>
            {title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          <div className={`mt-3 transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className={`h-1 rounded-full transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`} style={{ backgroundColor: colorClasses[color].icon.replace('text-', '') }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D Ship Model Component
function ShipModel() {
  const { scene } = useGLTF(shipModel);
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation around Y axis
      meshRef.current.rotation.y += delta * 0.2;

      // Floating motion (up and down)
      meshRef.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -0.5, 0]}
    />
  );
}

export default Investors;
