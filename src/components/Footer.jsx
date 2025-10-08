import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';


const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'AI Agent Platform', href: '/platform/ai-agent-platform' },
      { name: 'Agentic Workflows', href: '/platform/agentic-workflows' },
      { name: 'Integrations', href: '/platform/integrations' },
      { name: 'Security', href: '/platform/security-deployment' }
    ],
    solutions: [
      { name: 'Enterprise', href: '/solutions/enterprise' },
      { name: 'Small Business', href: '/solutions/small-business' },
      { name: 'Developer Tools', href: '/solutions/developer-tools' },
      { name: 'Custom Solutions', href: '/solutions/custom-solutions' }
    ],
    resources: [
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'API Reference', href: '/resources/api-reference' },
      { name: 'Tutorials', href: '/resources/tutorials' },
      { name: 'Community', href: '/resources/community' }
    ],
    company: [
      { name: 'About Us', href: '/about/company' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Contact', href: '/about/contact' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/elam-ai', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/elamai.in/', name: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 font-sans pt-24 pb-10 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-light mb-4">Let's Build Your AI Future Together</h2>
        <p className="text-lg sm:text-xl text-gray-700 font-light mb-8 max-w-2xl">
          Partner with Elam AI to unlock the power of automation, intelligent agents, and next-generation business solutions. Ready to take the next step?
        </p>
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mb-8"
        >
          <Link
            to="/about/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
        <div className="flex items-center justify-center gap-5 mb-8">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-all duration-200 text-2xl"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-600 text-base font-light mb-2">© 2025 Elam AI. All rights reserved.</p>
        <div className="flex items-center justify-center gap-6 text-sm mt-2">
          <a href="#" className="text-gray-500 hover:text-gray-700 font-light transition-colors duration-200">Terms</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 font-light transition-colors duration-200">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 font-light transition-colors duration-200">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;