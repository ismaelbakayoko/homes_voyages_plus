import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-primary-color" />,
      title: "Téléphone",
      value: "+225 07 11 70 70 05",
      link: "tel:+225 0711707005",
      description: "Appelez-nous du lundi au samedi"
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-color" />,
      title: "Email",
      value: "contact@homesvoyagesplus.com",
      link: "mailto:contact@homesvoyagesplus.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-primary-color" />,
      title: "WhatsApp",
      value: "+225 07 11 70 70 05",
      link: "https://wa.me/2250711707005",
      description: "Contact rapide 24/7"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-color" />,
      title: "Adresse",
      value: "93PC+ hvp , Abidjan Cité sir",
      link: "https://maps.app.goo.gl/B9ydyXxfPF4bZmVA6",
      description: "Bureau ouvert du lundi au vendredi"
    }
  ]

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "https://web.facebook.com/profile.php?id=100095127324143&locale=fr_FR" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" }
  ]

  const faqs = [
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du lundi au samedi de 8h à 18h. En dehors de ces horaires, vous pouvez nous contacter par WhatsApp ou email."
    },
    {
      question: "Combien de temps faut-il pour obtenir un devis ?",
      answer: "Nous vous répondons généralement sous 24h pour un devis simple. Pour des demandes complexes, cela peut prendre 48h maximum."
    },
    {
      question: "Proposez-vous des services d'urgence ?",
      answer: "Oui, nous proposons des services d'urgence pour les voyages de dernière minute. Contactez-nous par téléphone ou WhatsApp."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les cartes bancaires, virements bancaires et chèques. Un acompte de 30% est demandé à la réservation."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-color to-primary-dark text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets de voyage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center fade-in-up">
                <div className="mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <a 
                  href={info.link} 
                  className="text-primary-color hover:text-primary-dark transition-colors block mb-2"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.value}
                </a>
                <p className="text-sm text-text-light">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map & Info */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="grid grid-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre localisation</h2>
              <div className="card">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-primary-color mx-auto mb-4" />
                    <p className="text-text-light">Carte interactive</p>
                    <p className="text-sm text-text-light">93PC+ hvp , Abidjan Cité sir</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-primary-color" />
                    <div>
                      <p className="font-semibold">Horaires d'ouverture</p>
                      <p className="text-text-light">Lundi - samedi : 9h - 18h</p>
                      <p className="text-text-light">Samedi : 9h - 12h</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-primary-color" />
                    <div>
                      <p className="font-semibold">Assistance 24/7</p>
                      <p className="text-text-light">WhatsApp et email disponibles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Suivez-nous</h2>
              <div className="card">
                <p className="text-text-light mb-6">
                  Restez connecté avec nous pour découvrir nos dernières offres, 
                  conseils de voyage et témoignages clients.
                </p>
                <div className="grid grid-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-4 border border-border-color rounded-lg hover:border-primary-color transition-colors"
                    >
                      <div className="text-primary-color">{social.icon}</div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card fade-in-up">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-text-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-color to-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre voyage ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès maintenant pour obtenir votre devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+225 07 11 70 70 05" className="btn btn-secondary text-lg px-8 py-4">
              Appeler maintenant
            </a>
            <a href="https://wa.me/2250711707005" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-color">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 