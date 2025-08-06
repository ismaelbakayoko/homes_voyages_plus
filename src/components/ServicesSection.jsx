import React, { useEffect, useState } from 'react';
import { FaPassport, FaPlane, FaHotel, FaGlobe, FaCheckCircle, FaClock, FaShieldAlt, FaHeadset, FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: FaPassport,
      title: "Assistance Visa",
      description: "Nous vous accompagnons dans toutes vos démarches de visa pour vos voyages à l'étranger.",
      features: [
        "Visa touristique, affaires, études",
        "Accompagnement complet des démarches",
        "Suivi de dossier en temps réel",
        "Assistance documentaire"
      ],
      color: "from-red-400 to-red-500"
    },
    {
      icon: FaPlane,
      title: "Billetterie",
      description: "Réservation de billets d'avion et de train aux meilleurs prix du marché.",
      features: [
        "Billets d'avion toutes compagnies",
        "Billets de train internationaux",
        "Location de voiture",
        "Assurance voyage"
      ],
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: FaHotel,
      title: "Réservation d'Hôtels",
      description: "Trouvez l'hébergement parfait pour vos séjours partout dans le monde.",
      features: [
        "Hôtels de luxe et économiques",
        "Réservations sécurisées",
        "Conseils personnalisés",
        "Meilleurs tarifs garantis"
      ],
      color: "from-green-400 to-green-500"
    },
    {
      icon: FaGlobe,
      title: "Voyages sur Mesure",
      description: "Circuits personnalisés adaptés à vos envies et votre budget.",
      features: [
        "Circuits sur mesure",
        "Accompagnement personnalisé",
        "Destinations exclusives",
        "Expériences uniques"
      ],
      color: "from-purple-400 to-purple-500"
    }
  ];

  const advantages = [
    {
      icon: FaCheckCircle,
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans le voyage"
    },
    {
      icon: FaClock,
      title: "Service rapide",
      description: "Réponse sous 24h pour toutes vos demandes"
    },
    {
      icon: FaShieldAlt,
      title: "Sécurité garantie",
      description: "Paiements sécurisés et protection client"
    },
    {
      icon: FaHeadset,
      title: "Support 24/7",
      description: "Assistance disponible à tout moment"
    }
  ];

  return (
    <section id="services-section" className="section gradient-bg relative overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* En-tête de section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
            <FaStar className="text-red-400" />
            <span className="text-red-400 font-medium">Nos Services</span>
          </div>
          <h2 className="section-title">
            Solutions complètes pour vos voyages
          </h2>
          <p className="section-subtitle">
            Homes Voyages Plus vous propose une gamme complète de services pour tous vos besoins de voyage
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card group hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="text-3xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <FaCheckCircle className="text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section des avantages */}
        <div className={`glass-card rounded-3xl p-12 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Pourquoi choisir Homes Voyages Plus ?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre expertise et notre engagement vous garantissent un service de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center group hover-lift"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-red-400/20 to-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-red-400/30">
                  <advantage.icon className="text-3xl text-red-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            {/* Effet de fond animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-red-500/10 animate-pulse-slow"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Prêt à partir à l'aventure ?
              </h3>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour un devis personnalisé et commencez à planifier votre prochain voyage
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-primary group">
                  <span>Demander un devis</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-secondary group">
                  <span>Nous contacter</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 