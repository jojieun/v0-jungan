import { FileText, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PublicationsSection() {
  const publications = [
    {
      category: "연구보고서",
      title: "2026년 한국 경제 전망과 정책 과제",
      date: "2026.03",
      description: "글로벌 경기 불확실성 속 한국 경제의 성장 경로와 정책 방향 제시",
      isNew: true,
    },
    {
      category: "정책제언",
      title: "디지털 전환 시대의 노동시장 구조 변화",
      date: "2026.02",
      description: "AI와 자동화가 고용에 미치는 영향 분석 및 대응 방안",
      isNew: true,
    },
    {
      category: "이슈분석",
      title: "공급망 재편과 한국 제조업의 과제",
      date: "2026.01",
      description: "글로벌 공급망 변화에 따른 국내 산업 경쟁력 강화 전략",
      isNew: false,
    },
    {
      category: "연구보고서",
      title: "저출생 시대의 경제 성장 전략",
      date: "2025.12",
      description: "인구 구조 변화에 대응한 지속 가능 성장 모델 연구",
      isNew: false,
    },
  ]

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Publications</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mt-2">
              최신 발간물
            </h2>
          </div>
          <Button variant="outline" className="w-fit">
            전체 보기
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Publications List */}
        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Icon */}
                <div className="bg-muted p-3 rounded-lg w-fit">
                  <FileText className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-[#1F3A5F] bg-[#1F3A5F]/10 px-2 py-1 rounded">
                      {pub.category}
                    </span>
                    {pub.isNew && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">{pub.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{pub.description}</p>
                </div>

                {/* Download Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit text-muted-foreground hover:text-primary"
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
