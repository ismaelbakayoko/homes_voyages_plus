import React, { useEffect, useState } from 'react';
import { FaPlane, FaPassport, FaHotel, FaGlobe, FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section gradient-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Particules d'arrière-plan animées */}
      <ParticlesBackground count={30} />
      
      {/* Particules CSS pour effet supplémentaire */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* Formes géométriques décoratives */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/15 rounded-full blur-lg animate-pulse-slow"></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Badge de confiance */}
            <div className="inline-flex items-center space-x-2 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 animate-slide-in-left">
              <FaStar className="text-red-400" />
              <span className="text-red-400 font-medium">Plus de 500 voyages organisés</span>
            </div>

            {/* Titre principal */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Votre partenaire de{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent animate-pulse-slow">
                  confiance
                </span>{' '}
                pour tous vos voyages
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Homes Voyages Plus vous accompagne dans toutes vos démarches de voyage : 
                assistance visa, billetterie aérienne et réservation d'hôtels. 
                Faites confiance à notre expertise pour des voyages sans souci.
              </p>
            </div>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                <span>Demander un devis</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary group">
                <span>Découvrir nos services</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Statistiques rapides */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 animate-pulse-slow">500+</div>
                <div className="text-sm text-gray-400">Voyages organisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 animate-pulse-slow">98%</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 animate-pulse-slow">24/7</div>
                <div className="text-sm text-gray-400">Support client</div>
              </div>
            </div>
          </div>

          {/* Section droite avec logo et services */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Logo principal avec animation */}
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="/logo_blanc_home.jpg" 
                  alt="Homes Voyages Plus" 
                  className="w-48 h-48 rounded-full object-cover shadow-2xl hover:shadow-red-400/25 transition-all duration-500 hover:scale-110 animate-float"
                />
                <div className="absolute inset-0 rounded-full bg-red-400/20 animate-pulse-slow"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-400/20 to-transparent animate-pulse-slow"></div>
              </div>
            </div>

            {/* Grille de services */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-lift group">
                <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-400/30 transition-colors">
                  <FaPassport className="text-red-400 text-xl" />
                </div>
                <h3 className="font-semibold text-white mb-2">Assistance Visa</h3>
                <p className="text-gray-400 text-sm">Tous types de visas</p>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift group">
                <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-400/30 transition-colors">
                  <FaPlane className="text-red-400 text-xl" />
                </div>
                <h3 className="font-semibold text-white mb-2">Billetterie</h3>
                <p className="text-gray-400 text-sm">Meilleurs prix garantis</p>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift group">
                <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-400/30 transition-colors">
                  <FaHotel className="text-red-400 text-xl" />
                </div>
                <h3 className="font-semibold text-white mb-2">Réservation Hôtels</h3>
                <p className="text-gray-400 text-sm">Hébergements de qualité</p>
              </div>
              
              <div className="glass-card p-6 text-center hover-lift group">
                <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-400/30 transition-colors">
                  <FaGlobe className="text-red-400 text-xl" />
                </div>
                <h3 className="font-semibold text-white mb-2">Voyages sur mesure</h3>
                <p className="text-gray-400 text-sm">Circuits personnalisés</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 