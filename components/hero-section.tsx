"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContentRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: "/airport-terminal-modern-architecture-with-planes.jpg",
      title: "Your Partners In Progress",
      subtitle: "You Can Trust Us",
      description:
        "AL-KHADWM, leading provider of Airport Ground Handling Services and Ground Support Equipment Operations in the Kurdistan Region and Iraq",
    },
    {
      image: "/airport-staff-operations-professional-team.jpg",
      title: "Ground Support Excellence",
      subtitle: "Industry Leaders",
      description:
        "Providing comprehensive Airport Ground Handling Services with cutting-edge Ground Support Equipment and professional expertise",
    },
    {
      image: "/airport-terminal-modern-architecture-with-planes.jpg",
      title: "Reliable Operations",
      subtitle: "Trusted Partner",
      description:
        "Delivering quality Airport Ground Support Equipment Operations and services to airports across Kurdistan and Iraq",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Animate slide content on change
    if (slideContentRef.current) {
      gsap.fromTo(
        slideContentRef.current.children,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Animate social icons on mount
    if (socialIconsRef.current) {
      gsap.from(socialIconsRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[calc(100vh-120px)] min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Split Background - Background left, Yellow right (hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0">
        <div className="w-1/2 bg-background" />
        <div className="w-1/2 bg-[#D4AF37]" />
      </div>

      {/* Left Side - Social Icons (vertical) - Hidden on mobile */}
      <div ref={socialIconsRef} className="hidden md:flex absolute left-0 top-0 bottom-0 w-24 bg-background flex-col items-center justify-center gap-6 z-20">
        <a
          href="#"
          className="w-12 h-12 bg-muted hover:bg-[#D4AF37] text-muted-foreground hover:text-white rounded-sm flex items-center justify-center transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-muted hover:bg-[#D4AF37] text-muted-foreground hover:text-white rounded-sm flex items-center justify-center transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-muted hover:bg-[#D4AF37] text-muted-foreground hover:text-white rounded-sm flex items-center justify-center transition-colors"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-muted hover:bg-[#D4AF37] text-muted-foreground hover:text-white rounded-sm flex items-center justify-center transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Right Side - Vertical Text - Hidden on mobile */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-24 bg-[#D4AF37] items-center justify-center z-20">
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-white font-medium tracking-wider">
            Enquiry Call: 07514584807
          </span>
        </div>
      </div>

      {/* Center Content - Image Slider (Full width on mobile, 80% on desktop) */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-24">
        <div className="relative w-full max-w-full md:max-w-[80%] h-full md:h-[70%] mx-auto rounded-lg md:rounded-none overflow-hidden shadow-2xl">
          {/* Slider Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Slide Content */}
                <div ref={slideContentRef} className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-8 pb-20 md:pb-0">
                  <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="h-px w-8 md:w-12 bg-[#D4AF37]" />
                    <span className="text-xs md:text-sm tracking-widest uppercase">
                      {slide.subtitle}
                    </span>
                    <div className="h-px w-8 md:w-12 bg-[#D4AF37]" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight max-w-4xl px-2">
                    {slide.title.split(" ").map((word, i) => {
                      if (
                        word === "Partners" ||
                        word === "Progress" ||
                        word === "Excellence" ||
                        word === "Solutions"
                      ) {
                        return (
                          <span key={i} className="font-extrabold">
                            {word}{" "}
                          </span>
                        );
                      }
                      return <span key={i}>{word} </span>;
                    })}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed px-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-sm z-10 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-sm z-10 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-[#D4AF37] w-8 shadow-lg"
                    : "bg-white/60 w-2 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
