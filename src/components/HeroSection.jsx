import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Mail, Settings } from 'lucide-react';

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

const TypewriterEffect = () => {
  const phrases = [
    "Strategy & Operations",
    "Workflow Automation",
    "Digital Visibility",
    "Business Transformation"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseDuration = 2000; // How long to pause at complete phrase

    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        // Typing
        if (currentText !== currentPhrase) {
          const nextChar = currentPhrase.slice(0, currentText.length + 1);
          setCurrentText(nextChar);
        } else {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          const nextText = currentPhrase.slice(0, currentText.length - 1);
          setCurrentText(nextText);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <span className="text-blue-600 block min-h-[1.2em] sm:min-h-[1.44em] text-[34px] sm:text-[32px] lg:text-[42px] xl:text-[52px] whitespace-nowrap">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
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
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-100" 
          style={{ backgroundImage: "url('/hero.svg')" }}
        />
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Hero Content */}
          <div className="py-8 sm:py-12">
            <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center space-y-5 sm:space-y-8">
              {/* Headline - Mobile optimized with larger font */}
              <motion.div 
                className="w-full mb-4 sm:mb-6 px-3 sm:px-6" 
                variants={itemVariants}
              >
                <BlurText
                  text={
                    <div className="flex flex-col items-center text-center">
                      <span className="block text-[30px] sm:text-[32px] lg:text-[42px] xl:text-[52px] leading-tight mb-2 sm:mb-0">
                        Accelerate Growth Through
                      </span>
                      <TypewriterEffect />
                    </div>
                  }
                  className="font-light text-gray-900 tracking-tight"
                />
              </motion.div>

              {/* Subtitle - Mobile optimized with larger font */}
              <motion.div 
                className="mb-5 sm:mb-8 px-3 sm:px-6" 
                variants={itemVariants}
              >
                <BlurText
                  text="We help businesses increase visibility, streamline operations, reduce costs, and unlock sustainable growth through technology-enabled transformation."
                  className="text-[17px] sm:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-light text-center"
                />
              </motion.div>

              {/* CTA Button - Mobile optimized with larger font */}
              <motion.div 
                className="w-full px-3 sm:px-6" 
                variants={itemVariants}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-900 text-white px-6 sm:px-8 py-3.5 rounded-xl font-medium transition-all duration-300 text-[16px] sm:text-[14px] shadow-lg hover:shadow-xl group hover:bg-gray-800"
                  >
                    <span>Book a Growth Consultation</span>
                    <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Enhanced responsive styles with larger mobile fonts */
        @media (max-width: 640px) {
          .text-blue-600 {
            line-height: 1.3;
            font-size: 34px;
            text-align: center;
            white-space: nowrap;
            overflow: visible;
          }
          
          /* Headline text size for mobile - increased */
          .text-2xl, .text-3xl {
            font-size: 30px;
            line-height: 1.2;
            text-align: center;
          }
          
          /* Increase container padding */
          .px-3 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          
          /* Add container max-width */
          .max-w-4xl {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          
          /* Adjust top padding for mobile */
          .pt-36 {
            padding-top: 9rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default HeroSection;