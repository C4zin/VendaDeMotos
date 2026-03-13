import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MotosSection } from "@/components/motos-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MotosSection />
      <CategoriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
