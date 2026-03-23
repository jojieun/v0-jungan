"use client"

import Link from "next/link"
import Image from "next/image"
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
  ArrowRight 
} from "lucide-react"

export function ServicesSectionDesignB() {
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
    <section id="services" className="relative">
      {/* Header with Background Image */}
      <div className="relative h-80">
        <Image
          src="/images/design-b/services-bg.jpg"
          alt="서비스 배경"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/80 via-[#0F1C2E]/70 to-[#F5F3EF]" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C9A962]" />
            <span className="text-[#C9A962] font-medium text-sm tracking-[0.2em] uppercase">Our Services</span>
            <div className="w-12 h-px bg-[#C9A962]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            주요 업무 안내
          </h2>
          <p className="text-white/60 mt-4 max-w-xl">
            정안경제연구원은 건설 및 경제 분야 전반에 걸쳐 
            다양한 전문 서비스를 제공합니다.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-[#F5F3EF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 border-b-4 border-transparent hover:border-[#C9A962] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#0F1C2E] flex items-center justify-center group-hover:bg-[#C9A962] transition-colors">
                    <service.icon className="w-7 h-7 text-[#C9A962] group-hover:text-[#0F1C2E] transition-colors" />
                  </div>
                  <span className="text-4xl font-bold text-[#0F1C2E]/5 group-hover:text-[#C9A962]/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl text-[#0F1C2E] mb-3 group-hover:text-[#C9A962] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-[#C9A962] opacity-0 group-hover:opacity-100 transition-all">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
