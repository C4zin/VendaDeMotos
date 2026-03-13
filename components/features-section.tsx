import { Shield, Truck, CreditCard, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Até 5 anos de garantia de fábrica em todas as motos",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "Entrega Grátis",
    description: "Entrega gratuita para todo o Brasil em até 15 dias",
    color: "text-secondary",
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Parcele em até 48x com as melhores taxas do mercado",
    color: "text-primary",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento especializado a qualquer hora do dia",
    color: "text-secondary",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className={`w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
