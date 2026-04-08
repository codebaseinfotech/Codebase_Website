"use client"

import { useState } from "react"
import { Calendar, ArrowRight, User, X, Clock, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape and how they impact business growth.",
    author: "John Smith",
    date: "Dec 15, 2023",
    category: "Web Development",
    readTime: "5 min read",
    image: "/web-development-trends.png",
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly. As we move through 2024, several key trends are shaping how we build and deploy web applications.</p>
      
      <h2>Key Trends to Watch</h2>
      <h3>1. AI-Powered Development Tools</h3>
      <p>Artificial Intelligence is revolutionizing how developers write code, with tools like GitHub Copilot and ChatGPT becoming integral parts of the development workflow. These tools help developers write better code faster and reduce repetitive tasks.</p>
      
      <h3>2. Server-Side Rendering Renaissance</h3>
      <p>With frameworks like Next.js, Nuxt.js, and SvelteKit leading the charge, server-side rendering is making a strong comeback. This approach improves SEO, performance, and user experience significantly.</p>
      
      <h3>3. Edge Computing Integration</h3>
      <p>Edge computing is becoming more accessible, allowing developers to run code closer to users for improved performance and reduced latency.</p>
      
      <h2>Impact on Business</h2>
      <p>These trends directly impact business outcomes by improving user experience, reducing development costs, and enabling faster time-to-market for digital products.</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of these trends is crucial for businesses looking to maintain a competitive edge in the digital landscape. At Codebase Infotech, we continuously adapt our development practices to leverage these emerging technologies.</p>
    `,
  },
  {
    id: 2,
    title: "Mobile App Security: Best Practices for 2024",
    excerpt: "Learn essential security measures to protect your mobile applications from modern threats.",
    author: "Sarah Johnson",
    date: "Dec 12, 2023",
    category: "Mobile Security",
    readTime: "7 min read",
    image: "/mobile-app-security.png",
    content: `
      <h2>Mobile Security Landscape</h2>
      <p>Mobile applications face increasingly sophisticated security threats. From data breaches to malware attacks, the stakes have never been higher for mobile app security.</p>
      
      <h2>Essential Security Practices</h2>
      <h3>1. Secure Authentication</h3>
      <p>Implement multi-factor authentication, biometric authentication, and secure session management to protect user accounts.</p>
      
      <h3>2. Data Encryption</h3>
      <p>Use end-to-end encryption for data transmission and store sensitive data using strong encryption algorithms.</p>
      
      <h3>3. API Security</h3>
      <p>Secure your APIs with proper authentication, rate limiting, and input validation to prevent unauthorized access.</p>
      
      <h2>Testing and Monitoring</h2>
      <p>Regular security testing and continuous monitoring are essential for maintaining app security over time.</p>
      
      <h2>Compliance Considerations</h2>
      <p>Ensure your mobile apps comply with relevant regulations like GDPR, HIPAA, and industry-specific standards.</p>
    `,
  },
  {
    id: 3,
    title: "AI Integration in Business Applications",
    excerpt: "Discover how artificial intelligence is transforming business processes and user experiences.",
    author: "Mike Chen",
    date: "Dec 10, 2023",
    category: "AI & Technology",
    readTime: "6 min read",
    image: "/ai-business-applications.png",
    content: `
      <h2>The AI Revolution in Business</h2>
      <p>Artificial Intelligence is no longer a futuristic concept—it's actively transforming how businesses operate and serve their customers.</p>
      
      <h2>Key AI Applications</h2>
      <h3>1. Customer Service Automation</h3>
      <p>AI-powered chatbots and virtual assistants are handling customer inquiries 24/7, improving response times and customer satisfaction.</p>
      
      <h3>2. Predictive Analytics</h3>
      <p>Machine learning algorithms analyze historical data to predict trends, customer behavior, and business outcomes.</p>
      
      <h3>3. Process Automation</h3>
      <p>AI automates repetitive tasks, reducing human error and freeing up employees for more strategic work.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful AI integration requires careful planning, proper data management, and gradual implementation.</p>
      
      <h2>Future Outlook</h2>
      <p>As AI technology continues to advance, we can expect even more innovative applications in business processes.</p>
    `,
  },
]

export default function BlogPreview() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof blogPosts)[0] | null>(null)

  const openArticle = (article: (typeof blogPosts)[0]) => {
    setSelectedArticle(article)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Tag className="w-4 h-4 mr-2" />
              Latest Insights
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>{" "}
              & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our technology experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-gray-600" />
                      <span className="text-xs text-gray-600 font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <button
                    onClick={() => openArticle(post)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center group"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedArticle.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">{selectedArticle.title}</h1>
              </div>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{selectedArticle.author}</p>
                    <p className="text-sm text-gray-500">{selectedArticle.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedArticle.readTime}
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
