import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Award, Clock, HeadphonesIcon } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and work closely with our clients as true partners.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality deliverables.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our promises, meeting deadlines and exceeding expectations consistently.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "We provide ongoing support and maintenance to ensure long-term success for our clients.",
  },
]

export default function CompanyValues() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide our work and define our company culture
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
