import { CheckIcon, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const KillerIdeaIdentification = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Killer Idea Identification</h1>
            <p className="text-xl text-white/90 mb-4">
              Identification of the innovative idea with maximum potential for your company
            </p>
            <div className="text-3xl font-bold">€10,000</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Killer Idea Identification?</h2>
              <p className="text-gray-600 mb-4">
                The Killer Idea Identification is where we transform exploration into concrete innovation. This comprehensive service takes the opportunities identified in previous phases and applies a rigorous, multi-parameter validation process to identify the single most promising idea for your company.
              </p>
              <p className="text-gray-600 mb-4">
                Through structured ideation, expert validation, and detailed market analysis, we work with you to refine and validate the concept that has the highest potential for success. This isn't just about finding a good idea—it's about identifying the breakthrough opportunity that can transform your business.
              </p>
              <p className="text-gray-600">
                The result is a fully validated, actionable concept that aligns perfectly with your company's capabilities and the space market's needs, ready for strategic planning and implementation.
              </p>
            </div>
            
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Structured ideation process with proven frameworks",
                  "Multi-parameter validation and scoring system",
                  "Industry specialist expertise and market validation",
                  "Complete alignment assessment with existing skills",
                  "Comprehensive market potential evaluation"
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
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">The Identification Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Ideation Framework</h3>
              <p className="text-gray-600">
                Apply proven ideation methodologies to generate and refine concepts based on previous assessments and market insights.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Validation Process</h3>
              <p className="text-gray-600">
                Rigorous multi-parameter evaluation including market potential, technical feasibility, competitive advantage, and resource requirements.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Expert Refinement</h3>
              <p className="text-gray-600">
                Collaboration with industry specialists to refine and validate the killer idea, ensuring it's ready for strategic implementation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Criteria Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Validation Criteria</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Market Potential</h3>
              <p className="text-gray-600">
                Assessment of market size, growth trajectory, and revenue potential in both space and terrestrial applications.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Technical Feasibility</h3>
              <p className="text-gray-600">
                Evaluation of technical requirements, development timeline, and alignment with your current capabilities.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Competitive Advantage</h3>
              <p className="text-gray-600">
                Analysis of unique value proposition and barriers to entry that give your company a sustainable advantage.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Strategic Fit</h3>
              <p className="text-gray-600">
                Alignment with your company's mission, values, resources, and long-term strategic objectives.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Implementation Path</h3>
              <p className="text-gray-600">
                Clear pathway from concept to market with defined milestones and resource requirements.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of potential risks and mitigation strategies for successful execution.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Identify Your Killer Idea?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform exploration into innovation with expert-validated concept development
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
            <a href="/#contact" className="btn-primary bg-secondary text-white hover:bg-secondary/80 border-2 border-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <ChatWidget />
    </div>
  );
};

export default KillerIdeaIdentification;
