"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Giải Pháp Phần Mềm", href: "#phan-mem" },
  { name: "Chuyển Đổi Số", href: "#chuyen-doi-so" },
  { name: "Số Hóa Tài Liệu", href: "#so-hoa" },
  { name: "Chỉnh Lý Lưu Trữ", href: "#chinh-ly" },
  { name: "Tu Bổ Tài Liệu", href: "#tu-bo" },
  { name: "Cung Cấp Thiết Bị", href: "#thiet-bi" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="absolute -top-24 left-1/2 h-48 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-[-8rem] top-14 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      </div>
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-500 overflow-hidden ${
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
      }`}>
        
      </div>

      {/* Main header */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo24hcv.png" alt="24HCV" width={100} height={100} />
         
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group">
              Trang Chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#about" className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              Về Chúng Tôi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                Dịch Vụ 
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card/95 backdrop-blur-xl border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href} className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#projects" className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              Dự Án
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#news" className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              Tin Tức
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#contact" className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              Liên Hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
              Đăng Nhập
            </Button>
            <Button size="sm" className="relative overflow-hidden group bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <span className="relative z-10">Liên Hệ Ngay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="pb-4 border-t border-border pt-4 bg-card/50 backdrop-blur-xl rounded-xl p-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Trang Chủ
            </Link>
            <Link href="#about" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Về Chúng Tôi
            </Link>
            <div className="space-y-2">
              <span className="text-sm font-medium text-foreground">Dịch Vụ</span>
              <div className="pl-4 space-y-2 border-l-2 border-primary/30">
                {services.map((service) => (
                  <Link key={service.name} href={service.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="#projects" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Dự Án
            </Link>
            <Link href="#news" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Tin Tức
            </Link>
            <Link href="#contact" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Liên Hệ
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                Đăng Nhập
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                Liên Hệ Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
