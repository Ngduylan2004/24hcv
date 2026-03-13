"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "Việt Nam",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "Liên hệ qua form",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@24hcv.com",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    content: "Thứ 2 - Thứ 6: 8:00 - 17:30",
    gradient: "from-orange-500 to-amber-400",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Liên Hệ Với Chúng Tôi
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hãy Để Chúng Tôi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hỗ Trợ Bạn
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Điền thông tin bên dưới hoặc liên hệ trực tiếp với chúng tôi. 
            Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`group flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder with futuristic design */}
            <div 
              className={`mt-8 rounded-2xl overflow-hidden border border-border h-64 bg-card/50 relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,179,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,179,237,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Center marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute" />
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center relative">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border">
                <p className="text-xs text-muted-foreground">Việt Nam</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card 
            className={`lg:col-span-3 bg-card/50 backdrop-blur-sm border-border transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      Họ và Tên <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Số Điện Thoại
                    </label>
                    <Input
                      type="tel"
                      placeholder="0123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-card border-border focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Công Ty
                    </label>
                    <Input
                      placeholder="Tên công ty"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-card border-border focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nội Dung <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    placeholder="Mô tả nhu cầu của bạn..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-card border-border focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Gửi Yêu Cầu
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>

                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
