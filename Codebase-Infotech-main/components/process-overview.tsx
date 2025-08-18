import { Search, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We analyze your requirements, understand your business goals, and identify the best technical approach.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, UI/UX designs, and technical architecture plans.",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with regular updates and quality assurance.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and support for optimal performance.",
    duration: "Ongoing",
  },
]

export default function ProcessOverview() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 z-0" />
                )}

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative z-10">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>

                  <div className="text-sm text-blue-600 font-medium mb-2">Step {index + 1}</div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>

                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 inline-block">
                    {step.duration}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
