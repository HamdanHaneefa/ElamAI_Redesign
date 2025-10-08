import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { motion } from 'framer-motion';

function buildWhatsAppLink(phoneNumber, message) {
  const cleanPhone = (phoneNumber || '').replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message || 'Hello! I would like to chat.');
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export default function WhatsAppButton({ phoneNumber, message, tooltip = 'Chat on WhatsApp', className = '', motionProps = {} }) {
  const href = buildWhatsAppLink(phoneNumber, message);
  if (!phoneNumber) return null;

  const baseClasses = "inline-flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title={tooltip}
      className={`${baseClasses} ${className}`}
      {...motionProps}
    >
      <SiWhatsapp className="h-7 w-7" />
    </motion.a>
  );
} 