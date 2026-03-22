import { Target, Eye, Heart, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "전문성",
      description: "건설, 경제 분야 전문 인력을 통한 체계적인 연구 수행",
    },
    {
      icon: Eye,
      title: "정확성",
      description: "정밀한 분석과 검토를 통한 신뢰할 수 있는 결과 도출",
    },
    {
      icon: Heart,
      title: "고객중심",
      description: "고객의 요구와 상황에 맞춘 맞춤형 서비스 제공",
    },
    {
      icon: Shield,
      title: "신뢰",
      description: "투명한 업무 처리와 책임감 있는 서비스 실현",
    },
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mt-2 text-balance">
            연구원 소개
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            <strong className="text-primary">사단법인 정안경제연구원</strong>은 
            학술연구, 계약금액조정, 원가계산, 건설클레임 등 전문 분야에서 
            체계적인 연구와 컨설팅 서비스를 제공하는 연구기관입니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            전문성과 신뢰를 바탕으로 고객에게 최적의 솔루션을 제공하며, 
            건설 및 경제 분야의 발전에 기여하고자 합니다.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
