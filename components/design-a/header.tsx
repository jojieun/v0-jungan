"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeaderDesignA() {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/design-a" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="사단법인 정안경제연구원"
              width={180}
              height={45}
              className="h-9 md:h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                    isScrolled 
                      ? 'text-[#333] hover:text-[#2D5A4A] hover:bg-[#2D5A4A]/5' 
                      : 'text-[#333] hover:text-[#2D5A4A] hover:bg-[#2D5A4A]/5'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-48">
                    <div className="bg-white border border-[#e8e8e8] rounded-xl shadow-lg py-2 overflow-hidden">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-[#555] hover:bg-[#f8f9f8] hover:text-[#2D5A4A] transition-all"
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
            <Button className="bg-[#2D5A4A] hover:bg-[#234840] text-white rounded-xl px-6 text-sm font-medium shadow-none">
              상담문의
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#333]" /> : <Menu className="w-6 h-6 text-[#333]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#e8e8e8] bg-white rounded-b-2xl">
            <nav className="flex flex-col gap-1 px-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#333] hover:text-[#2D5A4A] transition-colors font-medium py-2.5 px-3 block rounded-lg hover:bg-[#f8f9f8]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col gap-0.5 mb-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="text-[#777] hover:text-[#2D5A4A] transition-colors text-sm py-2 px-3 rounded-lg hover:bg-[#f8f9f8]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="bg-[#2D5A4A] hover:bg-[#234840] text-white rounded-xl w-full mt-4">
                상담문의
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
