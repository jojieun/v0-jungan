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
    <section id="about" className="bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Section Header with Wide Background Image - Fixed */}
      <div className="relative">
        <div className="relative w-full h-72 md:h-80 overflow-hidden">
          {/* Background Image - Fixed */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/images/section-bg.jpg')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/80 to-primary/75" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 border border-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 border border-white/5 rounded-full" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <span className="inline-block text-white/80 font-medium text-sm uppercase tracking-[0.2em] mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">About Us</span>
            <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white text-balance leading-tight">
              연구원 소개
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto text-lg">
              신뢰와 전문성을 바탕으로 최적의 솔루션을 제공합니다
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
        {/* Introduction Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-primary to-secondary rounded-full flex-shrink-0" />
              <div>
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-4">
                  <strong className="text-primary font-bold">사단법인 정안경제연구원</strong>은 
                  학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서 
                  체계적인 연구와 컨설팅 서비스를 제공하는 <span className="text-secondary font-semibold">신뢰할 수 있는 연구기관</span>입니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 
                  건설 및 경제 분야의 발전에 기여하고자 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
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
