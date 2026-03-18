import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1F3A5F]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm">사단법인 정안경제연구원</span>
            </div>
            
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              <span className="text-white">신뢰의 경제 연구,</span>
              <br />
              <span className="text-primary">대한민국의 미래</span>를
              <br />
              <span className="text-white">설계합니다</span>
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              정안경제연구원은 실증적 데이터 분석과 깊이 있는 정책 연구를 통해 
              지속 가능한 경제 발전을 위한 해법을 제시합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                연구 분야 보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                연구원 소개
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "32", label: "년 연구 역사", suffix: "+" },
              { number: "150", label: "편 연구 보고서", suffix: "+" },
              { number: "25", label: "명 전문 연구진", suffix: "" },
              { number: "80", label: "개 협력 기관", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
              >
                <p className="font-serif font-bold text-4xl lg:text-5xl text-white mb-2">
                  {stat.number}<span className="text-primary">{stat.suffix}</span>
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
