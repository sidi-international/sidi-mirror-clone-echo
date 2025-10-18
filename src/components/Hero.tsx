
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="hero relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Video background for desktop/tablet */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/videos/discovery-one.mp4#t=0.1"
      />
      
      {/* Static image for mobile */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/discovery-one-mobile.jpg')" }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      
      <div className="container-custom relative z-10">
        <div className="hero-content">
          <div className="hero-logo mb-8">
            <a href="https://marsplanet.org/" target="_blank" rel="noopener noreferrer">
              <img alt="Mars Planet Logo" src="/lovable-uploads/0dd9fcae-ac71-4b75-b82d-3cc9c6c3ef6b.png" className="h-40 mx-auto object-scale-down" />
            </a>
          </div>
          
          <h1>Discovery One</h1>
          <h2>Service Platform for Space Market Penetration</h2>
          <p className="py-2 mx-auto max-w-xl">Transforming companies into protagonists of the space economy, regardless of their sector or size.</p>
          
          <div className="flex flex-wrap justify-center gap-4 py-[19px] px-0 mx-0 my-[90px]">
            <a href="#problem-solution" className="btn-primary">Start Your Space Journey</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
          
          <div className="video-container">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
