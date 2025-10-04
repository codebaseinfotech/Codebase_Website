"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Eye, ArrowRight, Calendar, Users, TrendingUp, Apple, ArrowDownNarrowWideIcon, AppWindowIcon } from "lucide-react"
import Link from "next/link"
import { projects } from "./projects"
import { Andada_Pro } from "next/font/google"

const categories = [
  "All",
  "Mobile App",
  "Web Development",
  "UI/UX Design",
  "Full Stack",
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
                      { <DialogTrigger asChild>
                        <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                          <Eye className="h-4 w-4 mr-2" />
                          View Case Study
                        </Button>
                      </DialogTrigger> }
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
                          <Dialog>
<DialogTrigger asChild>
  <div className="flex space-x-2">
    {/* App Store Button */}
    {project.iOS_Link && (
    <Button
      size="sm"
      className="bg-black text-white hover:bg-gray-800 flex items-center border border-gray-600 rounded"
      onClick={() => window.open(project.iOS_Link, "_blank")}
    >
      <Apple className="h-4 w-4 mr-2" />
      App Store
    </Button>
 )}
    {/* Play Store Button */}
    {project.Android_Link && (
      <Button
        size="sm"
        className="bg-white text-green-600 hover:bg-green-50 flex items-center border border-gray-300 rounded"
        onClick={() => window.open(project.Android_Link, "_blank")}
      >
        <AppWindowIcon className="h-4 w-4 mr-2" />
        Google Play
      </Button>
    )}
  </div>
</DialogTrigger>
</Dialog>
                      

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
                {/* <div className="flex flex-wrap gap-2 mb-4">
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
                </div> */}

                <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4"></h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
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
                  {/* <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 p-0">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </DialogTrigger> */}
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
