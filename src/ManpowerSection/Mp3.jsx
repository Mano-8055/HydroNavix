import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Mp3 = () => {
  const navigate = useNavigate();

  const deploymentTypes = [
    {
      id: '01',
      title: 'On-Site Deployment',
      desc: 'Workforce for global sites including UAE, GCC, EU & Asia.',
    },
    {
      id: '02',
      title: 'Remote Engineering',
      desc: 'Virtual expert support for project continuity worldwide.',
    },
    {
      id: '03',
      title: 'Contract / Long-Term',
      desc: 'Flexible workforce model based on your duration needs.',
    },
    {
      id: '04',
      title: 'Emergency Staffing',
      desc: 'Deploy skilled professionals at short notice.',
    },
  ];

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-secondary text-center mb-14">
          Deployment Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deploymentTypes.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden border border-secondary transition-all duration-300 hover:shadow-xl"
            >
              {/* Top Card Section */}
              <div className="bg-white px-6 py-6 rounded-t-2xl transition-all duration-300">
                <span className="text-2xl md:text-3xl font-bold text-secondary opacity-40">
                  {item.id}
                </span>
                <h3 className="mt-2 text-lg md:text-xl font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-secondary/70 text-sm font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Hover Reveal Section */}
              <div className="absolute bottom-[-100px] group-hover:bottom-0 left-0 right-0 bg-LightBlue py-5 px-4 flex justify-center items-center transition-all duration-300 ease-in-out shadow-inner">
                <button
                  onClick={() => navigate('/careers')}
                  className="bg-LightBlue hover:bg-LightBlue/80 text-primary text-sm font-semibold px-6 py-2 rounded-full transition duration-300"
                >
                  Hire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mp3;
