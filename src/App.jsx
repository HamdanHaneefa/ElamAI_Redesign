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

// Platform Pages
import AgenticWorkflows from './pages/platform/AgenticWorkflows';
import AIAgentPlatform from './pages/platform/AIAgentPlatform';
import Integrations from './pages/platform/Integrations';
import DatabaseMemoryRAG from './pages/platform/DatabaseMemoryRAG';
import SecurityDeployment from './pages/platform/SecurityDeployment';

// AI Agents Pages
import CustomerSupportAgent from './pages/agents/CustomerSupportAgent';
import SalesAgent from './pages/agents/SalesAgent';
import MarketingAgent from './pages/agents/MarketingAgent';
import DataAnalysisAgent from './pages/agents/DataAnalysisAgent';

// Solutions Pages
import Enterprise from './pages/solutions/Enterprise';
import SmallBusiness from './pages/solutions/SmallBusiness';
import DeveloperTools from './pages/solutions/DeveloperTools';
import CustomSolutions from './pages/solutions/CustomSolutions';

// Resources Pages
import Documentation from './pages/resources/Documentation';
import APIReference from './pages/resources/APIReference';
import Tutorials from './pages/resources/Tutorials';
import Community from './pages/resources/Community';

// About Pages
import Company from './pages/about/Company';
// import Team from './pages/about/Team';
import Careers from './pages/about/Careers';
import Contact from './pages/about/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
              {/* Home Route */}
              <Route path="/" element={<Homepage />} />
              
              {/* Sitemap Route */}
              <Route path="/sitemap.xml" element={<Sitemap />} />
              
              {/* Platform Routes */}
              <Route path="/platform/agentic-workflows" element={<AgenticWorkflows />} />
              <Route path="/platform/ai-agent-platform" element={<AIAgentPlatform />} />
              <Route path="/platform/integrations" element={<Integrations />} />
              <Route path="/platform/database-memory-rag" element={<DatabaseMemoryRAG />} />
              <Route path="/platform/security-deployment" element={<SecurityDeployment />} />
              
              {/* AI Agents Routes */}
              <Route path="/agents/customer-support" element={<CustomerSupportAgent />} />
              <Route path="/agents/sales" element={<SalesAgent />} />
              <Route path="/agents/marketing" element={<MarketingAgent />} />
              <Route path="/agents/data-analysis" element={<DataAnalysisAgent />} />
              
              {/* Solutions Routes */}
              <Route path="/solutions/enterprise" element={<Enterprise />} />
              <Route path="/solutions/small-business" element={<SmallBusiness />} />
              <Route path="/solutions/developer-tools" element={<DeveloperTools />} />
              <Route path="/solutions/custom-solutions" element={<CustomSolutions />} />
              
              {/* Resources Routes */}
              <Route path="/resources/documentation" element={<Documentation />} />
              <Route path="/resources/api-reference" element={<APIReference />} />
              <Route path="/resources/tutorials" element={<Tutorials />} />
              <Route path="/resources/community" element={<Community />} />
              
              {/* About Routes */}
              <Route path="/about/company" element={<Company />} />
              {/* <Route path="/about/team" element={<Team />} /> */}
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/about/contact" element={<Contact />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
            <FloatingWhatsApp phoneNumber="+919747419297" message="Hi! I came from your website." />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
