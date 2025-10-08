import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { Mail, Phone, ArrowRight, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js'

const Contact = () => {
  
  const supabaseUrl = 'https://itvhwuwyfmsqkpbwewfx.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dmh3dXd5Zm1zcWtwYndld2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMTI0MTMsImV4cCI6MjA3MTc4ODQxM30.UmfNFjJrtZS99wSYwUaNSQERWwjlIH1Rk-gdrpMuQhY'
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!supabase) {
        console.error('Supabase client not available');
        setSubmitStatus('error');
        return;
      }

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmitStatus('error');
      } else {
        console.log('Data successfully saved to Supabase:', data);
        setSubmitStatus('success');
        // Reset form only on successful save
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team for any inquiries or support.",
      contact: "contact@elamai.in",
      action: "Send Email",
      link: "mailto:contact@elamai.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our AI automation specialists.",
      contact: "+91 97474 19297",
      action: "Call Now",
      link: "tel:+919747419297"
    }
  ];

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in Touch"
      description="Ready to transform your business with AI automation? Contact our team of experts to discuss your unique requirements and discover how Elam AI can revolutionize your operations."
      badge="About"
    >
      {/* Contact Methods */}
      <motion.div
        className="grid grid-cols-2 gap-3 md:gap-6 mb-12 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-gray-900" />
              </div>
              <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">{method.description}</p>
              <div className="text-gray-900 font-medium mb-3 md:mb-4 text-xs md:text-base">{method.contact}</div>
              <motion.a
                href={method.link}
                className="inline-flex items-center space-x-1 md:space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300 text-gray-900 text-xs md:text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{method.action}</span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-8"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
            Send Us a Message
          </h2>
          <p className="text-gray-700 text-sm font-light max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white/70 text-xs font-medium mb-1">
              Subject *
            </label>
            <select 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 transition-colors appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.5rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.2em 1.2em'
              }}
              required
            >
              <option value="" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Select a topic</option>
              <option value="general" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>General Inquiry</option>
              <option value="demo" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Request Demo</option>
              <option value="partnership" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Partnership</option>
              <option value="support" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Technical Support</option>
              <option value="pricing" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>Pricing Information</option>
              <option value="consultation" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>AI Consultation</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-white/70 text-xs font-medium mb-1">
              Message *
            </label>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
              required
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
            >
              Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
            >
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </motion.div>
          )}

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-white/50 text-black/50 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-white/90'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 text-lg font-light mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already transforming their operations with AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/platform/ai-agent-platform">
            <motion.button
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link to="/solutions/enterprise">
            <motion.button
              className="inline-flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-medium border border-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Contact;