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
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Full-width Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-[#152a45]" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 49.5%, rgba(255,255,255,0.1) 49.5%, rgba(255,255,255,0.1) 50.5%, transparent 50.5%),
            linear-gradient(-30deg, transparent 49.5%, rgba(255,255,255,0.1) 49.5%, rgba(255,255,255,0.1) 50.5%, transparent 50.5%)
          `,
          backgroundSize: '60px 100px'
        }} />
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Creative Design */}
        <div className="relative mb-20">
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
            <span className="text-[120px] sm:text-[180px] lg:text-[220px] font-serif font-black text-white/[0.03] tracking-tight whitespace-nowrap">
              SERVICES
            </span>
          </div>
          
          {/* Main Title */}
          <div className="relative text-center pt-8 pb-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Our Services</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white text-balance leading-tight">
              주요
              <span className="relative inline-block mx-3">
                업무
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/30 -skew-x-6" />
              </span>
              안내
            </h2>
            
            <p className="text-white/70 mt-6 max-w-2xl mx-auto text-lg">
              정안경제연구원은 건설 및 경제 분야 전반에 걸쳐 
              다양한 전문 서비스를 제공합니다.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative bg-white/10 backdrop-blur-sm hover:bg-white/15 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${
                service.featured ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  핵심 서비스
                </div>
              )}
              
              <div className="relative">
                {/* Icon & Arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    service.featured 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'bg-white/20 text-white group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30'
                  }`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/50 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
                
                {/* View More */}
                <div className="mt-5 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span>자세히 보기</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              
              {/* Bottom Glow on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
