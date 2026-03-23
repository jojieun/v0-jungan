"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSectionDesignB() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/design-b/hero-classic.jpg"
          alt="전문적인 연구 환경"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/95 via-[#0F1C2E]/85 to-[#0F1C2E]/70" />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-px bg-[#C9A962]" />
              <span className="text-[#C9A962] text-sm font-medium tracking-[0.2em] uppercase">Since Established</span>
            </div>

            {/* Main Title */}
            <h1 className="leading-tight mb-8">
              <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl font-light block tracking-wide">전문성으로</span>
              <span className="text-white/80 text-3xl sm:text-4xl lg:text-5xl font-light block tracking-wide">가치를 창출하는</span>
              <span className="text-[#C9A962] text-4xl sm:text-5xl lg:text-6xl font-bold block mt-4 tracking-tight">
                정안경제연구원
              </span>
            </h1>

            {/* Divider */}
            <div className="w-20 h-1 bg-[#C9A962] mb-8" />

            {/* Description */}
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              학술연구부터 건설클레임까지, 체계적인 분석과
              맞춤형 솔루션으로 고객의 성공을 함께합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#C9A962] hover:bg-[#B89952] text-[#0F1C2E] font-semibold rounded-none px-8 shadow-lg"
              >
                주요업무 안내
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C9A962]/50 bg-transparent text-[#C9A962] hover:bg-[#C9A962]/10 hover:text-[#C9A962] rounded-none px-8"
              >
                <FileText className="mr-2 w-4 h-4" />
                연구실적 보기
              </Button>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              {["학술연구", "계약금액조정", "원가계산", "건설클레임", "개발부담금"].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/20 text-white/60 px-4 py-2 text-sm hover:border-[#C9A962]/50 hover:text-[#C9A962] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "9+", label: "전문 서비스 분야", desc: "다양한 분야의 전문 서비스" },
                { number: "100%", label: "고객 맞춤 솔루션", desc: "맞춤형 컨설팅 제공" },
                { number: "신뢰", label: "투명한 업무 처리", desc: "정직하고 투명한 서비스" },
                { number: "전문", label: "체계적인 분석력", desc: "데이터 기반 전문 분석" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-[#C9A962]/30 transition-colors group"
                >
                  <div className="text-[#C9A962] text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-white/40 text-sm">{stat.desc}</div>
                  <div className="w-8 h-0.5 bg-[#C9A962]/50 mt-4 group-hover:w-full transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1C2E] to-transparent" />
    </section>
  )
}
