"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Building2, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Chỉnh lý và số hóa tài liệu lưu trữ tại Văn phòng Đảng ủy Phường Đông Triều",
    client: "Văn phòng Đảng ủy phường Đông Triều",
    date: "11/12/2025",
    type: "Chào hàng cạnh tranh",
    category: "Số hóa tài liệu",
    status: "Hoàn thành",
    value: "2.5 tỷ VNĐ",
  },
  {
    id: 2,
    title: "Chỉnh lý, số hóa tài liệu lưu trữ của Đảng ủy cấp xã, thị trấn cũ thuộc địa bàn xã Quảng Hà",
    client: "Văn phòng Đảng ủy xã Quảng Hà",
    date: "10/12/2025",
    type: "Chào hàng cạnh tranh",
    category: "Chỉnh lý lưu trữ",
    status: "Hoàn thành",
    value: "1.8 tỷ VNĐ",
  },
  {
    id: 3,
    title: "Chỉnh lý và số hóa tài liệu lưu trữ của Đảng ủy đặc khu Cô Tô",
    client: "Văn phòng Đảng ủy đặc khu Cô Tô",
    date: "05/12/2025",
    type: "Chào hàng cạnh tranh",
    category: "Số hóa tài liệu",
    status: "Hoàn thành",
    value: "3.2 tỷ VNĐ",
  },
  {
    id: 4,
    title: "Trang bị bản quyền phần mềm hệ điều hành máy tính và phần mềm soạn thảo văn bản",
    client: "Công an Thành phố Hồ Chí Minh",
    date: "01/12/2025",
    type: "Chỉ định thầu",
    category: "Cung cấp phần mềm",
    status: "Hoàn thành",
    value: "5.6 tỷ VNĐ",
  },
  {
    id: 5,
    title: "Triển khai hệ thống quản lý văn bản điện tử toàn tỉnh Bình Dương",
    client: "UBND Tỉnh Bình Dương",
    date: "28/11/2025",
    type: "Đấu thầu rộng rãi",
    category: "Phần mềm",
    status: "Đang triển khai",
    value: "8.5 tỷ VNĐ",
  },
  {
    id: 6,
    title: "Số hóa toàn bộ hồ sơ địa chính giai đoạn 1990-2020",
    client: "Sở TN&MT Đà Nẵng",
    date: "20/11/2025",
    type: "Đấu thầu rộng rãi",
    category: "Số hóa tài liệu",
    status: "Hoàn thành",
    value: "12.3 tỷ VNĐ",
  },
]

const categories = ["Tất cả", "Số hóa tài liệu", "Chỉnh lý lưu trữ", "Phần mềm", "Cung cấp phần mềm"]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("Tất cả")
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === "Tất cả" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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

  const scrollTo = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Hoạt Động Gần Đây
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Dự Án{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Tiêu Biểu
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Những gói thầu và dự án mà 24HCV đã thực hiện thành công trong thời gian gần đây.
            </p>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scrollTo("prev")}
              className="border-border hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scrollTo("next")}
              className="border-border hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="group border-border hover:border-primary/50 hover:bg-primary/10 ml-2">
              Xem Tất Cả
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Category filter */}
        <div 
          className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects slider */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group flex-shrink-0 w-[350px] md:w-[400px] snap-start bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`${
                      project.status === "Hoàn thành" 
                        ? "text-accent border-accent/30 bg-accent/10" 
                        : "text-amber-400 border-amber-400/30 bg-amber-400/10"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors min-h-[56px]">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 text-primary/60" />
                    <span className="line-clamp-1">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary/60" />
                    <span>{project.date}</span>
                    <span className="text-border">|</span>
                    <span className="text-primary font-medium">{project.value}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{project.type}</span>
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                    Xem Chi Tiết
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(Math.ceil(filteredProjects.length / 3))].map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
