"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plane, Loader2 } from "lucide-react";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          {
            scale: 0.8,
            opacity: 0,
            rotation: -10,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      // Animate spinner
      if (spinnerRef.current) {
        gsap.to(spinnerRef.current, {
          rotation: 360,
          duration: 1.5,
          repeat: -1,
          ease: "none",
        });
      }

      // Animate text
      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Pulse animation for dots
      gsap.to(".loading-dot", {
        y: -10,
        opacity: 0.5,
        duration: 0.6,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo/Icon */}
        <div ref={logoRef} className="relative">
          <div className="relative w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
            <Plane className="w-12 h-12 text-[#D4AF37] transform rotate-45" />
            <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin" />
          </div>
        </div>

        {/* Spinner */}
        <div ref={spinnerRef} className="relative">
          <Loader2 className="w-8 h-8 text-[#D4AF37]" />
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Loading...
          </h2>
          <p className="text-muted-foreground text-sm">
            Preparing your experience
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="loading-dot w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="loading-dot w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="loading-dot w-2 h-2 rounded-full bg-[#D4AF37]" />
          </div>
        </div>
      </div>
    </div>
  );
}

