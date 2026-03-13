"use client"

import { useEffect, useState } from "react"

export function TechLines() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,179,237,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(99,179,237,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      
      {/* Vertical scan lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-50">
        <div className="absolute top-0 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent animate-scan-down" />
      </div>
      <div className="absolute left-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute right-[25%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-50">
        <div className="absolute bottom-0 w-px h-32 bg-gradient-to-t from-primary/50 to-transparent animate-scan-up" />
      </div>
      
      {/* Horizontal lines */}
      <div className="absolute left-0 right-0 top-[15%] h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-40" />
      <div className="absolute left-0 right-0 top-[85%] h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-30" />
      
      {/* Animated corner circuits - Top left */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-primary/20" viewBox="0 0 128 128">
        <path 
          d="M0 64 L32 64 L48 48 L48 32 L64 16 L64 0" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          className="animate-draw-path"
        />
        <path 
          d="M0 80 L16 80 L32 64" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none" 
          className="animate-draw-path"
          style={{ animationDelay: "0.5s" }}
        />
        <circle cx="32" cy="64" r="3" fill="currentColor" className="animate-pulse" />
        <circle cx="48" cy="48" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
        <circle cx="64" cy="16" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
      </svg>
      
      {/* Animated corner circuits - Top right */}
      <svg className="absolute top-20 right-10 w-32 h-32 text-primary/20" viewBox="0 0 128 128">
        <path 
          d="M128 64 L96 64 L80 48 L80 32 L64 16 L64 0" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
        />
        <path 
          d="M128 80 L112 80 L96 64" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
          style={{ animationDelay: "0.7s" }}
        />
        <circle cx="96" cy="64" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
        <circle cx="80" cy="48" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="64" cy="16" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
      </svg>
      
      {/* Animated corner circuits - Bottom left */}
      <svg className="absolute bottom-20 left-10 w-32 h-32 text-primary/20" viewBox="0 0 128 128">
        <path 
          d="M0 64 L32 64 L48 80 L48 96 L64 112 L64 128" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
          style={{ animationDelay: "0.3s" }}
        />
        <path 
          d="M0 48 L16 48 L32 64" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
          style={{ animationDelay: "0.8s" }}
        />
        <circle cx="32" cy="64" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
        <circle cx="48" cy="80" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.7s" }} />
        <circle cx="64" cy="112" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1s" }} />
      </svg>
      
      {/* Animated corner circuits - Bottom right */}
      <svg className="absolute bottom-20 right-10 w-32 h-32 text-primary/20" viewBox="0 0 128 128">
        <path 
          d="M128 64 L96 64 L80 80 L80 96 L64 112 L64 128" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
          style={{ animationDelay: "0.5s" }}
        />
        <path 
          d="M128 48 L112 48 L96 64" 
          stroke="currentColor" 
          strokeWidth="1" 
          fill="none"
          className="animate-draw-path"
          style={{ animationDelay: "1s" }}
        />
        <circle cx="96" cy="64" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
        <circle cx="80" cy="80" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "0.9s" }} />
        <circle cx="64" cy="112" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
      </svg>

      {/* Floating data points */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-data"
          style={{
            left: `${15 + (i * 10)}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Hexagon accent */}
      <svg className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.02]" viewBox="0 0 800 800">
        <polygon 
          points="400,50 700,200 700,500 400,650 100,500 100,200" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          className="text-primary"
        />
        <polygon 
          points="400,100 650,225 650,475 400,600 150,475 150,225" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          className="text-primary"
        />
      </svg>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes scan-down {
          0% { top: -32px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100vh; opacity: 0; }
        }
        @keyframes scan-up {
          0% { bottom: -32px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { bottom: 100vh; opacity: 0; }
        }
        @keyframes draw-path {
          0% { stroke-dasharray: 500; stroke-dashoffset: 500; }
          100% { stroke-dasharray: 500; stroke-dashoffset: 0; }
        }
        @keyframes float-data {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
        }
        .animate-scan-down {
          animation: scan-down 8s linear infinite;
        }
        .animate-scan-up {
          animation: scan-up 8s linear infinite;
          animation-delay: 4s;
        }
        .animate-draw-path {
          animation: draw-path 3s ease-out forwards;
        }
        .animate-float-data {
          animation: float-data 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
