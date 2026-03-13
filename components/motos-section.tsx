"use client"

import { useState } from "react"
import { MotoCard } from "./moto-card"
import { Button } from "@/components/ui/button"

const categories = ["Todas", "Esportivas", "Naked", "Adventure", "Cruiser"]

const motos = [
  {
    name: "Thunder RS 1000",
    price: 85990,
    image: "/images/moto-sport.jpg",
    category: "Esportivas",
    specs: {
      cilindradas: "998cc",
      potencia: "190cv",
      combustivel: "Flex",
    },
    isNew: true,
  },
  {
    name: "Street Fighter 850",
    price: 62990,
    image: "/images/moto-naked.jpg",
    category: "Naked",
    specs: {
      cilindradas: "847cc",
      potencia: "120cv",
      combustivel: "Gasolina",
    },
    isNew: true,
  },
  {
    name: "Explorer 1200",
    price: 95990,
    image: "/images/moto-adventure.jpg",
    category: "Adventure",
    specs: {
      cilindradas: "1200cc",
      potencia: "160cv",
      combustivel: "Flex",
    },
    isNew: false,
  },
  {
    name: "Road King 1800",
    price: 125990,
    image: "/images/moto-cruiser.jpg",
    category: "Cruiser",
    specs: {
      cilindradas: "1800cc",
      potencia: "100cv",
      combustivel: "Gasolina",
    },
    isNew: false,
  },
  {
    name: "SuperSport RR",
    price: 145990,
    image: "/images/moto-superbike.jpg",
    category: "Esportivas",
    specs: {
      cilindradas: "1100cc",
      potencia: "215cv",
      combustivel: "Gasolina",
    },
    isNew: true,
  },
  {
    name: "Velocity 600",
    price: 45990,
    image: "/images/moto-hero.jpg",
    category: "Naked",
    specs: {
      cilindradas: "600cc",
      potencia: "90cv",
      combustivel: "Flex",
    },
    isNew: false,
  },
]

export function MotosSection() {
  const [activeCategory, setActiveCategory] = useState("Todas")

  const filteredMotos = activeCategory === "Todas" 
    ? motos 
    : motos.filter(moto => moto.category === activeCategory)

  return (
    <section id="motos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium mb-2 block">Nosso Catálogo</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Encontre sua <span className="text-primary">moto ideal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore nossa seleção completa de motocicletas com as melhores marcas e modelos do mercado.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Motos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMotos.map((moto, index) => (
            <MotoCard key={index} {...moto} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            Ver Mais Motos
          </Button>
        </div>
      </div>
    </section>
  )
}
