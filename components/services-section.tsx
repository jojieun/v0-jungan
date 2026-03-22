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
      featured: true,
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
      featured: true,
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
    <section id="services" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122,15,29,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-medium text-sm uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full mb-4">Services</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            주요업무
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-secondary rounded-full" />
            <div className="w-3 h-3 bg-secondary rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-secondary rounded-full" />
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg">
            정안경제연구원은 건설 및 경제 분야 전반에 걸쳐 
            다양한 전문 서비스를 제공합니다.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative bg-background rounded-2xl p-6 card-hover border border-border/50 overflow-hidden ${
                service.featured ? 'lg:row-span-1' : ''
              }`}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon & Arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    service.featured 
                      ? 'bg-gradient-to-br from-primary to-[#9a1f30] text-white shadow-lg shadow-primary/20' 
                      : 'bg-secondary/10 text-secondary group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-[#2a4d7a] group-hover:text-white group-hover:shadow-lg'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
