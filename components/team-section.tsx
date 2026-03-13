"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Sparkles } from "lucide-react"

const team = [
  {
    name: "Nguyễn Văn Hùng",
    role: "Tổng Giám Đốc (CEO)",
    bio: "Hơn 20 năm kinh nghiệm trong ngành CNTT, từng giữ vị trí quản lý cấp cao tại FPT và VNPT.",
    initials: "NH",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Trần Minh Đức",
    role: "Giám Đốc Công Nghệ (CTO)",
    bio: "Chuyên gia về kiến trúc phần mềm và AI, tốt nghiệp Tiến sĩ CNTT tại Đại học Bách Khoa.",
    initials: "MD",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Lê Thị Hương",
    role: "Giám Đốc Vận Hành (COO)",
    bio: "15 năm kinh nghiệm quản lý dự án chuyển đổi số cho các cơ quan nhà nước và doanh nghiệp lớn.",
    initials: "LH",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Phạm Quốc Anh",
    role: "Giám Đốc Kinh Doanh (CSO)",
    bio: "Chuyên gia tư vấn giải pháp số hóa, đã triển khai thành công hơn 200 dự án cho khách hàng.",
    initials: "QA",
    gradient: "from-amber-500 to-orange-400",
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Đội Ngũ Lãnh Đạo
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Những Con Người{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Tài Năng
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Đội ngũ lãnh đạo giàu kinh nghiệm và tâm huyết, luôn sẵn sàng đồng hành cùng bạn trong mọi dự án.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`group bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative inline-block mb-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {member.initials}
                  </div>
                  {/* Status dot */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-4 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <div className="text-sm text-primary font-medium mb-4">{member.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group/icon"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all group/icon"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                  </a>
                </div>
              </CardContent>

              {/* Hover glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
