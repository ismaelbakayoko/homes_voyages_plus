import React from 'react'

const GallerySection = () => {
  const destinations = [
    {
      name: "Paris, France",
      category: "Europe",
      image: "https://hospitality-on.com/sites/hon/files/2017-09/Paris.jpg"
    },
    {
      name: "New York, USA",
      category: "Amérique",
      image: "https://sirixmonitoring.com/wp-content/uploads/2024/10/Safest-cities-in-New-York-state-for-2024-a-detailed-overview.webp"
    },
    {
      name: "Canada",
      category: "Europe",
      image: "https://hopmontreal.com/wp-content/uploads/2018/09/quartier-spectacle-montreal-centre-ville.jpg"
    },
    {
      name: "Sydney, Australie",
      category: "Océanie",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop"
    },
    {
      name: "Rome, Italie",
      category: "Europe",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop"
    },
    {
      name: "Dubai, Émirats",
      category: "Moyen-Orient",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/e5/bd.jpg"
    },
    {
      name: "Londres, UK",
      category: "Europe",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
    },
    {
      name: "Bangkok, Thaïlande",
      category: "Asie",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c079365?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Destinations</h2>
          <p className="section-subtitle">
            Découvrez quelques-unes des destinations que nous proposons pour vos voyages
          </p>
        </div>

        <div className="grid grid-4 gap-4">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg fade-in-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-light mb-6">
            Ces destinations ne sont qu'un aperçu de nos possibilités. 
            Nous organisons des voyages dans plus de 150 pays à travers le monde.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-primary-color/10 text-primary-color rounded-full">
              Europe
            </span>
            <span className="px-4 py-2 bg-secondary-color/10 text-secondary-color rounded-full">
              Asie
            </span>
            <span className="px-4 py-2 bg-accent-color/10 text-accent-color rounded-full">
              Amérique
            </span>
            <span className="px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full">
              Afrique
            </span>
            <span className="px-4 py-2 bg-pink-500/10 text-pink-600 rounded-full">
              Océanie
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection 