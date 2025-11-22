"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
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
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (iconRef.current) {
        gsap.fromTo(
          iconRef.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
        });
      }

      if (buttonRef.current) {
        gsap.from(buttonRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 0.6,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <html>
      <body>
        <div
          ref={containerRef}
          className="min-h-screen flex items-center justify-center bg-background px-4 py-20"
        >
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div ref={iconRef} className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-16 h-16 md:w-20 md:h-20 text-red-500" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Application Error
            </h1>

            {/* Description */}
            <p
              ref={textRef}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto"
            >
              A critical error occurred. Please refresh the page or contact
              support if the problem persists.
            </p>

            {/* Action Buttons */}
            <div
              ref={buttonRef}
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
                onClick={() => (window.location.href = "/")}
                variant="outline"
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-lg transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

