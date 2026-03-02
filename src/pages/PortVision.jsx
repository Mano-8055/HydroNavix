import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Cpu, Bot, Zap, ArrowRight, Anchor, Target } from "lucide-react";
//import { Layers, Wind, Rocket, Globe, Shield, Database, Droplets, Sun, Activity, Box, ArrowLeft } from "lucide-react";
import PortRoadmap from "./PortRoadmap";
import { Link } from "react-router-dom";
import {
  Layers,
  Wind,
  Rocket,
  Globe,
  Shield,
  Database,
  Droplets,
  Sun,
  Activity,
  Box,
  ArrowLeft,
} from "lucide-react";

const PortVision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Port Vision 2050 - HydroNavix Marine</title>
        <meta
          name="description"
          content="Engineering the intelligent maritime ecosystems of the future with AI and autonomous systems."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-6 md:px-20 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-bl-[200px]" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="inline-flex items-center space-x-2 bg-DarkBlue/10 text-DarkBlue px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-DarkBlue rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">
                The 2050 Vision
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight font-sans">
              Designing <span className="text-DarkBlue">Intelligent</span>{" "}
              Maritime Ecosystems
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              HydroNavix is not just developing ports; we are pioneering the
              next era of port development by combining advanced structural
              engineering with AI-driven intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/port-roadmap"
                className="bg-DarkBlue text-white px-8 py-4 rounded-xl font-bold flex items-center group hover:bg-[#073152] transition-all"
              >
                Explore Infrastructure Roadmap{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Smart Port Vision"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold tracking-widest uppercase mb-1">
                  Status: Active
                </p>
                <p className="text-2xl font-bold italic">
                  "We are engineering the ports of tomorrow."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI & Autonomous Sections */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Foundational Technologies
            </h2>
            <div className="w-20 h-1.5 bg-LightBlue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI Integrated */}
            <motion.div
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white overflow-hidden rounded-[32px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
              data-aos="fade-right"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
                  alt="AI Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-DarkBlue/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur text-DarkBlue rounded-xl flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-DarkBlue transition-colors">
                  AI-Integrated Smart Port
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>AI-based cargo flow optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Real-time vessel traffic prediction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>IoT-enabled structural health monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Predictive maintenance algorithms</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-DarkBlue font-bold italic flex items-center">
                    <Target className="w-5 h-5 mr-2" /> Result: Zero downtime.
                    Maximum throughput.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Autonomous Systems */}
            <motion.div
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white overflow-hidden rounded-[32px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
              data-aos="fade-left"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Autonomous Robotics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur text-LightBlue rounded-xl flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-LightBlue transition-colors">
                  Autonomous & Robotic Port Systems
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Autonomous container handling vehicles (AGVs)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Robotic quay cranes & automated mooring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Drone-based structural & aerial inspections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-LightBlue mt-1 shrink-0" />
                    <span>Robotic underwater inspection (ROV)</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-LightBlue font-bold italic flex items-center">
                    <Target className="w-5 h-5 mr-2" /> Result: Safer
                    operations. Higher precision.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA to Roadmap */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-5xl mx-auto bg-DarkBlue rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to see the <span className="text-cyan-400">Roadmap?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            View our comprehensive roadmap of digital twins, sustainable
            infrastructure, and proprietary engineering solutions for 2030 and
            beyond.
          </p>
          <Link
            to="/port-roadmap"
            className="inline-flex items-center space-x-3 bg-white text-DarkBlue px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-cyan-50 transition-all"
          >
            <span>Next: Infrastructure & Roadmap</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
      <PortRoadmap/>
      {/* <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-DarkBlue via-[#09426b] to-[#073152] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <Link
              to="/port-vision"
              className="inline-flex items-center text-cyan-400 font-bold mb-8 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" /> Back to Port Vision
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Future <span className="text-cyan-400">Infrastructure</span> &
              Roadmap
            </h1>
            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
              From Digital Twins to Decarbonization, HydroNavix is building the
              physical and digital backbone of global trade.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Layers className="w-10 h-10 text-cyan-400 mb-4" />
              <h4 className="font-bold">Digital Twin</h4>
              <p className="text-xs text-blue-100/60 mt-2">
                Virtual port replicas.
              </p>
            </div>
            <div
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Wind className="w-10 h-10 text-green-400 mb-4" />
              <h4 className="font-bold">Green Terminals</h4>
              <p className="text-xs text-blue-100/60 mt-2">
                Sustainable energy.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
    </div>
  );
};

export default PortVision;
