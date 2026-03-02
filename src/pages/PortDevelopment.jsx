import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Settings,
    Target,
    Rocket,
    TrendingUp,
    Bot,
    Globe,
    Zap,
    Shield,
    Layers,
    Cpu,
    Wind,
    Droplets,
    Anchor,
    Box,
    Monitor,
    Database,
    ArrowRight,
    ChevronDown
} from "lucide-react";
import Header from "../layouts/Header";

// Mock images since generation failed
const visionImages = {
    ai: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    autonomous: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    digital: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    green: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
};

const PortDevelopment = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    const scrollToNext = () => {
        containerRef.current.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        setCurrentPage(1);
    };

    return (
        <div className="bg-white overflow-hidden">
            <Helmet>
                <title>Port Development 4.0 - HydroNavix Marine</title>
                <meta name="description" content="Engineering the Ports of the Future: Smart, Autonomous, Digital, and Sustainable port infrastructure by HydroNavix Marine." />
            </Helmet>

            {/* Custom Styles for Snap Scroll */}
            <style>{`
        .snap-container {
          height: 100vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scrollbar-width: none;
        }
        .snap-container::-webkit-scrollbar {
          display: none;
        }
        .snap-section {
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
        }
      `}</style>

            <div ref={containerRef} className="snap-container">
                {/* PAGE 1: THE VISION */}
                <section className="snap-section flex flex-col items-center justify-center pt-20">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
                        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
                    </div>

                    <div className="relative z-10 w-full px-6 md:px-20 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-LightBlue font-bold tracking-widest uppercase mb-4">Port Development 4.0</h2>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Engineering the <span className="text-DarkBlue">Ports of 2050</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                HydroNavix is pioneering the next era of port development — combining structural engineering, AI, digital twins, and sustainable design.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <VisionCard
                                icon={<Cpu className="w-8 h-8" />}
                                title="AI-Integrated Smart Port"
                                description="Cargo optimization, vessel tracking, and predictive maintenance dashboards."
                                delay={0.1}
                            />
                            <VisionCard
                                icon={<Bot className="w-8 h-8" />}
                                title="Autonomous Systems"
                                description="Robotic cranes, autonomous vehicles, and drone-based inspections."
                                delay={0.2}
                            />
                            <VisionCard
                                icon={<Layers className="w-8 h-8" />}
                                title="Digital Twin Ecosystem"
                                description="Full 3D virtual replicas for live data integration and impact simulation."
                                delay={0.3}
                            />
                            <VisionCard
                                icon={<Wind className="w-8 h-8" />}
                                title="Sustainable Infrastructure"
                                description="Green hydrogen, solar-powered utilities, and shore power systems."
                                delay={0.4}
                            />
                        </div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mt-16 flex flex-col items-center cursor-pointer"
                            onClick={scrollToNext}
                        >
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Capabilities & Roadmap</span>
                            <ChevronDown className="text-LightBlue w-8 h-8" />
                        </motion.div>
                    </div>
                </section>

                {/* PAGE 2: CAPABILITIES & ROADMAP */}
                <section className="snap-section bg-DarkBlue text-white flex flex-col items-center justify-center pt-20">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-DarkBlue via-[#09426b] to-[#073152]" />
                    </div>

                    <div className="relative z-10 w-full px-6 md:px-20 max-w-7xl mx-auto py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* Left Column: Capabilities */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-2">Capabilities</h3>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Advanced Engineering</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Smart Quay Walls",
                                            "Intelligent Breakwaters",
                                            "Heavy-Lift Load-outs",
                                            "Container Terminal Design",
                                            "Offshore Marine Terminals",
                                            "Floating Port Infrastructure",
                                            "Modular Expansion",
                                            "Coastal Engineering"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                                <span className="font-medium text-white">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <Rocket className="w-6 h-6 mr-2 text-cyan-400" />
                                        Why HydroNavix?
                                    </h3>
                                    <p className="text-blue-100/80 leading-relaxed italic">
                                        "Traditional companies build ports. HydroNavix builds intelligent maritime ecosystems. We deliver ports ready for the next 50 years of global trade."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column: Roadmap & Ports */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div>
                                    <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-6">2030+ Roadmap</h3>
                                    <div className="space-y-4">
                                        <RoadmapItem
                                            title="AI Congestion Forecasting"
                                            text="Predictive algorithms for vessel flow."
                                        />
                                        <RoadmapItem
                                            title="Autonomous Heavy-Lift Software"
                                            text="Proprietary simulation & control platforms."
                                        />
                                        <RoadmapItem
                                            title="Blockchain Cargo Verification"
                                            text="Secure, transparent maritime logistics."
                                        />
                                        <RoadmapItem
                                            title="Digital EPC Workflow"
                                            text="Fully digital infrastructure lifecycle."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-6">Ports We Envision</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Autonomous Mega-Terminals",
                                            "Smart LNG Hubs",
                                            "Offshore Energy Ports",
                                            "Floating Logistics Bases",
                                            "Defense Smart Ports",
                                            "Hydrogen-ready Hubs"
                                        ].map((port, idx) => (
                                            <span key={idx} className="bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 px-4 py-2 rounded-full text-sm font-semibold">
                                                {port}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-xl shadow-xl flex items-center justify-between cursor-pointer"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Database className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Investor Inquiry</h4>
                                            <p className="text-xs text-white/80">Get the full Port 4.0 technical deck</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-6 h-6" />
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const VisionCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-DarkBlue/50 hover:shadow-2xl transition-all group"
    >
        <div className="bg-cyan-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-DarkBlue group-hover:bg-DarkBlue group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const RoadmapItem = ({ title, text }) => (
    <div className="flex items-start space-x-4 group cursor-default">
        <div className="bg-cyan-500/30 p-2 rounded-lg group-hover:bg-cyan-500 transition-colors">
            <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
            <h4 className="font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">{title}</h4>
            <p className="text-blue-100/60 text-sm">{text}</p>
        </div>
    </div>
);

export default PortDevelopment;
