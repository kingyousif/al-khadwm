"use client"

import { Lightbulb, ThumbsUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }

      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div ref={imageRef} className="relative">
            <img
              src="/airport-terminal-modern-architecture-with-planes.jpg"
              alt="Airport terminal"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-white py-8 px-4 writing-mode-vertical text-sm font-medium tracking-widest">
              Professional Ground Handling
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef}>
            <div className="text-sm text-[#D4AF37] font-semibold mb-2 tracking-wider uppercase">About Us</div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Al-KHADWM Company</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>AL-KHADWM</strong> is a leading provider of Airport Ground Handling Services and Ground Support Equipment Operations in the Kurdistan Region and Iraq. We specialize in comprehensive ground handling solutions including aircraft servicing, baggage handling, cargo operations, passenger services, and maintenance of ground support equipment. AL-KHADWM has built an enviable reputation by serving demanding airport requirements in KRG. We are renowned not only for our unmatched services, profound knowledge & expertise but also for our quality equipment, timely operations, technical support and comprehensive inventory management with warehousing facilities.
            </p>

            {/* Features */}
            <div ref={featuresRef} className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center">
                    <ThumbsUp className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Great Service</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Innovative Solutions</h3>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#D4AF37]" />
                </div>
              </div>
              <p className="text-muted-foreground pt-2">
                AL-KHADWM is renowned for profound knowledge & expertise in airport ground handling operations, quality ground support equipment, timely services, technical support and comprehensive inventory management with warehousing facilities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#D4AF37] hover:bg-[#C4A037] text-white px-8">KNOW MORE!</Button>
              <Button
                variant="outline"
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 bg-transparent"
              >
                +964 7514584807
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
