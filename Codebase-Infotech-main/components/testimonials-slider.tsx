"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    image: "/client-sarah-johnson.png",
    rating: 5,
    content:
      "Codebase Infotech transformed our business with their exceptional mobile app development. The team was professional, responsive, and delivered beyond our expectations. Our app now has over 100,000 downloads and a 4.8-star rating.",
    project: "Mobile App Development",
    results: ["100,000+ app downloads", "4.8/5 app store rating", "300% increase in user engagement"],
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Shilu E-Commerce Plus",
    role: "CTO",
    image: "/client-michael-chen.png",
    rating: 5,
    content:
      "Their exceptional app and web development expertise enabled us to build a stunning e-commerce platform. As a result, our sales grew by 150% within the first quarter after launch.",
    project: "E-Commerce Website",
    results: ["150% increase in sales", "70% improvement in page speed", "40% reduction in bounce rate"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Digital Marketing Pro",
    role: "Marketing Director",
    image: "/client-emily-rodriguez.png",
    rating: 5,
    content:
      "The UI/UX design services provided by Codebase Infotech were outstanding. They truly understand user experience and created designs that convert. Our conversion rate improved by 200% after the redesign.",
    project: "UI/UX Design",
    results: ["200% increase in conversions", "90% user satisfaction", "Award-winning design"],
  },
  {
    id: 4,
    name: "David Kim",
    company: "Restaurant Chain Group",
    role: "Operations Manager",
    image: "/client-david-kim.png",
    rating: 5,
    content:
      "The restaurant management system they built for us revolutionized our operations. We've seen an 80% reduction in order processing time and 95% inventory accuracy. Exceptional work!",
    project: "Management System",
    results: ["80% faster order processing", "95% inventory accuracy", "30% cost reduction"],
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "FitnessPro Studios",
    role: "Founder",
    image: "/client-lisa-thompson.png",
    rating: 5,
    content:
      "Our cross-platform fitness app exceeded all expectations. With over 1 million downloads and a 4.9-star rating, it's been a game-changer for our business. The team's expertise in Flutter is remarkable.",
    project: "Cross-Platform App",
    results: ["1M+ app downloads", "4.9/5 user rating", "500% revenue increase"],
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Luxury Fashion Brand",
    role: "E-Commerce Director",
    image: "/client-james-wilson.png",
    rating: 5,
    content:
      "The high-end e-commerce platform they developed perfectly captures our brand's luxury aesthetic. Online sales increased by 400% and the user experience is flawless. Highly recommended!",
    project: "Luxury E-Commerce",
    results: ["400% increase in sales", "Premium user experience", "70% better search accuracy"],
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real clients who have experienced the Codebase Infotech difference
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <Card className="border-border shadow-2xl bg-card max-w-4xl mx-auto">
            <CardContent className="p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl font-medium text-card-foreground text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                {/* <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-primary/20"
                /> */}
                <div className="text-center">
                  <div className="font-bold text-card-foreground text-lg">{currentTestimonial.name}</div>
                  <div className="text-primary font-medium">{currentTestimonial.role}</div>
                  <div className="text-muted-foreground">{currentTestimonial.company}</div>
                </div>
              </div>

              {/* Project Type */}
              <div className="text-center mb-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {currentTestimonial.project}
                </span>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-4">
                {currentTestimonial.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
                    <div className="text-sm text-muted-foreground">{result}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background border-border hover:bg-card"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background border-border hover:bg-card"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-primary" : "bg-border hover:bg-primary/50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">More Client Reviews</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>

                  {/* Client */}
                  <div className="flex items-center space-x-3">
                    {/* <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-primary/20"
                    /> */}
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
