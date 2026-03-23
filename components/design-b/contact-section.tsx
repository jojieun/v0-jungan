"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSectionDesignB() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "주소",
      value: "부산광역시 연제구 중앙대로 1193",
      subValue: "삼조빌딩 2층 (우: 47506)",
    },
    {
      icon: Phone,
      label: "전화",
      value: "070-7010-8287",
      subValue: "평일 09:00 - 18:00",
    },
    {
      icon: Mail,
      label: "이메일",
      value: "jung-an55@naver.com",
      subValue: "문의 및 상담",
    },
    {
      icon: Clock,
      label: "운영시간",
      value: "월 - 금  09:00 ~ 18:00",
      subValue: "점심시간 12:00 ~ 13:00",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[#0F1C2E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C9A962]" />
            <span className="text-[#C9A962] font-medium text-sm tracking-[0.2em] uppercase">Contact</span>
            <div className="w-12 h-px bg-[#C9A962]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            문의하기
          </h2>
          <p className="text-white/50 mt-6 max-w-xl mx-auto">
            연구 의뢰, 서비스 문의, 상담 등 다양한 문의를 환영합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-1">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-5 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 border border-[#C9A962]/30 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#C9A962] uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="font-semibold text-white">{info.value}</p>
                  <p className="text-sm text-white/50">{info.subValue}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="border border-white/10 mt-6" style={{ height: "200px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.6371671046473!2d129.07659!3d35.17788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzQwLjQiTiAxMjnCsDA0JzM1LjciRQ!5e0!3m2!1sko!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="정안경제연구원 위치"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 lg:p-10">
              <h3 className="font-bold text-xl text-[#0F1C2E] mb-8 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#C9A962]" />
                문의 양식
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333]">
                      이름 <span className="text-[#C9A962]">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      required
                      className="bg-[#F5F3EF] border-0 rounded-none h-12 focus:ring-2 focus:ring-[#C9A962]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333]">
                      연락처 <span className="text-[#C9A962]">*</span>
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      required
                      className="bg-[#F5F3EF] border-0 rounded-none h-12 focus:ring-2 focus:ring-[#C9A962]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333]">이메일</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="bg-[#F5F3EF] border-0 rounded-none h-12 focus:ring-2 focus:ring-[#C9A962]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333]">소속</label>
                    <Input
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="회사/기관명"
                      className="bg-[#F5F3EF] border-0 rounded-none h-12 focus:ring-2 focus:ring-[#C9A962]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333]">
                    문의 분야 <span className="text-[#C9A962]">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full h-12 px-4 bg-[#F5F3EF] border-0 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A962]"
                  >
                    <option value="">선택해주세요</option>
                    <option value="research">학술연구</option>
                    <option value="contract">계약금액조정</option>
                    <option value="cost">원가계산</option>
                    <option value="extension">공기연장</option>
                    <option value="claim">건설클레임</option>
                    <option value="development">개발부담금</option>
                    <option value="sewage">하수요금감면</option>
                    <option value="design">설계도서검토</option>
                    <option value="survey">시공측량</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333]">
                    문의 내용 <span className="text-[#C9A962]">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="문의하실 내용을 입력해 주세요."
                    rows={5}
                    required
                    className="bg-[#F5F3EF] border-0 rounded-none resize-none focus:ring-2 focus:ring-[#C9A962]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0F1C2E] hover:bg-[#1a2d45] text-white rounded-none h-14 text-base font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  문의하기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
