import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Mobile App",
    category: "Mobile Development",
    description: "A comprehensive shopping app with advanced features and seamless user experience.",
    image: "/ecommerce-mobile-app-mockup.png",
    technologies: ["React Native", "Node.js", "MongoDB"],
    results: "300% increase in mobile sales",
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Development",
    description: "Modern dashboard for healthcare professionals to manage patient data efficiently.",
    image: "/health-dashboard-ui-design.png",
    technologies: ["React.js", "Python", "PostgreSQL"],
    results: "50% reduction in admin time",
  },
  {
    title: "Restaurant Management System",
    category: "Full Stack",
    description: "Complete restaurant management solution with POS, inventory, and analytics.",
    image: "/restaurant-management-system.png",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    results: "40% improvement in efficiency",
  },
]

export default function RecentProjects() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-green-800 text-sm font-medium">
                    <strong>Result:</strong> {project.results}
                  </p>
                </div>

                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
