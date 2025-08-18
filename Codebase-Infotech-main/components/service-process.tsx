import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, FileText, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your business goals, requirements, and target audience.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Planning & Strategy",
    description: "Detailed project planning, timeline creation, and technology stack selection.",
    step: "02",
  },
  {
    icon: Code,
    title: "Development & Design",
    description: "Agile development process with regular updates and milestone deliveries.",
    step: "03",
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing to ensure your solution meets the highest quality standards.",
    step: "04",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Smooth deployment process with minimal downtime and maximum efficiency.",
    step: "05",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your solution running perfectly.",
    step: "06",
  },
]

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-card-foreground mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to completion
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-background">
                <CardContent className="p-8 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Transparent Process</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Communication</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
