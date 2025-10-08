
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Zap, ArrowRight, CheckCircle, Settings, Users, Target } from 'lucide-react';

const CustomSolutions = () => {
  const features = [
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Custom AI agents designed specifically for your unique business requirements.'
    },
    {
      icon: Settings,
      title: 'Deep Integration',
      description: 'Seamless integration with your existing systems, workflows, and processes.'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Work with our AI experts to design and implement the perfect solution.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with ongoing support and optimization.'
    }
  ];

  const services = [
    'Custom AI agent development',
    'Enterprise system integration',
    'Workflow automation design',
    'Data migration and setup',
    'Training and change management',
    'Ongoing support and optimization'
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <PageLayout
      title="Custom Solutions"
      subtitle="AI Solutions Built for You"
      description="Get custom AI solutions designed specifically for your business needs. Our expert team will work with you to create, integrate, and deploy AI agents that transform your operations."
      badge="Solution"
    >
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Services Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Custom Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-700 font-light">{service}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
          Ready for a Custom Solution?
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Let's discuss your unique requirements and create a custom AI solution 
          that perfectly fits your business needs and goals.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default CustomSolutions;
