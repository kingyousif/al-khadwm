"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

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

      if (projectsRef.current) {
        gsap.from(projectsRef.current.children, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const projects = [
    {
      title: "Ground Handling Operations Setup",
      date: "18Mar",
      image: "airport ground handling operations equipment setup",
    },
    {
      title: "Baggage Handling System",
      date: "15Feb",
      image: "airport baggage handling system installation",
    },
    {
      title: "Ground Support Equipment Fleet",
      date: "28Feb",
      image: "airport ground support equipment fleet management",
    },
    {
      title: "Aircraft Servicing Facility",
      date: "18Mar",
      image: "airport aircraft servicing ground support operations",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <div className="text-sm text-[#D4AF37] font-semibold mb-2 tracking-wider uppercase">Projects</div>
          <h2 className="text-4xl font-bold text-foreground">
            Latest <span className="font-bold">Work and Projects!</span>
          </h2>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-none overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`/airport-terminal-modern-architecture-with-planes.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-4 py-2 text-sm font-semibold">
                  {project.date}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
