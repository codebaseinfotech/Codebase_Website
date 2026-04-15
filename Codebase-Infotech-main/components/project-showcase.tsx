"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Eye,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Apple,
  Smartphone,
  Globe,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { projects } from "./projects";

/* ====== Category Filters ====== */
const categories = [
  "All",
  "Mobile App",
  "Web Development",
  "UI/UX Design",
  "Full Stack",
  "CMS Development",
  "Digital Marketing",
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== Header ====== */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-tight mb-5">
            Projects That Made{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
              a Difference
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            From startups to enterprises, our work speaks for itself. Explore how we build, solve, and scale with purpose.
          </p>
        </div>

        {/* ====== Category Filter ====== */}
        {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* ====== Projects — 2-column paired layout ====== */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Pair projects in groups of 2 */}
          {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map((_, pairIndex) => {
            const pair = filteredProjects.slice(pairIndex * 2, pairIndex * 2 + 2);
            return (
              <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                {pair.map((project) => (
                  <Dialog key={project.id}>
                    <div
                      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200/80 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {/* ====== Image Section ====== */}
                      <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg?height=300&width=400"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />
                        {/* Top gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                        
                        {/* Category pill — top left */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                          <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-slate-800 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-sm">
                            {project.category}
                          </span>
                        </div>

                        {/* Client location — top right */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 text-white/90">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[9px] sm:text-[10px] font-semibold">{project.client}</span>
                          </div>
                        </div>

                        {/* Hover overlay — View Details */}
                        <DialogTrigger asChild>
                          {/* <button className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer bg-blue-600/20 backdrop-blur-[2px]">
                            <div className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-50">
                              <Eye className="w-4 h-4 text-blue-600" />
                              View Details
                            </div>
                          </button> */}
                        </DialogTrigger>
                      </div>

                      {/* ====== Content Section ====== */}
                      <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                          {project.title}
                        </h3>

                        {/* ====== App Store & Play Store Buttons ====== */}
                        {(project.iOS_Link || project.Android_Link || project.website_link) && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {/* App Store Button */}
                            {project.iOS_Link && (
                              <button
                                onClick={(e) => { e.stopPropagation(); window.open(project.iOS_Link, "_blank"); }}
                                className="flex items-center gap-2 text-white pl-2.5 pr-3.5 py-2 border border-black rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-sm hover:shadow-lg"
                              >
                                <img src="/App_Store_(iOS)-Logo.wine.svg" alt="Apple" className="w-6 h-6 flex-shrink-0 text-black" />
                                <div className="text-left">
                                  <div className="text-[11px] sm:text-xs font-bold leading-tight text-black">App Store</div>
                                </div>
                              </button>
                            )}
                            {/* Play Store Button */}
                            {project.Android_Link && (
                              <button
                                onClick={(e) => { e.stopPropagation(); window.open(project.Android_Link, "_blank"); }}
                                className="flex items-center gap-2 text-black pl-2.5 pr-3.5 py-2 rounded-xl border border-black hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-sm hover:shadow-lg"
                              >
                                <img src="/Google_Play_2022_icon.svg.png" alt="Apple" className="w-5 h-5 flex-shrink-0 text-black" />
                                <div className="text-left">
                                  <div className="text-[11px] sm:text-xs font-bold leading-tight">Google Play</div>
                                </div>
                              </button>
                            )}
                            {/* Play Store Button */}
                            {project.website_link && (
                              <button
                                onClick={(e) => { e.stopPropagation(); window.open(project.website_link, "_blank"); }}
                                className="flex items-center gap-2 text-black pl-2.5 pr-3.5 py-2 rounded-xl border border-black hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-sm hover:shadow-lg"
                              >
                                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814a1.56 1.56 0 0 0-.563 1.24v17.892a1.56 1.56 0 0 0 .563 1.24l.065.054 10.022-10.022v-.236L3.674 1.76l-.065.054zm3.323 13.334L13.696 12l.236.236-6.764 6.764-.236-.852zm10.258-4.148l-2.494 2.494-.236-.236 2.494-2.494c.38-.22.38-.576 0-.796L14.46 7.474l.236-.236 2.494 2.494c.76.44.76 1.148 0 1.588v-.32zM6.932 3.858L13.696 12l-.236.236L6.696 5.472l.236-.852v-.762z"/></svg>
                                <div className="text-left">
                                  <div className="text-[11px] sm:text-xs font-bold leading-tight">Website</div>
                                </div>
                              </button>
                            )}
                          </div>
                        )}

                        {/* Description — 2 lines max */}
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-6 flex-grow">
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[10px] sm:text-[11px] font-semibold rounded-lg border border-slate-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Results Preview — commented as per user */}
                        {/* <div className="space-y-2 mb-4 mt-4">
                          <h4 className="font-semibold text-foreground text-sm">Key Results:</h4>
                          <ul className="space-y-1">
                            {project.results.slice(0, 2).map((result, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div> */}

                        {/* View Case Study Link — commented as per user */}
                        {/* <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-200 p-0"
                            >
                              View Case Study
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Button>
                          </DialogTrigger>
                        </Dialog> */}
                      </div>
                    </div>

                    {/* ====== DIALOG — Case Study Details ====== */}
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                      {/* Header Banner */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg?height=300&width=400"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-6 right-6">
                          <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                            {project.category}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h2>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 lg:p-8 space-y-6">
                        {/* Quick Info Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-1">
                              <MapPin className="w-3.5 h-3.5" /> Client
                            </div>
                            <div className="text-slate-900 text-sm font-bold">{project.client}</div>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-1">
                              <Calendar className="w-3.5 h-3.5" /> Timeline
                            </div>
                            <div className="text-slate-900 text-sm font-bold">{project.caseStudy.timeline}</div>
                          </div>
                          <div className="bg-slate-50 rounded-xl p-3 sm:p-4 col-span-2 sm:col-span-1">
                            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-1">
                              <Users className="w-3.5 h-3.5" /> Team
                            </div>
                            <div className="text-slate-900 text-sm font-bold">{project.caseStudy.teamSize}</div>
                          </div>
                        </div>

                        {/* App Store & Play Store Buttons (in Dialog) */}
                        {(project.iOS_Link || project.Android_Link) && (
                          <div className="flex flex-wrap gap-2.5">
                            {project.iOS_Link && (
                              <button
                                onClick={() => window.open(project.iOS_Link, "_blank")}
                                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <Apple className="w-5 h-5" />
                                <div className="text-left">
                                  <div className="text-[7px] uppercase tracking-wider opacity-60 leading-none">Download on</div>
                                  <div className="text-xs font-bold leading-tight">App Store</div>
                                </div>
                              </button>
                            )}
                            {project.Android_Link && (
                              <button
                                onClick={() => window.open(project.Android_Link, "_blank")}
                                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814a1.56 1.56 0 0 0-.563 1.24v17.892a1.56 1.56 0 0 0 .563 1.24l.065.054 10.022-10.022v-.236L3.674 1.76l-.065.054zm3.323 13.334L13.696 12l.236.236-6.764 6.764-.236-.852zm10.258-4.148l-2.494 2.494-.236-.236 2.494-2.494c.38-.22.38-.576 0-.796L14.46 7.474l.236-.236 2.494 2.494c.76.44.76 1.148 0 1.588v-.32zM6.932 3.858L13.696 12l-.236.236L6.696 5.472l.236-.852v-.762z"/></svg>
                                <div className="text-left">
                                  <div className="text-[7px] uppercase tracking-wider opacity-60 leading-none">Get it on</div>
                                  <div className="text-xs font-bold leading-tight">Google Play</div>
                                </div>
                              </button>
                            )}
                          </div>
                        )}

                        {/* Project Details */}
                        <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-100">
                          <h3 className="text-sm sm:text-base font-bold text-amber-900 mb-2 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            Project Details
                          </h3>
                          <p className="text-amber-800/90 text-sm leading-relaxed">
                            {project.caseStudy.projectDetails}
                          </p>
                          <p className="text-amber-800/80 text-sm leading-relaxed mt-2">
                            {project.description}
                          </p>
                        </div>

                        {/* App Highlights */}
                        <div className="bg-blue-50/70 p-5 sm:p-6 rounded-2xl border border-blue-100">
                          <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            App Highlights
                          </h3>
                          <ul className="space-y-2">
                            {project.caseStudy.AppHighlights.filter((h: string) => h.length > 0).map(
                              (item: string, index: number) => (
                                <li key={index} className="flex items-start text-sm text-blue-800/90 leading-relaxed">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                  {item.replace(/^•\s*/, "")}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* Challenge, Solution, Outcome — commented as per user */}
                        {/* <div className="space-y-4">
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

                        {/* Third-Party & Technologies — side by side */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 mb-2.5">Third-Party Services</h3>
                            <div className="flex flex-wrap gap-1.5">
                              {project.caseStudy.thirdPartyServices.map(
                                (tech: string, index: number) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-purple-50 text-purple-700 border border-purple-100 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5"
                                  >
                                    {tech}
                                  </Badge>
                                ),
                              )}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 mb-2.5">Technologies Used</h3>
                            <div className="flex flex-wrap gap-1.5">
                              {project.caseStudy.technologies.map((tech: string, index: number) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Results — commented as per user */}
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
                ))}
              </div>
            );
          })}
        </div>

        {/* ====== CTA Bottom ====== */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-14 text-center">
            {/* Decorative circles */}
            <div className="absolute top-[-40%] right-[-15%] w-[45%] h-[120%] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-40%] left-[-15%] w-[35%] h-[120%] bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Ready to Start Your Project?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                Let&apos;s discuss how we can help transform your ideas into
                successful digital solutions.
              </p>
              <div className="pt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-blue-50 text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 rounded-xl sm:rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
