"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-research.jpg"
          alt="정안경제연구원 연구 환경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F]/92 via-[#1F3A5F]/85 to-[#7A0F1D]/65" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Glow blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">새로운 시작, 신뢰의 파트너</span>
            </div>

            {/* Main Title */}
            <h1 className="leading-tight mb-8 text-balance">
              <span className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl block">전문성으로</span>
              <span className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl block mb-3">가치를 창출하는</span>
              {/* 정안경제연구원 - 버건디 언더라인 강조 방식 */}
              <span className="relative inline-block">
                <span className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl text-white">
                  정안경제연구원
                </span>
                {/* 하단 버건디 강조 바 */}
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-primary rounded-full" />
                {/* 좌측 버건디 강조 바 */}
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-full bg-primary rounded-full" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
              학술연구부터 건설클레임까지, 체계적인 분석과
              맞춤형 솔루션으로 고객의 성공을 함께합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                주요업무 안내
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-white/60 bg-transparent text-white hover:bg-white/10 rounded-full px-8"
              >
                <FileText className="mr-2 w-4 h-4" />
                연구실적 보기
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2">
              {["학술연구", "계약금액조정", "원가계산", "건설클레임", "개발부담금"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 backdrop-blur-sm text-white/85 px-4 py-1.5 rounded-full text-sm border border-white/15 hover:bg-white/20 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { number: "9+", label: "전문 서비스 분야" },
              { number: "100%", label: "고객 맞춤 솔루션" },
              { number: "신뢰", label: "투명한 업무 처리" },
              { number: "전문", label: "체계적인 분석력" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all cursor-default animate-slide-up"
                style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: 연구분야 키워드 배너 - 히어로와 자연스럽게 연결 */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* 부드러운 흰색 배경으로 전환 */}
        <div className="bg-gradient-to-t from-white via-white/80 to-transparent h-16" />
        <div className="bg-white border-t border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center divide-x divide-border/50 overflow-x-auto">
              {[
                { label: "학술연구", sub: "Academic Research" },
                { label: "계약금액조정", sub: "Contract Adjustment" },
                { label: "건설클레임", sub: "Construction Claim" },
                { label: "원가계산", sub: "Cost Calculation" },
                { label: "개발부담금", sub: "Development Charge" },
              ].map((item) => (
                <div key={item.label} className="flex-1 min-w-[140px] text-center py-4 px-3 group cursor-default hover:bg-primary/5 transition-colors">
                  <div className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
