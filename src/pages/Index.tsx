
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import HowItWorks from "../components/HowItWorks";
import HalSection from "../components/HalSection";
import ServicePackages from "../components/ServicePackages";
import Credibility from "../components/Credibility";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

const Index = () => {
  return (
    <div className="bg-light">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <HalSection />
      <ServicePackages />
      <Credibility />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
