"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimation() {
  const ref = useRef<HTMLElement | HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return ref
}

export function useGsapStaggerAnimation(items: any[], delay: number = 0.1) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: index * delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [items, delay])

  return { containerRef, itemRefs }
}

