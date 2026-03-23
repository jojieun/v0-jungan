"use client"

import { Target, Eye, Heart, Shield } from "lucide-react"

export function AboutSectionDesignA() {
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
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2D5A4A] font-medium text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
            연구원 소개
          </h2>
          <div className="w-12 h-1 bg-[#2D5A4A] mx-auto mt-6 rounded-full" />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl lg:text-2xl text-[#333] leading-relaxed font-light">
            <span className="text-[#2D5A4A] font-semibold">사단법인 정안경제연구원</span>은
            학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서
            체계적인 연구와 컨설팅 서비스를 제공하는{" "}
            <span className="text-[#333] font-semibold">신뢰할 수 있는 연구기관</span>
            입니다.
          </p>
          <p className="text-[#777] text-base leading-relaxed mt-6">
            전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 건설 및 경제 분야의 발전에 기여하고자 합니다.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-[#FAFBFA] rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-[#2D5A4A]/5 transition-all duration-300 border border-transparent hover:border-[#e8e8e8]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#2D5A4A]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2D5A4A] transition-colors">
                <value.icon className="w-8 h-8 text-[#2D5A4A] group-hover:text-white transition-colors" />
              </div>
              
              {/* Number */}
              <span className="text-xs font-medium text-[#bbb] tracking-widest">0{index + 1}</span>
              
              <h3 className="font-bold text-xl text-[#1a1a1a] mt-2 mb-3">
                {value.title}
              </h3>
              <p className="text-[#777] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
