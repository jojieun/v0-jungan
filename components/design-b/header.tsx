"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeaderDesignB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { 
      label: "연구원소개", 
      href: "/about",
      subItems: [
        { label: "인사말", href: "/about/greeting" },
        { label: "연혁", href: "/about/history" },
        { label: "조직도", href: "/about/organization" },
        { label: "등록현황", href: "/about/registration" },
        { label: "찾아오시는 길", href: "/about/location" },
      ]
    },
    { 
      label: "주요업무", 
      href: "/services",
      subItems: [
        { label: "학술연구", href: "/services/research" },
        { label: "계약금액조정", href: "/services/contract-adjustment" },
        { label: "원가계산", href: "/services/cost-calculation" },
        { label: "공기연장", href: "/services/extension" },
        { label: "건설클레임", href: "/services/construction-claim" },
        { label: "개발부담금", href: "/services/development-charge" },
        { label: "하수요금감면", href: "/services/sewage-reduction" },
        { label: "설계도서검토", href: "/services/design-review" },
        { label: "시공측량(상세도작성)", href: "/services/construction-survey" },
      ]
    },
    { 
      label: "연구실적", 
      href: "/achievements",
      subItems: [
        { label: "학술연구", href: "/achievements/research" },
        { label: "계약금액조정", href: "/achievements/contract-adjustment" },
        { label: "원가계산", href: "/achievements/cost-calculation" },
        { label: "공기연장", href: "/achievements/extension" },
        { label: "건설클레임", href: "/achievements/construction-claim" },
        { label: "개발부담금", href: "/achievements/development-charge" },
        { label: "하수요금감면", href: "/achievements/sewage-reduction" },
      ]
    },
    { 
      label: "자료실", 
      href: "/resources",
      subItems: [
        { label: "참고자료", href: "/resources/references" },
        { label: "관련법령", href: "/resources/laws" },
      ]
    },
    { 
      label: "커뮤니티", 
      href: "/community",
      subItems: [
        { label: "공지사항", href: "/community/notices" },
        { label: "고객문의", href: "/community/inquiry" },
      ]
    },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0F1C2E] text-white/70 text-xs py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>신뢰와 전문성으로 고객의 성공을 함께합니다</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              070-7010-8287
            </span>
            <span>평일 09:00 - 18:00</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0F1C2E]/98 backdrop-blur-sm shadow-lg" 
          : "bg-[#0F1C2E]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/design-b" className="flex items-center gap-3 group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-[#C9A962] flex items-center justify-center">
                  <span className="text-[#C9A962] font-serif font-bold text-xl">JA</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold text-lg tracking-wide block">
                    정안경제연구원
                  </span>
                  <span className="text-[#C9A962] text-[10px] tracking-[0.2em] uppercase">
                    JungAn Economic Research
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-5 py-3 text-sm font-medium text-white/80 hover:text-[#C9A962] transition-colors border-b-2 border-transparent hover:border-[#C9A962]"
                  >
                    {item.label}
                    {item.subItems && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-0 min-w-52">
                      <div className="bg-[#0F1C2E] border border-[#C9A962]/20 shadow-2xl py-2">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A962]" />
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-5 py-2.5 text-sm text-white/70 hover:bg-[#C9A962]/10 hover:text-[#C9A962] transition-all"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-[#C9A962] hover:bg-[#B89952] text-[#0F1C2E] font-semibold px-6 rounded-none">
                상담문의
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 bg-[#0F1C2E]">
              <nav className="flex flex-col gap-1 px-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-[#C9A962] transition-colors font-medium py-2.5 px-3 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <div className="pl-4 flex flex-col gap-0.5 mb-2 border-l border-[#C9A962]/20 ml-3">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-white/50 hover:text-[#C9A962] transition-colors text-sm py-2 px-3"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button className="bg-[#C9A962] hover:bg-[#B89952] text-[#0F1C2E] font-semibold w-full mt-4 rounded-none">
                  상담문의
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
