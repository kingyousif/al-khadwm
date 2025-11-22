"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Home, Search, Plane } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - hide everything first
      if (numberRef.current) {
        gsap.set(numberRef.current, {
          scale: 0,
          opacity: 0,
          rotation: -180,
        });
      }

      if (planeRef.current) {
        gsap.set(planeRef.current, {
          scale: 0,
          opacity: 0,
          rotation: -90,
        });
      }

      if (titleRef.current) {
        gsap.set(titleRef.current, {
          y: 30,
          opacity: 0,
        });
      }

      if (textRef.current) {
        gsap.set(textRef.current, {
          y: 20,
          opacity: 0,
        });
      }

      if (buttonsRef.current) {
        gsap.set(buttonsRef.current.children, {
          opacity: 0,
          y: 30,
        });
      }

      // Animate 404 number
      if (numberRef.current) {
        gsap.to(numberRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          delay: 0.2,
          ease: "back.out(1.7)",
        });
      }

      // Animate plane
      if (planeRef.current) {
        gsap.to(planeRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 45,
          duration: 1,
          delay: 0.7,
          ease: "back.out(1.7)",
        });

        // Floating animation
        gsap.to(planeRef.current, {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 1.7,
        });
      }

      // Animate title
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.9,
          ease: "power3.out",
        });
      }

      // Animate text
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.1,
          ease: "power3.out",
        });
      }

      // Animate buttons
      if (buttonsRef.current) {
        gsap.to(buttonsRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          delay: 1.3,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-background px-4 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number with Plane */}
        <div className="relative mb-8 flex items-center justify-center">
          <div
            ref={numberRef}
            className="relative text-[120px] md:text-[180px] font-black text-[#D4AF37] leading-none inline-block opacity-0"
          >
            <span className="relative inline-block">4</span>
            <span className="relative inline-block mx-2">
              <span className="relative inline-block">0</span>
              <div
                ref={planeRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0"
              >
                <Plane className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] mb-32 md:mb-40" />
              </div>
            </span>
            <span className="relative inline-block">4</span>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-foreground mb-4 opacity-0"
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p
          ref={textRef}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto opacity-0"
        >
          The page you're looking for seems to have taken off to a different
          destination. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            className="bg-[#D4AF37] hover:bg-[#C4A037] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-lg transition-all duration-300 opacity-0"
          >
            <Link href="/#services">
              <Search className="w-5 h-5 mr-2" />
              Browse Services
            </Link>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#D4AF37]/30"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
