import { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  TrendingUp, 
  Search, 
  BarChart3,
  Target,
  Mail,
  Share2,
  Megaphone,
  PenTool,
  Rocket,
  Users2,
  Trophy,
  History,
  LineChart,
  MousePointerClick,
  FileText,
  Zap,
  Sparkles,
  Globe,
  Smartphone
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, SEM, SMM & More | Codebase Infotech",
  description: "Looking for digital marketing services? Partner with Codebase Infotech for SEO, SEM, SMM & content marketing to increase traffic, leads & sales. Contact us now!",
}

const marketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "We optimize your website to rank higher on search engines and attract the right audience. Our SEO strategy includes in-depth keyword research, technical improvements, and high-quality content to boost visibility and organic traffic.",
    icon: Search
  },
  {
    title: "Pay-Per-Click (PPC)",
    description: "Our PPC campaigns deliver fast and measurable results. We create highly targeted ad campaigns across platforms like Google Ads and social media to reach your ideal customers with maximum ROI.",
    icon: MousePointerClick
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "We help you build a strong social media presence that connects with your audience. From strategy and creative content to paid advertising across Facebook, Instagram, LinkedIn, and more.",
    icon: Share2
  },
  {
    title: "Content Marketing",
    description: "Content is at the heart of digital growth. Our team develops blogs, articles, visuals, and other assets tailored to your brand voice, positioning your business as an authority while driving traffic and leads.",
    icon: FileText
  },
  {
    title: "Email Marketing",
    description: "We design and execute personalized email campaigns that drive engagement and sales. From automation to segmentation, our approach ensures the right message reaches the right audience at the right time.",
    icon: Mail
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "We analyze user behavior, optimize landing pages, and test strategies to improve performance. Our goal is to maximize the value of your existing traffic and increase revenue without extra ad spend.",
    icon: Target
  },
  {
    title: "App Store Optimization (ASO)",
    description: "Optimize your mobile apps to rank higher in app stores, attract more downloads, and increase user engagement. We handle keyword research, metadata optimization, visuals, and ongoing performance monitoring.",
    icon: Smartphone
  }
]

const processSteps = [
  {
    title: "Research & Strategy",
    description: "We start by understanding your business, audience, and goals. Our team develops a tailored strategy to maximize online growth and ROI.",
    icon: Search
  },
  {
    title: "Planning & Campaign Setup",
    description: "We create a detailed plan and set up campaigns with precision. Every element is optimized for visibility, engagement, and conversions.",
    icon: PenTool
  },
  {
    title: "Execution & Optimization",
    description: "Our experts implement the strategy across digital channels. We continuously monitor and optimize campaigns to deliver the best results.",
    icon: Rocket
  },
  {
    title: "Reporting & Growth",
    description: "We track performance, provide actionable insights, and refine strategies. Our goal is sustained growth and measurable success for your business.",
    icon: BarChart3
  }
]

const stats = [
  { label: "Years of Experience", value: "9+", icon: History },
  { label: "Skilled IT Experts", value: "60+", icon: Users2 },
  { label: "Successful Projects", value: "500+", icon: Trophy },
]

const marketingTools = [
  {
    category: "SEO & Analytics",
    icon: Search,
    tools: ["Google Analytics", "SEMrush", "Ahrefs", "Moz"]
  },
  {
    category: "Advertising",
    icon: Megaphone,
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Bing Ads"]
  },
  {
    category: "Social Media",
    icon: Share2,
    tools: ["Hootsuite", "Buffer", "Sprout Social", "Canva"]
  },
  {
    category: "Email & CRM",
    icon: Mail,
    tools: ["Mailchimp", "HubSpot", "SendGrid", "Klaviyo"]
  }
]

const portfolioProjects = [
  {
    title: "E-Commerce Growth",
    category: "SEO & PPC",
    description: "300% increase in organic traffic and 5x ROAS through targeted SEO and PPC campaigns.",
    image: "/ecom-premium-mockup.png",
  },
  {
    title: "Brand Awareness Campaign",
    category: "Social Media",
    description: "Built a community of 50K+ engaged followers through strategic social media marketing and content creation.",
    image: "/ludo-cash-mockup.png",
  },
  {
    title: "Lead Generation System",
    category: "Email & CRO",
    description: "Implemented automated email funnels that increased conversion rates by 180% and reduced cost per lead.",
    image: "/Al-Randi.png",
  }
]

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* ====== HERO SECTION ====== */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-20 lg:pb-10 bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-green-600/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[50%] left-[50%] w-[25%] h-[25%] bg-emerald-600/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-green-400 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2 mr-2 sm:mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Data-Driven Marketing
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                  Accelerate Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-blue-500 animate-gradient-x">
                    Digital Growth
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-blue-100/60 max-w-xl font-medium">
                  We deliver powerful digital marketing services designed to grow your business online. Our strategies increase visibility, attract quality leads, and drive measurable sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white border-0 shadow-[0_0_25px_rgba(22,163,74,0.3)] hover:shadow-[0_0_40px_rgba(22,163,74,0.5)] transition-all duration-500 h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg rounded-xl sm:rounded-2xl group font-bold w-full sm:w-auto">
                      Boost Your Business
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg rounded-xl sm:rounded-2xl w-full sm:w-auto">
                      View Results
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Analytics Dashboard Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md">
                  <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] bg-[#0f172a] rounded-2xl sm:rounded-3xl border-[5px] sm:border-[6px] border-[#1e293b] shadow-[0_0_60px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-8 bg-[#1e293b] flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      <div className="ml-3 text-[9px] text-slate-500 font-medium">Analytics Dashboard</div>
                    </div>
                    <div className="pt-12 p-4 space-y-3">
                      {/* Chart bars */}
                      <div className="flex items-end gap-1.5 h-20 px-2">
                        {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-green-500/30 to-green-500/10 rounded-t border border-white/5" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5 p-2">
                          <div className="w-full h-1 bg-green-500/30 rounded mb-1.5"></div>
                          <div className="w-3/4 h-1 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5 p-2">
                          <div className="w-full h-1 bg-blue-500/30 rounded mb-1.5"></div>
                          <div className="w-1/2 h-1 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-12 bg-white/5 rounded-lg border border-white/5 p-2">
                          <div className="w-full h-1 bg-emerald-500/30 rounded mb-1.5"></div>
                          <div className="w-2/3 h-1 bg-white/10 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-5 -right-2 sm:-right-6 p-3 sm:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl shadow-xl animate-bounce-slow hidden sm:block">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-green-500 flex items-center justify-center text-white">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-green-400">Growth</div>
                        <div className="text-xs sm:text-sm font-bold text-white">+300% ROI</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -left-4 sm:-left-10 p-3 sm:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl shadow-xl animate-float hidden sm:block">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-blue-400">Reach</div>
                        <div className="text-xs sm:text-sm font-bold text-white">Global Scale</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== STATS SECTION ====== */}
        <section className="py-12 sm:py-16 lg:py-20 relative bg-background border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="relative group p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden text-center sm:text-left">
                    <div className="relative space-y-3 sm:space-y-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mx-auto sm:mx-0">
                        <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground mb-1 tracking-tighter group-hover:text-primary transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground/60">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ====== MARKETING SERVICES ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
                Full-Spectrum <span className="text-primary italic">Marketing Services</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-medium">
                Comprehensive digital marketing strategies to grow your online presence and drive measurable results.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {marketingServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="group relative bg-card border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/[0.03] rounded-full group-hover:bg-primary/[0.06] group-hover:scale-150 transition-all duration-500" />
                    
                    <div className="relative flex-grow space-y-4 sm:space-y-5">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-border/50 flex items-center text-xs font-bold text-primary transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Learn More <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ====== TOOLS ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                Marketing <span className="text-primary italic">Tools We Use</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                We use industry-leading platforms and tools to deliver maximum impact for your campaigns.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {marketingTools.map((group, index) => {
                const Icon = group.icon
                return (
                  <div key={index} className="group bg-background border border-border/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500 space-y-4 sm:space-y-6">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground leading-tight">{group.category}</h3>
                      <ul className="space-y-1.5 sm:space-y-2.5">
                        {group.tools.map((tool, tid) => (
                          <li key={tid} className="flex items-center text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2 sm:mr-3 group-hover:bg-primary transition-colors flex-shrink-0" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ====== PROCESS ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                Our Marketing <span className="text-primary italic">Process</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                A systematic, data-driven approach to maximize your digital marketing ROI.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-px h-[calc(100%-80px)] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block" />
               
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-y-16 lg:gap-x-28 relative">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  const isEven = index % 2 === 0
                  return (
                    <div key={index} className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} relative group`}>
                      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center z-20 group-hover:border-primary transition-all duration-500 hidden lg:flex shadow-lg">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                      </div>

                      <div className="max-w-md space-y-4 sm:space-y-6">
                        <div className={`flex items-center gap-3 sm:gap-4 ${isEven ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/5 text-primary flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-md flex-shrink-0">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                          </div>
                          <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground/[0.04] group-hover:text-primary/[0.06] transition-all duration-500 select-none leading-none">
                            0{index + 1}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-medium">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ====== PORTFOLIO ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                Marketing <span className="text-primary italic">Success Stories</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Real results from our digital marketing campaigns that drove measurable business growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="group relative bg-background rounded-2xl sm:rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-xl flex flex-col">
                  <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                      <div className="px-3 sm:px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary">
                        {project.category}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{project.title}</h3>
                      <p className="text-slate-300 line-clamp-2 text-xs sm:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-medium mb-3">{project.description}</p>
                      <Link href="/portfolio" className="inline-flex items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider border-b border-white/20 pb-1 w-fit">
                        View Results <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA SECTION ====== */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[20%] w-[40%] h-[60%] bg-green-600/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-green-400 backdrop-blur-xl mx-auto">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-2" />
              Scale Your Business
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to dominate the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">digital landscape?</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Let our marketing experts craft a strategy that drives real results. From SEO to paid advertising, we&apos;ll help you reach your target audience and grow your revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 sm:pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-13 sm:h-16 px-8 sm:px-14 text-base sm:text-xl font-bold bg-white text-slate-950 hover:bg-green-500 hover:text-white rounded-xl sm:rounded-2xl transition-all duration-500 shadow-xl hover:shadow-green-500/30 w-full">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="tel:+917096859504" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-13 sm:h-16 px-8 sm:px-14 text-base sm:text-xl font-bold border-white/20 text-black hover:bg-white/5 rounded-xl sm:rounded-2xl w-full">
                  Call Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
