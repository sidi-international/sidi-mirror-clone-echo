
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary text-white shadow-lg py-2' : 'bg-transparent text-white py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="https://marsplanet.org/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img 
            src="https://marsplanet.org/wp-content/uploads/2023/04/logo-mars-planet-nuovo.png" 
            alt="Mars Planet Logo" 
            className="h-10"
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#problem-solution" className="hover:text-primary transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#success-stories" className="hover:text-primary transition-colors">Success Stories</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        
        <Button 
          className="hidden md:flex bg-primary hover:bg-primary/80 text-white"
          onClick={() => console.log('Contact button clicked')}
        >
          Contact Us
        </Button>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="text-white"
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#problem-solution" className="hover:text-primary transition-colors py-2">About</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors py-2">How It Works</a>
            <a href="#services" className="hover:text-primary transition-colors py-2">Services</a>
            <a href="#success-stories" className="hover:text-primary transition-colors py-2">Success Stories</a>
            <a href="#faq" className="hover:text-primary transition-colors py-2">FAQ</a>
            <Button 
              className="bg-primary hover:bg-primary/80 text-white w-full"
              onClick={() => console.log('Contact button clicked')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
