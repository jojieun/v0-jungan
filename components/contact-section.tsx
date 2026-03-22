"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
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
    // Handle form submission
    console.log(formData)
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
      label: "운영 시간",
      value: "월 - 금 09:00 ~ 18:00",
      subValue: "점심시간 12:00 ~ 13:00",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mt-2 text-balance">
            문의하기
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            연구 협력, 서비스 문의, 상담 등 다양한 문의를 환영합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-xl text-foreground mb-6">연락처 정보</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.subValue}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden relative">
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

          {/* Contact Form */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="font-serif font-bold text-xl text-foreground mb-6">문의 양식</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    이름 <span className="text-primary">*</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    연락처 <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-0000-0000"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    이메일
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    소속
                  </label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="회사/기관명"
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  문의 분야 <span className="text-primary">*</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
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
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  문의 내용 <span className="text-primary">*</span>
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="문의하실 내용을 입력해 주세요."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
