import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export default function Footer() {  
  return (
    <footer className="relative bg-card text-card-foreground overflow-hidden border-t border-border">
      {/* Decorative Gradient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info (Takes up 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <div className="w-14 h-14 flex items-center justify-center mr-3 bg-muted/50 rounded-2xl p-2.5 border border-border shadow-sm backdrop-blur-sm">
                <img
                  src="/logo.png"
                  alt="Codebase Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-3xl text-card-foreground tracking-tight">
                Codebase <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl">Infotech</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm pr-4">
              Codebase Infotech is a global IT solutions provider based in India. We believe in delivering extensive and integrated solutions to our valued clients which best suit their requirements, helping businesses transform their digital presence.
            </p>
            
            <div className="flex space-x-3 pt-2">
              <Link
                href="https://www.facebook.com/CodebaseInfotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 group shadow-sm"
              >
                <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://x.com/Codebase_IT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:-translate-y-1 group shadow-sm dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
              >
                <img
                  src="/twitter.png"
                  alt="twitter"
                  className="h-4 w-4 group-hover:scale-110 transition-transform group-hover:invert dark:invert dark:group-hover:invert-0"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/codebaseinfotech/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:bg-blue-700 hover:text-white hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 group shadow-sm"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.instagram.com/codebase.infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:bg-gradient-to-tr hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 group shadow-sm"
              >
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-card-foreground mb-6 text-lg tracking-wide flex items-center">
              Quick Links
              <span className="ml-2 w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-50"></span>
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-card-foreground mb-6 text-lg tracking-wide flex items-center">
              Services
              <span className="ml-2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-50"></span>
            </h3>
            <ul className="space-y-3.5">
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
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Takes up 4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-card-foreground mb-6 text-lg tracking-wide flex items-center">
              Contact Us
              <span className="ml-2 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-50"></span>
            </h3>
            <div className="space-y-4">
              
              {/* Addresses Grid */}
              <div className="grid gap-3">
                {/* India Address */}
                <div className="flex items-start bg-muted/30 p-3 rounded-xl border border-border hover:bg-muted/70 transition-colors group cursor-default">
                  <div className="mt-0.5 mr-3 p-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <ReactCountryFlag countryCode="IN" svg style={{ width: '1.4em', height: '1.4em', borderRadius: '3px' }} />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-card-foreground block mb-0.5">India (HQ)</span>
                    <span className="text-muted-foreground leading-snug block">201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat - 395004</span>
                  </div>
                </div>

                {/* UAE Address */}
                <div className="flex items-start bg-muted/30 p-3 rounded-xl border border-border hover:bg-muted/70 transition-colors group cursor-default">
                  <div className="mt-0.5 mr-3 p-1.5 bg-green-500/10 border border-green-500/20 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <ReactCountryFlag countryCode="AE" svg style={{ width: '1.4em', height: '1.4em', borderRadius: '3px' }} />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-card-foreground block mb-0.5">UAE</span>
                    <span className="text-muted-foreground leading-snug block">Office 306 Arjumand Building, Dubai Investment Park 1, Dubai</span>
                  </div>
                </div>

                {/* Australia Address */}
                <div className="flex items-start bg-muted/30 p-3 rounded-xl border border-border hover:bg-muted/70 transition-colors group cursor-default">
                  <div className="mt-0.5 mr-3 p-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <ReactCountryFlag countryCode="AU" svg style={{ width: '1.4em', height: '1.4em', borderRadius: '3px' }} />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-card-foreground block mb-0.5">Australia</span>
                    <span className="text-muted-foreground leading-snug block">14 Wellington Ave, Parafield Gardens 5107, Australia</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="pt-3 flex flex-col gap-3">
                <Link
                  href="mailto:codebaseinfotech@gmail.com"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors shadow-inner border border-blue-500/10">
                    <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="group-hover:underline decoration-primary underline-offset-4">codebaseinfotech@gmail.com</span>
                </Link>
                <Link
                  href="tel:+917096859504"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors shadow-inner border border-cyan-500/10">
                    <Phone className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span className="group-hover:underline decoration-primary underline-offset-4 font-semibold">+91 70968 59504</span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              © {new Date().getFullYear()} Codebase Infotech. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/affiliates" className="text-muted-foreground hover:text-primary transition-colors">
                Affiliates
              </Link>
              <Link href="/our-partners" className="text-muted-foreground hover:text-primary transition-colors">
                Our Partners
              </Link>
              <Link href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
