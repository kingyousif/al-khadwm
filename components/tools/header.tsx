"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "./menu-toggle-icon";
import { useScroll } from "./use-scroll";
import { Search, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Products",
      href: "#products",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Industries",
      href: "#industries",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Clients",
      href: "#clients",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  React.useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts (important for Next.js)
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar with contact info and social media */}
      <div className="bg-muted border-b border-border py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            {/* Left side - Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              {/* Email */}
              <a
                href="mailto:info@alkhadwm.com"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@alkhadwm.com</span>
                <span className="sm:hidden">info@alkhadwm.com</span>
              </a>

              {/* Separator */}
              <div className="h-4 w-px bg-border" />

              {/* Phone */}
              <a
                href="tel:+9647514584807"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+964 7514584807</span>
              </a>
            </div>

            {/* Right side - Social Media & Search */}
            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>

              {/* Separator */}
              <div className="h-4 w-px bg-border" />

              {/* Search Icon */}
              <button
                className="text-muted-foreground hover:text-[#D4AF37] transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm",
          {
            "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg":
              scrolled && !open,
            "bg-background": !scrolled || open,
          }
        )}
      >
        <nav
          className={cn(
            "container mx-auto flex h-20 w-full items-center justify-between px-4 transition-all ease-out"
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/al-khadwm-logo.png"
              alt="Al-KHADWM Company"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <div className="text-2xl font-bold text-foreground ml-4 hidden sm:block">
              <div className="flex flex-col leading-tight">
                <span className="text-3xl">AL-KHADWM</span>
                <span className="text-xs tracking-wider">COMPANY</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="ghost" size="icon" className="ml-2">
              <Search className="h-5 w-5 text-foreground/70" />
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
            >
              <MenuToggleIcon open={open} className="size-5" duration={300} />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "bg-background/95 fixed top-[120px] right-0 bottom-0 left-0 z-50 flex flex-col overflow-y-auto border-t md:hidden",
            open ? "block" : "hidden"
          )}
        >
          <div
            data-slot={open ? "open" : "closed"}
            className={cn(
              "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
              "flex h-full w-full flex-col gap-y-1 p-4"
            )}
          >
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({
                  variant: "ghost",
                  className: "justify-start text-base",
                })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                className="w-full justify-start"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
