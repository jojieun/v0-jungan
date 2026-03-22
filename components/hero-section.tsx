import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-research.jpg"
          alt="정안경제연구원 연구 환경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F]/95 via-[#1F3A5F]/80 to-[#1F3A5F]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white/90 text-sm font-medium">JungAn Economic Research Institute</span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
            <span className="text-white">전문성과 신뢰를 바탕으로</span>
            <br />
            <span className="text-primary">새로운 가치</span>
            <span className="text-white">를 창출합니다</span>
          </h1>
          
          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
            사단법인 정안경제연구원은 학술연구, 계약금액조정, 원가계산, 건설클레임 등 
            다양한 분야에서 전문적인 연구와 컨설팅 서비스를 제공합니다.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              주요업무 안내
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Phone className="mr-2 w-4 h-4" />
              070-7010-8287
            </Button>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-2">
            {["학술연구", "계약금액조정", "원가계산", "건설클레임", "개발부담금"].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <span>부산광역시 연제구 중앙대로 1193 삼조빌딩 2층</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">TEL: 070-7010-8287</span>
              <span className="text-muted-foreground">EMAIL: jung-an55@naver.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
