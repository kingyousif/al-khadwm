"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }

      if (testimonialsRef.current) {
        gsap.from(testimonialsRef.current.children, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const testimonials = [
    {
      quote:
        "Al-KHADWM's ground handling services are exceptional. Their team is professional, efficient, and always on time. The ground support equipment is well-maintained and reliable. We've been working with them for years and they consistently exceed our expectations.",
      name: "Ahmed Hassan",
      role: "Airport Operations Manager",
      image: "/istockphoto-1202298056-612x612.jpg",
      imageQuery: "professional business person headshot portrait",
    },
    {
      quote:
        "The quality of service at Al-KHADWM is outstanding. Their ground handling operations are smooth, and their equipment maintenance is top-notch. They truly understand the aviation industry and deliver solutions that make our airport operations seamless.",
      name: "Sara Mohammed",
      role: "Airport Director",
      image: "/istockphoto-152028088-612x612.jpg",
      imageQuery: "professional manager headshot portrait",
    },
    {
      quote:
        "Working with Al-KHADWM has transformed our ground operations. Their comprehensive ground support equipment and professional handling services have significantly improved our efficiency. Their 24/7 support is invaluable for airport operations.",
      name: "Khalid Ibrahim",
      role: "Aviation Services CEO",
      image: "/e58538_936077b6fc6c49d6865195a135eeaa45~mv2.jpg",
      imageQuery: "professional CEO executive headshot portrait",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <div className="text-sm text-[#D4AF37] font-semibold mb-2 tracking-wider uppercase">TESTIMONIALS</div>
          <h2 className="text-4xl font-bold text-foreground">
            Our Customers <span className="font-bold">Are Saying?</span>
          </h2>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-[#D4AF37] mb-6" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
