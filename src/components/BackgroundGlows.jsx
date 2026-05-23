import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BackgroundGlows = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

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

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Glow 1 - Top Left */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 60 }}
        style={{ left: "-10%", top: "5%", willChange: "transform" }}
      />
      
      {/* Glow 2 - Middle Right */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.2,
          y: mousePosition.y * 0.2,
        }}
        transition={{ type: "spring", stiffness: 15, damping: 70 }}
        style={{ right: "-15%", top: "35%", willChange: "transform" }}
      />

      {/* Glow 3 - Bottom Left */}
      <motion.div
        className="absolute w-[550px] h-[550px] bg-indigo-100/30 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.25,
          y: -mousePosition.y * 0.25,
        }}
        transition={{ type: "spring", stiffness: 25, damping: 50 }}
        style={{ left: "-5%", bottom: "15%", willChange: "transform" }}
      />
      
      {/* Glow 4 - Bottom Right */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-blue-100/30 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 0.3,
          y: -mousePosition.y * 0.3,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 80 }}
        style={{ right: "5%", bottom: "-5%", willChange: "transform" }}
      />

      {/* Glow 5 - Center */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4,
        }}
        transition={{ type: "spring", stiffness: 35, damping: 90 }}
        style={{ left: "40%", top: "50%", willChange: "transform" }}
      />
    </div>
  );
};

export default BackgroundGlows;
