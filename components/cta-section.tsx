import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section id="contato" className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-medium mb-2 block">Pronto para acelerar?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sua próxima aventura começa <span className="text-primary">aqui</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Entre em contato com nossa equipe especializada e encontre a moto perfeita para você. Condições especiais para os primeiros 50 clientes do mês!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8"
            >
              Falar com Consultor
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 gap-2 text-lg px-8"
            >
              <Phone className="w-5 h-5" />
              (11) 99999-9999
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4">Formas de pagamento aceitas</p>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Pix</div>
              <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Cartão de Crédito</div>
              <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Boleto</div>
              <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Financiamento</div>
              <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">Consórcio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
