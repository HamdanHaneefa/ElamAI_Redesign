
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { BookOpen, ArrowRight, Search, Code, PlayCircle, FileText } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      icon: PlayCircle,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running with Elam AI.',
      link: '#getting-started'
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Comprehensive API documentation with examples and code snippets.',
      link: '#api-reference'
    },
    {
      icon: FileText,
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides for common use cases and advanced features.',
      link: '#guides'
    },
    {
      icon: Search,
      title: 'FAQ & Troubleshooting',
      description: 'Common questions, solutions, and troubleshooting tips.',
      link: '#faq'
    }
  ];

  const topics = [
    'Setting up your first AI agent',
    'Configuring workflows and automation',
    'Integrating with third-party services',
    'Managing user permissions and access',
    'Monitoring and analytics dashboard',
    'Best practices and optimization tips'
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
      title="Documentation"
      subtitle="Everything You Need to Know"
      description="Comprehensive documentation, guides, and resources to help you make the most of Elam AI. From getting started to advanced features, find all the information you need."
      badge="Resources"
    >
      {/* Search Bar */}
      <motion.div
        className="mb-12"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>
      </motion.div>

      {/* Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer"
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
                <h3 className="text-xl font-medium text-gray-900">{section.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4">{section.description}</p>
              <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <span className="text-sm font-light">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Popular Topics */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Popular Topics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-gray-700 font-light">{topic}</span>
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
          Need More Help?
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Can't find what you're looking for? Our support team is here to help you 
          succeed with Elam AI.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.button>
          </Link>
          
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Documentation;
