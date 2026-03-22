"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
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
    <section id="contact" className="py-24 bg-[#F7F8FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">Contact</span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            문의하기
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            연구 협력, 서비스 문의, 상담 등 다양한 문의를 환영합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* 연락처 정보 카드 */}
            <div className="bg-secondary rounded-2xl p-6 text-white">
              <h3 className="font-bold text-base text-white/90 mb-4">연락처 정보</h3>
              <div className="space-y-3.5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4 text-white/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white/50 mb-0.5">{info.label}</p>
                      <p className="font-medium text-white text-sm">{info.value}</p>
                      <p className="text-xs text-white/60">{info.subValue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border/40 shadow-sm" style={{ height: "220px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.6371671046473!2d129.07659!3d35.17788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzQwLjQiTiAxMjnCsDA0JzM1LjciRQ!5e0!3m2!1sko!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="정안경제연구원 위치"
              />
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm">
              <h3 className="font-bold text-base text-foreground mb-5">
                문의 양식
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      이름 <span className="text-primary">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      required
                      className="bg-[#F7F8FA] border-border/50 rounded-lg h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      연락처 <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      required
                      className="bg-[#F7F8FA] border-border/50 rounded-lg h-10 text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">이메일</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="bg-[#F7F8FA] border-border/50 rounded-lg h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">소속</label>
                    <Input
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="회사/기관명"
                      className="bg-[#F7F8FA] border-border/50 rounded-lg h-10 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-1">
                    문의 분야 <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full h-10 px-3 rounded-lg border border-border/50 bg-[#F7F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground flex items-center gap-1">
                    문의 내용 <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="문의하실 내용을 입력해 주세요."
                    rows={5}
                    required
                    className="bg-[#F7F8FA] border-border/50 rounded-lg resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-11 shadow-md shadow-primary/20 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  문의하기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
