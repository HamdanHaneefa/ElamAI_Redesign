import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Workflow, 
  Bot, 
  Database, 
  TrendingUp, 
  Video, 
  MessageSquare 
} from "lucide-react";

const services = [
  {
    icon: <Brain size={28} />,
    title: "AI Business Strategy",
    desc: "Strategic consultation & implementation planning for AI transformation.",
  },
  {
    icon: <Workflow size={28} />,
    title: "Workflow Automation",
    desc: "Intelligent workflows that eliminate manual tasks & accelerate processes.",
  },
  {
    icon: <Bot size={28} />,
    title: "AI Agent Development",
    desc: "24/7 customer service agents, sales bots & task automation assistants.",
  },
  {
    icon: <Database size={28} />,
    title: "Custom SaaS Solutions",
    desc: "Scalable ERPs, CRMs & business systems with intelligent automation.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Predictive Analytics",
    desc: "Data intelligence for forecasting, optimization & risk detection.",
  },
  {
    icon: <Video size={28} />,
    title: "AI Content Creation",
    desc: "High-converting video ads, social media & marketing materials.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Chatbot & Voice Agents",
    desc: "WhatsApp automation, website chatbots & multilingual voice agents.",
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
    className="w-full bg-gray-50 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-20 flex flex-col items-center px-4 min-h-[220px] relative"
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
        Comprehensive AI Solutions
        <br className="hidden sm:block" />
        For Modern Business
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-gray-600 text-center mb-12 mx-auto text-base font-light px-2"
      >
        Empowering businesses with cutting-edge AI technology
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