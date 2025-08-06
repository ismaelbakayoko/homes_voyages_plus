import React, { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '2250711707005'
    const message = encodeURIComponent('Bonjour ! Je souhaite obtenir des informations sur vos services de voyage.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="relative group"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contacter par WhatsApp"
        title="Contacter par WhatsApp"
      >
        {/* Bouton principal */}
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse-slow">
          <FaWhatsapp className="text-white text-2xl" />
        </div>

        {/* Effet de pulsation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-400" />
              <span>Contacter par WhatsApp</span>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}

        {/* Particules d'animation */}
        <div className="absolute inset-0 rounded-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
              style={{
                left: `${20 + i * 10}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </button>
    </div>
  )
}

export default WhatsAppButton 