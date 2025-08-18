"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, Quote } from "lucide-react"

const techQuotes = [
  "The future belongs to organizations that can turn today's information into tomorrow's insight. - AI Revolution",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Python is executable pseudocode. Java is verbose pseudocode. - Bruce Eckel",
  "iOS development: Where every pixel matters and every animation tells a story.",
  "The best error message is the one that never shows up. - Thomas Fuchs",
  "Java: Write once, run anywhere. Debug everywhere. - Developer Wisdom",
  "Artificial Intelligence is the new electricity. - Andrew Ng",
  "In Python, there should be one obvious way to do it. - The Zen of Python",
  "Mobile apps are not just software; they're experiences that fit in your pocket.",
  "The Internet of Things is really a giant robot we're building together. - Bruce Sterling",
  "Machine learning is the last invention that humanity will ever need to make. - Nick Bostrom",
  "Swift: A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS.",
  "React: A JavaScript library for building user interfaces, one component at a time.",
  "The cloud is not just about technology; it's about enabling new business models.",
  "Cybersecurity is not a product, but a process. - Bruce Schneier",
]

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateRandomQuote = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * techQuotes.length)
      setCurrentQuote(techQuotes[randomIndex])
      setIsGenerating(false)
    }, 500)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <Quote className="h-12 w-12 text-primary mx-auto" />
          <blockquote className="text-lg text-muted-foreground italic leading-relaxed">"{currentQuote}"</blockquote>
          <Button onClick={generateRandomQuote} disabled={isGenerating} className="mt-6">
            {isGenerating ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            Get New Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
