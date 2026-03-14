"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Monitor, RefreshCw, FileDigit, Archive, FileCheck, Laptop, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    id: "phan-mem",
    icon: Monitor,
    title: "Giải Pháp Phần Mềm",
    description: "Phát triển phần mềm tùy chỉnh, ứng dụng web và mobile đáp ứng mọi nhu cầu kinh doanh của bạn.",
    features: ["Phần mềm quản lý doanh nghiệp", "Ứng dụng web & mobile", "Tích hợp API", "Bảo trì & nâng cấp"],
    gradient: "from-blue-600 to-blue-400",
  },
  {
    id: "chuyen-doi-so",
    icon: RefreshCw,
    title: "Chuyển Đổi Số Toàn Diện",
    description: "Tư vấn, thiết kế và triển khai chiến lược chuyển đổi số toàn diện cho doanh nghiệp.",
    features: ["Đánh giá hiện trạng", "Xây dựng roadmap", "Triển khai giải pháp", "Đào tạo nhân sự"],
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    id: "so-hoa",
    icon: FileDigit,
    title: "Số Hóa Tài Liệu",
    description: "Chuyển đổi tài liệu giấy sang định dạng số với độ chính xác cao và bảo mật tuyệt đối.",
    features: ["Scan tốc độ cao", "OCR thông minh", "Lưu trữ đám mây", "Truy xuất nhanh chóng"],
    gradient: "from-violet-600 to-violet-400",
  },
  {
    id: "chinh-ly",
    icon: Archive,
    title: "Chỉnh Lý Lưu Trữ",
    description: "Sắp xếp, phân loại và lập hồ sơ lưu trữ theo tiêu chuẩn quốc gia một cách chuyên nghiệp.",
    features: ["Phân loại hồ sơ", "Lập mục lục", "Đánh số ký hiệu", "Bảo quản theo tiêu chuẩn"],
    gradient: "from-orange-600 to-orange-400",
  },
  {
    id: "tu-bo",
    icon: FileCheck,
    title: "Tu Bổ Tài Liệu",
    description: "Khôi phục và bảo quản tài liệu cũ, hư hỏng theo phương pháp chuyên nghiệp quốc tế.",
    features: ["Khử axit, nấm mốc", "Gia cố tài liệu", "Đóng lại bìa sách", "Bảo quản dài hạn"],
    gradient: "from-rose-600 to-rose-400",
  },
  {
    id: "thiet-bi",
    icon: Laptop,
    title: "Cung Cấp Thiết Bị CNTT",
    description: "Cung cấp và cho thuê thiết bị CNTT, hộp kệ lưu trữ chất lượng cao với bảo hành.",
    features: ["Máy tính & server", "Thiết bị mạng", "Hộp kệ lưu trữ", "Bảo hành dài hạn"],
    gradient: "from-sky-600 to-sky-400",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Dịch Vụ Của Chúng Tôi
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Giải Pháp Công Nghệ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Toàn Diện
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ từ phát triển phần mềm, chuyển đổi số 
            đến số hóa và lưu trữ tài liệu chuyên nghiệp.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              id={service.id}
              className={`group relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              <CardHeader className="pb-4 relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group/btn mt-4 hover:bg-primary/10">
                  <span className="text-muted-foreground group-hover/btn:text-primary transition-colors">
                    Tìm Hiểu Thêm
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 text-muted-foreground group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all" />
                </Button>
              </CardContent>
              
              {/* Hover glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
