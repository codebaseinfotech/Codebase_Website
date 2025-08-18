import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "155+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries",
  },
  {
    icon: Users,
    value: "90+",
    label: "Happy Clients",
    description: "Satisfied clients who trust us with their digital transformation",
  },
  {
    icon: Award,
    value: "99%",
    label: "Success Rate",
    description: "Projects delivered on time and within budget",
  },
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    description: "Years of expertise in cutting-edge technology solutions",
  },
]

export default function ProjectStats() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-card-foreground mb-4">
            Our <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Client Testimonial */}
        <div className="mt-16">
          <Card className="border-border bg-background">
            <CardContent className="p-12 text-center">
              <blockquote className="text-2xl font-medium text-foreground mb-6 leading-relaxed">
                "Codebase Infotech transformed our business with their exceptional development skills. The mobile app
                they created exceeded our expectations and drove incredible results."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="/placeholder.svg"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Sarah Johnson</div>
                  <div className="text-muted-foreground text-sm">CEO, TechStart Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
