"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Eye, ArrowRight, Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Moos Barber",
    category: "Mobile App",
    type: "mobile",
    description: "Enjoy the best Barbering services with MOOS BARBERS. Get a local's insight into the Barber professions & Saloons & plan your visit by contacting them ahead of time. Using this app, you can find direct Barber professions & Saloons.",
    image: "/ecommerce-mobile-app-mockup.png",
    technologies: ["iOS","Android"],
    client: "United Kingdom",
    results: ["300% increase in user engagement", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    caseStudy: {
      challenge:
        "Moos Barber needed a mobile platform that would make Barbering services accessible and engaging for everyday consumers while tracking their preferences.",
      solution:
        "We developed a React Native app with AI-powered Barber recommendations, appointment scheduling, and user-friendly interfaces to encourage bookings.",
      outcome:
        "The app achieved over 100K downloads in the first 6 months, with users reporting 40% more bookings and high engagement with the Barber profiles.",
      timeline: "4 months",
      teamSize: "6 developers",
      projectDetails: "Multivendor Barber apps for Customers & professionals barbers/salons.",
      AppHighlights: ["Discover professional barbers and salons nearby", "Book appointments online instantly", "Connect directly with barbers and salon professionals", "Use the app in both Arabic and English for your convenience"],
      technologies: ["iOS","Android"],
      thirdPartyServices: ["Google Maps", "Firebase", "Braintree","PayPal","Alamofire"],
    },
  },
  {
    id: 7,
    title: "Wyld",
    category: "Mobile App",
    type: "mobile",
    description: "Enjoy the best vacation experiences with WYLD Camps. Get a local's insight into the Camps you plan to visit before your vacation by contacting them ahead of time. Using this app, you can find direct venders for summer camps.",
    image: "/wyld-app.jpg",
    technologies: ["iOS","Android"],
    client: "USA",
    results: ["300% increase in user engagement", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    caseStudy: {
      challenge:
        "Moos Barber needed a mobile platform that would make Barbering services accessible and engaging for everyday consumers while tracking their preferences.",
      solution:
        "We developed a React Native app with AI-powered Barber recommendations, appointment scheduling, and user-friendly interfaces to encourage bookings.",
      outcome:
        "The app achieved over 100K downloads in the first 6 months, with users reporting 40% more bookings and high engagement with the Barber profiles.",
      timeline: "4 months",
      teamSize: "6 developers",
      projectDetails: "Camp Booking for Customers and Venders.",
      AppHighlights: ["Discover Camps – Browse curated summer camps with detailed info and reviews","Direct Vendor Access – Connect with camp organizers before booking","Secure Payments – Safe and easy booking","Seamless Booking – Real-time availability and instant confirmations","Local Insights – Get personalized tips from camp vendors and hosts","User-Friendly Experience – Simple, fast, and intuitive design"],
      technologies: ["iOS","Android"],
      thirdPartyServices: ["Google Maps", "Firebase", "Authorize.Net Accept","Alamofire"],
    },
  },
  {
    id: 8,
    title: "Fly Elite",
    category: "Mobile App",
    type: "mobile",
    description: "Enjoy the best Jet vacation experiences around the globe with Fly Elite. Using this app, you can find best booking experience & make the most of your itinerary by planning efficiently.",
    image: "/flyelite.jpg",
    technologies: ["iOS","Android", "Node.js", "MongoDB", "AI/ML"],
    client: "Dubai, UAE",
    results: ["300% increase in user engagement", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    caseStudy: {
      challenge:
        "Moos Barber needed a mobile platform that would make Barbering services accessible and engaging for everyday consumers while tracking their preferences.",
      solution:
        "We developed a React Native app with AI-powered Barber recommendations, appointment scheduling, and user-friendly interfaces to encourage bookings.",
      outcome:
        "The app achieved over 100K downloads in the first 6 months, with users reporting 40% more bookings and high engagement with the Barber profiles.",
      timeline: "4 months",
      teamSize: "6 developers",
      projectDetails: "Jet Booking apps",
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "AWS", "Stripe"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
  {
    id: 9,
    title: "G8pass",
    category: "Mobile App",
    type: "mobile",
    description: "G8PASS is the best Society Management Apps & backend Software. It provides to manage housing, apartments security, visitor management and facility management etc. Now managing your Housing Society is simple.",
    image: "/gatepass-app.jpg",
    technologies: ["iOS","Android"],
    client: "Germany & Dubai - UAE",
    results: ["300% increase in user engagement", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    caseStudy: {
      challenge:
        "Moos Barber needed a mobile platform that would make Barbering services accessible and engaging for everyday consumers while tracking their preferences.",
      solution:
        "We developed a React Native app with AI-powered Barber recommendations, appointment scheduling, and user-friendly interfaces to encourage bookings.",
      outcome:
        "The app achieved over 100K downloads in the first 6 months, with users reporting 40% more bookings and high engagement with the Barber profiles.",
      timeline: "4 months",
      teamSize: "6 developers",
      projectDetails: "Society Management Apps for Customers, Security Guards & web software for society management staff",
      AppHighlights: ["Resident App – Pay maintenance bills, raise complaints, book amenities, track visitors.","Security Guard App – Quick visitor entry/exit, emergency alerts, staff attendance.","Society Staff Web Software – Manage members, finances, facility bookings, and reports.","Communication Hub – Announcements, polls, and notice board for residents.","Digital Payments – Easy online payments for maintenance & utilities.","Smart Dashboard – Real-time analytics and reports for management committees.","Instant Alerts – SMS, push notifications & emergency notifications.","Facility Management – Track bookings for clubhouse, gym, parking, etc.",""],
      technologies: ["iOS","Android"],
      thirdPartyServices: ["Alamofire","Pushy"],
    },
  },
   {
    id: 10,
    title: "Binsina Pharmacy",
    category: "Mobile App",
    type: "mobile",
    description: "G8PASS is the best Society Management Apps & backend Software. It provides to manage housing, apartments security, visitor management and facility management etc. Now managing your Housing Society is simple.",
    image: "/Binsin.png",
    technologies: ["iOS","Android"],
    client: "Germany & Dubai - UAE",
    results: ["300% increase in user engagement", "50% reduction in cart abandonment", "4.8/5 app store rating"],
    caseStudy: {
      challenge:
        "Moos Barber needed a mobile platform that would make Barbering services accessible and engaging for everyday consumers while tracking their preferences.",
      solution:
        "We developed a React Native app with AI-powered Barber recommendations, appointment scheduling, and user-friendly interfaces to encourage bookings.",
      outcome:
        "The app achieved over 100K downloads in the first 6 months, with users reporting 40% more bookings and high engagement with the Barber profiles.",
      timeline: "4 months",
      teamSize: "6 developers",
      projectDetails: "Society Management Apps for Customers, Security Guards & web software for society management staff",
      AppHighlights: ["Resident App – Pay maintenance bills, raise complaints, book amenities, track visitors.","Security Guard App – Quick visitor entry/exit, emergency alerts, staff attendance.","Society Staff Web Software – Manage members, finances, facility bookings, and reports.","Communication Hub – Announcements, polls, and notice board for residents.","Digital Payments – Easy online payments for maintenance & utilities.","Smart Dashboard – Real-time analytics and reports for management committees.","Instant Alerts – SMS, push notifications & emergency notifications.","Facility Management – Track bookings for clubhouse, gym, parking, etc.",""],
      technologies: ["iOS","Android"],
      thirdPartyServices: ["Alamofire","Pushy"],
    },
  },
  {
    id: 2,
    title: "TechCorp Website Redesign",
    category: "Web Development",
    type: "web",
    description: "Complete website overhaul with modern design, improved performance, and enhanced user experience.",
    image: "/modern-corporate-website-design.png",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    client: "TechCorp Solutions",
    results: ["200% increase in page speed", "150% boost in conversions", "40% reduction in bounce rate"],
    caseStudy: {
      challenge:
        "TechCorp's outdated website was slow, had poor mobile experience, and wasn't converting visitors into leads effectively.",
      solution:
        "We redesigned the entire website using Next.js and Tailwind CSS, implementing modern UI/UX principles, optimizing for performance, and adding conversion-focused elements.",
      outcome:
        "The new website loads 3x faster, has a 95+ Google PageSpeed score, and generates 150% more qualified leads with significantly improved user engagement metrics.",
      timeline: "3 months",
      teamSize: "4 developers",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel", "Contentful", "Google Analytics"],
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
  {
    id: 3,
    title: "HealthTracker Dashboard",
    category: "UI/UX Design",
    type: "design",
    description: "Intuitive health monitoring dashboard with data visualization and personalized insights.",
    image: "/health-dashboard-ui-design.png",
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    client: "HealthTech Innovations",
    results: ["90% user satisfaction", "60% increase in daily active users", "Award-winning design"],
    caseStudy: {
      challenge:
        "HealthTech needed a user-friendly dashboard that could present complex health data in an understandable and actionable way for both patients and healthcare providers.",
      solution:
        "We designed an intuitive dashboard with clear data visualizations, personalized health insights, and an easy-to-navigate interface that works seamlessly across all devices.",
      outcome:
        "The dashboard received a 90% user satisfaction rating, won the 2023 Healthcare UX Award, and helped increase patient engagement by 60% with their health monitoring.",
      timeline: "2 months",
      teamSize: "3 designers",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "Miro", "Zeplin"],
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
  {
    id: 4,
    title: "RestaurantPro Management System",
    category: "Full Stack",
    type: "fullstack",
    description: "Comprehensive restaurant management system with POS, inventory, and analytics features.",
    image: "/restaurant-management-system.png",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
    client: "Restaurant Chain Group",
    results: ["80% reduction in order processing time", "95% inventory accuracy", "30% cost savings"],
    caseStudy: {
      challenge:
        "A restaurant chain needed an integrated system to manage orders, inventory, staff, and analytics across multiple locations efficiently.",
      solution:
        "We built a comprehensive management system with real-time POS integration, automated inventory tracking, staff management, and detailed analytics dashboard.",
      outcome:
        "The system reduced order processing time by 80%, improved inventory accuracy to 95%, and helped the chain save 30% on operational costs through better resource management.",
      timeline: "6 months",
      teamSize: "8 developers",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker", "AWS", "Stripe"],
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
  {
    id: 5,
    title: "FitnessPro Mobile App",
    category: "Cross Platform",
    type: "mobile",
    description: "Cross-platform fitness app with workout tracking, social features, and AI personal trainer.",
    image: "/fitness-app-cross-platform.png",
    technologies: ["Flutter", "Firebase", "TensorFlow", "Stripe"],
    client: "FitnessPro Studios",
    results: ["1M+ downloads", "4.9/5 user rating", "500% revenue increase"],
    caseStudy: {
      challenge:
        "FitnessPro wanted to create a comprehensive fitness app that could provide personalized workout plans, track progress, and build a community of fitness enthusiasts.",
      solution:
        "We developed a Flutter app with AI-powered workout recommendations, social features, progress tracking, and integration with wearable devices for comprehensive fitness monitoring.",
      outcome:
        "The app reached 1 million downloads within 8 months, maintains a 4.9/5 rating, and generated 500% increase in revenue through premium subscriptions and in-app purchases.",
      timeline: "5 months",
      teamSize: "7 developers",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Stripe", "HealthKit", "Google Fit"],
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
  {
    id: 6,
    title: "LuxuryBrand E-commerce",
    category: "CMS Development",
    type: "ecommerce",
    description: "High-end e-commerce platform with custom CMS, advanced search, and premium user experience.",
    image: "/luxury-ecommerce-platform.png",
    technologies: ["Magento", "PHP", "Elasticsearch", "AWS"],
    client: "Luxury Fashion Brand",
    results: ["400% increase in online sales", "70% improvement in search accuracy", "Premium user experience"],
    caseStudy: {
      challenge:
        "A luxury fashion brand needed an e-commerce platform that reflected their premium brand image while providing advanced search and personalization features.",
      solution:
        "We built a custom Magento-based platform with advanced search capabilities, personalized recommendations, and a premium user interface that matches the brand's luxury positioning.",
      outcome:
        "The platform increased online sales by 400%, improved search accuracy by 70%, and received industry recognition for its exceptional user experience and design.",
      timeline: "8 months",
      teamSize: "10 developers",
      technologies: ["Magento", "PHP", "Elasticsearch", "AWS", "Redis", "Varnish", "CDN"],
      AppHighlights: ["•	Discover professional barbers and salons nearby", "•	Book appointments online instantly", "•	Connect directly with barbers and salon professionals", "•	Use the app in both Arabic and English for your convenience"],
       thirdPartyServices: ["Firebase", "Stripe", "Twilio"],
    },
  },
]

const categories = [
  "All",
  "Mobile App",
  "Web Development",
  "UI/UX Design",
  "Full Stack",
  "Cross Platform",
  "CMS Development",
  "Digital Marketing",
]

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-blue-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                          <Eye className="h-4 w-4 mr-2" />
                          View Case Study
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">
                            {project.title} - Case Study
                          </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-8">
                      {/* Project Overview */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <img
                            src={project.image || "/placeholder.svg?height=300&width=400"}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-xl"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Client</h3>
                            <p className="text-slate-600">{project.client}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                                Timeline
                              </h4>
                              <p className="text-slate-600">{project.caseStudy.timeline}</p>
                            </div>
                             <div className="space-y-4"></div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1 flex items-center w-30">
                                <Users className="h-4 w-4 mr-2 text-blue-600" />
                                Team Size
                              </h4>
                              <p className=" w-30 text-slate-600">{project.caseStudy.teamSize}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                          {/* Challenge, Solution, Outcome */}

                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                          <h3 className="text-xl font-bold text-orange-900 mb-3">Project Details:</h3>
                          <p className="text-orange-800">{project.caseStudy.projectDetails}</p>
                           <br />
                          <p className="text-orange-800">{project.description}</p>
                        </div>

                         <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                          <h3 className="text-xl font-bold text-blue-900 mb-3">App Highlights:</h3>

                            <ul className="list-disc list-inside text-blue-800 space-y-1">
                            {project.caseStudy.AppHighlights.map((item, index) => (
                            <li key={index}>{item}
                            </li>))}
                           </ul>
                          </div>

                          {/* <div className="space-y-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                              <h3 className="text-xl font-bold text-red-900 mb-3">Challenge</h3>
                              <p className="text-red-800">{project.caseStudy.challenge}</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                              <h3 className="text-xl font-bold text-blue-900 mb-3">Solution</h3>
                              <p className="text-blue-800">{project.caseStudy.solution}</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                              <h3 className="text-xl font-bold text-green-900 mb-3">Outcome</h3>
                              <p className="text-green-800">{project.caseStudy.outcome}</p>
                            </div>
                          </div> */}

                          {/* Third-Party Used */}
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Third-Party Services Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.caseStudy.thirdPartyServices.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                           {/* Technologies */}
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.caseStudy.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Results */}
                          {/* <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                              Key Results
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                              {project.ca.map((result, index) => (
                                <div
                                  key={index}
                                  className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-100"
                                >
                                  <p className="text-green-800 font-semibold">{result}</p>
                                </div>
                              ))}
                            </div> */}
                          {/* </div> */}
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button> */}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700">
                  {project.category}
                </Badge>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Results Preview */}
                {/* <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-slate-900 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div> */}

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 p-0"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-slate-900 mb-4">
                        {project.title} - Case Study
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-8">
                      {/* Project Overview */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <img
                            src={project.image || "/placeholder.svg?height=300&width=400"}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-xl"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Client</h3>
                            <p className="text-slate-600">{project.client}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1 flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                                Timeline
                              </h4>
                              <p className="text-slate-600">{project.caseStudy.timeline}</p>
                            </div>
                             <div className="space-y-4"></div>
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-1 flex items-center w-30">
                                <Users className="h-4 w-4 mr-2 text-blue-600" />
                                Team Size
                              </h4>
                              <p className=" w-30 text-slate-600">{project.caseStudy.teamSize}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Challenge, Solution, Outcome */}
                      <div className="space-y-6">

                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                          <h3 className="text-xl font-bold text-orange-900 mb-3">Project Details</h3>
                          <p className="text-orange-800">{project.caseStudy.projectDetails}</p>
                          <br />
                          <p className="text-orange-800">{project.description}</p>
                        </div>

                         <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                          <h3 className="text-xl font-bold text-blue-900 mb-3">App Highlights:</h3>

                            <ul className="list-disc list-inside text-blue-800 space-y-1">
                            {project.caseStudy.AppHighlights.map((item, index) => (
                            <li key={index}>{item}
                            </li>))}
                           </ul>
                          </div>

                        {/* <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                          <h3 className="text-xl font-bold text-red-900 mb-3">Challenge</h3>
                          <p className="text-red-800">{project.caseStudy.challenge}</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                          <h3 className="text-xl font-bold text-blue-900 mb-3">Solution</h3>
                          <p className="text-blue-800">{project.caseStudy.solution}</p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                          <h3 className="text-xl font-bold text-green-900 mb-3">Outcome</h3>
                          <p className="text-green-800">{project.caseStudy.outcome}</p>
                        </div> */}
                      </div>

                       {/* Third-Party Used */}
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Third-Party Services Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.caseStudy.thirdPartyServices.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.caseStudy.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      {/* <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                          Key Results
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {project.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-100"
                            >
                              <p className="text-green-800 font-semibold">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into successful digital solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
