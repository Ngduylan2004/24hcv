"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Award, Briefcase, Clock, CheckCircle2 } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Dự Án Hoàn Thành",
    description: "Dự án đã triển khai thành công",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Khách Hàng",
    description: "Doanh nghiệp và cơ quan tin tưởng",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Năm Kinh Nghiệm",
    description: "Hoạt động trong ngành CNTT",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Chuyên Gia",
    description: "Đội ngũ kỹ sư và chuyên gia",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "Tỷ Lệ Hài Lòng",
    description: "Khách hàng đánh giá tích cực",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: CheckCircle2,
    value: 10,
    suffix: "M+",
    label: "Trang Tài Liệu",
    description: "Đã được số hóa và lưu trữ",
    gradient: "from-sky-500 to-blue-400",
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(99,179,237,0.03)_50%,transparent_100%)] bg-[length:100%_8px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Label */}
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
