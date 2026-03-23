"use client"

import { Target, Eye, Heart, Shield } from "lucide-react"

export function AboutSectionDesignB() {
  const values = [
    {
      icon: Target,
      title: "전문성",
      description: "건설, 경제 분야 전문 인력을 통한 체계적인 연구 수행",
    },
    {
      icon: Eye,
      title: "정확성",
      description: "정밀한 분석과 검토를 통한 신뢰할 수 있는 결과 도출",
    },
    {
      icon: Heart,
      title: "고객중심",
      description: "고객의 요구와 상황에 맞춘 맞춤형 서비스 제공",
    },
    {
      icon: Shield,
      title: "신뢰",
      description: "투명한 업무 처리와 책임감 있는 서비스 실현",
    },
  ]

  return (
    <section id="about" className="bg-[#0F1C2E] py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C9A962]" />
            <span className="text-[#C9A962] font-medium text-sm tracking-[0.2em] uppercase">About Us</span>
            <div className="w-12 h-px bg-[#C9A962]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            연구원 소개
          </h2>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20 relative">
          <div className="absolute -left-4 top-0 text-[#C9A962]/20 text-8xl font-serif">&ldquo;</div>
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light relative z-10">
            <span className="text-[#C9A962] font-semibold">사단법인 정안경제연구원</span>은
            학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서
            체계적인 연구와 컨설팅 서비스를 제공하는{" "}
            <span className="text-white font-semibold">신뢰할 수 있는 연구기관</span>
            입니다.
          </p>
          <p className="text-white/50 text-base leading-relaxed mt-6">
            전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 건설 및 경제 분야의 발전에 기여하고자 합니다.
          </p>
          <div className="absolute -right-4 bottom-0 text-[#C9A962]/20 text-8xl font-serif">&rdquo;</div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group p-8 text-center hover:bg-[#C9A962]/5 transition-all duration-300 relative ${
                index < 3 ? 'border-r border-white/10' : ''
              }`}
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-[#C9A962]/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 border-2 border-[#C9A962]/30 flex items-center justify-center mx-auto mb-6 group-hover:border-[#C9A962] group-hover:bg-[#C9A962]/10 transition-all">
                <value.icon className="w-8 h-8 text-[#C9A962]" />
              </div>
              
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#C9A962] transition-colors">
                {value.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {value.description}
              </p>
              
              {/* Bottom Line */}
              <div className="w-8 h-0.5 bg-[#C9A962]/30 mx-auto mt-6 group-hover:w-16 group-hover:bg-[#C9A962] transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
