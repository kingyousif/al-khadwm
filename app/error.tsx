"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate error icon
      if (iconRef.current) {
        gsap.fromTo(
          iconRef.current,
          {
            scale: 0,
            opacity: 0,
            rotation: -180,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
          }
        );

        // Shake animation
        gsap.to(iconRef.current, {
          rotation: 5,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
          delay: 1,
          ease: "power2.inOut",
        });
      }

      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Animate text
      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
        });
      }

      // Animate buttons
      if (buttonsRef.current) {
        gsap.from(buttonsRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.7,
          ease: "power3.out",
        });
      }

      // Pulse animation for error code
      gsap.to(".error-code", {
        opacity: 0.5,
        duration: 1.5,
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
      className="min-h-screen flex items-center justify-center bg-background px-4 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div
          ref={iconRef}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-red-500/20 animate-ping" />
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-foreground mb-4"
        >
          Something Went Wrong
        </h1>

        {/* Description */}
        <p
          ref={textRef}
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-md mx-auto"
        >
          We encountered an unexpected error. Our team has been notified and is
          working to fix the issue.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mb-8 p-4 bg-muted rounded-lg border border-border max-w-md mx-auto">
            <p className="text-sm font-mono text-muted-foreground break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2 error-code">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={reset}
            className="bg-[#D4AF37] hover:bg-[#C4A037] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-lg transition-all duration-300"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-[#D4AF37] px-8 py-6 text-lg transition-all duration-300"
          >
            <Link href="tel:+9647514584807">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-red-500/30"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

