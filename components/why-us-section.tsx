"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          x: -50,
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

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: 100,
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

      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          x: -30,
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
  const features = [
    "Quality products at competitive prices",
    "Big capacity in production, high quality.",
    "Innovative solutions & Great Service",
    "Technical knowledge",
    "Delivering tasks and projects in a timely manner.",
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div ref={contentRef}>
            <p className="text-muted-foreground mb-4 leading-relaxed">Al-KHADWM focuses on delivering</p>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              <span className="font-bold">excellence in ground handling</span>
            </h2>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              <span className="font-bold">Why Al-KHADWM?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "AL-KHADWM" is a group of professionals specialized in Airport Ground Handling Services and Ground Support Equipment Operations. We provide comprehensive solutions including aircraft servicing, baggage handling, cargo operations, passenger services, and maintenance of all types of ground support equipment. We represent a wide range of manufacturers and suppliers, ensuring airports have access to the complete range of ground support equipment and services needed for efficient operations.
            </p>

            <ul ref={featuresRef} className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div ref={imageRef} className="relative">
            <img
              src="/airport-staff-operations-professional-team.jpg?height=600&width=800&query=airport staff professional team operations"
              alt="Airport staff"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
