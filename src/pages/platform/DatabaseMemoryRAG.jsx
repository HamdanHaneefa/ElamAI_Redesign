
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Database, ArrowRight, CheckCircle, Brain, Search, Zap, Lock } from 'lucide-react';

const DatabaseMemoryRAG = () => {
  const features = [
    {
      icon: Database,
      title: 'Vector Database',
      description: 'Store and retrieve high-dimensional vectors with lightning-fast similarity search capabilities.'
    },
    {
      icon: Brain,
      title: 'Persistent Memory',
      description: 'AI agents remember context across conversations and sessions for personalized interactions.'
    },
    {
      icon: Search,
      title: 'Retrieval Augmented Generation',
      description: 'Enhance AI responses with relevant information from your knowledge base in real-time.'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Enterprise-grade security with encryption at rest and in transit for sensitive data.'
    }
  ];

  const capabilities = [
    'Multi-modal vector storage (text, images, audio)',
    'Real-time knowledge base updates',
    'Semantic search and similarity matching',
    'Context-aware conversation memory',
    'Custom embedding models support',
    'Scalable distributed architecture'
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
      title="Database, Memory & RAG"
      subtitle="Intelligent Knowledge Management"
      description="Power your AI agents with advanced database capabilities, persistent memory, and retrieval-augmented generation. Create AI systems that learn, remember, and provide contextually relevant responses."
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

      {/* Capabilities Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Advanced Capabilities
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

      {/* CTA Section */}
      <motion.div
        className="text-center"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
          Build Smarter AI Agents
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Enhance your AI agents with advanced memory and knowledge retrieval capabilities. 
          Create more intelligent and context-aware AI systems.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/resources/documentation">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default DatabaseMemoryRAG;
