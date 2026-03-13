"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Esportivas",
    description: "Velocidade e adrenalina",
    image: "/images/moto-sport.jpg",
    count: 15,
  },
  {
    name: "Naked",
    description: "Estilo e versatilidade",
    image: "/images/moto-naked.jpg",
    count: 12,
  },
  {
    name: "Adventure",
    description: "Explore sem limites",
    image: "/images/moto-adventure.jpg",
    count: 8,
  },
  {
    name: "Cruiser",
    description: "Conforto e elegância",
    image: "/images/moto-cruiser.jpg",
    count: 10,
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium mb-2 block">Categorias</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore por <span className="text-primary">categoria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada piloto tem seu estilo. Encontre a categoria que combina com você.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent group-hover:from-primary/90 group-hover:via-primary/50 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-secondary text-sm font-medium mb-1 group-hover:text-primary-foreground/80 transition-colors">
                  {category.count} motos
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-primary-foreground/80 transition-colors">
                  {category.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors">
                  <span className="text-sm font-medium">Ver motos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
