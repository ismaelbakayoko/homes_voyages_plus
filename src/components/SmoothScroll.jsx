import React, { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Fonction pour observer les éléments et déclencher les animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Sélectionner tous les éléments avec la classe 'scroll-animate'
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });

    // Nettoyer l'observer lors du démontage
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Fonction pour scroll smooth vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Exposer la fonction globalement pour l'utiliser dans d'autres composants
  useEffect(() => {
    window.scrollToSection = scrollToSection;
    
    return () => {
      delete window.scrollToSection;
    };
  }, []);

  return null;
};

export default SmoothScroll; 