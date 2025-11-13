import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageSquare, Calendar, Video, Headphones } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    details: ["+91 70968 59504", "Monday - Saturday: 9 AM - 6 PM IST"],
    action: "Call Now",
    href: "tel:+15551234567",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed information via email",
    details: ["info@codebaseinfotech.com", "Response within 24 hours"],
    action: "Send Email",
    href: "mailto:info@codebaseinfotech.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Schedule a face-to-face meeting",
    details: ["Google Meet or Zoom", "30-60 minute sessions"],
    action: "Schedule Call",
    href: "#",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick chat on WhatsApp",
    details: ["+91 70968 59504", "Available 24/7"],
    action: "Chat Now",
    href: "https://wa.me/15551234567",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation call",
    details: ["Free 30-minute consultation", "Available slots daily"],
    action: "Book Now",
    href: "#",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    icon: Headphones,
    title: "Live Support",
    description: "Chat with our support team",
    details: ["Available 9 AM - 6 PM IST", "Instant responses"],
    action: "Start Chat",
    href: "#",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100",
  },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the communication method that works best for you. We're here to help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <Card
                key={index}
                className={`${method.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-7 w-7 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                      <p className="text-slate-600 mb-3">{method.description}</p>
                      <div className="space-y-1 mb-4">
                        {method.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-slate-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {detail}
                          </p>
                        ))}
                      </div>
                      <a href={method.href}>
                        <Button variant="ghost" className={`${method.color} hover:${method.bgColor} font-semibold p-0`}>
                          {method.action} →
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="border-slate-200 mb-16 bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Visit Our Office</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat,<br /> India - 395004
                  </p>
                  <a
                    href="https://maps.app.goo.gl/N7NDybeZHDG5pvPU8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Office Hours</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Monday - Saturday</span>
                    <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                  </div>
                  {/* <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Saturday</span>
                    <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                  </div> */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Sunday</span>
                    <span className="text-slate-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            For urgent technical support or critical project issues, reach out to us immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Hotline
              </Button>
            </a>
            <a href="mailto:urgent@codebaseinfotech.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Mail className="h-5 w-5 mr-2" />
                Priority Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
