"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/moto-hero.jpg"
          alt="Moto esportiva"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-medium">Novos modelos 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            Acelere seus <span className="text-primary">sonhos</span> com estilo
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 text-pretty">
            Descubra a moto perfeita para você. Variedade, qualidade e os melhores preços do mercado em um só lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8">
              Ver Catálogo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 gap-2 text-lg px-8">
              <Play className="w-5 h-5" />
              Assista o Vídeo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Motos Vendidas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">50+</p>
              <p className="text-muted-foreground">Modelos Disponíveis</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
