import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award, Zap, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "9+ years of experience delivering high-quality IT solutions across various industries",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on meeting deadlines and delivering projects on schedule",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Skilled developers and designers committed to bringing your vision to life",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure flawless results",
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "We use cutting-edge tools and frameworks to build modern, scalable solutions",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Ongoing support and maintenance to keep your applications running smoothly",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-8 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-card-foreground mb-4">
            Why Choose <span className="text-primary">Codebase Infotech</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group">
                <Card className="h-full border-border hover:shadow-lg transition-all duration-300 bg-background">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">170+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">90+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
