
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Elam AI - AI Automation Agency"; // Default title

    switch (location.pathname) {
      case "/":
        pageTitle = "Elam AI - AI Automation Agency";
        break;
      
      // Platform pages
      case "/platform/agentic-workflows":
        pageTitle = "Agentic Workflows | Elam AI";
        break;
      case "/platform/ai-agent-platform":
        pageTitle = "AI Agent Platform | Elam AI";
        break;
      case "/platform/integrations":
        pageTitle = "Integrations | Elam AI";
        break;
      case "/platform/database-memory-rag":
        pageTitle = "Database, Memory & RAG | Elam AI";
        break;
      case "/platform/security-deployment":
        pageTitle = "Security & Deployment | Elam AI";
        break;
      
      // AI Agents pages
      case "/agents/customer-support":
        pageTitle = "Customer Support Agent | Elam AI";
        break;
      case "/agents/sales":
        pageTitle = "Sales Agent | Elam AI";
        break;
      case "/agents/marketing":
        pageTitle = "Marketing Agent | Elam AI";
        break;
      case "/agents/data-analysis":
        pageTitle = "Data Analysis Agent | Elam AI";
        break;
      
      // Solutions pages
      case "/solutions/enterprise":
        pageTitle = "Enterprise Solutions | Elam AI";
        break;
      case "/solutions/small-business":
        pageTitle = "Small Business Solutions | Elam AI";
        break;
      case "/solutions/developer-tools":
        pageTitle = "Developer Tools | Elam AI";
        break;
      case "/solutions/custom-solutions":
        pageTitle = "Custom Solutions | Elam AI";
        break;
      
      // Resources pages
      case "/resources/documentation":
        pageTitle = "Documentation | Elam AI";
        break;
      case "/resources/api-reference":
        pageTitle = "API Reference | Elam AI";
        break;
      case "/resources/tutorials":
        pageTitle = "Tutorials | Elam AI";
        break;
      case "/resources/community":
        pageTitle = "Community | Elam AI";
        break;
      
      // About pages
      case "/about/company":
        pageTitle = "About Our Company | Elam AI";
        break;
      case "/about/team":
        pageTitle = "Our Team | Elam AI";
        break;
      case "/about/careers":
        pageTitle = "Careers | Elam AI";
        break;
      case "/about/contact":
        pageTitle = "Contact Us | Elam AI";
        break;
      
      default:
        pageTitle = "404 Not Found | Elam AI";
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
};

export default TitleUpdater;
