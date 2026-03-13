"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Target, ArrowRight, Sparkles, Cpu, Shield, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: Award,
    title: "Chất Lượng Hàng Đầu",
    description: "Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất cho khách hàng.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Nghiệp",
    description: "Hơn 50 chuyên gia công nghệ với nhiều năm kinh nghiệm trong ngành.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Target,
    title: "Tập Trung Khách Hàng",
    description: "Luôn đặt lợi ích của khách hàng lên hàng đầu trong mọi quyết định.",
    gradient: "from-emerald-500 to-teal-400",
  },
]

const achievements = [
  { icon: Shield, text: "Đạt chứng nhận ISO 9001:2015" },
  { icon: Award, text: "Trúng nhiều gói thầu lớn toàn quốc" },
  { icon: Cpu, text: "Đối tác chiến lược Microsoft, Oracle" },
  { icon: Users, text: "Phục vụ nhiều cơ quan nhà nước" },
]

const techStack = [
  "React", "Next.js", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes"
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Về Chúng Tôi
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Đối Tác Tin Cậy Trong{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Chuyển Đổi Số
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Công ty TNHH Công Nghệ 24HCV xin gửi đến Quý khách hàng lời chúc sức khỏe, 
                thành công và thịnh vượng. Chúng tôi xin cảm ơn Quý khách hàng đã tín nhiệm, 
                tin dùng và đồng hành cùng sự phát triển của chúng tôi trong thời gian qua.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`group flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Công nghệ chúng tôi sử dụng:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1.5 text-sm bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 600}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Button 
              size="lg" 
              className={`group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <span className="relative z-10 flex items-center">
                Tìm Hiểu Thêm
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          {/* Right - Visual */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,179,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,179,237,0.03)_1px,transparent_1px)] bg-[size:30px_30px] rounded-3xl" />
              
              {/* Achievement cards */}
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Thành Tựu Nổi Bật
                  </h3>
                </div>
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-4 bg-card/80 p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{achievement.text}</span>
                    <CheckCircle2 className="h-5 w-5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* Stats overlay */}
              <div 
                className={`absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-accent text-primary-foreground p-6 rounded-2xl shadow-xl transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">Năm Kinh Nghiệm</div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-primary/30 rounded-xl rotate-12 opacity-50" />
            <div className="absolute -bottom-4 left-1/4 w-8 h-8 bg-accent/30 rounded-lg rotate-45" />
            
            {/* Glowing orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-[50px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
