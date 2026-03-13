"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles } from "lucide-react"

const partners = [
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "Oracle", logo: "ORACLE" },
  { name: "HP", logo: "HP" },
  { name: "Kodak", logo: "KODAK" },
  { name: "Avision", logo: "AVISION" },
  { name: "Dell", logo: "DELL" },
  { name: "Canon", logo: "CANON" },
  { name: "Epson", logo: "EPSON" },
]

export function PartnersSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Đối Tác Chiến Lược
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Đối tác công nghệ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              hàng đầu thế giới
            </span>
          </h3>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* First row - scrolling left */}
          <div className="overflow-hidden mb-4">
            <div 
              className={`flex gap-6 ${isVisible ? 'animate-scroll-left' : ''}`}
              style={{ width: 'max-content' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="group relative flex items-center justify-center w-44 h-20 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-primary/80 transition-all duration-300 tracking-wider relative z-10">
                    {partner.logo}
                  </span>
                  
                  {/* Corner accents on hover */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary/0 group-hover:border-primary/40 rounded-tl transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-primary/0 group-hover:border-primary/40 rounded-br transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling right */}
          <div className="overflow-hidden">
            <div 
              className={`flex gap-6 ${isVisible ? 'animate-scroll-right' : ''}`}
              style={{ width: 'max-content' }}
            >
              {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="group relative flex items-center justify-center w-44 h-20 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-primary/80 transition-all duration-300 tracking-wider relative z-10">
                    {partner.logo}
                  </span>
                  
                  {/* Corner accents on hover */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary/0 group-hover:border-primary/40 rounded-tl transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-primary/0 group-hover:border-primary/40 rounded-br transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
