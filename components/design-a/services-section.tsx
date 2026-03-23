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

export function ServicesSectionDesignA() {
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
    <section id="services" className="bg-[#FAFBFA] py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-[#2D5A4A] font-medium text-sm tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mt-4">
              주요 업무 안내
            </h2>
          </div>
          <p className="text-[#777] max-w-md text-base">
            정안경제연구원은 건설 및 경제 분야 전반에 걸쳐 
            다양한 전문 서비스를 제공합니다.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-2xl p-6 border border-[#e8e8e8] hover:border-[#2D5A4A]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2D5A4A]/5"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#2D5A4A]/5 flex items-center justify-center group-hover:bg-[#2D5A4A] transition-colors">
                  <service.icon className="w-6 h-6 text-[#2D5A4A] group-hover:text-white transition-colors" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#ccc] group-hover:text-[#2D5A4A] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <h3 className="font-bold text-lg text-[#1a1a1a] mb-2 group-hover:text-[#2D5A4A] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#777] text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
