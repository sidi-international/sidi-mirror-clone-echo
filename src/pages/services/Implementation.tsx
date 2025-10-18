import { CheckIcon, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/ChatWidget";

const Implementation = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Implementation</h1>
            <p className="text-xl text-white/90 mb-4">
              Complete support in executing the strategic plan
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
              <h2 className="text-3xl font-bold text-secondary mb-6">What is Implementation Support?</h2>
              <p className="text-gray-600 mb-4">
                The Implementation service is where strategy becomes reality. This comprehensive support program accompanies your company through every phase of executing your space market entry plan, providing expert guidance, technical assistance, and strategic resources exactly when you need them.
              </p>
              <p className="text-gray-600 mb-4">
                From research and development to partnership establishment and market entry, our team of space industry experts works alongside you to overcome challenges, seize opportunities, and ensure successful execution of your strategic plan. We don't just advise—we actively support implementation.
              </p>
              <p className="text-gray-600">
                This flexible, ongoing engagement adapts to your company's evolving needs, providing specialized expertise in areas ranging from technical development to funding acquisition, ensuring you have the support needed to succeed in the space economy.
              </p>
            </div>
            
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6">What's Included</h3>
              <ul className="space-y-4">
                {[
                  "Specialized consulting across all implementation phases",
                  "Technical assistance and expertise when needed",
                  "Research and development support",
                  "Strategic partner identification and introduction",
                  "Funding opportunity research and application support"
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

      {/* Support Areas Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Implementation Support Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Technical Development</h3>
              <p className="text-gray-600">
                Expert guidance on R&D activities, technology development, prototyping, and testing for space applications.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Partnership Building</h3>
              <p className="text-gray-600">
                Identification of strategic partners, facilitation of introductions, and support in establishing productive collaborations.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Market Entry</h3>
              <p className="text-gray-600">
                Support in establishing market presence, customer acquisition strategies, and positioning in the space ecosystem.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Comprehensive Implementation Support</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Funding & Grants</h3>
              <p className="text-gray-600">
                Research and identification of funding opportunities, grant writing support, and investor connection facilitation.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Guidance through space industry regulations, certifications, and compliance requirements for successful market entry.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Network Access</h3>
              <p className="text-gray-600">
                Introduction to key players in the space ecosystem including agencies, companies, research institutions, and investors.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Capability Building</h3>
              <p className="text-gray-600">
                Team training, knowledge transfer, and capability development to strengthen your internal space expertise.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Strategic Guidance</h3>
              <p className="text-gray-600">
                Ongoing strategic advice, course correction support, and adaptation guidance as market conditions evolve.
              </p>
            </Card>
            
            <Card className="p-6 border-0 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Success Monitoring</h3>
              <p className="text-gray-600">
                Regular progress tracking, KPI monitoring, and performance optimization to ensure strategic objectives are met.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">Flexible Engagement Model</h2>
            <p className="text-gray-600 mb-8">
              Our implementation support is tailored to your specific needs and evolves with your journey. Whether you need intensive support during critical phases or ongoing strategic guidance, we adapt our engagement to maximize your success while optimizing resource allocation.
            </p>
            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">Custom Support Packages</h3>
              <p className="text-gray-600">
                We develop customized implementation support packages based on your specific requirements, timeline, and strategic objectives. Contact us to discuss your needs and receive a tailored proposal.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Execute Your Space Strategy?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get expert support throughout your journey to space market success
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

export default Implementation;
