import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function EnhancedWhatsAppDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      {/* Dashboard Preview Section - Larger, Auto-playing */}
      <motion.div 
        className="pb-8 sm:pb-12"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
      >
        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="bg-gray-800/60 rounded-2xl h-64 sm:h-80 lg:h-96 flex flex-col relative overflow-hidden">
              {/* WhatsApp Header */}
              <div className="flex-shrink-0 h-12 sm:h-16 bg-green-600/90 rounded-t-2xl flex items-center px-4 sm:px-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base">AI WhatsApp Agent</h3>
                  <p className="text-white/70 text-xs">Online • Automated responses</p>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-3 sm:p-6 space-y-2 sm:space-y-4 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-8 h-full">
                    {[...Array(32)].map((_, i) => (
                      <div key={i} className="border-r border-white/10" />
                    ))}
                  </div>
                </div>

                {/* Chat Messages with Continuous Loop Animation */}
                <div className="relative z-10 space-y-2 sm:space-y-3">
                  {/* First Exchange - Order Status */}
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                      x: [-50, 0, 0, 0, 0, 0, 0, 0, 0, -50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0
                    }}
                  >
                    <div className="bg-white/15 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] sm:max-w-[75%]">
                      <p className="text-white text-xs sm:text-sm">Hi! I need help with my order status</p>
                      <span className="text-white/40 text-xs mt-1 block">2:34 PM</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                      x: [50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.8
                    }}
                  >
                    <div className="bg-green-600/90 rounded-2xl rounded-tr-md px-3 py-2 max-w-[80%] sm:max-w-[75%]">
                      <p className="text-white text-xs sm:text-sm">I'd be happy to help! Please provide your order number.</p>
                      <span className="text-white/40 text-xs mt-1 block">2:34 PM ✓✓</span>
                    </div>
                  </motion.div>

                  {/* Second Exchange - Order Number */}
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                      x: [-50, -50, -50, 0, 0, 0, 0, 0, 0, 0, -50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 1.6
                    }}
                  >
                    <div className="bg-white/15 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] sm:max-w-[75%]">
                      <p className="text-white text-xs sm:text-sm">Sure! It's ORD-2024-5647</p>
                      <span className="text-white/40 text-xs mt-1 block">2:35 PM</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                      x: [50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 2.4
                    }}
                  >
                    <div className="bg-green-600/90 rounded-2xl rounded-tr-md px-3 py-2 max-w-[85%] sm:max-w-[80%]">
                      <p className="text-white text-xs sm:text-sm">Great! Your order is being processed and will ship within 24 hours. Tracking info will be sent to your email.</p>
                      <span className="text-white/40 text-xs mt-1 block">2:35 PM ✓✓</span>
                    </div>
                  </motion.div>

                  {/* Third Exchange - Shipping Question */}
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                      x: [-50, -50, -50, -50, -50, 0, 0, 0, 0, 0, 0, -50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 3.2
                    }}
                  >
                    <div className="bg-white/15 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] sm:max-w-[75%]">
                      <p className="text-white text-xs sm:text-sm">Can I change the shipping address?</p>
                      <span className="text-white/40 text-xs mt-1 block">2:36 PM</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                      x: [50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 4.0
                    }}
                  >
                    <div className="bg-green-600/90 rounded-2xl rounded-tr-md px-3 py-2 max-w-[85%] sm:max-w-[80%]">
                      <p className="text-white text-xs sm:text-sm">Since your order hasn't shipped yet, I can help with that! What's the new address?</p>
                      <span className="text-white/40 text-xs mt-1 block">2:36 PM ✓✓</span>
                    </div>
                  </motion.div>

                  {/* Fourth Exchange - Return Policy */}
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                      x: [-50, -50, -50, -50, -50, -50, -50, 0, 0, 0, 0, 0, -50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 4.8
                    }}
                  >
                    <div className="bg-white/15 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] sm:max-w-[75%]">
                      <p className="text-white text-xs sm:text-sm">What's your return policy?</p>
                      <span className="text-white/40 text-xs mt-1 block">2:37 PM</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                      x: [50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 50]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 5.6
                    }}
                  >
                    <div className="bg-green-600/90 rounded-2xl rounded-tr-md px-3 py-2 max-w-[85%] sm:max-w-[80%]">
                      <p className="text-white text-xs sm:text-sm">We offer 30-day free returns! Items must be unused with original packaging. I can email you the full details.</p>
                      <span className="text-white/40 text-xs mt-1 block">2:37 PM ✓✓</span>
                    </div>
                  </motion.div>

                  {/* Typing Indicator */}
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
                    }}
                    transition={{ 
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 6.4
                    }}
                  >
                    <div className="bg-white/15 rounded-2xl rounded-tl-md px-3 py-2">
                      <div className="flex space-x-1">
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex-shrink-0 h-10 sm:h-14 bg-gray-900/60 rounded-b-2xl flex items-center justify-between px-4 sm:px-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium">AI Agent Active</span>
                </div>
                <div className="text-white/60 text-xs">
                  Response time: &lt;2s
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-white/80 text-sm sm:text-base font-medium">WhatsApp AI Automation in Action</p>
              <p className="text-white/50 text-xs sm:text-sm mt-1">See how AI handles customer support automatically</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}