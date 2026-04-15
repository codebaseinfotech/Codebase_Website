import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

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
              Codebase Infotech is a global IT solutions provider based in
              India. At Codebase Infotech, we believe in delivering Extensive
              and integrated solutions to our valued clients which best suit
              their requirements.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/CodebaseInfotech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link
                href="https://x.com/Codebase_IT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/twitter.png"
                  alt="twitter"
                  className="h-5 w-5 cursor-pointer transition-colors hover:opacity-80"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/codebaseinfotech/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/codebase.infotech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "App Development",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "CMS Development",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* India Address */}
              <div className="text-muted-foreground text-sm leading-relaxed">
                <ReactCountryFlag countryCode="IN" svg style={{ width: '1.4em', height: '1.4em', marginRight: '6px', borderRadius: '2px' }} />
                <span className="font-bold text-card-foreground">India:</span>{" "}
                201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004
              </div>

              {/* UAE Address */}
              <div className="text-muted-foreground text-sm leading-relaxed">
                <ReactCountryFlag countryCode="AE" svg style={{ width: '1.4em', height: '1.4em', marginRight: '6px', borderRadius: '2px' }} />
                <span className="font-bold text-card-foreground">UAE:</span>{" "}
                Office 306 Arjumand Building-3rd Floor, Dubai Investment Park 1, Dubai UAE
              </div>

              {/* Australia Address */}
              <div className="text-muted-foreground text-sm leading-relaxed">
                <ReactCountryFlag countryCode="AU" svg style={{ width: '1.4em', height: '1.4em', marginRight: '6px', borderRadius: '2px' }} />
                <span className="font-bold text-card-foreground">Australia:</span>{" "}
                14 Wellington Ave, Parafield Gardens 5107, Australia
              </div>

              {/* Email */}
              <div className="text-muted-foreground text-sm pt-1">
                <span className="text-card-foreground font-semibold">Email:</span>{" "}
                <Link
                  href="mailto:codebaseinfotech@gmail.com"
                  className="text-primary hover:underline break-all"
                >
                  codebaseinfotech@gmail.com
                </Link>
              </div>

              {/* Phone */}
              <div className="text-muted-foreground text-sm">
                <span className="text-card-foreground font-semibold">Phone:</span>{" "}
                <Link
                  href="tel:+917096859504"
                  className="text-primary hover:underline font-semibold"
                >
                  +91 70968 59504
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All Rights Reserved - codebaseinfotech.com
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/terms-and-conditions"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/sitemap.xml"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
