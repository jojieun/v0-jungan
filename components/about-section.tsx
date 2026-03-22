"use client"

import { Target, Eye, Heart, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "전문성",
      description: "건설, 경제 분야 전문 인력을 통한 체계적인 연구 수행",
      color: "from-primary to-[#9a1f30]",
    },
    {
      icon: Eye,
      title: "정확성",
      description: "정밀한 분석과 검토를 통한 신뢰할 수 있는 결과 도출",
      color: "from-secondary to-[#2a4d7a]",
    },
    {
      icon: Heart,
      title: "고객중심",
      description: "고객의 요구와 상황에 맞춘 맞춤형 서비스 제공",
      color: "from-primary to-[#9a1f30]",
    },
    {
      icon: Shield,
      title: "신뢰",
      description: "투명한 업무 처리와 책임감 있는 서비스 실현",
      color: "from-secondary to-[#2a4d7a]",
    },
  ]

  return (
    <section id="about" className="bg-background relative overflow-hidden py-20">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">About Us</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            연구원 소개
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
            신뢰와 전문성을 바탕으로 최적의 솔루션을 제공합니다
          </p>
        </div>

        {/* Introduction - Wide Centered */}
        <div className="relative">
          {/* Top/Bottom border only - no side borders, full bleed feel */}
          <div className="border-t-2 border-b-2 border-primary/15 py-10 px-4 text-center">
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium mb-4 max-w-4xl mx-auto">
              <span className="text-primary font-bold">사단법인 정안경제연구원</span>은
              학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서
              체계적인 연구와 컨설팅 서비스를 제공하는{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary font-bold">신뢰할 수 있는 연구기관</span>
                <span className="absolute left-0 bottom-0.5 w-full h-1.5 bg-secondary/15 rounded-sm -z-0" />
              </span>
              입니다.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 건설 및 경제 분야의 발전에 기여하고자 합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 card-hover overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              {/* Index Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Icon */}
              <div className={`relative bg-gradient-to-br ${value.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
              
              {/* Bottom Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
