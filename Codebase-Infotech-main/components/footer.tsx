import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-15 h-12 flex items-center justify-center mr-1">
                {/* <span className="text-primary-foreground font-bold text-lg">CB</span> */}
                <img
                  src="/logo.png"
                  alt="Codebase Logo"
                  className="w-15 h-12 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-card-foreground">
                Codebase <span className="text-primary">Infotech</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              Codebase Infotech is a global IT solutions provider based in India. At Codebase Infotech, we believe in delivering Extensive and integrated solutions to our valued clients which best suit their requirements.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CodesWidgetInfotech/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href="https://x.com/Codebase_IT" target="_blank" rel="noopener noreferrer">
                <img
                  src="/twitter.png"
                  alt="twitter"
                  className="h-5 w-5 cursor-pointer transition-colors hover:opacity-80"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/codebaseinfotech/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/codebase.infotech/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {["App Development", "Web Development", "UI/UX Design", "Digital Marketing", "CMS Development"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                codebaseinfotech@gmail.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +91 70968 59504
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="h-6 w-11 mr-3 text-primary mt-1" />
                 <div>201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Codebase Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
