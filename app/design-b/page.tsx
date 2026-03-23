import { HeaderDesignB } from "@/components/design-b/header"
import { HeroSectionDesignB } from "@/components/design-b/hero-section"
import { AboutSectionDesignB } from "@/components/design-b/about-section"
import { ServicesSectionDesignB } from "@/components/design-b/services-section"
import { ContactSectionDesignB } from "@/components/design-b/contact-section"
import { FooterDesignB } from "@/components/design-b/footer"

export default function DesignBPage() {
  return (
    <main className="design-b">
      <HeaderDesignB />
      <HeroSectionDesignB />
      <AboutSectionDesignB />
      <ServicesSectionDesignB />
      <ContactSectionDesignB />
      <FooterDesignB />
    </main>
  )
}
