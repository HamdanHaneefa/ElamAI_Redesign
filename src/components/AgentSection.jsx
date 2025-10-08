import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, Calculator, Calendar, MessageSquare, BarChart3, Search, Mail } from 'lucide-react';

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const agents = [
    {
      id: 1,
      title: "Resume Screening AI Agent",
      category: "HR & Recruitment",
      features: ["Resume Intake", "Role-Based Scoring", "Fit Filtering"],
      icon: FileText,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Payroll Audit AI Agent",
      category: "HR & Recruitment",
      features: ["Data Review", "Error Flagging", "Compliance Checks"],
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Interview Scheduling AI Agent",
      category: "HR & Recruitment", 
      features: ["Availability Matching", "Slot Suggestions", "Booking Confirmation"],
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Interview Prep AI Agent",
      category: "HR & Recruitment",
      features: ["Interview Pack Generation", "Candidate Summary", "Question Suggestions"],
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "Engagement Survey AI Agent",
      category: "HR & Recruitment",
      features: ["Pulse Surveys", "Sentiment Analysis", "Burnout Detection"],
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "Candidate Sourcing AI Agent", 
      category: "HR & Recruitment",
      features: ["Profile Discovery", "Role Matching", "CRM Enrichment"],
      icon: Search,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 7,
      title: "Candidate Outreach AI Agent",
      category: "HR & Recruitment", 
      features: ["Message Writing", "Outreach Sequencing", "Follow-Up Automation"],
      icon: Mail,
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&auto=format"
    }
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, agents.length - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev <= 0 ? maxSlide : prev - 1);
  };

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
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
      {/* No blurred/gradient overlays for seamless look */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              AI Agents: Workforce With
              <br />
              Human-Level Performance
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8"
              variants={itemVariants}
            >
              AI agents deliver precise, efficient task automation, matching
              human-level performance. They operate continuously, reducing
              errors and increasing productivity, allowing businesses to scale
              fast without additional human resource costs.
            </motion.p>

            <motion.button
              className="inline-flex items-center justify-center bg-gray-900 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-gray-800"
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
              See All Agents
            </motion.button>
          </div>

          {/* Horizontal Carousel */}
          <motion.div className="relative" variants={itemVariants}>
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / cardsPerView)
                  }%)`,
                  gap: cardsPerView === 1 ? "0px" : "24px",
                }}
              >
                {agents.map((agent, index) => (
                  <motion.div
                    key={agent.id}
                    className="flex-shrink-0"
                    style={{
                      width:
                        cardsPerView === 1
                          ? "100%"
                          : `calc(${100 / cardsPerView}% - ${
                              (24 * (cardsPerView - 1)) / cardsPerView
                            }px)`,
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all duration-300 h-full mx-3 sm:mx-0">
                      {/* Compact Image Header */}
                      <div className="relative h-32 sm:h-36 overflow-hidden">
                        <img
                          src={agent.image}
                          alt={agent.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                        {/* Icon */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-900">
                          <agent.icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Compact Content */}
                      <div className="p-4">
                        <div className="mb-2">
                          <span className="inline-block px-2 py-1 bg-gray-100 backdrop-blur-sm rounded-md text-gray-700 text-xs font-light">
                            {agent.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-light text-gray-900 mb-3 leading-tight">
                          {agent.title}
                        </h3>

                        <div className="space-y-1.5">
                          {agent.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-700 text-sm font-light"
                            >
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxSlide + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gray-900 w-6"
                      : "bg-gray-300 w-1.5 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;