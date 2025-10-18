import { CheckIcon, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const OpportunityAssessment = () => {
  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container-custom">
          <Link to="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Opportunity Assessment</h1>
            <p className="text-xl text-white/90 mb-4">
              In-depth exploration of possible space opportunities for your company
            </p>
            <div className="text-3xl font-bold">€3,800</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Opportunity Assessment?</h2>
              <p className="text-gray-600 mb-4">
                The Opportunity Assessment builds upon the Preliminary Analysis to provide a comprehensive exploration of the space market opportunities most relevant to your company. This service goes deeper into specific application areas, evaluating their feasibility and potential impact.
              </p>
              <p className="text-gray-600 mb-4">
                Through structured brainstorming sessions with HAL 2001 and detailed analysis by our space industry experts, we identify and evaluate multiple opportunities, assessing their alignment with your company's vision, capabilities, and strategic objectives.
              </p>
              <p className="text-gray-600">
                This assessment provides the clarity needed to make informed decisions about which space opportunities are worth pursuing and how to position your company for success.
              </p>
            </div>
            
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "AI-assisted brainstorming sessions with HAL 2001",
                  "Comprehensive analysis of multiple opportunity options",
                  "Preliminary feasibility assessment for each opportunity",
                  "Strategic alignment evaluation with company vision",
                  "Specialized consultation with space industry experts"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="mr-3 h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">The Assessment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Brainstorming</h3>
              <p className="text-gray-600">
                Collaborative ideation sessions with HAL 2001 to explore diverse space opportunities tailored to your capabilities.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Options Analysis</h3>
              <p className="text-gray-600">
                Detailed examination of each identified opportunity, evaluating market potential and technical requirements.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Feasibility Check</h3>
              <p className="text-gray-600">
                Preliminary assessment of implementation feasibility, resource requirements, and potential obstacles.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Strategic Alignment</h3>
              <p className="text-gray-600">
                Evaluation of how each opportunity aligns with your company's vision, values, and long-term strategy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Why Choose Opportunity Assessment?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Multiple Perspectives</h3>
                <p className="text-gray-600">
                  Explore various space opportunities rather than committing to a single path prematurely.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Risk Mitigation</h3>
                <p className="text-gray-600">
                  Identify potential challenges and obstacles before significant investment in development.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Expert Validation</h3>
                <p className="text-gray-600">
                  Benefit from space industry expertise to validate your opportunities and approach.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Strategic Clarity</h3>
                <p className="text-gray-600">
                  Gain clear understanding of which opportunities best match your company's strengths and goals.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Space Opportunities?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the next step with a comprehensive opportunity assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-primary text-white hover:bg-primary/90">
              Buy Now
            </button>
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}
              className="btn-primary bg-white text-primary hover:bg-white/90"
            >
              Talk to HAL 2001
            </button>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="btn-primary bg-secondary text-white hover:bg-secondary/80 border-2 border-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <ChatWidget />
    </div>
  );
};

export default OpportunityAssessment;
