import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      // Funzione per tentare lo scroll con retry
      const attemptScroll = (attempts = 0) => {
        const element = document.getElementById(id);
        
        if (element) {
          // Calcola la posizione tenendo conto della navbar fixed (80px)
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        } else if (attempts < 20) {
          // Riprova dopo 100ms se l'elemento non esiste ancora (max 2 secondi)
          setTimeout(() => attemptScroll(attempts + 1), 100);
        }
      };
      
      // Inizia a tentare dopo un piccolo delay
      const timer = setTimeout(() => attemptScroll(), 100);

      return () => clearTimeout(timer);
    }
  }, [location]);
};
