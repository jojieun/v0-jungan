import Link from "next/link"
import Image from "next/image"

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
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/images/logo.png"
                alt="사단법인 정안경제연구원"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              JungAn Economic<br />Research Institute
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-serif font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
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
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white/60 text-sm space-y-1">
              <p>우편번호 (47506) 부산광역시 연제구 중앙대로 1193 삼조빌딩 2층</p>
              <p>TEL: 070-7010-8287 | EMAIL: jung-an55@naver.com</p>
            </div>
            <div className="text-white/60 text-sm">
              <p>&copy; 2026 사단법인 정안경제연구원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
