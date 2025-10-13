import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Workflow,
  Bot,
  Database,
  Brain,
  Shield,
  Plug,
  FileText,
  Users,
  Building,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  // Keep only necessary states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = document.getElementById('hero-section')?.offsetHeight || 600;
      if (currentY < heroHeight) {
        setShowNavbar(true);
        return;
      }
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentY < lastScrollY) {
            setShowNavbar(true);
          } else if (currentY > lastScrollY) {
            setShowNavbar(false);
          }
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Platform',
      sectionId: 'platform',
      items: [
        { name: 'Agentic Workflows', icon: Workflow, path: '/platform/agentic-workflows' },
        { name: 'AI Agent Platform', icon: Bot, path: '/platform/ai-agent-platform' },
        { name: 'Integrations', icon: Plug, path: '/platform/integrations' },
        { name: 'Database, Memory & RAG', icon: Database, path: '/platform/database-memory-rag' },
        { name: 'Security & Deployment', icon: Shield, path: '/platform/security-deployment' }
      ]
    },
    {
      name: 'AI Agents',
      sectionId: 'ai-agents',
      items: [
        { name: 'Customer Support Agent', icon: MessageCircle, path: '/agents/customer-support' },
        { name: 'Sales Agent', icon: Users, path: '/agents/sales' },
        { name: 'Marketing Agent', icon: Zap, path: '/agents/marketing' },
        { name: 'Data Analysis Agent', icon: FileText, path: '/agents/data-analysis' }
      ]
    },
    {
      name: 'Solutions',
      sectionId: 'solutions',
      items: [
        { name: 'Enterprise', icon: Building, path: '/solutions/enterprise' },
        { name: 'Small Business', icon: Users, path: '/solutions/small-business' },
        { name: 'Developer Tools', icon: FileText, path: '/solutions/developer-tools' },
        { name: 'Custom Solutions', icon: Zap, path: '/solutions/custom-solutions' }
      ]
    },
    {
      name: 'Resources',
      sectionId: 'resources',
      items: [
        { name: 'Documentation', icon: BookOpen, path: '/resources/documentation' },
        { name: 'API Reference', icon: FileText, path: '/resources/api-reference' },
        { name: 'Tutorials', icon: BookOpen, path: '/resources/tutorials' },
        { name: 'Community', icon: MessageCircle, path: '/resources/community' }
      ]
    },
    {
      name: 'About',
      sectionId: 'about',
      items: [
        { name: 'Company', icon: Building, path: '/about/company' },
        // { name: 'Team', icon: Users, path: '/about/team' },
        { name: 'Careers', icon: Zap, path: '/about/careers' },
        { name: 'Contact', icon: MessageCircle, path: '/about/contact' }
      ]
    }
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans block ${showNavbar ? '' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          background: (typeof window !== 'undefined' && window.scrollY < (document.getElementById('hero-section')?.offsetHeight || 600)) 
            ? 'none' 
            : 'rgba(255,255,255,0.95)',
          boxShadow: 'none' 
        }}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-1">
          <div className="flex items-center justify-between h-20">
            {/* Logo with increased size */}
            <motion.div
              className="flex items-center mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/" className="flex items-center pl-4">
                <img
                  src={Logo}
                  alt="Elam AI Logo"
                  className="h-10 w-auto sm:h-12" // Increased from h-8 to h-10 and added responsive size
                  style={{ maxHeight: 48 }} // Increased from 32 to 48
                />
              </Link>
            </motion.div>

            {/* Right side navigation items */}
            <motion.div
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/about/company" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
                ABOUT
              </Link>
              
              {/* Vertical line separator */}
              <div className="h-6 w-px bg-gray-300"></div>
              
              <Link to="/about/contact">
                <motion.button
                  className="inline-flex items-center space-x-2 bg-black text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={handleMobileMenuToggle}
                className="text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu - modify to only show About and Contact */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl border-b border-gray-200 md:hidden font-sans"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-20">
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Link to="/" className="flex items-center text-gray-900 font-light text-xl tracking-tight pl-4">
                  <img
                    src={Logo}
                    alt="Elam AI Logo"
                    className="h-10 w-auto" // Increased from h-8 to h-10
                    style={{ maxHeight: 40 }} // Increased from 32 to 40
                  />
                </Link>
                <motion.button
                  onClick={handleMobileMenuToggle}
                  className="text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {/* Home Button for Mobile */}
                <Link
                  to="/"
                  className="w-full flex items-center px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium tracking-wide">Home</span>
                </Link>
                <div>
                  <motion.button
                    onClick={() => {
                      // Only toggle dropdown for mobile
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium tracking-wide">
                      About
                    </span>
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {false && ( // Always false, so dropdown is hidden
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {/* Sub-items for About - currently none */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <motion.button
                    onClick={() => {
                      // Only toggle dropdown for mobile
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium tracking-wide">
                      Contact
                    </span>
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {false && ( // Always false, so dropdown is hidden
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          {/* Sub-items for Contact - currently none */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.button
                  className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>Speak to us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div
                className="mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="text-gray-700 text-base leading-relaxed font-light">
                  With Elam AI, build an AI workforce that automates tasks
                  efficiently. Deploy intelligent agents to streamline
                  operations and improve performance across your business today!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
