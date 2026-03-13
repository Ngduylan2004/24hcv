"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Search, Lightbulb, Code2, Rocket, HeartHandshake, Sparkles } from "lucide-react"

const processes = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Tiếp Nhận Yêu Cầu",
    description: "Lắng nghe và tìm hiểu kỹ nhu cầu của khách hàng thông qua các buổi tư vấn chuyên sâu.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    step: "02",
    icon: Search,
    title: "Khảo Sát & Phân Tích",
    description: "Khảo sát hiện trạng, phân tích quy trình và đánh giá nhu cầu thực tế của doanh nghiệp.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Đề Xuất Giải Pháp",
    description: "Xây dựng phương án tối ưu với chi phí hợp lý và lộ trình triển khai rõ ràng.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    step: "04",
    icon: Code2,
    title: "Triển Khai Thực Hiện",
    description: "Thực hiện dự án theo đúng kế hoạch với đội ngũ chuyên gia giàu kinh nghiệm.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Bàn Giao & Đào Tạo",
    description: "Bàn giao sản phẩm, đào tạo người dùng và hướng dẫn vận hành hệ thống.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    step: "06",
    icon: HeartHandshake,
    title: "Hỗ Trợ Dài Hạn",
    description: "Cam kết hỗ trợ kỹ thuật, bảo trì và nâng cấp hệ thống trong suốt vòng đời sử dụng.",
    gradient: "from-sky-500 to-blue-400",
  },
]

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processes.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,179,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,179,237,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Quy Trình Làm Việc
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quy Trình{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Chuyên Nghiệp
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            6 bước để đưa doanh nghiệp của bạn bước vào kỷ nguyên số hóa một cách suôn sẻ và hiệu quả.
          </p>
        </div>

        {/* Process timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-border">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${((activeStep + 1) / processes.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step number & icon */}
                <div className="relative mb-8">
                  <div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep 
                        ? `bg-gradient-to-br ${process.gradient} shadow-lg shadow-primary/20` 
                        : "bg-card border border-border"
                    }`}
                  >
                    <process.icon className={`w-8 h-8 ${index <= activeStep ? "text-white" : "text-muted-foreground"}`} />
                  </div>
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    index <= activeStep 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {process.step}
                  </div>

                  {/* Connection dot */}
                  <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 transition-all duration-500 ${
                    index <= activeStep 
                      ? "bg-primary border-background" 
                      : "bg-background border-border"
                  }`} />
                </div>

                {/* Content */}
                <div className={`text-center transition-all duration-500 ${
                  index === activeStep ? "opacity-100" : "opacity-70"
                }`}>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    index === activeStep ? "text-primary" : "text-foreground"
                  }`}>
                    {process.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`group relative flex gap-6 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step indicator line */}
              {index < processes.length - 1 && (
                <div className="absolute left-[52px] top-[88px] w-0.5 h-[calc(100%-40px)] bg-border" />
              )}
              
              {/* Icon */}
              <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${process.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <process.icon className="w-7 h-7 text-white" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                  {process.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
