import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaCalendar, FaComments } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'visa', label: 'Assistance Visa' },
    { value: 'billetterie', label: 'Billetterie' },
    { value: 'hotel', label: 'Réservation Hôtel' },
    { value: 'assistance', label: 'Assistance Voyage' },
    { value: 'complet', label: 'Forfait Complet' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis'
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis'
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis'
    if (!formData.service) newErrors.service = 'Veuillez sélectionner un service'
    if (!formData.message.trim()) newErrors.message = 'Le message est requis'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        message: ''
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="card bg-accent-color/10 border-accent-color/20">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-accent-color mb-4">
            Demande envoyée avec succès !
          </h3>
          <p className="text-text-light mb-6">
            Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary"
          >
            Envoyer une nouvelle demande
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-2 gap-8">
        {/* Contact Info */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-primary-color" />
              <div>
                <p className="font-semibold">Téléphone</p>
                <p className="text-text-light">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary-color" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-text-light">contact@homesvoyagesplus.fr</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaGlobe className="text-primary-color" />
              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-text-light">123 Rue de la Paix, 75001 Paris</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaCalendar className="text-primary-color" />
              <div>
                <p className="font-semibold">Horaires</p>
                <p className="text-text-light">Lun-Ven: 9h-18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Demande de devis</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prénom *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="Votre prénom"
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nom *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="Votre nom"
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="votre@email.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="+225 07 11 70 70 05"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Service souhaité *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                    errors.service ? 'border-red-500' : 'border-border-color'
                  }`}
                >
                  {services.map((service, index) => (
                    <option key={index} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                  placeholder="Ex: Paris, New York..."
                />
              </div>
            </div>

            <div className="grid grid-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date de départ</label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date de retour</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <div className="relative">
                <FaComments className="absolute left-3 top-3 text-text-light" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-color focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-border-color'
                  }`}
                  placeholder="Décrivez votre projet de voyage..."
                />
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm 