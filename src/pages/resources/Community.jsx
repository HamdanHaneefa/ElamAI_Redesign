import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../../components/PageLayout';
import { Clock } from 'lucide-react';

const Community = () => {
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
      title="Community"
      subtitle="Join the Elam AI Community"
      description="Connect with developers, AI enthusiasts, and business leaders using Elam AI. Share knowledge, get support, and stay updated with the latest developments."
      badge="Resources"
    >
      {/* Coming Soon Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-50 backdrop-blur-sm rounded-2xl"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
          <Clock className="w-8 h-8 text-gray-900" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
          Community Features Coming Soon
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          We’re building a space where developers, AI enthusiasts, and business leaders can connect, collaborate, and grow together.  
          Stay tuned for exciting updates — Discord, GitHub discussions, meetups, and more!
        </p>
      </motion.div>
    </PageLayout>
  );
};

export default Community;
