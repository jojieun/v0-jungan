"use client"

import Link from "next/link"
import { 
  BookOpen, 
  Calculator, 
  ClipboardList, 
  Clock, 
  Building2, 
  Percent, 
  Droplets, 
  FileSearch, 
  Ruler,
  ArrowUpRight 
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "학술연구",
      description: "건설, 경제 분야의 학술연구 및 정책연구 수행",
      href: "/services/research",
    },
    {
      icon: Calculator,
      title: "계약금액조정",
      description: "물가변동, 설계변경 등에 따른 계약금액 조정 업무",
      href: "/services/contract-adjustment",
    },
    {
      icon: ClipboardList,
      title: "원가계산",
      description: "정확한 원가분석을 통한 적정 원가 산정",
      href: "/services/cost-calculation",
    },
    {
      icon: Clock,
      title: "공기연장",
      description: "공사기간 연장에 따른 추가비용 산정 및 클레임",
      href: "/services/extension",
    },
    {
      icon: Building2,
      title: "건설클레임",
      description: "건설공사 관련 분쟁 해결을 위한 전문 클레임 서비스",
      href: "/services/construction-claim",
    },
    {
      icon: Percent,
      title: "개발부담금",
      description: "개발부담금 산정 및 감면을 위한 전문 컨설팅",
      href: "/services/development-charge",
    },
    {
      icon: Droplets,
      title: "하수요금감면",
      description: "하수도 사용료 감면을 위한 분석 및 신청 대행",
      href: "/services/sewage-reduction",
    },
    {
      icon: FileSearch,
      title: "설계도서검토",
      description: "설계도서의 적정성 검토 및 오류 분석",
      href: "/services/design-review",
    },
    {
      icon: Ruler,
      title: "시공측량",
      description: "현장 시공측량 및 상세도면 작성 서비스",
      href: "/services/construction-survey",
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ddd 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Creative Design */}
        <div className="relative mb-16">
          {/* Creative Header Background */}
          <div className="relative bg-gradient-to-br from-primary via-[#8a1f2f] to-secondary rounded-3xl p-10 md:p-14 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/2" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%), linear-gradient(-45deg, white 25%, transparent 25%), linear-gradient(45deg, transparent 75%, white 75%), linear-gradient(-45deg, transparent 75%, white 75%)`,
              backgroundSize: '20px 20px'
            }} />
            
            <div className="relative text-center">
              <span className="inline-block text-primary-foreground/80 font-medium text-sm uppercase tracking-[0.2em] mb-4 bg-white/10 px-4 py-1.5 rounded-full">Our Services</span>
              <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl text-white text-balance leading-tight">
                주요 업무 안내
              </h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
                정안경제연구원은 건설 및 경제 분야 전반에 걸쳐 
                다양한 전문 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-white hover:bg-white rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                {/* Icon & Arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-muted text-foreground group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* View More */}
                <div className="mt-5 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>자세히 보기</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              
              {/* Bottom Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
