import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionSection';
import MultiAgentSection from '../components/MultiAgentSection';
import BlogSection from '../components/BlogSection';
import WhyChooseSection from '../components/WhyChooseUs';
import BackgroundGlows from '../components/BackgroundGlows';

const Homepage = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white relative">
      <BackgroundGlows />
      <div className="relative z-10">
        <HeroSection />
      <WhatWeDoSection />
      <div id="ai-agents">
        <WhyChooseSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <ProcessSection />
      <div id="platform">
        <MultiAgentSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      </div>
    </div>
  );
};

export default Homepage;
