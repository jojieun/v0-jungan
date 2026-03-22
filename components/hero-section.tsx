"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-research.jpg"
          alt="정안경제연구원 연구 환경"
          fill
          className="object-cover"
          priority
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#1F3A5F]/90 to-[#7A0F1D]/70" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">새로운 시작, 신뢰의 파트너</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              <span className="text-white font-bold block">전문성으로</span>
              <span className="text-white font-bold block">가치를 창출하는</span>
              <span className="relative inline-block mt-3">
                <span className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white relative z-10">정안경제연구원</span>
                <span className="absolute bottom-0 left-0 right-0 h-4 bg-primary/80 -skew-x-3 z-0"></span>
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">
              학술연구부터 건설클레임까지, 체계적인 분석과 
              맞춤형 솔루션으로 고객의 성공을 함께합니다.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-[#9a1f30] hover:from-primary/90 hover:to-[#9a1f30]/90 text-white rounded-full px-8 shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40"
              >
                주요업무 안내
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 bg-white/10 text-white hover:bg-white hover:text-secondary rounded-full px-8 backdrop-blur-sm"
              >
                <FileText className="mr-2 w-4 h-4" />
                연구실적 보기
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2">
              {["학술연구", "계약금액조정", "원가계산", "건설클레임", "개발부담금"].map((tag, idx) => (
                <span
                  key={tag}
                  className="bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm border border-white/10 hover:bg-white/20 transition-colors cursor-default"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { number: "9+", label: "전문 서비스 분야", delay: "0.1s" },
              { number: "100%", label: "고객 맞춤 솔루션", delay: "0.2s" },
              { number: "신뢰", label: "투명한 업무 처리", delay: "0.3s" },
              { number: "전문", label: "체계적인 분석력", delay: "0.4s" },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all cursor-default animate-slide-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
      >
        <span className="text-xs tracking-wider">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
