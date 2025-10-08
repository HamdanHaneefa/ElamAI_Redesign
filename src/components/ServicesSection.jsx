import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCog, Workflow, Bot, Layers, TrendingUp, Video, MessageSquare } from 'lucide-react';

const services = [
        {
                id: 1,
                title: 'AI Business Strategy Development',
                description:
                        'Strategic AI consultation and implementation planning to help your business identify opportunities, select technologies, and create roadmaps for AI transformation.',
                icon: BrainCog,
                image:
                        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 2,
                title: 'Workflow Automation',
                description:
                        'Streamline operations with intelligent N8N-powered workflows that eliminate manual tasks, reduce errors, and accelerate business processes across all departments.',
                icon: Workflow,
                image:
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 3,
                title: 'AI Agent Development',
                description:
                        'Deploy versatile AI agents including customer service agents, sales qualification bots, appointment schedulers, and task automation assistants that work 24/7.',
                icon: Bot,
                image:
                        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 4,
                title: 'Custom SaaS Development',
                description:
                        'Build scalable ERPs, CRMs, and business management systems with multi-tenant architecture, real-time databases, and intelligent automation features.',
                icon: Layers,
                image:
                        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 5,
                title: 'Predictive Analytics',
                description:
                        'Harness data intelligence for early warning systems, inventory optimization, demand forecasting, and business risk detection to make proactive decisions.',
                icon: TrendingUp,
                image:
                        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 6,
                title: 'AI Content Creation',
                description:
                        'Generate high-converting video ads, social media content, marketing materials, and graphical advertisements using advanced AI content generation tools.',
                icon: Video,
                image:
                        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 7,
                title: 'Chatbot & Voice Agent Development',
                description:
                        'Create intelligent conversational interfaces including WhatsApp automation, website chatbots, and multilingual voice agents for customer engagement.',
                icon: MessageSquare,
                image:
                        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
        },
];

const tabVariants = {
        active: { scale: 1.08, y: -2, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' },
        inactive: { scale: 1, y: 0, boxShadow: 'none' },
};

const contentVariants = {
        initial: { opacity: 0, y: 40 },
        animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' },
        },
        exit: {
                opacity: 0,
                y: 40,
                transition: { duration: 0.4, ease: 'easeIn' },
        },
};

const ServicesSection = () => {
        const [active, setActive] = useState(0);
        const isEven = active % 2 === 0;
        const ServiceIcon = services[active].icon;

        return (
                <section className="w-full py-16 px-2 sm:px-4 lg:px-8 bg-transparent font-sans">
                        <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-12">
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight tracking-tight font-sans">
                                                Comprehensive AI Solutions for Modern Business
                                        </h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mt-4 font-sans">
                                                Transform your business operations with our full suite of AI-powered services designed to accelerate growth and improve efficiency.
                                        </p>
                                </div>
                                {/* Tabs */}
                                <div className="relative mb-12">
                                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-full bg-gray-100 blur-sm z-0 rounded-xl pointer-events-none" />
                                        <div className="overflow-x-auto scrollbar-hide flex flex-nowrap justify-start items-center gap-3 sm:gap-5 pb-2 relative z-10 px-0" style={{ WebkitOverflowScrolling: 'touch' }}>
                                                {services.map((service, i) => (
                                                        <motion.button
                                                                key={service.id}
                                                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full min-w-max font-semibold text-lg transition-all duration-300 focus:outline-none border border-transparent whitespace-nowrap scroll-snap-align-start font-sans ${i === 0 ? 'ml-2' : ''} ${active === i ? 'bg-gray-900 text-white shadow-xl border-gray-200 z-20 relative' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 z-10'}`}
                                                                onClick={() => setActive(i)}
                                                                variants={tabVariants}
                                                                animate={active === i ? 'active' : 'inactive'}
                                                                whileTap={{ scale: 0.97 }}
                                                                style={active === i ? { marginTop: '-2px' } : {}}
                                                        >
                                                                <service.icon className="w-6 h-6" />
                                                                <span className="flex items-center justify-center font-sans">{service.title}</span>
                                                        </motion.button>
                                                ))}
                                        </div>
                                </div>
                                {/* Alternating Content */}
                                <div className="relative w-full max-w-5xl mx-auto mt-6 md:mt-0">
                                        <AnimatePresence mode="wait">
                                                <motion.div
                                                        key={services[active].id}
                                                        className={`flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${
                                                                isEven ? '' : 'md:flex-row-reverse'
                                                        }`}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        variants={contentVariants}
                                                >
                                                        {/* Text */}
                                                        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-0">
                                                                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 shadow-lg">
                                                                        <ServiceIcon className="w-8 h-8 text-white" />
                                                                </div>
                                                                <h3 className="text-2xl sm:text-3xl font-light font-sans text-gray-900 mb-3">
                                                                        {services[active].title}
                                                                </h3>
                                                                <p className="text-gray-700 text-lg font-light font-sans mb-2 max-w-xl leading-relaxed">
                                                                        {services[active].description}
                                                                </p>
                                                        </div>
                                                        {/* Image */}
                                                        <div className="flex-1 flex items-center justify-center px-2 sm:px-0">
                                                                <div className="w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl relative">
                                                                        <img
                                                                                src={services[active].image}
                                                                                alt={services[active].title}
                                                                                className="w-full h-full object-cover object-center scale-105"
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-900/5 to-transparent" />
                                                                </div>
                                                        </div>
                                                </motion.div>
                                        </AnimatePresence>
                                </div>
                        </div>
                        <style jsx>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                        display: none;
                                }
                                .scrollbar-hide {
                                        -ms-overflow-style: none;
                                        scrollbar-width: none;
                                }
                        `}</style>
                </section>
        );
};

export default ServicesSection;
