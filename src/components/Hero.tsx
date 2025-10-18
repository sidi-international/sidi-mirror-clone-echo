
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const fadeOverlay = fadeOverlayRef.current;
    
    if (!video || !fadeOverlay) return;

    let isFading = false;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      const timeRemaining = duration - currentTime;
      
      // Inizia il fade 4 secondi prima della fine
      if (timeRemaining <= 4 && timeRemaining > 0.1 && !isFading) {
        isFading = true;
        fadeOverlay.style.transition = 'opacity 4s ease-in-out';
        fadeOverlay.style.opacity = '1';
      } 
      // Reset quando il video riparte
      else if (timeRemaining > 4 && isFading) {
        isFading = false;
        fadeOverlay.style.transition = 'none';
        fadeOverlay.style.opacity = '0';
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section className="hero relative min-h-screen flex items-center text-white overflow-hidden bg-black">
      {/* Video background for desktop/tablet */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/discovery-one-mobile.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/videos/discovery-one.mp4"
      />
      
      {/* Fade overlay */}
      <div 
        ref={fadeOverlayRef}
        className="absolute inset-0 bg-black pointer-events-none hidden md:block"
        style={{ opacity: 0 }}
      />
      
      {/* Static image for mobile */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/discovery-one-mobile.jpg')" }}
      />
      
      {/* Dark overlay for text readability - lighter version */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      
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
            <a 
              href="#problem-solution" 
              className="btn-primary transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 active:shadow-lg"
            >
              Start Your Space Journey
            </a>
          </div>
          
          <div className="video-container">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
