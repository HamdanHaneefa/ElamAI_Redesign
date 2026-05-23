import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Search, 
  Settings, 
  Workflow, 
  Layers, 
  Bot, 
  BarChart, 
  Flag 
} from "lucide-react";

const services = [
  {
    icon: <Target size={28} />,
    title: "Revenue Growth",
    desc: "Identify opportunities, improve conversion, build scalable systems.",
  },
  {
    icon: <Search size={28} />,
    title: "Digital Visibility",
    desc: "Become discoverable wherever customers search online.",
  },
  {
    icon: <Settings size={28} />,
    title: "Process Optimization",
    desc: "Eliminate inefficiencies, bottlenecks, and reduce revenue leaks.",
  },
  {
    icon: <Workflow size={28} />,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks to reduce cost & improve efficiency.",
  },
  {
    icon: <Layers size={28} />,
    title: "Custom Applications",
    desc: "Tailored business platforms, trackers, and management systems.",
  },
  {
    icon: <Bot size={28} />,
    title: "AI Visibility",
    desc: "Position your business for ChatGPT, Gemini, and Perplexity.",
  },
  {
    icon: <BarChart size={28} />,
    title: "Performance Marketing",
    desc: "Data-driven campaigns generating qualified opportunities.",
  },
  {
    icon: <Flag size={28} />,
    title: "Brand Strategy",
    desc: "Create strong market differentiation and build trust.",
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

const WhatWeDoSection = () => (
  <motion.section
    className="w-full bg-transparent pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-20 flex flex-col items-center px-4 min-h-[220px] relative"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.div variants={itemVariants} className="mb-4">
      <span className="inline-block px-4 py-1.5 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm border border-gray-200">
        What We Do
      </span>
    </motion.div>

    <div className="w-full max-w-3xl px-4 box-border">
      <motion.h2
        variants={itemVariants}
        className="text-gray-900 font-light text-center mb-4 tracking-tight font-sans whitespace-normal break-words w-full max-w-full px-0"
        style={{ fontSize: 'clamp(1.5rem,5vw,3rem)', lineHeight: '1.3' }}
      >
        Comprehensive Growth Solutions
        <br className="hidden sm:block" />
        For Modern Business
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-gray-600 text-center mb-12 mx-auto text-base font-light px-2"
      >
        Empowering businesses with sustainable growth and operational efficiency
      </motion.p>
    </div>

    <motion.div
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center px-2 sm:px-6 lg:px-16"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="flex flex-col items-center text-center group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-gray-900 text-sm sm:text-base font-semibold mb-2 leading-tight">
            {service.title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default WhatWeDoSection;