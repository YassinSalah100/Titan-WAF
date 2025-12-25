import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-primary/5">
                <Image src="/logo_transparent.png" alt="TITAN Security" fill className="object-contain p-1" />
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground">TITAN</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pr-0 sm:pr-4">
              Enterprise-grade cybersecurity platform powered by AI for comprehensive threat detection and response.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#features" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#architecture"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Mail size={14} className="sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="break-all">info@titansecurity.com</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Phone size={14} className="sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin size={14} className="sm:w-4 sm:h-4 text-primary mt-0.5 shrink-0" />
                <span>Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 TITAN Security. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <Link href="#" className="text-[11px] sm:text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[11px] sm:text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-[11px] sm:text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
