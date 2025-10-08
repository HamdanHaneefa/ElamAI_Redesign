
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { FileText, ArrowRight, Code, Terminal, Database, Zap } from 'lucide-react';

const APIReference = () => {
  const endpoints = [
    {
      icon: Zap,
      title: 'Agents API',
      description: 'Create, manage, and interact with AI agents programmatically.',
      method: 'POST',
      endpoint: '/api/v1/agents'
    },
    {
      icon: Database,
      title: 'Data API',
      description: 'Upload and manage data sources for your AI agents.',
      method: 'GET',
      endpoint: '/api/v1/data'
    },
    {
      icon: Terminal,
      title: 'Workflows API',
      description: 'Automate processes with programmable workflows.',
      method: 'POST',
      endpoint: '/api/v1/workflows'
    },
    {
      icon: Code,
      title: 'Analytics API',
      description: 'Access usage analytics and performance metrics.',
      method: 'GET',
      endpoint: '/api/v1/analytics'
    }
  ];

  const features = [
    'RESTful API with JSON responses',
    'Comprehensive authentication and security',
    'Rate limiting and usage monitoring',
    'Webhook support for real-time events',
    'SDKs available in multiple languages',
    'Interactive API explorer and testing'
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
      title="API Reference"
      subtitle="Comprehensive API Documentation"
      description="Complete API reference for Elam AI platform. Integrate AI agents into your applications with our powerful REST APIs, SDKs, and developer tools."
      badge="Resources"
    >
      {/* API Endpoints */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {endpoints.map((endpoint, index) => {
          const IconComponent = endpoint.icon;
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
                <h3 className="text-xl font-medium text-gray-900">{endpoint.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4">{endpoint.description}</p>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-gray-600 font-mono text-sm">{endpoint.endpoint}</code>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* API Features */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          API Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
              <span className="text-gray-700 font-light">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Code Example */}
      <motion.div
        className="bg-gray-900/50 rounded-2xl p-8 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-medium text-gray-900 mb-4">Quick Start Example</h3>
        <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm">
{`curl -X POST "https://api.elamai.com/v1/agents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Customer Support Agent",
    "type": "support",
    "config": {
      "language": "en",
      "model": "gpt-4"
    }
  }'`}
          </code>
        </pre>
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
          Start Building with Our API
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Get your API key and start integrating AI agents into your applications today. 
          Our comprehensive documentation will guide you through every step.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resources/tutorials">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Tutorials
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default APIReference;
