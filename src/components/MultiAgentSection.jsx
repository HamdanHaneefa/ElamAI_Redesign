import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MultiAgentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('multi-agent-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="multi-agent-section"
  className="relative overflow-hidden font-sans py-8 sm:py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      {/* No blurred/gradient overlays for seamless look */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              className="inline-block px-4 py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-700 text-sm font-light mb-4"
              variants={itemVariants}
            >
              AI Search Visibility
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Become Discoverable in
              <br />
              the AI Search Era
            </motion.h2>

            <motion.p
              className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Businesses are increasingly discovered through AI assistants. We optimize your business to ensure you remain visible across ChatGPT, Gemini, Claude, and Perplexity.
            </motion.p>
          </div>

          {/* Simplified Workflow Visualization */}
          <motion.div className="mb-8 sm:mb-12" variants={itemVariants}>
            {/* Mobile: Simple Flow */}
            <div className="sm:hidden">
              <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6">
                <div className="space-y-6">
                  {/* Input */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-sm">
                          Business Knowledge
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Website, Content, Data
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center relative">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-sm">
                          Intelligent Search
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Global Algorithmic Discovery
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="flex items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-sm">
                          Customer Discovery
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Brand Visibility & Leads
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        4+
                      </div>
                      <div className="text-xs text-gray-600">Search Networks</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">Visibility</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        10x
                      </div>
                      <div className="text-xs text-gray-600">Reach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Enhanced Flow */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-5 gap-8 items-center">
                {/* Input Sources */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 font-medium mb-2">Business Data</h4>
                  <p className="text-gray-700 text-sm">
                    Website, Content & Structured Data
                  </p>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    className="text-white/40"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* AI Processing Hub */}
                <motion.div
                  className="bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-sm border border-indigo-400/40 rounded-2xl p-8 text-center shadow-2xl relative"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-xl relative">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-gray-900 font-medium text-lg mb-2">
                    Intelligent Search
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Global Algorithmic Discovery
                  </p>

                  <div className="flex justify-center space-x-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-white/60 rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    className="text-white/40"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Automated Actions */}
                <motion.div
                  className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 font-medium mb-2">Customer Acquisition</h4>
                  <p className="text-gray-700 text-sm">
                    Visibility, Leads & Growth
                  </p>
                </motion.div>
              </div>

              {/* Desktop Stats */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    4+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Search Networks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 text-sm">
                    Continuous Visibility
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">10x</div>
                  <div className="text-gray-600 text-sm">
                    Reach Boost
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

         
        </div>
      </div>
    </motion.section>
  );
};

export default MultiAgentSection;