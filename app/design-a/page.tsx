import { HeaderDesignA } from "@/components/design-a/header"
import { HeroSectionDesignA } from "@/components/design-a/hero-section"
import { AboutSectionDesignA } from "@/components/design-a/about-section"
import { ServicesSectionDesignA } from "@/components/design-a/services-section"
import { ContactSectionDesignA } from "@/components/design-a/contact-section"
import { FooterDesignA } from "@/components/design-a/footer"

export default function DesignAPage() {
  return (
    <main className="design-a">
      <HeaderDesignA />
      <HeroSectionDesignA />
      <AboutSectionDesignA />
      <ServicesSectionDesignA />
      <ContactSectionDesignA />
      <FooterDesignA />
    </main>
  )
}
