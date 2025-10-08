
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { FileText, ArrowRight, CheckCircle, Code, Terminal, Layers } from 'lucide-react';

const DeveloperTools = () => {
  const features = [
    {
      icon: Code,
      title: 'API-First Design',
      description: 'Comprehensive REST APIs and SDKs for seamless integration into your applications.'
    },
    {
      icon: Terminal,
      title: 'CLI Tools',
      description: 'Command-line tools for developers to manage and deploy AI agents efficiently.'
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Build custom AI solutions with our modular components and frameworks.'
    },
    {
      icon: FileText,
      title: 'Rich Documentation',
      description: 'Comprehensive documentation, tutorials, and code examples to get you started.'
    }
  ];

  const tools = [
    'RESTful APIs with OpenAPI specification',
    'Python, JavaScript, and Go SDKs',
    'Docker containers and Kubernetes support',
    'Webhook support for real-time events',
    'GraphQL API for flexible data queries',
    'Development sandbox environment'
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
      title="Developer Tools"
      subtitle="Build with AI at Your Fingertips"
      description="Powerful developer tools and APIs to integrate AI agents into your applications. Build, customize, and deploy AI solutions with our comprehensive developer platform."
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

      {/* Tools Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Developer Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, index) => (
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
              <span className="text-gray-700 font-light">{tool}</span>
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
          Start Building Today
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Get started with our developer-friendly APIs and tools. 
          Build the next generation of AI-powered applications.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resources/documentation">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Documentation
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default DeveloperTools;
