import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahoussou synthia",
      role: "Voyage d'affaires",
      rating: 5,
      text: "Excellent service ! L'équipe a organisé mon voyage d'affaires à New York en un temps record. Tout était parfait, du visa aux réservations d'hôtel.",
      avatar: "MD"
    },
    {
      name: "Kone Bernard ",
      role: "Voyage touristique",
      rating: 5,
      text: "Grâce à Homes Voyages Plus, j'ai pu obtenir mon visa pour l'Australie sans stress. Leur expertise m'a fait gagner beaucoup de temps.",
      avatar: "PM"
    },
    {
      name: "Sophie kouame",
      role: "Voyage étudiant",
      rating: 5,
      text: "Parfait pour mon année d'études au Canada ! L'assistance visa était impeccable et les conseils très précieux.",
      avatar: "SL"
    },
    {
      name: "N'Goran Dorice",
      role: "Voyage famille",
      rating: 5,
      text: "Nous avons organisé un voyage de famille au Japon. Tout était parfaitement planifié, des billets aux hôtels. Très professionnel !",
      avatar: "JD"
    },
    {
      name: "Claire Moreau",
      role: "Voyage romantique",
      rating: 5,
      text: "Notre voyage de noces en Italie était un rêve ! L'équipe a su créer un itinéraire parfait selon nos envies.",
      avatar: "CM"
    },
    {
      name: "Jean Dupont",
      role: "Voyage d'affaires",
      rating: 5,
      text: "Service client exceptionnel. J'ai eu besoin d'une modification de dernière minute et tout s'est fait rapidement.",
      avatar: "TB"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-secondary-color' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="section bg-bg-light">   79650625
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance pour leurs voyages
          </p>
        </div>

        <div className="grid grid-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-color rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-text-light">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-4xl text-primary-color/20 absolute -top-2 -left-2" />
                <p className="text-text-dark relative z-10">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-4 gap-8">
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-primary-color mb-2">98%</div>
              <div className="text-text-light">Satisfaction client</div>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-primary-color mb-2">4.9/5</div>
              <div className="text-text-light">Note moyenne</div>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-primary-color mb-2">2000+</div>
              <div className="text-text-light">Avis vérifiés</div>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-primary-color mb-2">95%</div>
              <div className="text-text-light">Clients fidèles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 