"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  service?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isRobot, setIsRobot] = useState(false) // Fake captcha state for UI matching

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.")
      }

      setIsSubmitted(true)
      setFormData({ name: "", phone: "", email: "", service: "", message: "" })
    } catch (error: any) {
      setServerError(error.message || "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-slate-50 relative flex items-center justify-center min-h-[400px]">
        <div className="max-w-3xl mx-auto px-4 w-full z-10 text-center">
          <CheckCircle className="h-20 w-20 text-[#1e3a8a] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Message Sent Successfully!</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Thank you for contacting us. Our team will get back to you shortly.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-[#1e3a8a] text-white hover:bg-blue-800 h-12 px-8 rounded-full">
            Send Another Message
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {serverError && (
          <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 flex items-start max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name Here"
                className={`bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-300'} h-14 rounded-lg px-4 focus-visible:ring-1 focus-visible:ring-[#1e3a8a] text-slate-800 text-base shadow-sm`}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1 block pl-1">{errors.name}</span>}
            </div>

            {/* Phone/Contact Input */}
            <div>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Contact Here"
                className={`bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-300'} h-14 rounded-lg px-4 focus-visible:ring-1 focus-visible:ring-[#1e3a8a] text-slate-800 text-base shadow-sm`}
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1 block pl-1">{errors.phone}</span>}
            </div>

            {/* Email Input */}
            <div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Here"
                className={`bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-300'} h-14 rounded-lg px-4 focus-visible:ring-1 focus-visible:ring-[#1e3a8a] text-slate-800 text-base shadow-sm`}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1 block pl-1">{errors.email}</span>}
            </div>

            {/* Service Dropdown */}
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-300 h-14 rounded-lg px-4 focus:ring-1 focus:ring-[#1e3a8a] focus:outline-none text-slate-500 text-base shadow-sm"
              >
                <option value="" disabled>Select a Product or Service</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message ..."
              rows={8}
              className={`bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-300'} rounded-lg p-5 focus-visible:ring-1 focus-visible:ring-[#1e3a8a] text-slate-800 text-base resize-none shadow-sm`}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1 block pl-1">{errors.message}</span>}
          </div>

          <div className="flex items-center mb-6">
            <label className="flex items-center space-x-2 cursor-pointer text-slate-600 text-sm">
              <input 
                type="checkbox" 
                checked={isRobot} 
                onChange={(e) => setIsRobot(e.target.checked)} 
                className="w-4 h-4 text-[#1e3a8a] border-slate-300 rounded focus:ring-[#1e3a8a]"
              />
              <span>I'm not a robot</span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#1e3a8a] hover:bg-blue-900 text-white border-0 h-12 px-8 rounded-full font-medium text-base inline-flex items-center transition-colors"
          >
            {isSubmitting ? "Sending..." : "Contact Us"}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </section>
  )
}
