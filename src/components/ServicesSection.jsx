import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Workflow, Settings, Layers, TrendingUp, Bot, BarChart, Flag, Search } from 'lucide-react';

const services = [
        {
                id: 1,
                title: 'Revenue Growth Strategy',
                description:
                        'Helping businesses identify opportunities, improve conversion performance, and build scalable revenue systems for sustainable growth.',
                icon: Target,
                image:
                        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 2,
                title: 'Digital Visibility Management',
                description:
                        'Helping businesses become discoverable wherever customers search, through local presence, directory management, and search optimization.',
                icon: Search,
                image:
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 3,
                title: 'Business Process Optimization',
                description:
                        'Helping businesses eliminate inefficiencies and operational bottlenecks through process audits, workflow redesign, and cost reduction.',
                icon: Settings,
                image:
                        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 4,
                title: 'Workflow Automation',
                description:
                        'Automating repetitive business operations including lead management, customer communication, and internal workflows to reduce cost.',
                icon: Workflow,
                image:
                        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 5,
                title: 'Custom Business Applications',
                description:
                        'Developing systems tailored to unique business operations, replacing spreadsheets with scalable management tools and dashboards.',
                icon: Layers,
                image:
                        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 6,
                title: 'AI Visibility Optimization',
                description:
                        'Position businesses to be discoverable within AI-powered search platforms like ChatGPT, Gemini, and Perplexity through structured content strategy.',
                icon: Bot,
                image:
                        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 7,
                title: 'Performance Marketing',
                description:
                        'Driving measurable growth through data-driven campaigns on Google and Meta, complete with conversion tracking and performance reporting.',
                icon: BarChart,
                image:
                        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
        },
        {
                id: 8,
                title: 'Brand Strategy & Positioning',
                description:
                        'Helping businesses create stronger market differentiation, build trust, and strengthen market presence through strategic communication.',
                icon: Flag,
                image:
                        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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
                                                Comprehensive Growth Solutions for Modern Business
                                        </h2>
                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mt-4 font-sans">
                                                Transform your business operations with our full suite of strategy, automation, and visibility services designed to accelerate performance and improve efficiency.
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
