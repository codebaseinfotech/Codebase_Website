import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in technology and business strategy. Passionate about transforming businesses through innovative solutions.",
    image: "/professional-ceo-headshot.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@codebaseinfotech.com",
    },
  },
  // {
  //   name: "Sarah Chen",
  //   role: "CTO",
  //   bio: "Technical expert specializing in full-stack development and system architecture. Leads our development team with expertise in modern frameworks.",
  //   image: "/cto-headshot-female.png",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "sarah@codebaseinfotech.com",
  //   },
  // },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer",
    bio: "Senior developer with expertise in React, Node.js, and mobile app development. Passionate about clean code and user experience.",
    image: "/professional-developer-headshot-male.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@codebaseinfotech.com",
    },
  },
  // {
  //   name: "Emily Davis",
  //   role: "UI/UX Designer",
  //   bio: "Creative designer focused on user-centered design and creating beautiful, functional interfaces that users love.",
  //   image: "/professional-female-designer-headshot.png",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "emily@codebaseinfotech.com",
  //   },
  // },
  {
    name: "David Kim",
    role: "Digital Marketing Manager",
    bio: "Marketing strategist with expertise in SEO, social media, and digital campaigns that drive real business results.",
    image: "/placeholder-u448d.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@codebaseinfotech.com",
    },
  },  
  // {
  //   name: "Lisa Thompson",
  //   role: "Project Manager",
  //   bio: "Experienced project manager ensuring smooth delivery of projects on time and within budget. Expert in agile methodologies.",
  //   image: "/professional-female-project-manager.png",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "lisa@codebaseinfotech.com",
  //   },
  // },
]

export default function TeamSection() {
  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-card-foreground mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals behind our success - passionate professionals dedicated to your project's success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group bg-background">
              <CardContent className="p-8 text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
