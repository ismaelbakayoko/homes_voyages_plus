import React from 'react'
import { FaPassport, FaPlane, FaHotel, FaHeadset, FaCheckCircle, FaClock, FaShieldAlt, FaGlobe, FaUsers, FaStar } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaPassport className="text-5xl text-primary-color" />,
      title: "Assistance Visa",
      description: "Nous vous accompagnons dans toutes vos démarches de visa pour tous les pays du monde.",
      features: [
        "Visa touristique, affaires, études",
        "Assistance complète aux démarches",
        "Suivi de votre dossier",
        "Conseils personnalisés",
        "Préparation des documents",
        "Accompagnement jusqu'à l'obtention"
      ],
      countries: ["États-Unis", "Canada", "Australie", "Japon", "Chine", "Inde", "Brésil", "Afrique du Sud"]
    },
    {
      icon: <FaPlane className="text-5xl text-primary-color" />,
      title: "Billetterie",
      description: "Réservation de billets d'avion, train et location de voiture aux meilleurs prix.",
      features: [
        "Billets d'avion toutes compagnies",
        "Réservation de trains",
        "Location de voiture",
        "Tarifs négociés",
        "Vols directs et avec escales",
        "Classe économique et business"
      ],
      companies: ["Air France", "Lufthansa", "British Airways", "Emirates", "Qatar Airways", "SNCF"]
    },
    {
      icon: <FaHotel className="text-5xl text-primary-color" />,
      title: "Réservation Hôtels",
      description: "Sélection d'hôtels de qualité pour tous les budgets et toutes les destinations.",
      features: [
        "Hôtels de luxe et confort",
        "Réservations sécurisées",
        "Prix garantis",
        "Assistance 24/7",
        "Hôtels 3 à 5 étoiles",
        "Réservations en groupe"
      ],
      types: ["Hôtels de luxe", "Boutique hotels", "Résidences", "Auberges de jeunesse", "Appartements"]
    },
    {
      icon: <FaHeadset className="text-5xl text-primary-color" />,
      title: "Assistance Voyage",
      description: "Accompagnement personnalisé pour tous vos projets de voyage.",
      features: [
        "Conseils personnalisés",
        "Organisation complète",
        "Assurance voyage",
        "Support en voyage",
        "Itinéraires sur mesure",
        "Accompagnement VIP"
      ],
      services: ["Voyages d'affaires", "Voyages de noces", "Voyages en famille", "Voyages étudiants", "Voyages de groupe"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Contact initial",
      description: "Nous échangeons sur vos besoins et votre projet de voyage"
    },
    {
      step: "02",
      title: "Devis personnalisé",
      description: "Nous établissons un devis détaillé selon vos exigences"
    },
    {
      step: "03",
      title: "Validation",
      description: "Vous validez notre proposition et nous procédons aux réservations"
    },
    {
      step: "04",
      title: "Accompagnement",
      description: "Nous vous accompagnons jusqu'à votre retour de voyage"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-color to-primary-dark text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Découvrez notre gamme complète de services pour tous vos besoins de voyage. 
              De l'assistance visa à l'organisation complète de votre séjour.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-12`}>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="text-center md:text-left">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-text-light mb-6">{service.description}</p>
                  
                  <div className="grid grid-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-accent-color flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.countries && service.countries.map((country, countryIndex) => (
                      <span key={countryIndex} className="px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm">
                        {country}
                      </span>
                    ))}
                    {service.companies && service.companies.map((company, companyIndex) => (
                      <span key={companyIndex} className="px-3 py-1 bg-secondary-color/10 text-secondary-color rounded-full text-sm">
                        {company}
                      </span>
                    ))}
                    {service.types && service.types.map((type, typeIndex) => (
                      <span key={typeIndex} className="px-3 py-1 bg-accent-color/10 text-accent-color rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                    {service.services && service.services.map((serviceItem, serviceIndex) => (
                      <span key={serviceIndex} className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-sm">
                        {serviceItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="card">
                  <h3 className="text-2xl font-bold mb-6">Pourquoi choisir ce service ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FaStar className="text-secondary-color mt-1" />
                      <div>
                        <h4 className="font-semibold">Expertise reconnue</h4>
                        <p className="text-text-light text-sm">Plus de 15 ans d'expérience dans le domaine</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaClock className="text-secondary-color mt-1" />
                      <div>
                        <h4 className="font-semibold">Rapidité d'exécution</h4>
                        <p className="text-text-light text-sm">Traitement de vos demandes en 24-48h</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaShieldAlt className="text-secondary-color mt-1" />
                      <div>
                        <h4 className="font-semibold">Garantie de satisfaction</h4>
                        <p className="text-text-light text-sm">98% de clients satisfaits</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaUsers className="text-secondary-color mt-1" />
                      <div>
                        <h4 className="font-semibold">Accompagnement personnalisé</h4>
                        <p className="text-text-light text-sm">Un interlocuteur dédié pour votre projet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre processus</h2>
            <p className="section-subtitle">
              Découvrez comment nous travaillons pour vous offrir le meilleur service
            </p>
          </div>

          <div className="grid grid-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="w-16 h-16 bg-primary-color text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card bg-gradient-to-r from-primary-color to-primary-dark text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à partir ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous dès maintenant pour obtenir votre devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                Demander un devis
              </a>
              <a href="tel:+2250711707005" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-color">
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 