import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-bold text-lg">정안경제연구원 디자인 시안</span>
          <span className="text-white/50 text-sm">클라이언트 프리젠테이션</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            웹사이트 디자인 시안
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            정안경제연구원 웹사이트를 위한 두 가지 디자인 컨셉을 준비했습니다.
            각 시안을 클릭하여 전체 페이지를 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Design Options */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Design A */}
            <Link 
              href="/design-a" 
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#1F3A5F]/50 transition-all duration-500"
            >
              {/* Preview Image */}
              <div className="relative h-80 bg-gradient-to-br from-[#1F3A5F] via-[#1F3A5F]/85 to-[#7A0F1D]/65 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Image
                      src="/images/logo.png"
                      alt="정안경제연구원"
                      width={140}
                      height={35}
                      className="h-8 w-auto mx-auto mb-4 brightness-0 invert"
                    />
                    <p className="text-white/70 text-sm">모던 프로페셔널</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#7A0F1D]/20 rounded-full blur-xl" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#1F3A5F] text-sm font-medium uppercase tracking-wider">Design A</span>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#1F3A5F] group-hover:translate-x-1 transition-all" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[#4a90d9] transition-colors">
                  모던 프로페셔널
                </h2>
                <p className="text-white/60 mb-6">
                  현대적이고 전문적인 디자인. 네이비 블루와 버건디 그라데이션으로
                  신뢰감과 역동성을 동시에 표현합니다.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {["네이비 & 버건디", "둥근 모서리", "현대적 레이아웃", "글래스 효과"].map((tag) => (
                    <span key={tag} className="bg-white/5 text-white/60 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1F3A5F]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>

            {/* Design B */}
            <Link 
              href="/design-b" 
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A962]/50 transition-all duration-500"
            >
              {/* Preview Image */}
              <div className="relative h-80 bg-gradient-to-br from-[#0F1C2E] to-[#1a2d45] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Image
                      src="/images/logo.png"
                      alt="정안경제연구원"
                      width={140}
                      height={35}
                      className="h-8 w-auto mx-auto mb-4 brightness-0 invert"
                    />
                    <p className="text-[#C9A962] text-sm tracking-widest uppercase">Classic Authority</p>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C9A962] text-sm font-medium uppercase tracking-wider">Design B</span>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#C9A962] group-hover:translate-x-1 transition-all" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[#C9A962] transition-colors">
                  클래식 권위
                </h2>
                <p className="text-white/60 mb-6">
                  고급스럽고 권위있는 전통적 디자인. 다크 네이비와 골드 포인트로 
                  격조 높은 연구기관의 이미지를 표현합니다.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {["다크 톤", "각진 모서리", "클래식 레이아웃", "골드 포인트"].map((tag) => (
                    <span key={tag} className="bg-white/5 text-white/60 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#C9A962]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">디자인 비교</h2>
          
          <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/50 font-medium">특성</th>
                  <th className="text-center p-4 text-[#4a90d9] font-medium">시안 A (모던)</th>
                  <th className="text-center p-4 text-[#C9A962] font-medium">시안 B (클래식)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "컬러 톤", a: "네이비 & 버건디 그라데이션", b: "다크 네이비 베이스" },
                  { feature: "포인트 컬러", a: "버건디 (#7A0F1D)", b: "골드 (#C9A962)" },
                  { feature: "모서리 처리", a: "둥근 모서리 (Rounded)", b: "각진 모서리 (Sharp)" },
                  { feature: "전체 느낌", a: "현대적, 역동적", b: "격조있음, 권위" },
                  { feature: "타겟 이미지", a: "혁신적 연구기관", b: "전통있는 연구기관" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-b-0">
                    <td className="p-4 text-white/70">{row.feature}</td>
                    <td className="p-4 text-center text-white/60 text-sm">{row.a}</td>
                    <td className="p-4 text-center text-white/60 text-sm">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          <p>정안경제연구원 웹사이트 디자인 시안 - 클라이언트 검토용</p>
        </div>
      </footer>
    </main>
  )
}
