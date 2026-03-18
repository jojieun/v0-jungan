import { Target, Eye, Award } from "lucide-react"

export function AboutSection() {
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
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-muted-foreground text-lg leading-relaxed">
            사단법인 정안경제연구원은 1992년 설립 이래, 
            <span className="text-foreground font-medium"> 객관적이고 실증적인 경제 연구</span>를 
            바탕으로 정책 대안을 제시해 왔습니다. 우리는 학계, 정부, 산업계와의 
            긴밀한 협력을 통해 대한민국 경제 발전에 기여하고 있습니다.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "미션",
              description: "실증적 데이터 분석과 깊이 있는 연구를 통해 지속 가능한 경제 발전을 위한 정책 대안을 제시합니다.",
              color: "bg-primary",
            },
            {
              icon: Eye,
              title: "비전",
              description: "대한민국을 대표하는 민간 경제 싱크탱크로서 국가 경제 정책 수립에 핵심적 역할을 수행합니다.",
              color: "bg-[#1F3A5F]",
            },
            {
              icon: Award,
              title: "핵심 가치",
              description: "객관성, 전문성, 독립성을 바탕으로 신뢰받는 연구 기관으로서의 위상을 확립합니다.",
              color: "bg-[#333333]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className={`${item.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
