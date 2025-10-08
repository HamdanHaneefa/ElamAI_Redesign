
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Users, ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former VP of AI at Google, 15+ years in AI research and product development.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'Ex-Principal Engineer at Microsoft Azure, expert in distributed systems and AI infrastructure.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Product',
      bio: 'Product leader with 10+ years at Salesforce and Slack, passionate about user experience.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Tech Lead at Uber, specializes in scalable AI systems and machine learning.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
      linkedin: '#',
      github: '#'
    }
  ];

  const departments = [
    { name: 'Engineering', count: 25, description: 'Building the future of AI technology' },
    { name: 'Product', count: 8, description: 'Designing exceptional user experiences' },
    { name: 'Sales & Marketing', count: 12, description: 'Connecting with customers worldwide' },
    { name: 'Customer Success', count: 10, description: 'Ensuring customer satisfaction and growth' },
    { name: 'Operations', count: 5, description: 'Supporting our global operations' }
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
      title="Our Team"
      subtitle="The People Behind Elam AI"
      description="Meet the passionate team of AI experts, engineers, and innovators who are building the future of intelligent automation. We're united by a shared vision to democratize AI for businesses worldwide."
      badge="About"
    >
      {/* Leadership Team */}
      <motion.div
        className="mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-12 text-center">
          Leadership Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 text-sm font-light mb-3">{member.role}</p>
              <p className="text-gray-700 text-sm font-light leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team by Department */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-xl font-medium text-gray-900 mb-2">{dept.name}</h4>
              <p className="text-3xl font-light text-blue-600 mb-2">{dept.count}</p>
              <p className="text-gray-700 text-sm font-light">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Company Culture */}
      <motion.div
        className="mb-16"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl lg:text-3xl font-light text-white mb-8 text-center">
          Our Culture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation Driven',
              description: 'We encourage experimentation and creative problem-solving to push the boundaries of AI.'
            },
            {
              title: 'Collaborative',
              description: 'We believe the best solutions come from diverse perspectives working together.'
            },
            {
              title: 'Growth Mindset',
              description: 'We invest in our team\'s continuous learning and professional development.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center"
              variants={itemVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-700 font-light leading-relaxed">{value.description}</p>
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
          Join Our Growing Team
        </h3>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          We're always looking for talented individuals who share our passion for AI and 
          want to make a meaningful impact on businesses worldwide.
        </p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about/careers">
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Open Positions
            </motion.button>
          </Link>
          <Link to="/about/contact">
            <motion.button
              className="border border-gray-200 text-gray-900 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default Team;
