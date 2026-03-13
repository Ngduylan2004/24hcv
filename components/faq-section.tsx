"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Chi phí triển khai giải pháp số hóa tài liệu như thế nào?",
    answer: "Chi phí số hóa tài liệu phụ thuộc vào số lượng trang, loại tài liệu, độ phức tạp và các yêu cầu đặc biệt. Chúng tôi sẽ khảo sát và báo giá chi tiết sau khi nắm rõ yêu cầu của bạn. Thông thường giá từ 500 - 2.000 VNĐ/trang tùy loại."
  },
  {
    question: "Thời gian triển khai một dự án chuyển đổi số mất bao lâu?",
    answer: "Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của dự án. Dự án nhỏ có thể hoàn thành trong 1-3 tháng, dự án lớn có thể kéo dài 6-12 tháng. Chúng tôi cam kết hoàn thành đúng tiến độ đã thỏa thuận."
  },
  {
    question: "24HCV có hỗ trợ bảo hành và bảo trì sau khi triển khai không?",
    answer: "Có, chúng tôi cam kết hỗ trợ bảo hành 12-24 tháng tùy loại dịch vụ và gói bảo trì dài hạn với mức phí ưu đãi. Đội ngũ hỗ trợ kỹ thuật 24/7 luôn sẵn sàng xử lý mọi vấn đề phát sinh."
  },
  {
    question: "Dữ liệu và tài liệu của khách hàng có được bảo mật không?",
    answer: "Bảo mật thông tin là ưu tiên hàng đầu của 24HCV. Chúng tôi áp dụng các tiêu chuẩn bảo mật quốc tế ISO 27001, mã hóa dữ liệu, kiểm soát truy cập nghiêm ngặt và ký cam kết bảo mật (NDA) với tất cả khách hàng."
  },
  {
    question: "24HCV có thể tùy chỉnh phần mềm theo yêu cầu đặc thù không?",
    answer: "Hoàn toàn có thể. Chúng tôi chuyên phát triển phần mềm tùy chỉnh (custom software) đáp ứng chính xác nhu cầu của từng khách hàng. Từ thiết kế UI/UX đến tính năng, mọi thứ đều có thể được điều chỉnh theo yêu cầu."
  },
  {
    question: "Làm thế nào để bắt đầu hợp tác với 24HCV?",
    answer: "Rất đơn giản! Bạn chỉ cần liên hệ với chúng tôi qua hotline 0123 456 789 hoặc điền form liên hệ trên website. Đội ngũ tư vấn sẽ liên hệ lại trong vòng 24 giờ để lắng nghe nhu cầu và tư vấn giải pháp phù hợp nhất."
  },
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
    <section id="faq" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Header */}
          <div 
            className={`lg:sticky lg:top-32 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Câu Hỏi Thường Gặp
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Giải Đáp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Thắc Mắc
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Những câu hỏi thường gặp từ khách hàng. Nếu bạn có câu hỏi khác, 
              đừng ngần ngại liên hệ với chúng tôi.
            </p>

            {/* Support card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Vẫn cần hỗ trợ?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
              </p>
              <a href="#contact" className="text-primary font-medium text-sm hover:underline">
                Liên hệ ngay &rarr;
              </a>
            </div>
          </div>

          {/* Right - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group rounded-2xl bg-card/50 border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${openIndex === index ? "shadow-lg shadow-primary/5" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "bg-primary rotate-180" : ""
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      openIndex === index ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                </button>
                
                <div className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="h-px bg-border mb-4" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
