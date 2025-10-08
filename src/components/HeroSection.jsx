import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Mail, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';


// Mock BlurText component since it's not available
const BlurText = ({ text, className, onAnimationComplete, ...props }) => {
  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0, filter: 'blur(4px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleAnimationComplete = () => {
    console.log('Heading animation completed');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut"
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

  const automationServices = [
    {
      icon: MessageSquare,
      title: "Chat Automation",
      description: "Intelligent customer support across all platforms",
    },
    {
      icon: Mail,
      title: "Email Management", 
      description: "Smart email routing and automated responses",
    },
    {
      icon: Settings,
      title: "Custom AI Agents",
      description: "Tailored automation solutions for your business needs",
    }
  ];

  if (!isVisible) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: mousePosition.x * 0.2,
                y: mousePosition.y * 0.2,
              }}
              transition={{ type: "spring", stiffness: 30, damping: 60 }}
              style={{ left: "20%", top: "20%", willChange: "transform" }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: mousePosition.x * 0.15,
                y: mousePosition.y * 0.15,
              }}
              transition={{ type: "spring", stiffness: 20, damping: 70 }}
              style={{ right: "15%", bottom: "30%", willChange: "transform" }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-start">
          {/* Hero Content */}
          <div className="pt-48 sm:pt-44 lg:pt-52 pb-24"> {/* More top padding on mobile only, desktop unchanged */}
            <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
              {/* Headline */}
              <motion.div className="mb-6 w-full flex justify-center" variants={itemVariants}>
                <BlurText
                  text={<>Transform Your Business with <span className="text-blue-600">Intelligent AI Solutions</span></>}
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight tracking-tight text-center"
                />
              </motion.div>

              {/* Subtitle */}
              <motion.div className="mb-6" variants={itemVariants}>
                <BlurText
                  text="Elam AI helps Indian and international businesses accelerate growth through AI-powered strategy development, workflow automation, predictive analytics, and intelligent content creation."
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light"
                />
              </motion.div>

              {/* Location Badge */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                  <span className="text-sm text-gray-700 font-light">
                    Based in Perumanna, Kerala, India - Serving Global Clients
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    to="/about/contact"
                    className="inline-flex items-center justify-center bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl group hover:bg-gray-800"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default HeroSection;