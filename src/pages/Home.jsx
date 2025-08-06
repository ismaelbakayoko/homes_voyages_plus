import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlane, FaHotel, FaPassport, FaHeadset, FaStar, FaQuoteLeft } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import GallerySection from '../components/GallerySection'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <section className="section bg-bg-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">Demandez votre devis gratuit</h2>
            <p className="section-subtitle">
              Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Home 