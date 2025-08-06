import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowRight, FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="gradient-bg relative overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenu principal du footer */}
      <div className="container py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Informations de l'entreprise */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/logo_blanc_home.jpg" 
                  alt="Homes Voyages Plus" 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Homes Voyages Plus
                  </h3>
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-red-400" />
                    <span className="text-red-400 font-medium">Votre partenaire de confiance</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Votre partenaire de confiance pour tous vos voyages. Spécialiste en assistance visa, 
                billetterie et réservation d'hôtels depuis plus de 15 ans. Nous vous accompagnons 
                dans toutes vos démarches pour des voyages sans souci.
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-110 group">
                  <FaFacebook className="text-lg group-hover:animate-pulse" />
                </a>
                <a href="#" className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-110 group">
                  <FaInstagram className="text-lg group-hover:animate-pulse" />
                </a>
                <a href="#" className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center hover:bg-red-400 hover:text-white transition-all duration-300 hover:scale-110 group">
                  <FaLinkedin className="text-lg group-hover:animate-pulse" />
                </a>
                <a href="https://wa.me/2250711707005" className="w-12 h-12 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 group">
                  <FaWhatsapp className="text-lg group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <FaStar className="text-red-400 mr-2" />
              Nos Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 group">
                  <FaArrowRight className="mr-3 text-sm group-hover:translate-x-1 transition-transform" />
                  <span>Assistance Visa</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 group">
                  <FaArrowRight className="mr-3 text-sm group-hover:translate-x-1 transition-transform" />
                  <span>Billetterie</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 group">
                  <FaArrowRight className="mr-3 text-sm group-hover:translate-x-1 transition-transform" />
                  <span>Réservation Hôtels</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 group">
                  <FaArrowRight className="mr-3 text-sm group-hover:translate-x-1 transition-transform" />
                  <span>Voyages sur Mesure</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-red-400 hover:text-red-300 transition-all duration-300 group font-semibold">
                  <FaArrowRight className="mr-3 text-sm group-hover:translate-x-1 transition-transform" />
                  <span>Devis Gratuit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations de contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 flex items-center">
              <FaStar className="text-red-400 mr-2" />
              Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center group-hover:bg-red-400 group-hover:text-white transition-all duration-300">
                  <FaPhone className="text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Téléphone</p>
                  <p className="text-white font-medium">+225 07 11 70 70 05</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center group-hover:bg-red-400 group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">contact@homesvoyagesplus.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-red-400/20 backdrop-blur-sm border border-red-400/30 rounded-full flex items-center justify-center group-hover:bg-red-400 group-hover:text-white transition-all duration-300 mt-1">
                  <FaMapMarkerAlt className="text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Adresse</p>
                  <p className="text-white font-medium">
                    123 Avenue des Voyages<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-red-500/10 animate-pulse-slow"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Prêt à partir à l'aventure ?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour un devis personnalisé et commencez à planifier votre prochain voyage
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Demander un devis gratuit</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer inférieur */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Homes Voyages Plus. Tous droits réservés.
            </div>
            <div className="flex space-x-8 text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-red-400 transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-red-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="text-gray-400 hover:text-red-400 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 