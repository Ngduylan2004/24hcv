"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    role: "Giám đốc CNTT",
    company: "Tập đoàn FLC",
    avatar: "NA",
    content: "24HCV đã giúp chúng tôi chuyển đổi số thành công với hệ thống quản lý tài liệu hiện đại. Tiết kiệm 60% thời gian xử lý công việc.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    role: "Phó Giám đốc",
    company: "UBND Tỉnh Bình Dương",
    avatar: "TM",
    content: "Dịch vụ số hóa tài liệu của 24HCV rất chuyên nghiệp. Hơn 1 triệu trang tài liệu được số hóa với độ chính xác 99.9%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    role: "CEO",
    company: "Công ty TNHH ABC",
    avatar: "LN",
    content: "Phần mềm quản lý doanh nghiệp do 24HCV phát triển giúp tăng năng suất làm việc của nhân viên lên 40%. Rất đáng tin cậy!",
    rating: 5,
  },
  {
    id: 4,
    name: "Phạm Minh Tuấn",
    role: "Trưởng phòng HCTH",
    company: "Sở TN&MT Đà Nẵng",
    avatar: "PT",
    content: "Đội ngũ 24HCV làm việc rất chuyên nghiệp và tận tâm. Dự án số hóa hồ sơ địa chính hoàn thành trước thời hạn 2 tháng.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hoàng Thị Lan",
    role: "Giám đốc",
    company: "Bệnh viện Đa khoa XYZ",
    avatar: "HL",
    content: "Hệ thống quản lý bệnh án điện tử của 24HCV giúp bệnh viện chúng tôi nâng cao chất lượng phục vụ bệnh nhân đáng kể.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
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
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex, isAnimating])

  const nextSlide = () => {
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Khách Hàng Nói Gì
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Được Tin Tưởng Bởi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              200+ Doanh Nghiệp
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hàng trăm doanh nghiệp và cơ quan đã tin tưởng lựa chọn 24HCV làm đối tác chuyển đổi số.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${currentIndex}`}
                className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${index === 1 ? "md:scale-105 md:z-10" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 min-h-[96px]">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} - {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isAnimating}
              className="border-border hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isAnimating}
              className="border-border hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
