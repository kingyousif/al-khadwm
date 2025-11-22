"use client"

import { Flame, Droplet, Cable, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

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

      if (productsRef.current) {
        gsap.from(productsRef.current.children, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const products = [
    {
      icon: Flame,
      title: "Aircraft Towing Equipment",
      description:
        "High-quality aircraft tugs, pushback tractors, and towing equipment designed for safe and efficient aircraft movement on the ground.",
      image: "/airport-terminal-modern-architecture-with-planes.jpg",
      imageQuery: "airport aircraft towing ground support equipment",
    },
    {
      icon: Droplet,
      title: "Ground Power Units",
      description:
        "Reliable ground power units (GPU) and air start units (ASU) providing essential power and air conditioning for aircraft on the ground.",
      image: "/airport-staff-operations-professional-team.jpg",
      imageQuery: "airport ground power units equipment",
    },
    {
      icon: Cable,
      title: "Baggage Handling Systems",
      description:
        "Advanced baggage handling equipment including conveyor belts, baggage carts, and automated systems for efficient cargo operations.",
      image: "/airport-terminal-modern-architecture-with-planes.jpg",
      imageQuery: "airport baggage handling systems equipment",
    },
    {
      icon: Filter,
      title: "Passenger Boarding Bridges",
      description:
        "State-of-the-art passenger boarding bridges and mobile stairs ensuring safe and comfortable passenger boarding and disembarking.",
      image: "/airport-terminal-modern-architecture-with-planes.jpg",
      imageQuery: "airport passenger boarding bridge equipment",
    },
  ]

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-4">
          <div className="text-sm text-[#D4AF37] font-semibold mb-2 tracking-wider uppercase">
            GROUND SUPPORT EQUIPMENT
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Premium Equipment for <span className="font-bold">Airport Operations</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
            Al-KHADWM focuses on delivering high quality Ground Support Equipment to airports with comprehensive maintenance and support services.
          </p>
        </div>

        <div ref={productsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-shadow cursor-pointer border-none overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`${product.image}?height=200&width=400&query=${product.imageQuery}`}
                  alt={product.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors">
                  <product.icon className="h-8 w-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
