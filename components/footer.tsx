"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  company: [
    { name: "Về Chúng Tôi", href: "#about" },
    { name: "Đội Ngũ", href: "#team" },
    { name: "Tuyển Dụng", href: "#careers" },
    { name: "Tin Tức", href: "#news" },
  ],
  services: [
    { name: "Giải Pháp Phần Mềm", href: "#phan-mem" },
    { name: "Chuyển Đổi Số", href: "#chuyen-doi-so" },
    { name: "Số Hóa Tài Liệu", href: "#so-hoa" },
    { name: "Chỉnh Lý Lưu Trữ", href: "#chinh-ly" },
    { name: "Tu Bổ Tài Liệu", href: "#tu-bo" },
    { name: "Cung Cấp Thiết Bị", href: "#thiet-bi" },
  ],
  support: [
    { name: "Trung Tâm Hỗ Trợ", href: "#support" },
    { name: "Tài Liệu Hướng Dẫn", href: "#docs" },
    { name: "Câu Hỏi Thường Gặp", href: "#faq" },
    { name: "Chính Sách Bảo Mật", href: "#privacy" },
    { name: "Điều Khoản Sử Dụng", href: "#terms" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Newsletter section */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-border mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
                <Sparkles className="w-3 h-3" />
                Đăng ký nhận tin
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Nhận thông tin mới nhất
              </h3>
              <p className="text-muted-foreground">
                Đăng ký để nhận tin tức và các ưu đãi đặc biệt từ 24HCV
              </p>
            </div>
            <div className="flex gap-3">
              <Input 
                placeholder="Nhập email của bạn" 
                type="email"
                className="bg-card border-border focus:border-primary/50"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shrink-0">
                Đăng ký
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-primary-foreground font-bold text-lg relative z-10">24</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground tracking-tight">24HCV</span>
                <span className="text-xs text-primary">TECHNOLOGY</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Công ty TNHH Công Nghệ 24HCV - Đối tác tin cậy trong lĩnh vực 
              công nghệ thông tin và chuyển đổi số tại Việt Nam.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@24hcv.com" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>info@24hcv.com</span>
              </a>
              <a href="tel:+84123456789" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>0123 456 789</span>
              </a>
              <div className="group flex items-start gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span>123 Đường XYZ, Quận 1, TP. Hồ Chí Minh</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full" />
              Công Ty
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full" />
              Dịch Vụ
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-accent rounded-full" />
              Hỗ Trợ
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 24HCV Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Điều Khoản Sử Dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
