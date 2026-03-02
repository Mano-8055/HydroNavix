import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeWords from "../components/FadeWords";
import ServiceSection from '../layouts/ServiceSection';

const Service = () => {
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start("visible");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32 text-center">
      <div className="flex flex-col gap-1 items-center justify-center pb-4 px-4 md:pb-8">
        <FadeWords
          text="ENGINEERING SERVICES"
          controls={titleControls}
          className="text-2xl sm:text-4xl font-semibold tracking-tight text-center mb-1.5"
        />
        <p className="max-w-4xl text-md md:text-lg text-secondary/60">
          Hydronavix offers a wide spectrum of engineering services across marine, offshore, oil & gas, and renewable sectors reimagined with smart processes, advanced tools, and practical delivery
        </p>
      </div>

      <div className="w-full mx-auto">
        <ServiceSection />
      </div>

      {/* FAQ Section */}
      <div data-aos="fade-up" className="investor-section interactive-section min-h-screen flex items-center px-6 md:px-20 py-20 relative">
        <img
          src="src/assets/services/s1.webp"
          alt="FAQ Background"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-polygon text-3xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Get answers to common questions about our engineering services and how we deliver innovative solutions across marine, offshore, and renewable sectors.
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What engineering services does Hydronavix offer?"
              answer="Hydronavix provides comprehensive engineering services across marine, offshore, oil & gas, and renewable energy sectors. Our offerings include conceptual design, detailed engineering, project management, technical consulting, and digital transformation solutions using advanced tools like AI, VR/AR, and smart processes."
            />

            <FAQItem
              question="How does Hydronavix approach engineering projects?"
              answer="We combine traditional engineering expertise with cutting-edge technology. Our approach focuses on practical delivery, smart processes, and innovative tools to reimagine engineering solutions. We emphasize safety, compliance, operational performance, and sustainable outcomes in all our projects."
            />

            <FAQItem
              question="What sectors does Hydronavix serve?"
              answer="We serve the marine, offshore, oil & gas, and renewable energy sectors. Our expertise spans from traditional maritime engineering to emerging renewable technologies, with a strong focus on the Middle East and international markets."
            />

            <FAQItem
              question="What makes Hydronavix engineering services unique?"
              answer="Our unique combination of engineering-first mindset, operational understanding, and technology scalability sets us apart. We build solutions for real-world environments, backed by domain expertise and a commitment to delivering measurable impact through innovative engineering intelligence."
            />

            <FAQItem
              question="Can Hydronavix handle international and large-scale projects?"
              answer="Yes, we have extensive experience with international projects across the Middle East and beyond. Our scalable business model and global reach enable us to support projects of all sizes, from concept to completion, with a focus on high-value marine and offshore developments."
            />

            <FAQItem
              question="What is your project delivery process?"
              answer="Our delivery process combines smart processes with advanced tools. We start with thorough assessment and planning, followed by iterative design and engineering phases, rigorous testing, and seamless implementation. Throughout, we maintain close collaboration with clients to ensure alignment with operational needs and regulatory requirements."
            />

            <FAQItem
              question="How does Hydronavix ensure quality and safety in engineering projects?"
              answer="Quality and safety are paramount in our engineering approach. We adhere to international standards, conduct comprehensive risk assessments, and implement advanced monitoring systems. Our engineering solutions are designed with real-world operational consequences in mind, ensuring reliable and safe outcomes."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Service;
