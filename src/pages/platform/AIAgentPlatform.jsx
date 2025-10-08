
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Bot, ArrowRight, CheckCircle, Brain, Shield, Zap, Database } from 'lucide-react';

const AIAgentPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Leverage cutting-edge AI models including GPT-4, Claude, and custom-trained models for your specific use cases.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security features with encryption, compliance, and data protection for enterprise-grade deployments.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process requests and responses in real-time with low latency and high availability infrastructure.'
    },
    {
      icon: Database,
      title: 'Memory & Context',
      description: 'Persistent memory and context awareness allows agents to maintain conversations and learn from interactions.'
    }
  ];

  const capabilities = [
    'Natural language understanding and generation',
    'Multi-modal processing (text, voice, images)',
    'Custom knowledge base integration',
    'Workflow automation and orchestration',
    'Real-time analytics and monitoring',
    'API-first architecture for easy integration'
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
      title="AI Agent Platform"
      subtitle="The Complete AI Agent Infrastructure"
      description="Build, deploy, and manage AI agents at scale with our comprehensive platform. From simple chatbots to complex autonomous agents, create AI solutions that transform your business operations."
      badge="Platform"
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

      {/* Platform Capabilities */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Platform Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
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
              <span className="text-gray-700 font-light">{capability}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Overview */}

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
          Start Building AI Agents Today
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Join thousands of businesses using our AI Agent Platform to automate processes, 
          enhance customer experiences, and drive innovation.
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

export default AIAgentPlatform;
