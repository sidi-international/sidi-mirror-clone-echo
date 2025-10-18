
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const fadeOverlay = fadeOverlayRef.current;
    
    if (!video || !fadeOverlay) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      // Fade to black negli ultimi 2 secondi
      if (duration - currentTime <= 2 && duration - currentTime > 0) {
        const opacity = 1 - (duration - currentTime) / 2;
        fadeOverlay.style.opacity = opacity.toString();
      } else {
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
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src="/videos/discovery-one.mp4#t=0.1"
      />
      
      {/* Fade overlay */}
      <div 
        ref={fadeOverlayRef}
        className="absolute inset-0 bg-black pointer-events-none hidden md:block transition-opacity duration-[2000ms] ease-in-out"
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
