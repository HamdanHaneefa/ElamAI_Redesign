import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Workflow, ArrowRight, CheckCircle, Zap, Settings, Users } from 'lucide-react';

const AgenticWorkflows = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Execution',
      description: 'Execute workflows in real-time with instant feedback and monitoring capabilities.'
    },
    {
      icon: Settings,
      title: 'Advanced Logic',
      description: 'Implement conditional logic, loops, and branching for sophisticated automation.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share and collaborate on workflows with team members across your organization.'
    }
  ];

  const benefits = [
    'Reduce manual tasks by up to 90%',
    'Improve process consistency and reliability',
    'Scale operations without increasing headcount',
    'Integrate with existing tools and systems',
    'Monitor and optimize workflow performance',
    'Ensure compliance and audit trails'
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
      title="Agentic Workflows"
      subtitle="Automate Complex Business Processes"
      description="Build sophisticated automation workflows that connect your AI agents, systems, and processes. Create intelligent workflows that adapt and make decisions based on real-time data and business rules."
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

      {/* Benefits Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 text-center">
          Transform Your Business Operations
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
          Ready to Automate Your Workflows?
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Start building intelligent workflows that transform how your business operates. 
          Connect with our team to see how Elam AI can streamline your processes.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/contact">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default AgenticWorkflows;
