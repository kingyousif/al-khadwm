"use client"

import { Zap, Cpu, Cog, Gauge } from "lucide-react";
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

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

      if (servicesRef.current) {
        gsap.from(servicesRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const services = [
    {
      icon: Zap,
      number: "01",
      title: "Aircraft Ground Handling",
      description:
        "Comprehensive aircraft servicing, marshalling, and ground operations for safe and efficient airport operations",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Baggage & Cargo Handling",
      description:
        "Professional baggage handling systems and cargo operations with state-of-the-art equipment",
    },
    {
      icon: Cog,
      number: "03",
      title: "Ground Support Equipment",
      description:
        "Supply, maintenance, and operation of all types of ground support equipment for airports",
    },
    {
      icon: Gauge,
      number: "04",
      title: "Passenger Services",
      description:
        "Complete passenger handling services including check-in, boarding, and assistance 24/7",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <div className="text-sm text-[#D4AF37] font-semibold mb-2 tracking-wider uppercase">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Airport Ground Handling <span className="font-bold">Services</span>
          </h2>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img
                    src={`/airport-terminal-modern-architecture-with-planes.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="absolute top-4 right-1/2 translate-x-16 w-16 h-16 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-xl font-bold">
                  {service.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
