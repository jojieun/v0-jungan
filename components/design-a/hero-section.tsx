"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Check } from "lucide-react"

export function HeroSectionDesignA() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2D5A4A]/10 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#2D5A4A]" />
              <span className="text-[#2D5A4A] text-sm font-medium">신뢰할 수 있는 연구 파트너</span>
            </div>

            {/* Main Title */}
            <h1 className="text-[#1a1a1a] leading-tight mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light block">전문성으로</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light block">가치를 창출하는</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold block mt-2 text-[#2D5A4A]">
                정안경제연구원
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#666] text-lg leading-relaxed mb-10 max-w-md">
              학술연구부터 건설클레임까지, 체계적인 분석과
              맞춤형 솔루션으로 고객의 성공을 함께합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#2D5A4A] hover:bg-[#234840] text-white rounded-xl px-8 shadow-none transition-all hover:-translate-y-0.5"
              >
                주요업무 안내
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-[#ddd] bg-white text-[#333] hover:bg-[#f5f5f5] rounded-xl px-8"
              >
                <FileText className="mr-2 w-4 h-4" />
                연구실적 보기
              </Button>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-6">
              {["9+ 전문 서비스", "100% 맞춤 솔루션", "체계적 분석력"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#555]">
                  <div className="w-5 h-5 rounded-full bg-[#2D5A4A]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#2D5A4A]" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2D5A4A]/10">
              <Image
                src="/images/design-a/hero-minimal.jpg"
                alt="전문적인 연구 환경"
                width={600}
                height={700}
                className="w-full h-[600px] object-cover"
              />
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#2D5A4A]">9+</div>
                    <div className="text-xs text-[#888]">전문 분야</div>
                  </div>
                  <div className="border-x border-[#eee]">
                    <div className="text-2xl font-bold text-[#2D5A4A]">100%</div>
                    <div className="text-xs text-[#888]">맞춤 솔루션</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#2D5A4A]">전문</div>
                    <div className="text-xs text-[#888]">분석력</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#2D5A4A]/5 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#E8B4A0]/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
