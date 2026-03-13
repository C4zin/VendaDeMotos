import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Moto<span className="text-primary">Speed</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Realizando sonhos sobre duas rodas desde 2010. A maior variedade de motos com os melhores preços do Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#motos" className="text-muted-foreground hover:text-primary transition-colors">
                Motos
              </Link>
              <Link href="#categorias" className="text-muted-foreground hover:text-primary transition-colors">
                Categorias
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Financiamento
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Categorias</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Esportivas
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Naked
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Adventure
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cruiser
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Scooter
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Av. das Motos, 1000<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground text-sm">contato@motospeed.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 MotoSpeed. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
