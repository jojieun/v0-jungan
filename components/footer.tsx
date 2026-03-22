import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    연구원소개: [
      { label: "인사말", href: "/about/greeting" },
      { label: "연혁", href: "/about/history" },
      { label: "조직도", href: "/about/organization" },
      { label: "등록현황", href: "/about/registration" },
      { label: "찾아오시는 길", href: "/about/location" },
    ],
    주요업무: [
      { label: "학술연구", href: "/services/research" },
      { label: "계약금액조정", href: "/services/contract-adjustment" },
      { label: "원가계산", href: "/services/cost-calculation" },
      { label: "건설클레임", href: "/services/construction-claim" },
    ],
    자료실: [
      { label: "참고자료", href: "/resources/references" },
      { label: "관련법령", href: "/resources/laws" },
    ],
    커뮤니티: [
      { label: "공지사항", href: "/community/notices" },
      { label: "고객문의", href: "/community/inquiry" },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-white relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="col-span-2">
            <Link href="/" className="block mb-6 group">
              <Image
                src="/images/logo.png"
                alt="사단법인 정안경제연구원"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              JungAn Economic Research Institute
            </p>
            
            {/* Contact Quick Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>070-7010-8287</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>jung-an55@naver.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>부산광역시 연제구 중앙대로 1193<br />삼조빌딩 2층</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-medium text-sm mb-5 text-white/80 tracking-wide relative inline-block">
                {category}
                <div className="absolute -bottom-1 left-0 w-5 h-px bg-primary/70 rounded-full" />
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white/40 text-sm">
              <p>우편번호 (47506) 부산광역시 연제구 중앙대로 1193 삼조빌딩 2층</p>
            </div>
            <div className="text-white/40 text-sm">
              <p>&copy; 2026 사단법인 정안경제연구원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
