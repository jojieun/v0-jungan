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
    console.log(formData)
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "주소",
      value: "부산광역시 연제구 중앙대로 1193",
      subValue: "삼조빌딩 2층 (우: 47506)",
      color: "from-primary to-[#9a1f30]",
    },
    {
      icon: Phone,
      label: "전화",
      value: "070-7010-8287",
      subValue: "평일 09:00 - 18:00",
      color: "from-secondary to-[#2a4d7a]",
    },
    {
      icon: Mail,
      label: "이메일",
      value: "jung-an55@naver.com",
      subValue: "문의 및 상담",
      color: "from-primary to-[#9a1f30]",
    },
    {
      icon: Clock,
      label: "운영 시간",
      value: "월 - 금 09:00 ~ 18:00",
      subValue: "점심시간 12:00 ~ 13:00",
      color: "from-secondary to-[#2a4d7a]",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">Contact</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2 text-balance">
            문의하기
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg">
            연구 협력, 서비스 문의, 상담 등 다양한 문의를 환영합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif font-bold text-2xl text-foreground mb-8">연락처 정보</h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group flex gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50 card-hover"
              >
                <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl shadow-lg`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subValue}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border/50 shadow-lg mt-8">
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
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 lg:p-10 border border-border/50 shadow-xl relative overflow-hidden">
              {/* Form Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              
              <h3 className="font-serif font-bold text-2xl text-foreground mb-8 relative">
                문의 양식
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      이름 <span className="text-primary">*</span>
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      required
                      className="bg-background border-border/50 rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1">
                      연락처 <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      required
                      className="bg-background border-border/50 rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">이메일</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="bg-background border-border/50 rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">소속</label>
                    <Input
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="회사/기관명"
                      className="bg-background border-border/50 rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-1">
                    문의 분야 <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-border/50 bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                  <label className="text-sm font-medium text-foreground flex items-center gap-1">
                    문의 내용 <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="문의하실 내용을 입력해 주세요."
                    rows={5}
                    required
                    className="bg-background border-border/50 rounded-xl resize-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-[#9a1f30] hover:from-primary/90 hover:to-[#9a1f30]/90 text-white rounded-xl h-14 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  문의하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
