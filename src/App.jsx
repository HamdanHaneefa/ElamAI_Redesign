import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Loader from './components/SiteLoader';
import TitleUpdater from './components/TitleUpdater';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Sitemap from './components/Sitemap';
import ElamAIChatbot from './components/chat';

// About Pages
import Company from './pages/about/Company';
import Contact from './pages/about/Contact';

import AnalyticsTracker from './utils/AnalyticsTracker';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching (replace with your real fetch logic)
    const fetchInitialData = async () => {
      try {
        // Example: await fetch('/api/initial-data');
        // If you have multiple fetches:
        // await Promise.all([fetch1(), fetch2(), ...]);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Remove this in production
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Loader isLoading={isLoading} onComplete={handleLoadingComplete} />
      
      {!isLoading && (
        <SmoothScroll>
          <div className="App">
            <ScrollToTop />
            <ElamAIChatbot />
            <TitleUpdater />
            <Navbar />
            <AnalyticsTracker />
            
            <Routes>
              {/* Active routes */}
              <Route path="/" element={<Homepage />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>               

            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
