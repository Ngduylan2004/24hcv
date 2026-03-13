"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Zap, Shield, Clock, HeadphonesIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  { icon: Zap, text: "Triển khai nhanh" },
  { icon: Shield, text: "Bảo mật tuyệt đối" },
  { icon: Clock, text: "Hỗ trợ 24/7" },
  { icon: HeadphonesIcon, text: "Tư vấn miễn phí" },
]

export function CTASection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/30 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan pointer-events-none" />
      
      {/* Tech lines */}
      <svg className="absolute left-10 top-1/2 -translate-y-1/2 w-20 h-40 opacity-20" viewBox="0 0 80 160">
        <path d="M40 0 L40 50 L70 80 L70 110 L40 140 L40 160" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="40" cy="50" r="4" fill="white" className="animate-pulse" />
        <circle cx="70" cy="95" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="40" cy="140" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "1s" }} />
      </svg>
      <svg className="absolute right-10 top-1/2 -translate-y-1/2 w-20 h-40 opacity-20" viewBox="0 0 80 160">
        <path d="M40 0 L40 50 L10 80 L10 110 L40 140 L40 160" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="40" cy="50" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
        <circle cx="10" cy="95" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
        <circle cx="40" cy="140" r="4" fill="white" className="animate-pulse" style={{ animationDelay: "1.3s" }} />
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main card with glass effect */}
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg" />

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Bắt đầu ngay hôm nay
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Sẵn Sàng{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Chuyển Đổi Số</span>
                  <div className="absolute bottom-1 left-0 right-0 h-3 bg-accent/50 -skew-x-3" />
                </span>
                <br className="hidden sm:block" />
                Cùng{" "}
                <span className="relative">
                  24HCV
                  <Zap className="absolute -top-2 -right-8 w-6 h-6 text-accent animate-bounce" />
                </span>
                ?
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá 
                cho các giải pháp công nghệ phù hợp với doanh nghiệp của bạn.
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <benefit.icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-white">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 h-14 px-10 text-lg"
                >
                  <span className="relative z-10 flex items-center font-semibold">
                    Liên Hệ Tư Vấn
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white/50 h-14 px-10 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  0123 456 789
                </Button>
              </div>

              {/* Trust badges */}
              <div 
                className={`mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>Tư vấn miễn phí 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <span>Báo giá trong 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.6s" }} />
                  <span>Hỗ trợ trọn đời</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { background-position: 0 -100%; }
          100% { background-position: 0 100%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
