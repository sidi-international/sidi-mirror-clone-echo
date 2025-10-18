import { CheckIcon, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const PreliminaryAnalysis = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Preliminary Analysis</h1>
            <p className="text-xl text-white/90 mb-4">
              Initial exploration of your company's potential in the space market
            </p>
            <div className="text-3xl font-bold">€1,500</div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Preliminary Analysis?</h2>
              <p className="text-gray-600 mb-4">
                The Preliminary Analysis is the first step in your journey to the space economy. This service provides an initial, comprehensive exploration of how your company's existing capabilities, technologies, and expertise could be applied to the space sector.
              </p>
              <p className="text-gray-600 mb-4">
                Through our proprietary methodology and AI-powered analysis with HAL 2001, we identify possible application areas and assess the overall potential, giving you a clear understanding of whether pursuing space opportunities makes sense for your business.
              </p>
              <p className="text-gray-600">
                This analysis provides a solid foundation for deciding whether and how to proceed with more in-depth explorations of space market opportunities.
              </p>
            </div>
            
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Interactive session with HAL 2001 AI assistant",
                  "First phase Strategic Readiness Level (SRL) assessment",
                  "Initial assessment of company capabilities",
                  "Overview of potential space market opportunities",
                  "Comprehensive final report with recommendations"
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
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">The Analysis Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery Session</h3>
              <p className="text-gray-600">
                Interactive consultation with HAL 2001 to understand your company's technologies, capabilities, and strategic objectives.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Analysis & Evaluation</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your readiness level and identification of potential space market applications for your expertise.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Report Delivery</h3>
              <p className="text-gray-600">
                Detailed final report outlining opportunities, potential challenges, and recommended next steps for your space market journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Why Start with Preliminary Analysis?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Low-Risk Entry Point</h3>
                <p className="text-gray-600">
                  Explore space opportunities with minimal investment before committing to more extensive analysis.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Clear Direction</h3>
                <p className="text-gray-600">
                  Understand if the space economy is right for your company and what opportunities are most promising.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Benefit from AI-powered analysis and space industry expertise without extensive internal research.
                </p>
              </Card>
              
              <Card className="p-6 border-0 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Strategic Foundation</h3>
                <p className="text-gray-600">
                  Build a solid basis for decision-making about future investments in space market opportunities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Your Space Potential?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start your journey to the space economy with a comprehensive preliminary analysis
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

export default PreliminaryAnalysis;
