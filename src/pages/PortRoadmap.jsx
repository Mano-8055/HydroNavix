import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Layers, Wind, Rocket, Globe, Shield, Database, Droplets, Sun, Activity, Box, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PortRoadmap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <Helmet>
                <title>Port Roadmap & Infrastructure - HydroNavix Marine</title>
                <meta name="description" content="Digital Twin ecosystems, Green infrastructure, and the 2030 roadmap for global maritime ports." />
            </Helmet>

            {/* Hero Section */}
            <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-DarkBlue via-[#09426b] to-[#073152] text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1"
                    >
                        <Link to="/port-vision" className="inline-flex items-center text-cyan-400 font-bold mb-8 hover:text-white transition-colors">
                            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Port Vision
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Future <span className="text-cyan-400">Infrastructure</span> & Roadmap
                        </h1>
                        <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
                            From Digital Twins to Decarbonization, HydroNavix is building the physical and digital backbone of global trade.
                        </p>
                    </motion.div>

                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="100">
                            <Layers className="w-10 h-10 text-cyan-400 mb-4" />
                            <h4 className="font-bold">Digital Twin</h4>
                            <p className="text-xs text-blue-100/60 mt-2">Virtual port replicas.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="200">
                            <Wind className="w-10 h-10 text-green-400 mb-4" />
                            <h4 className="font-bold">Green Terminals</h4>
                            <p className="text-xs text-blue-100/60 mt-2">Sustainable energy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Twin & Sustainability */}
            <section className="px-6 md:px-20 py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Digital Twin */}
                    <div data-aos="fade-up" className="group">
                        <div className="relative h-[400px] mb-10 overflow-hidden rounded-[40px] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                alt="Digital Twin Tech"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-DarkBlue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold tracking-widest text-sm">3D MODELING • REAL-TIME DATA • SIMULATION</p>
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
                            <Layers className="mr-4 text-DarkBlue w-10 h-10 group-hover:rotate-12 transition-transform" />
                            Digital Twin Ecosystem
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Every port will have a virtual replica before it is built. Our digital twins integrate live data for real-time decision making and structural visualization.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Full 3D digital twin port models",
                                "AR/VR port walkthrough simulations",
                                "Live data integration dashboards",
                                "Structural stress visualization systems",
                                "Climate impact simulation tools"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center space-x-3 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-100 hover:border-blue-200 transition-all cursor-default"
                                >
                                    <Activity className="w-6 h-6 text-DarkBlue shrink-0" />
                                    <span className="font-bold text-gray-800">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Green Infrastructure */}
                    <div data-aos="fade-up" data-aos-delay="200" className="group">
                        <div className="relative h-[400px] mb-10 overflow-hidden rounded-[40px] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200"
                                alt="Green Energy Port"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold tracking-widest text-sm">RENEWABLE • DECARBONIZATION • HYDROGEN</p>
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
                            <Wind className="mr-4 text-green-600 w-10 h-10 group-hover:-rotate-12 transition-transform" />
                            Sustainable Solutions
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Aligned with global decarbonization goals, we design ports that are as green as they are efficient, leveraging hybrid energy container systems.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Droplets className="w-6 h-6" />, text: "Green Hydrogen Terminal" },
                                { icon: <Sun className="w-6 h-6" />, text: "Solar & Hybrid Power" },
                                { icon: <Box className="w-6 h-6" />, text: "Cold Ironing Systems" },
                                { icon: <Shield className="w-6 h-6" />, text: "Carbon-Reduction Design" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="p-6 border border-green-100 rounded-[24px] bg-green-50/20 hover:bg-green-50 hover:shadow-lg transition-all cursor-default text-center flex flex-col items-center"
                                >
                                    <div className="text-green-600 mb-4">{item.icon}</div>
                                    <span className="font-black text-xs uppercase tracking-tighter text-gray-800">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Engineering Capabilities */}
            <section className="px-6 md:px-20 py-20 bg-LightBlue/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Advanced Engineering</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                HydroNavix combines innovation with core marine expertise to design scalable, climate-resilient port infrastructure.
                            </p>
                        </div>
                        <div className="bg-DarkBlue text-white px-8 py-4 rounded-full font-bold">
                            Engineering Excellence
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Smart Quay Walls",
                            "Intelligent Breakwaters",
                            "Heavy-Lift Load-outs",
                            "Container Terminal Design",
                            "Offshore Marine Terminals",
                            "Floating Port Infrastructure",
                            "Modular Expansion",
                            "Coastal Engineering"
                        ].map((skill, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-LightBlue transition-all text-center group">
                                <p className="font-bold text-gray-800 group-hover:text-DarkBlue transition-colors">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap Phase Section */}
            <section className="px-6 md:px-20 py-24 bg-DarkBlue text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
                            <Rocket className="w-12 h-12 text-cyan-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">2030+ FUTURE ROADMAP</h2>
                        <p className="text-blue-100 text-xl">We are developing proprietary solutions for the next decade of maritime trade.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <RoadmapCard
                            title="Forecasting & Simulation"
                            items={["AI-based congestion forecasting", "Automated heavy-lift software"]}
                            icon={<Database />}
                        />
                        <RoadmapCard
                            title="Digital Ecosystems"
                            items={["2D-to-3D conversion platform", "Blockchain cargo verification"]}
                            icon={<Globe />}
                        />
                        <RoadmapCard
                            title="Monitoring & ERP"
                            items={["Real-time health monitoring", "Smart marine ERP ecosystem"]}
                            icon={<Activity />}
                        />
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold mb-8">Ports We Envision</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Autonomous Container Mega-terminals",
                                "Smart LNG Export Hubs",
                                "Defense & Naval Smart Ports",
                                "Hydrogen-ready Maritime Hubs",
                                "Floating Logistics Bases"
                            ].map((port, idx) => (
                                <span key={idx} className="px-6 py-3 bg-white/5 border border-white/20 rounded-full text-sm font-bold text-cyan-200">
                                    {port}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const RoadmapCard = ({ title, items, icon }) => (
    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
        <div className="text-cyan-400 mb-6 w-12 h-12 flex items-center justify-center bg-cyan-400/10 rounded-xl group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h4 className="text-2xl font-bold mb-6">{title}</h4>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-blue-100/70">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default PortRoadmap;
