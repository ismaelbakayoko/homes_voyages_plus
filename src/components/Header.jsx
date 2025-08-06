import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-effect shadow-2xl' : 'gradient-bg'
    }`}>
      {/* Top bar avec informations de contact */}
      <div className="bg-black/20 backdrop-blur-sm py-2">
        <div className="container">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+225 07 11 70 70 05" 
                className="flex items-center space-x-2 hover:text-red-400 transition-all duration-300 hover:scale-105"
              >
                <FaPhone size={12} className="animate-pulse-slow" />
                <span>+225 07 11 70 70 05</span>
              </a>
              <a 
                href="mailto:contact@homesvoyagesplus.com" 
                className="flex items-center space-x-2 hover:text-red-400 transition-all duration-300 hover:scale-105"
              >
                <FaEnvelope size={12} className="animate-pulse-slow" />
                <span>ccontact@homesvoyagesplus.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300">Lun-sam: 08h-18h</span>
              <a 
                href="https://wa.me/2250711707005" 
                className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo avec animation */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo_blanc_home.jpg" 
                alt="Homes Voyages Plus" 
                className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:shadow-red-400/25 transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-red-400/20 animate-pulse-slow"></div>
            </div>
            <div className="animate-slide-in-left">
              <h1 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                Homes Voyages Plus
              </h1>
              <p className="text-xs text-gray-300 group-hover:text-red-400/80 transition-colors">
                Votre partenaire de confiance
              </p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-white font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-red-400'
                    : 'hover:text-red-400'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary animate-pulse-slow"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden p-2 text-white hover:text-red-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="animate-fade-in-up" />
            ) : (
              <FaBars size={24} className="animate-fade-in-up" />
            )}
          </button>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect rounded-b-2xl border-t border-white/20 animate-fade-in-up">
            <nav className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.path)
                      ? 'text-red-400 bg-red-400/10'
                      : 'text-white hover:text-red-400 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mx-4 w-auto text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un devis
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Particules d'arrière-plan */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header; 