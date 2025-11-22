"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function IndustriesSection() {
  const industries = [
    { name: "Airport Operations", image: "airport control tower operations" },
    { name: "Aircraft Maintenance", image: "aircraft maintenance hangar" },
    { name: "Cargo Handling", image: "airport cargo handling logistics" },
    { name: "Passenger Services", image: "airport passenger terminal services" },
    { name: "Ground Support", image: "airport ground support equipment" },
    { name: "Runway Management", image: "airport runway operations management" },
    { name: "Aviation Security", image: "airport security screening operations" },
    { name: "Fueling Services", image: "aircraft refueling operations" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate cards
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length)
  }

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="industries" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl font-bold text-foreground mb-8">
            <span className="font-bold">INDUSTRIES</span>
          </h2>
        </div>

        <div ref={sliderRef} className="relative">
          {/* Modern Slider Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(5, industries.length))}%)`,
              }}
            >
              {industries.map((industry, index) => {
                const imageIndex = (index % 8) + 1
                return (
                  <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="min-w-full md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/5)] px-3"
                  >
                    <div className="group cursor-pointer relative">
                      <div className="relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <Image
                          src={`/airport-industry-${imageIndex}.jpg?height=300&width=400&query=${industry.image}`}
                          alt={industry.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-[#D4AF37]/90 group-hover:via-[#D4AF37]/70 group-hover:to-transparent transition-all duration-300" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-1 bg-[#D4AF37] mb-3 rounded-full group-hover:w-16 transition-all duration-300" />
                            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-white">{industry.name}</h3>
                            <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Learn more →
                            </p>
                          </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] rounded-xl transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Modern Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md border border-border rounded-full p-3 shadow-xl hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300 z-10 group"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md border border-border rounded-full p-3 shadow-xl hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300 z-10 group"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Modern Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#D4AF37] hover:bg-[#C4A037] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            View More of Industries!
          </Button>
        </div>
      </div>
    </section>
  )
}
