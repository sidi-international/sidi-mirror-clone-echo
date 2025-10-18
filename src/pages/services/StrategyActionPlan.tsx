import { CheckIcon, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const StrategyActionPlan = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategy & Action Plan</h1>
            <p className="text-xl text-white/90 mb-4">
              Development of the complete strategy and detailed action plan
            </p>
            <div className="text-3xl font-bold">To be defined</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Strategy & Action Plan?</h2>
              <p className="text-gray-600 mb-4">
                The Strategy & Action Plan service transforms your validated killer idea into a comprehensive, executable roadmap. This is where vision becomes actionable strategy, with clear objectives, timelines, and resource allocation that guide your journey into the space market.
              </p>
              <p className="text-gray-600 mb-4">
                We work collaboratively with your team to develop a detailed strategic plan that addresses every aspect of implementation—from technical development and partnership building to market entry and scaling strategies. The plan includes defined milestones, success metrics, and contingency approaches.
              </p>
              <p className="text-gray-600">
                The result is a battle-tested strategy document that serves as your company's compass, ensuring all stakeholders understand their roles, responsibilities, and the path forward to space market success.
              </p>
            </div>
            
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Clear objectives definition with measurable KPIs",
                  "Detailed implementation timeline with milestones",
                  "Responsibility allocation across teams",
                  "Required resources planning and budgeting",
                  "Comprehensive roadmap with risk mitigation"
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
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">The Strategic Planning Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Strategic Framework</h3>
              <p className="text-gray-600">
                Develop the overarching strategic framework, defining vision, mission, and key objectives aligned with your killer idea.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Action Planning</h3>
              <p className="text-gray-600">
                Create detailed action plans with specific tasks, timelines, resource requirements, and responsibility assignments.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Implementation Roadmap</h3>
              <p className="text-gray-600">
                Build a comprehensive roadmap with phases, milestones, decision points, and success metrics for tracking progress.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Components Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Key Strategy Components</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Go-to-Market Strategy</h3>
              <p className="text-gray-600">
                Detailed plan for market entry, customer acquisition, and positioning in both space and terrestrial markets.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Partnership Strategy</h3>
              <p className="text-gray-600">
                Identification and approach plan for strategic partners, suppliers, and collaborators in the space ecosystem.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Technology Roadmap</h3>
              <p className="text-gray-600">
                Technical development plan including R&D priorities, technology acquisition, and capability building.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Financial Planning</h3>
              <p className="text-gray-600">
                Budget allocation, funding requirements, revenue projections, and financial milestone tracking.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive risk identification, assessment, and mitigation strategies for all aspects of implementation.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
              <p className="text-gray-600">
                KPIs and success metrics for monitoring progress, making adjustments, and ensuring strategic alignment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Strategy?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Transform your killer idea into an actionable strategic plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}
              className="btn-primary bg-white text-primary hover:bg-white/90"
            >
              Talk to HAL 2001
            </button>
            <a 
              href="/#contact"
              className="btn-primary bg-secondary text-white hover:bg-secondary/80 border-2 border-white inline-block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <ChatWidget />
    </div>
  );
};

export default StrategyActionPlan;
