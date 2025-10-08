
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Plug, ArrowRight, CheckCircle, Slack, MessageSquare, Database, Mail } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      icon: Slack,
      title: 'Slack',
      description: 'Connect AI agents directly to Slack channels for team collaboration and automated responses.'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Business',
      description: 'Automate customer support and marketing through WhatsApp Business API integration.'
    },
    {
      icon: Mail,
      title: 'Email Platforms',
      description: 'Integrate with Gmail, Outlook, and other email providers for automated email management.'
    },
    {
      icon: Database,
      title: 'CRM Systems',
      description: 'Connect with Salesforce, HubSpot, and other CRMs to automate lead management.'
    }
  ];

  const benefits = [
    'Connect with 500+ popular business tools',
    'Real-time data synchronization',
    'No-code integration setup',
    'Enterprise-grade security and compliance',
    'Custom API development available',
    'Webhook support for real-time triggers'
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
      title="Integrations"
      subtitle="Connect Your AI Agents to Everything"
      description="Seamlessly integrate your AI agents with the tools and platforms your business already uses. From communication tools to CRM systems, create a unified AI-powered workflow across your entire tech stack."
      badge="Platform"
    >
      {/* Integration Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {integrations.map((integration, index) => {
          const IconComponent = integration.icon;
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
                <h3 className="text-xl font-medium text-gray-900">{integration.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">{integration.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Benefits Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Integration Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
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
              <span className="text-gray-700 font-light">{benefit}</span>
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
          Ready to Connect Your Tools?
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Start integrating your AI agents with your existing business tools today. 
          Our team can help you set up custom integrations for your specific needs.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Integration
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Integrations;
