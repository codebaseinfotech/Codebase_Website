import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Code, Palette, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native iOS, Android, and cross-platform mobile applications",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
    features: ["React.js", "Node.js", "PHP", "Laravel"],
  },
  {
    icon: ShoppingCart,
    title: "CMS Development",
    description: "Custom content management systems and e-commerce solutions",
    features: ["WooCommerce", "Magento", "OpenCart", "Bootstrap"],
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Complete end-to-end development solutions",
    features: ["MERN Stack", "MEAN Stack", "Laravel", "CodeIgniter"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design experiences",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing and SEO services",
    features: ["SEO Optimization", "Social Media", "App Store Optimization", "Analytics"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <IconComponent className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button variant="ghost" className="group-hover:text-primary p-0">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="text-lg px-8">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
