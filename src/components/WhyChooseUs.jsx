import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    number: "01",
    title: "Complete Solution",
    subtitle: "End-to-end AI transformation",
  },
  {
    icon: Zap,
    number: "02",
    title: "Proven Stack",
    subtitle: "N8N, AI platforms, analytics",
  },
  {
    icon: Globe,
    number: "03",
    title: "Global + Local",
    subtitle: "Worldwide with cultural intelligence",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "ROI-Focused",
    subtitle: "Measurable business value",
  },
];

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

const WhyChooseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 flex flex-col items-center px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-900 shadow-sm border border-gray-200">
          Why Choose Us
        </span>
      </motion.div>
      
      <motion.h2
        variants={itemVariants}
        className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-center mb-2 leading-tight tracking-tight font-sans"
      >
        Your Complete AI
        <br className="hidden sm:block" />
        Transformation Partner
      </motion.h2>
      
      <motion.p
        variants={itemVariants}
        className="text-gray-600 text-center mb-12 max-w-xl mx-auto text-base font-light"
      >
        Building the future of intelligent business solutions
      </motion.p>

      {/* Grid Layout */}
      <motion.div
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-1 bg-gray-200"
      >
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-4 sm:p-6 cursor-default group overflow-hidden"
            >
              {/* Background Effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: hoveredIndex === i ? 1 : 0,
                  opacity: hoveredIndex === i ? 0.03 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black"
              />

              {/* Number */}
              <motion.div
                animate={{
                  scale: hoveredIndex === i ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-6xl sm:text-7xl font-light text-gray-100 absolute top-2 right-3 leading-none select-none"
              >
                {benefit.number}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: hoveredIndex === i ? -3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </motion.div>

                <motion.h3
                  animate={{
                    y: hoveredIndex === i ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-900 text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 leading-tight"
                >
                  {benefit.title}
                </motion.h3>

                <motion.p
                  animate={{
                    y: hoveredIndex === i ? -2 : 0,
                    opacity: hoveredIndex === i ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs"
                >
                  {benefit.subtitle}
                </motion.p>
              </div>

              {/* Hover Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-black origin-left"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseSection;