import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Target, Settings, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const processes = [
    {
      phase: 'Phase 1',
      title: 'Discover',
      description: 'Understand business challenges, opportunities, and operational gaps.',
      icon: Search
    },
    {
      phase: 'Phase 2',
      title: 'Strategize',
      description: 'Develop a customized transformation roadmap.',
      icon: Target
    },
    {
      phase: 'Phase 3',
      title: 'Implement',
      description: 'Deploy systems, automation, marketing initiatives, and process improvements.',
      icon: Settings
    },
    {
      phase: 'Phase 4',
      title: 'Scale',
      description: 'Measure performance and continuously optimize growth.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-transparent font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm border border-gray-200">
              Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-light text-center mb-2 leading-tight tracking-tight px-4"
          >
            <span className="block sm:inline">Our Proven Process</span>{" "}
            <span className="block sm:inline">For Business Transformation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-center max-w-xl mx-auto text-base sm:text-lg font-light"
          >
            A systematic approach to transforming your business operations and accelerating growth
          </motion.p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-900 -translate-x-1/2 rounded-full origin-top z-10"
            style={{ scaleY }}
          />

          <div className="space-y-12 md:space-y-24">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              const Icon = process.icon;

              return (
                <div key={process.phase} className="relative flex items-center md:justify-between w-full">
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center z-20 shadow-sm group hover:border-gray-900 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                  </div>

                  {/* Desktop Layout - Left / Right */}
                  <div className={`hidden md:flex w-full ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                    >
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 group hover-glow-animated relative z-10">
                        <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-2 block">{process.phase}</span>
                        <h3 className="text-2xl font-light text-gray-900 mb-3">{process.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{process.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Layout - Always Right */}
                  <div className="flex md:hidden w-full justify-end pl-24">
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full"
                    >
                      <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover-glow-animated">
                        <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-1 block">{process.phase}</span>
                        <h3 className="text-xl font-light text-gray-900 mb-2">{process.title}</h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">{process.description}</p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shadowPulse {
          0% { box-shadow: 0 0 20px rgba(57,255,20,0.3); }
          50% { box-shadow: 0 0 40px rgba(57,255,20,0.7); }
          100% { box-shadow: 0 0 20px rgba(57,255,20,0.3); }
        }
        .hover-glow-animated {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-glow-animated:hover {
          animation: shadowPulse 2s infinite ease-in-out;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;