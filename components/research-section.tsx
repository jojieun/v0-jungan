import { TrendingUp, Building2, Globe, Users, Leaf, BarChart3 } from "lucide-react"

export function ResearchSection() {
  const researchAreas = [
    {
      icon: TrendingUp,
      title: "거시경제 정책",
      description: "경기 순환 분석, 통화 정책, 재정 정책 연구를 통한 거시경제 안정화 방안 제시",
      tags: ["경기 전망", "금리 정책", "재정 건전성"],
    },
    {
      icon: Building2,
      title: "산업 구조 분석",
      description: "주력 산업 경쟁력 평가 및 신성장 동력 발굴을 위한 산업 정책 연구",
      tags: ["제조업", "서비스업", "신산업"],
    },
    {
      icon: Globe,
      title: "국제 경제",
      description: "글로벌 경제 동향 분석 및 통상 정책, FTA 효과 연구",
      tags: ["통상 정책", "글로벌 공급망", "환율"],
    },
    {
      icon: Users,
      title: "노동·복지 경제",
      description: "노동 시장 구조 변화와 사회 안전망 확충을 위한 정책 연구",
      tags: ["고용 정책", "임금 체계", "사회보험"],
    },
    {
      icon: Leaf,
      title: "지속가능 경제",
      description: "탄소중립 전환과 ESG 경영 확산에 따른 경제적 영향 분석",
      tags: ["ESG", "탄소중립", "녹색금융"],
    },
    {
      icon: BarChart3,
      title: "데이터 분석",
      description: "빅데이터와 AI 기반 경제 예측 모델 개발 및 정책 시뮬레이션",
      tags: ["빅데이터", "AI 모델", "예측 분석"],
    },
  ]

  return (
    <section id="research" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Research Areas</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mt-2 text-balance">
            연구 분야
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            정안경제연구원은 다양한 경제 분야에서 심층적인 연구를 수행하며, 
            정책 입안자와 기업에게 실용적인 인사이트를 제공합니다.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
