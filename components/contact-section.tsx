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
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "주소",
      value: "서울특별시 영등포구 여의도동 28-1",
      subValue: "정안빌딩 10층",
    },
    {
      icon: Phone,
      label: "전화",
      value: "02-784-0000",
      subValue: "평일 09:00 - 18:00",
    },
    {
      icon: Mail,
      label: "이메일",
      value: "research@jeongan.org",
      subValue: "문의 및 협력 제안",
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
            연구 협력, 자료 요청, 세미나 참여 등 다양한 문의를 환영합니다.
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

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">지도 영역</p>
                </div>
              </div>
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
                    이메일 <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    className="bg-background"
                  />
                </div>
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
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
