"use client";

import { useState, useEffect, useRef, useId } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const slideContentRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  const slides = [
    {
      image:
        "/modern-blue-white-commercial-airplane-parked-tarmac-with-luggage-cart-sunny-day-travel-transportation-concept-aviation-industry-flight-vacation-trip-business-travel-logistics-aircraft_163305-326263.jpg",
      title: "Your Partners In Progress",
      subtitle: "You Can Trust Us",
      description:
        "AL-KHADWM, leading provider of Airport Ground Handling Services and Ground Support Equipment Operations in the Kurdistan Region and Iraq",
    },
    {
      image: "/Aircraft_Ground_Handling-1024x552.jpg",
      title: "Ground Support Excellence",
      subtitle: "Industry Leaders",
      description:
        "Providing comprehensive Airport Ground Handling Services with cutting-edge Ground Support Equipment and professional expertise",
    },
    {
      image: "/Airport2.61674762004fb.jpg",
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

  const handleManualSlideChange = (
    direction: "next" | "prev" | "goto",
    index?: number
  ) => {
    pauseAutoSlide();
    if (direction === "next") {
      nextSlide();
    } else if (direction === "prev") {
      prevSlide();
    } else if (direction === "goto" && index !== undefined) {
      goToSlide(index);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const pauseAutoSlide = () => {
    // Clear existing timer
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    // Resume after 5 seconds
    setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  const startAutoSlide = () => {
    // Clear existing timer first
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }

    autoSlideTimerRef.current = setInterval(nextSlide, 5000);
  };

  // Close modal with Escape key and handle body scroll
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSlide(null);
      }
    }

    if (activeSlide !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeSlide]);

  // Use outside click hook to close modal
  useOutsideClick(modalRef, () => setActiveSlide(null));

  // Auto-advance slides
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
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

    // Animate social icons fade out then in on slide change
    if (socialIconsRef.current) {
      gsap.to(socialIconsRef.current.children, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.fromTo(
            socialIconsRef.current!.children,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              delay: 0.2,
            }
          );
        },
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
      <div
        ref={socialIconsRef}
        className="hidden md:flex absolute left-0 top-0 bottom-0 w-24 bg-background flex-col items-center justify-center gap-6 z-20"
      >
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
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                pointerEvents: index === currentSlide ? "auto" : "none",
              }}
            >
              <div
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="relative w-full h-full group/image cursor-pointer overflow-hidden"
                onClick={(e) => {
                  if (index === currentSlide) {
                    e.stopPropagation();
                    pauseAutoSlide();
                    setActiveSlide(index);
                  }
                }}
                role="button"
                tabIndex={index === currentSlide ? 0 : -1}
                aria-label={`Open details for ${slide.title}`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    index === currentSlide
                      ? "group-hover/image:scale-110 group-hover/image:brightness-110"
                      : ""
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-all duration-700 ${
                    index === currentSlide
                      ? "group-hover/image:bg-gradient-to-t group-hover/image:from-black/70 group-hover/image:via-black/30 group-hover/image:to-black/10"
                      : ""
                  }`}
                />

                {/* Slide Content */}
                <div
                  ref={index === currentSlide ? slideContentRef : null}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-8 pb-20 md:pb-0 pointer-events-none"
                >
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
            onClick={() => handleManualSlideChange("prev")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-sm z-10 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleManualSlideChange("next")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-sm z-10 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualSlideChange("goto", index)}
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

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeSlide !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Modal Content */}
      <AnimatePresence mode="wait">
        {activeSlide !== null && slides[activeSlide] && (
          <div
            key={`modal-wrapper-${activeSlide}`}
            className="fixed inset-0 z-[101] flex items-end md:items-center md:justify-center md:p-4"
          >
            {/* Mobile: Drag Handle */}
            <div className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 z-30 w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              onClick={() => setActiveSlide(null)}
              className="fixed top-4 right-4 z-30 w-12 h-12 rounded-full bg-white/95 dark:bg-neutral-800/95 hover:bg-white dark:hover:bg-neutral-800 text-black dark:text-white flex items-center justify-center shadow-xl transition-colors backdrop-blur-sm active:scale-95"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Mobile: Bottom Sheet, Desktop: Centered Modal */}
            <motion.div
              key={`modal-container-${activeSlide}`}
              ref={modalRef}
              initial={{
                opacity: 0,
                y: isMobile ? "100%" : 0,
                scale: isMobile ? 1 : 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: isMobile ? "100%" : 0,
                scale: isMobile ? 1 : 0.9,
              }}
              transition={{
                type: "spring",
                duration: isMobile ? 0.4 : 0.5,
                bounce: isMobile ? 0 : 0.15,
                damping: isMobile ? 30 : 25,
              }}
              className="w-full max-h-[92vh] md:w-full md:max-w-5xl md:max-h-[88vh] rounded-t-3xl md:rounded-3xl flex flex-col bg-white dark:bg-neutral-900 overflow-hidden shadow-2xl"
            >
              {/* Modal Image */}
              <div className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden flex-shrink-0">
                {(() => {
                  const currentSlideData = slides[activeSlide];
                  return (
                    <>
                      <img
                        key={`modal-img-${activeSlide}-${currentSlideData?.image}`}
                        src={currentSlideData?.image || "/placeholder.svg"}
                        alt={currentSlideData?.title || "Slide image"}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Title Overlay on Image */}
                      <motion.div
                        key={`modal-overlay-${activeSlide}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute bottom-0 left-0 right-0 p-5 md:p-8"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-px w-10 bg-[#D4AF37]" />
                          <span className="text-xs md:text-sm tracking-widest uppercase text-[#D4AF37] font-semibold">
                            {currentSlideData?.subtitle || ""}
                          </span>
                          <div className="h-px flex-1 bg-[#D4AF37]/30" />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {currentSlideData?.title || ""}
                        </h2>
                      </motion.div>
                    </>
                  );
                })()}
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-5 md:p-8 space-y-5 md:space-y-6">
                  {/* Main Description */}
                  <motion.div
                    key={`modal-description-${activeSlide}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                      {slides[activeSlide]?.description || ""}
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <div className="border-t border-border" />

                  {/* Additional Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Our Commitment
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      AL-KHADWM is committed to providing exceptional airport
                      ground handling services with the highest standards of
                      safety, efficiency, and professionalism. Our experienced
                      team and state-of-the-art equipment ensure seamless
                      operations for all our clients.
                    </p>
                  </motion.div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      Key Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Ground Support Equipment",
                        "Professional Handling",
                        "24/7 Operations",
                        "Safety First Approach",
                      ].map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                          <span className="text-sm md:text-base text-foreground font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 space-y-3"
                  >
                    <Button
                      onClick={() => setActiveSlide(null)}
                      className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl shadow-lg active:scale-[0.98] transition-transform"
                    >
                      Learn More About Our Services
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setActiveSlide(null)}
                      className="w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl border-2 active:scale-[0.98] transition-transform"
                    >
                      Contact Us Today
                    </Button>
                  </motion.div>

                  {/* Bottom Spacing for mobile */}
                  <div className="h-6 md:h-0" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
