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
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Bold Design */}
        <div className="relative mb-20">
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-serif font-black text-primary/[0.03] tracking-tight whitespace-nowrap">
              ABOUT
            </span>
          </div>
          
          {/* Main Title Area */}
          <div className="relative text-center pt-8 pb-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">About Us</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
              <span className="relative inline-block">
                연구원
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#7A0F1D"/>
                      <stop offset="1" stopColor="#1F3A5F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}소개
            </h2>
            
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg">
              신뢰와 전문성을 바탕으로 최적의 솔루션을 제공합니다
            </p>
          </div>
        </div>

        {/* Introduction Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4 border-primary rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4 border-secondary rounded-br-xl" />
            
            <div className="bg-gradient-to-br from-muted via-muted/80 to-muted/50 rounded-2xl p-8 lg:p-12 border border-border/50 shadow-xl">
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 font-light">
                <strong className="text-primary font-semibold">사단법인 정안경제연구원</strong>은 
                학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서 
                체계적인 연구와 컨설팅 서비스를 제공하는 <span className="text-secondary font-medium">신뢰할 수 있는 연구기관</span>입니다.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 
                건설 및 경제 분야의 발전에 기여하고자 합니다.
              </p>
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
              <span className="absolute top-4 right-4 text-6xl font-serif font-bold text-muted/30 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Icon */}
              <div className={`relative bg-gradient-to-br ${value.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
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
