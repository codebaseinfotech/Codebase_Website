import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your business with cutting-edge technology? Let's discuss your project and create
                something amazing together.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is here to answer your questions, provide expert guidance, and help you achieve your digital
                transformation goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-2">Speak directly with our experts</p>
              <p className="text-primary font-semibold">+91 70968 59504</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Mail className="h-8 w-8 text-secondary mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-2">Get detailed information via email</p>
              <p className="text-secondary font-semibold">info@codebaseinfotech.com</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-2">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              {/* <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
