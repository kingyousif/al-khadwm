import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl">AL-KHADWM</span>
                <span className="text-xs tracking-wider text-[#D4AF37]">COMPANY</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading provider of Airport Ground Handling Services and Ground Support Equipment Operations in Kurdistan Region and Iraq.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                  Aircraft Ground Handling
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                  Baggage & Cargo Handling
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                  Ground Support Equipment
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#D4AF37] transition-colors text-sm">
                  Passenger Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kurdistan Region, Iraq</li>
              <li>Phone: +964 7514584807</li>
              <li>Email: info@alkhadwm.com</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Al-KHADWM Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
