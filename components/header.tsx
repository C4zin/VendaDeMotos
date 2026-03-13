"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Moto<span className="text-primary">Speed</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#motos" className="text-muted-foreground hover:text-primary transition-colors">
              Motos
            </Link>
            <Link href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">
              Categorias
            </Link>
            <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Comprar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#motos" className="text-muted-foreground hover:text-primary transition-colors">
                Motos
              </Link>
              <Link href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">
                Categorias
              </Link>
              <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <ShoppingCart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <User className="w-5 h-5" />
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                  Comprar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
