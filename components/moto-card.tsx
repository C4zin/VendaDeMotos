"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Gauge, Fuel, Zap } from "lucide-react"
import { useState } from "react"

interface MotoCardProps {
  name: string
  price: number
  image: string
  category: string
  specs: {
    cilindradas: string
    potencia: string
    combustivel: string
  }
  isNew?: boolean
}

export function MotoCard({ name, price, image, category, specs, isNew }: MotoCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">Novo</Badge>
          )}
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {category}
          </Badge>
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isLiked 
                ? "bg-primary text-primary-foreground" 
                : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            aria-label="Favoritar"
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-background/80 text-foreground hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors"
            aria-label="Ver detalhes"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{specs.cilindradas}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-secondary" />
            <span>{specs.potencia}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4 text-muted-foreground" />
            <span>{specs.combustivel}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">A partir de</p>
            <p className="text-xl font-bold text-primary">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
