"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Shield, Globe, ChevronDown, MousePointer2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Dự Án", sublabel: "Hoàn Thành" },
  { value: 200, suffix: "+", label: "Khách Hàng", sublabel: "Tin Tưởng" },
  { value: 15, suffix: "+", label: "Năm", sublabel: "Kinh Nghiệm" },
  { value: 50, suffix: "+", label: "Chuyên Gia", sublabel: "Công Nghệ" },
]

const features = [
  { icon: Zap, text: "Giải pháp phần mềm tùy chỉnh" },
  { icon: Shield, text: "Bảo mật dữ liệu tuyệt đối" },
  { icon: Globe, text: "Chuyển đổi số toàn diện" },
]

const slides = [
  {
    title: "Chuyển Đổi Số",
    highlight: "Thông Minh",
    description: "Nâng tầm doanh nghiệp với các giải pháp công nghệ tiên tiến, đưa bạn vào kỷ nguyên số hóa toàn diện.",
  },
  {
    title: "Giải Pháp",
    highlight: "Phần Mềm",
    description: "Phát triển ứng dụng tùy chỉnh, tối ưu quy trình làm việc và tăng hiệu suất kinh doanh.",
  },
  {
    title: "Số Hóa",
    highlight: "Tài Liệu",
    description: "Chuyển đổi kho tài liệu giấy sang định dạng số với độ chính xác cao và bảo mật tuyệt đối.",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
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
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tabular-nums">
      {count}{suffix}
    </div>
  )
}

// Animated particles background
function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${Math.random() > 0.5 ? 'var(--primary)' : 'var(--accent)'} 0%, transparent 70%)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

// Hex grid background
function HexGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <polygon 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" 
            transform="translate(-12,-7)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" className="text-primary" />
    </svg>
  )
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <HexGrid />
      <ParticlesBackground />
      
      {/* Animated gradient orbs with parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse"
        style={{ 
          animationDelay: "1s",
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` 
        }}
      />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(99,179,237,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan pointer-events-none" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium backdrop-blur-sm animate-glow">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Công ty TNHH Công Nghệ 24HCV</span>
              <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
            </div>
            
            {/* Slider content */}
            <div className="relative min-h-[200px] md:min-h-[220px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                    {slide.title}{" "}
                    <span className="relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                        {slide.highlight}
                      </span>
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mt-6">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex gap-3 items-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                    currentSlide === index
                      ? "w-12 bg-primary/30"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                >
                  {currentSlide === index && (
                    <div className="absolute inset-y-0 left-0 bg-primary rounded-full animate-progress" />
                  )}
                </button>
              ))}
              <span className="text-sm text-muted-foreground ml-2">0{currentSlide + 1} / 0{slides.length}</span>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center gap-4 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8">
                <span className="relative z-10 flex items-center">
                  Khám Phá Ngay
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button size="lg" variant="outline" className="group border-border hover:border-primary/50 hover:bg-primary/5 text-lg h-14 px-8">
                <Play className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                Xem Video
              </Button>
            </div>
          </div>
          
          {/* Right content - Stats with futuristic design */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main stats container */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-xl animate-pulse" />
              
              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-4 p-6 rounded-3xl bg-card/30 backdrop-blur-md border border-border/50">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,179,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,179,237,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl" />
                
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 ${
                      index % 2 === 1 ? "translate-y-6" : ""
                    }`}
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
                    
                    <div className="relative">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <div className="text-base font-semibold text-foreground mt-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.sublabel}
                      </div>
                    </div>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative tech lines */}
            <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-64 opacity-40" viewBox="0 0 64 256">
              <path d="M32 0 L32 64 L64 96 L64 160 L32 192 L32 256" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-draw-line" />
              <circle cx="32" cy="64" r="4" fill="var(--primary)" className="animate-pulse" />
              <circle cx="64" cy="128" r="4" fill="var(--accent)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
              <circle cx="32" cy="192" r="4" fill="var(--primary)" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Floating orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-float" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[60px] animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`} style={{ transitionDelay: "1200ms" }}>
          <span className="text-sm text-muted-foreground">Cuộn xuống để khám phá</span>
          <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes scan {
          0% { background-position: 0 -100vh; }
          100% { background-position: 0 100vh; }
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.3); }
          50% { box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5); }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-scan {
          animation: scan 10s linear infinite;
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }
        .animate-progress {
          animation: progress 5s linear infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-draw-line {
          stroke-dasharray: 1000;
          animation: draw-line 3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
