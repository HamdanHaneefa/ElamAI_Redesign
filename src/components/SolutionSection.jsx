import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  Share2,
  Target,
  Settings,
  FileText,
  Clock,
  Shield,
  TrendingUp,
  Code,
  Database,
  Cpu,
  Cloud,
  Search,
  ChartPie,
  MessageCircle,
  Globe,
  Phone,
  Languages,
  BarChart2, 
  Video, 
  MessageSquare, 
  ArrowRight, 
  Zap,
  Bot,
  Cog // Use Cog instead of Workflow since Workflow isn't available in lucide-react
} from 'lucide-react';

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedActions, setExpandedActions] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const solutions = [
    {
      id: 1,
      category: "Strategy",
      title: "AI Business Strategy Development",
      description: "Transform your business with data-driven AI strategy development, technology selection, and implementation roadmaps designed for measurable ROI.",
      icon: Lightbulb,
      actions: [
        { icon: BarChart2, text: "AI readiness assessment" },
        { icon: Target, text: "Opportunity identification & prioritization" },
        { icon: Settings, text: "Technology strategy & architecture planning" },
        { icon: FileText, text: "Implementation roadmap development" }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      category: "Automation",
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks and accelerate business processes with N8N-powered automation workflows that integrate seamlessly with your existing systems.",
      icon: Cog, // Changed from Workflow to Cog
      actions: [
        { icon: Clock, text: "Reduce manual work by up to 80%" },
        { icon: Shield, text: "Eliminate human errors in routine processes" },
        { icon: Zap, text: "Accelerate task completion times" },
        { icon: TrendingUp, text: "Scale operations efficiently" }
      ],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      category: "AI Development",
      title: "Custom AI Model Development",
      description: "Leverage our expertise to build, train, and deploy custom AI models tailored to your unique business challenges and objectives.",
      icon: Bot,
      actions: [
        { icon: Code, text: "Custom model design & architecture" },
        { icon: Database, text: "Data collection, cleaning & labeling" },
        { icon: Cpu, text: "Model training, tuning & optimization" },
        { icon: Cloud, text: "Deployment & integration support" }
      ],
      image: "https://images.unsplash.com/photo-1581093588400-4f3c8e6f3f3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      category: "Analytics",
      title: "AI-Powered Analytics & BI",
      description: "Transform data into actionable insights with advanced analytics solutions, including predictive modeling, data visualization, and automated reporting.",
      icon: BarChart2,
      actions: [
        { icon: Search, text: "Data source identification & integration" },
        { icon: ChartPie, text: "Custom dashboard & report development" },
        { icon: TrendingUp, text: "Predictive analytics & forecasting" },
        { icon: Share2, text: "Collaboration & sharing setup" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      category: "Conversational AI",
      title: "Chatbot & Voice Agent Development",
      description: "Deploy sophisticated conversational AI including WhatsApp automation, website chatbots, and multilingual voice agents for 24/7 customer support.",
      icon: MessageSquare,
      actions: [
        { icon: MessageCircle, text: "WhatsApp business automation" },
        { icon: Globe, text: "Website AI chatbots" },
        { icon: Phone, text: "Voice agents & phone automation" },
        { icon: Languages, text: "Multilingual support" }
      ],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop&auto=format"
    }
  ];

  // Auto-scroll mobile tabs when activeIndex changes
  useEffect(() => {
    if (mobileScrollRef.current) {
      const scrollContainer = mobileScrollRef.current;
      const activeButton = scrollContainer.children[activeIndex];
      
      if (activeButton) {
        const containerWidth = scrollContainer.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const currentScroll = scrollContainer.scrollLeft;
        
        // Calculate the center position for the active button
        const targetScroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        // Smooth scroll to center the active button
        scrollContainer.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Auto-rotate functionality with pause capability
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % solutions.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [solutions.length, isPaused]);

  const nextSolution = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSolution = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const toggleActions = (solutionId) => {
    setExpandedActions(prev => ({
      ...prev,
      [solutionId]: !prev[solutionId]
    }));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

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
    <motion.div
      className="min-h-screen relative overflow-hidden font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      {/* No blurred/gradient overlays for seamless look */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Keep original styling */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Comprehensive AI Services
              <br />
              for Every Business Need
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-10"
              variants={itemVariants}
            >
              From strategic planning to implementation, Elam AI delivers end-to-end AI solutions 
              that transform operations and drive growth.
            </motion.p>
          </div>

          {/* Compact Solutions Carousel */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Solution Navigation Cards */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8 lg:max-w-5xl lg:mx-auto">
              {/* Solution Tabs - Mobile: Horizontal scroll, Desktop: Vertical */}
              <div className="lg:w-2/5">
                {/* Mobile: Horizontal scrollable tabs */}
                <div className="lg:hidden">
                  <div
                    ref={mobileScrollRef}
                    className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {solutions.map((solution, index) => (
                      <motion.button
                        key={solution.id}
                        onClick={() => setActiveIndex(index)}
                        className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 border min-w-[140px] ${
                          activeIndex === index
                            ? "bg-gray-100 border-gray-300 backdrop-blur-sm"
                            : "bg-gray-50 border-gray-200"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-center">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                              activeIndex === index
                                ? "bg-gray-200"
                                : "bg-gray-100"
                            }`}
                          >
                            <solution.icon className="w-4 h-4 text-gray-900" />
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider font-light mb-1">
                            {solution.category}
                          </div>
                          <div className="text-gray-900 font-light text-xs leading-tight">
                            {solution.title}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Desktop: Vertical tabs */}
                <div className="hidden lg:block space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.button
                      key={solution.id}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border ${
                        activeIndex === index
                          ? "bg-gray-100 border-gray-300 backdrop-blur-sm"
                          : "bg-gray-50 border-gray-200 hover:border-gray-300"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activeIndex === index
                              ? "bg-gray-200"
                              : "bg-gray-100"
                          }`}
                        >
                          <solution.icon className="w-5 h-5 text-gray-900" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-600 uppercase tracking-wider font-light mb-1">
                            {solution.category}
                          </div>
                          <div className="text-gray-900 font-light text-sm">
                            {solution.title}
                          </div>
                        </div>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gray-900 rounded-full"
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Active Solution Display */}
              <div
                className="lg:w-3/5 w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden"
                >
                  {/* Image Section - More compact on mobile */}
                  <div className="relative h-40 sm:h-48 lg:h-44">
                    <img
                      src={solutions[activeIndex].image}
                      alt={solutions[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                    {/* Solution Number */}
                    <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-900 font-light border border-gray-200">
                      <span className="text-xs lg:text-sm">
                        0{activeIndex + 1}
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSolution}
                      className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center text-gray-900 hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                    <button
                      onClick={nextSolution}
                      className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center text-gray-900 hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>

                  {/* Content Section - More compact on mobile */}
                  <div className="p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-2 lg:mb-3">
                      {React.createElement(solutions[activeIndex].icon, {
                        className: "w-4 h-4 lg:w-5 lg:h-5 text-gray-700",
                      })}
                      <span className="text-gray-600 text-xs lg:text-sm uppercase tracking-wider font-light">
                        {solutions[activeIndex].category}
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-light text-gray-900 mb-2 lg:mb-3 leading-tight">
                      {solutions[activeIndex].title}
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed font-light mb-3 lg:mb-4">
                      {solutions[activeIndex].description}
                    </p>

                    {/* Compact Actions */}
                    <motion.button
                      onClick={() => toggleActions(solutions[activeIndex].id)}
                      className="flex items-center justify-between w-full p-3 bg-gray-100 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 text-left group"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gray-700" />
                        <span className="text-gray-900 font-light text-sm">
                          Agentic Actions (
                          {solutions[activeIndex].actions.length})
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedActions[solutions[activeIndex].id]
                            ? 90
                            : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </motion.div>
                    </motion.button>

                    {/* Expandable Actions - More compact on mobile */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedActions[solutions[activeIndex].id]
                          ? "auto"
                          : 0,
                        opacity: expandedActions[solutions[activeIndex].id]
                          ? 1
                          : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-3">
                        {solutions[activeIndex].actions.map(
                          (action, actionIndex) => (
                            <motion.div
                              key={actionIndex}
                              className="flex items-start gap-2 lg:gap-3 p-2 lg:p-3 bg-gray-100 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: expandedActions[
                                  solutions[activeIndex].id
                                ]
                                  ? 1
                                  : 0,
                                x: expandedActions[solutions[activeIndex].id]
                                  ? 0
                                  : -20,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: expandedActions[
                                  solutions[activeIndex].id
                                ]
                                  ? actionIndex * 0.05
                                  : 0,
                              }}
                            >
                              <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-gray-200 rounded-md flex items-center justify-center mt-0.5">
                                <action.icon className="w-3 h-3 text-gray-700" />
                              </div>
                              <p className="text-gray-700 text-xs leading-relaxed font-light">
                                {action.text}
                              </p>
                            </motion.div>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add bottom CTA section */}
      <motion.div 
        className="bg-gray-50 py-16"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-gray-600 mb-8">
            Schedule a free consultation and we'll help you identify the best AI solutions for your business goals.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionsSection;