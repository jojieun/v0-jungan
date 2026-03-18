import Link from "next/link"

export function Footer() {
  const footerLinks = {
    연구원: [
      { label: "연구원 소개", href: "#about" },
      { label: "조직도", href: "#" },
      { label: "연혁", href: "#" },
      { label: "오시는 길", href: "#contact" },
    ],
    연구: [
      { label: "연구 분야", href: "#research" },
      { label: "진행 중 과제", href: "#" },
      { label: "연구진 소개", href: "#" },
    ],
    발간물: [
      { label: "연구보고서", href: "#publications" },
      { label: "정책제언", href: "#publications" },
      { label: "이슈분석", href: "#publications" },
    ],
    소통: [
      { label: "공지사항", href: "#news" },
      { label: "세미나", href: "#news" },
      { label: "언론보도", href: "#news" },
    ],
  }

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">정</span>
              </div>
            </Link>
            <p className="font-serif font-bold text-lg mb-2">정안경제연구원</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Jeongan Economic<br />Research Institute
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
            <div className="text-white/60 text-sm">
              <p>서울특별시 영등포구 여의도동 28-1 정안빌딩 10층</p>
              <p>TEL: 02-784-0000 | FAX: 02-784-0001 | EMAIL: research@jeongan.org</p>
            </div>
            <div className="text-white/60 text-sm">
              <p>© 2026 사단법인 정안경제연구원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
