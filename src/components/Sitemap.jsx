import React from 'react';

const Sitemap = () => {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Home Page -->
  <url>
    <loc>https://elamai.in/</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Platform Pages -->
  <url>
    <loc>https://elamai.in/platform/agentic-workflows</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/platform/ai-agent-platform</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/platform/integrations</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/platform/database-memory-rag</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/platform/security-deployment</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- AI Agents Pages -->
  <url>
    <loc>https://elamai.in/agents/customer-support</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/agents/sales</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/agents/marketing</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/agents/data-analysis</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Solutions Pages -->
  <url>
    <loc>https://elamai.in/solutions/enterprise</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/solutions/small-business</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/solutions/developer-tools</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/solutions/custom-solutions</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Resources Pages -->
  <url>
    <loc>https://elamai.in/resources/documentation</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/resources/api-reference</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/resources/tutorials</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/resources/community</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- About Pages -->
  <url>
    <loc>https://elamai.in/about/company</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/about/careers</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://elamai.in/about/contact</loc>
    <lastmod>2025-08-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`;

  return (
    <div 
      style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}
      dangerouslySetInnerHTML={{ __html: sitemapXml }} 
    />
  );
};

export default Sitemap;