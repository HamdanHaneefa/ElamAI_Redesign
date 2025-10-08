import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const SHOW_ROUTES = ['/', '/about/contact'];
const AUTO_HIDE_MS = 1000; // time visible after showing
const SCROLL_THRESHOLD = 60; // px to consider a scroll action

export default function FloatingWhatsApp({ phoneNumber, message }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const hideTimerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const [enabled, setEnabled] = useState(false);

  // Enable only on specific routes
  useEffect(() => {
    const onSupportedRoute = SHOW_ROUTES.includes(location.pathname);
    setEnabled(onSupportedRoute);
    setVisible(false);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, [location.pathname]);

  // Show on scroll and auto-hide
  useEffect(() => {
    if (!enabled) return;

    function onScroll() {
      const currentY = window.scrollY || 0;
      const delta = Math.abs(currentY - (lastScrollYRef.current || 0));
      lastScrollYRef.current = currentY;
      if (delta < SCROLL_THRESHOLD) return;

      // Show and reset auto-hide timer
      setVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setVisible(false), AUTO_HIDE_MS);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      message={message}
      className="fixed bottom-28 right-5 z-[60]"
      motionProps={{
        initial: { opacity: 0, scale: 0.6, y: 20 },
        animate: visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 },
        transition: { type: 'spring', stiffness: 260, damping: 22 }
      }}
    />
  );
} 