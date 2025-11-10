"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Codebase Infotech transformed our business with their exceptional mobile app development. The team was professional, responsive, and delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Shilu E-Commerce Plus",
    role: "CTO",
    content:
      "Their exceptional app and web development expertise enabled us to build a stunning e-commerce platform. As a result, our sales grew by 150% within the first quarter after launch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Digital Marketing Pro",
    role: "Marketing Director",
    content:
      "The UI/UX design services provided by Codebase Infotech were outstanding. They truly understand user experience and created designs that convert.",
    rating: 5,
  },
]

export default function TestimonialsPreview() {
  const router = useRouter()
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to testimonials page */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={() => router.push("/testimonials")}>
            View All Testimonials
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
