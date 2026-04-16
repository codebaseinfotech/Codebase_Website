"use client"

import { useState, useEffect } from "react"
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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[30%] h-[30%] bg-cyan-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Star className="w-4 h-4 mr-2" />
             Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Real stories from global enterprises who have experienced the transformative Codebase Infotech difference.
          </p>
        </div>

        {/* Main Testimonial Slider Panel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-[3rem] p-8 sm:p-16 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-[4rem] pointer-events-none" />
            <Quote className="absolute top-12 right-12 w-20 h-20 text-blue-50 group-hover:text-blue-100 transition-colors duration-500" />

            {/* Testimonial Content */}
            <div className="flex flex-col items-center relative z-10">
               {/* Rating */}
               <div className="flex justify-center mb-8 space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                  ))}
               </div>

               <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 text-center mb-10 leading-relaxed max-w-4xl italic">
                 "{currentTestimonial.content}"
               </blockquote>

               {/* Client Info */}
               <div className="flex items-center justify-center space-x-4 mb-10">
                 <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700 text-xl shadow-sm">
                   {currentTestimonial.name.charAt(0)}
                 </div>
                 <div className="text-left">
                   <div className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</div>
                   <div className="text-cyan-600 font-medium text-sm">
                     {currentTestimonial.role}, <span className="text-slate-500">{currentTestimonial.company}</span>
                   </div>
                 </div>
               </div>

               {/* Key Results */}
               <div className="grid md:grid-cols-3 gap-4 w-full">
                 <div className="col-span-full text-center mb-2">
                   <span className="px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-wider">
                     {currentTestimonial.project} Results
                   </span>
                 </div>
                 {currentTestimonial.results.map((result, index) => (
                   <div key={index} className="text-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md transition-all">
                     <div className="text-sm font-bold text-slate-700">{result}</div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 bg-white border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-700 z-10 h-10 w-10 sm:h-14 sm:w-14 rounded-full shadow-lg transition-all hover:scale-110"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 bg-white border-slate-200 hover:bg-blue-50 hover:text-blue-700 text-slate-700 z-10 h-10 w-10 sm:h-14 sm:w-14 rounded-full shadow-lg transition-all hover:scale-110"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                   ? "w-8 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm" 
                   : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (More Reviews) */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <h3 className="text-3xl font-black text-slate-900 text-center mb-12">More Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Reviews</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col relative h-full">
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 mb-6 leading-relaxed text-sm italic flex-grow">
                  "{testimonial.content.substring(0, 140)}..."
                </p>

                {/* Client */}
                <div className="pt-5 border-t border-slate-100 flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-700 shadow-sm text-sm">
                   {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-cyan-600 font-medium text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
