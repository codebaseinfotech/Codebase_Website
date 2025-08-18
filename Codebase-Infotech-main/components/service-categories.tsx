import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Code, Palette, ShoppingCart, TrendingUp, ArrowRight, Monitor, Layers } from "lucide-react"

const serviceCategories = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences",
    services: ["Android App Development", "iOS App Development", "Web App Development"],
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions with React Native & Flutter",
      "Progressive Web Apps (PWA)",
      "App Store optimization and deployment",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies",
    services: ["PHP Development", "CodeIgniter", "Laravel Development"],
    features: [
      "Custom PHP web applications",
      "Laravel framework expertise",
      "CodeIgniter development",
      "RESTful API development",
    ],
  },
  {
    icon: ShoppingCart,
    title: "CMS Development",
    description: "Powerful content management systems and e-commerce platforms for your business",
    services: ["WooCommerce", "Bootstrap", "Magento", "OpenCart"],
    features: [
      "WooCommerce store development",
      "Custom Magento solutions",
      "OpenCart e-commerce platforms",
      "Bootstrap responsive frameworks",
    ],
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Complete end-to-end development solutions using modern technology stacks",
    services: ["Node.js Development", "React.js Development"],
    features: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "MEAN Stack development",
      "Real-time applications with Socket.io",
      "Microservices architecture",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance user experience and drive conversions",
    services: ["UI/UX Design"],
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and optimization",
    ],
  },
  {
    icon: Monitor,
    title: "Cross Platform Development",
    description: "Build once, deploy everywhere with our cross-platform development expertise",
    services: ["Flutter App Development", "Ionic App Development", "React Native App Development"],
    features: [
      "Flutter mobile applications",
      "React Native cross-platform apps",
      "Ionic hybrid applications",
      "Code sharing across platforms",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and drive results",
    services: ["Digital Marketing Services", "SEO Plans", "App Store Optimization"],
    features: [
      "Search Engine Optimization (SEO)",
      "Social media marketing",
      "App Store Optimization (ASO)",
      "Content marketing and strategy",
    ],
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    description: "Tailored technology solutions designed specifically for your unique business requirements",
    services: ["Custom Development", "System Integration", "Consulting"],
    features: [
      "Custom software development",
      "Third-party integrations",
      "Legacy system modernization",
      "Technical consulting and strategy",
    ],
  },
]

export default function ServiceCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-primary">IT Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer a full range of technology services to help your business succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border bg-card hover:bg-background"
              >
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{category.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Services Include:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
