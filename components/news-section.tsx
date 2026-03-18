import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewsSection() {
  const news = [
    {
      category: "세미나",
      title: "2026년 상반기 경제 전망 세미나 개최 안내",
      date: "2026.03.15",
      image: "seminar",
    },
    {
      category: "언론보도",
      title: "정안연, '디지털 전환 시대 일자리 정책' 보고서 발간",
      date: "2026.03.10",
      image: "press",
    },
    {
      category: "공지사항",
      title: "2026년 신규 연구원 채용 공고",
      date: "2026.03.05",
      image: "notice",
    },
  ]

  return (
    <section id="news" className="py-24 bg-[#1F3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">News</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-2">
              소식
            </h2>
          </div>
          <Button variant="outline" className="w-fit border-white/30 text-white hover:bg-white/10 hover:text-white">
            전체 보기
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-serif font-bold">정</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
                <h3 className="font-serif font-bold text-white group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
