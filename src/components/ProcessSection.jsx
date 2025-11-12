import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProcessSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleTouch = (index, e) => {
    e.stopPropagation();
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleClickOutside = () => {
    setSelectedIndex(null);
  };

  React.useEffect(() => {
    const handleClick = (e) => {
      handleClickOutside();
    };
    
    document.addEventListener('click', handleClick);
    document.addEventListener('touchend', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchend', handleClick);
    };
  }, []);

  const processes = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Alignment',
      description: 'We uncover opportunities and align goals to build the right AI roadmap.'
    },
    {
      phase: 'Phase 2',
      title: 'System Design & Validation',
      description: 'We map workflows and design the blueprint that powers your success.'
    },
    {
      phase: 'Phase 3',
      title: 'Implementation & Integration',
      description: 'We execute the build and integrate AI seamlessly into operations.'
    },
    {
      phase: 'Phase 4',
      title: 'Continued Partnership',
      description: 'We monitor, optimize, and evolve your AI as your business grows.'
    }
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm border border-gray-200">
              Our Process
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-gray-900 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-center mb-2 leading-tight tracking-tight font-sans px-4"
          >
            <span className="block sm:inline">Our Proven Process</span>{" "}
            <span className="block sm:inline">For AI Implementation</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center mb-12 max-w-xl mx-auto text-base font-light"
          >
            A systematic approach to transforming your business operations with AI
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {processes.map((process, index) => (
            <motion.div
              key={process.phase}
              variants={itemVariants}
              className="group cursor-pointer touch-manipulation"
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                handleTouch(index, e);
              }}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleTouch(index, e);
              }}
            >
              <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 transition-all duration-500 ease-out overflow-hidden hover:border-transparent hover:shadow-2xl hover:scale-105">
                {/* Gradient background overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black transition-opacity duration-500 ease-out
                    ${selectedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
                
                {/* Content with z-index */}
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-4">
                    <span 
                      className="text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-500 ease-out"
                      style={{
                        color: selectedIndex === index ? '#ffffff' : undefined
                      }}
                    >
                      <span className={selectedIndex === index ? '' : 'text-gray-700 group-hover:text-white transition-colors duration-500'}>
                        {process.phase}
                      </span>
                    </span>
                  </div>
                  <h3 
                    className="text-base sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-500 ease-out"
                    style={{
                      color: selectedIndex === index ? '#ffffff' : undefined
                    }}
                  >
                    <span className={selectedIndex === index ? '' : 'text-gray-900 group-hover:text-white transition-colors duration-500'}>
                      {process.title}
                    </span>
                  </h3>
                  <p 
                    className="text-sm sm:text-base font-normal leading-relaxed transition-colors duration-500 ease-out"
                    style={{
                      color: selectedIndex === index ? '#ffffff' : undefined
                    }}
                  >
                    <span className={selectedIndex === index ? '' : 'text-gray-700 group-hover:text-white transition-colors duration-500'}>
                      {process.description}
                    </span>
                  </p>
                </div>

                {/* Shine effect */}
                <div className={`absolute inset-0 opacity-0 transition-all duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transform
                  ${selectedIndex === index ? 'opacity-20 translate-x-full' : 'group-hover:opacity-20 group-hover:translate-x-full'}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;