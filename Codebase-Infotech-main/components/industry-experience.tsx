"use client"

import { useState } from "react"
import {
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Car,
  Home,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
} from "lucide-react"

const industries = [
  {
    icon: Building,
    name: "Finance & Banking",
    description: "Secure financial applications with compliance standards",
    projects: "50+ projects",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    achievements: ["PCI DSS Compliant", "SOX Compliance", "Real-time Trading"],
    clients: ["Major Banks", "FinTech Startups", "Investment Firms"],
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    description: "Online stores and marketplace solutions",
    projects: "100+ projects",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    achievements: ["Multi-vendor Platforms", "Payment Integration", "Inventory Management"],
    clients: ["Retail Chains", "Online Marketplaces", "Fashion Brands"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "HIPAA-compliant medical and wellness applications",
    projects: "30+ projects",
    color: "from-red-500 to-pink-600",
    bgColor: "from-red-50 to-pink-50",
    achievements: ["HIPAA Compliance", "Telemedicine", "EHR Integration"],
    clients: ["Hospitals", "Clinics", "Health Tech"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Learning management systems and educational tools",
    projects: "40+ projects",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
    achievements: ["LMS Platforms", "Virtual Classrooms", "Student Portals"],
    clients: ["Universities", "Schools", "EdTech Companies"],
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Fleet management and automotive service solutions",
    projects: "25+ projects",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    achievements: ["Fleet Tracking", "Service Management", "IoT Integration"],
    clients: ["Auto Dealers", "Fleet Companies", "Service Centers"],
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property management and real estate platforms",
    projects: "35+ projects",
    color: "from-teal-500 to-cyan-600",
    bgColor: "from-teal-50 to-cyan-50",
    achievements: ["Property Listings", "CRM Systems", "Virtual Tours"],
    clients: ["Real Estate Agencies", "Property Managers", "Developers"],
  },
]

export default function IndustryExperience() {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null)

  // return (
  //   <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  //     {/* Background decoration */}
  //     <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 -translate-y-48 -translate-x-48"></div>

  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  //       <div className="text-center mb-12">
  //         <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
  //           <Award className="w-4 h-4 mr-2" />
  //           Industry Expertise
  //         </div>
  //         <h2 className="text-4xl font-bold text-gray-900 mb-4">
  //           <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Industry</span>{" "}
  //           Experience
  //         </h2>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           We have deep experience across various industries, understanding unique challenges and delivering tailored
  //           solutions
  //         </p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {industries.map((industry, index) => {
  //           const IconComponent = industry.icon
  //           const isSelected = selectedIndustry === index

  //           return (
  //             <div
  //               key={index}
  //               className={`bg-gradient-to-br ${industry.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm group cursor-pointer ${isSelected ? "ring-2 ring-purple-500 scale-105" : ""}`}
  //               onClick={() => setSelectedIndustry(isSelected ? null : index)}
  //             >
  //               <div className="flex items-center justify-between mb-6">
  //                 <div
  //                   className={`bg-gradient-to-r ${industry.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
  //                 >
  //                   <IconComponent className="h-8 w-8 text-white" />
  //                 </div>
  //                 <div className="text-right">
  //                   <div className="flex items-center text-sm font-medium text-gray-600 mb-1">
  //                     <TrendingUp className="w-4 h-4 mr-1" />
  //                     {industry.projects}
  //                   </div>
  //                   <ChevronRight
  //                     className={`h-6 w-6 text-gray-400 transition-all duration-300 ${isSelected ? "rotate-90 text-purple-600" : "group-hover:translate-x-1 group-hover:text-gray-600"}`}
  //                   />
  //                 </div>
  //               </div>

  //               <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
  //               <p className="text-gray-600 mb-6">{industry.description}</p>

  //               {/* Expanded content */}
  //               <div
  //                 className={`transition-all duration-300 overflow-hidden ${isSelected ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
  //               >
  //                 <div className="border-t border-gray-200 pt-6 mt-6">
  //                   <div className="mb-4">
  //                     <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
  //                       <Award className="w-4 h-4 mr-2 text-purple-600" />
  //                       Key Achievements
  //                     </h4>
  //                     <div className="space-y-2">
  //                       {industry.achievements.map((achievement, idx) => (
  //                         <div key={idx} className="flex items-center text-sm text-gray-600">
  //                           <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
  //                           {achievement}
  //                         </div>
  //                       ))}
  //                     </div>
  //                   </div>

  //                   <div>
  //                     <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
  //                       <Users className="w-4 h-4 mr-2 text-purple-600" />
  //                       Client Types
  //                     </h4>
  //                     <div className="flex flex-wrap gap-2">
  //                       {industry.clients.map((client, idx) => (
  //                         <span
  //                           key={idx}
  //                           className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
  //                         >
  //                           {client}
  //                         </span>
  //                       ))}
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>

  //               {!isSelected && (
  //                 <div className="mt-4 pt-4 border-t border-gray-200">
  //                   <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-purple-600 transition-colors">
  //                     <span>Click to explore</span>
  //                     <ChevronRight className="ml-1 h-4 w-4" />
  //                   </div>
  //                 </div>
  //               )}
  //             </div>
  //           )
  //         })}
  //       </div>

  //       <div className="text-center mt-12">
  //         <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg">
  //           <span className="text-gray-600 mr-2">Don't see your industry?</span>
  //           <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
  //             Contact Us
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}
