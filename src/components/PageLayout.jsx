
import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  description, 
  badge,
  backgroundGradient = true 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Background Elements */}
      {backgroundGradient && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-cyan-50/50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
        </div>
      )}

      <motion.main
        className="relative z-10 pt-20 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            {badge && (
              <motion.div 
                className="inline-block px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-sm font-light mb-6"
                variants={itemVariants}
              >
                {badge}
              </motion.div>
            )}
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 mb-6"
                variants={itemVariants}
              >
                {subtitle}
              </motion.h2>
            )}
            
            {description && (
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
                variants={itemVariants}
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default PageLayout;
