import { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  FileText, 
  Globe, 
  Code2, 
  ShoppingBag, 
  ShieldCheck, 
  Wrench,
  Search,
  PenTool,
  Rocket,
  Users2,
  Trophy,
  History,
  Layout,
  Database,
  Server,
  Layers,
  Zap,
  Settings,
  RefreshCw
} from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "CMS Development Services | WordPress, Shopify & Custom CMS | Codebase Infotech",
  description: "Professional CMS development services including WordPress, Shopify, Drupal, and custom CMS solutions. Build scalable, easy-to-manage websites with Codebase Infotech.",
}

const cmsServices = [
  {
    title: "WordPress Development",
    description: "Build powerful, customizable websites using WordPress — the world's most popular CMS. From blogs to enterprise portals, we deliver tailored WordPress solutions with custom themes and plugins.",
    icon: Globe
  },
  {
    title: "Shopify Development",
    description: "Create high-converting e-commerce stores with Shopify. We handle custom theme development, app integrations, payment gateway setup, and performance optimization for maximum sales.",
    icon: ShoppingBag
  },
  {
    title: "Drupal Development",
    description: "Enterprise-grade content management with Drupal. We build secure, scalable websites with complex content workflows, multi-language support, and advanced user permissions.",
    icon: ShieldCheck
  },
  {
    title: "Custom CMS Development",
    description: "When off-the-shelf solutions won't cut it, we build custom CMS platforms tailored to your unique business needs with intuitive admin interfaces and flexible content models.",
    icon: Settings
  },
  {
    title: "Headless CMS Solutions",
    description: "Leverage headless CMS architecture with Strapi, Contentful, or Sanity for blazing-fast, API-driven content delivery across web, mobile, and IoT platforms.",
    icon: Layers
  },
  {
    title: "CMS Migration & Upgrades",
    description: "Seamlessly migrate your content from legacy systems to modern CMS platforms. We ensure zero data loss, URL preservation, and SEO continuity during the entire migration.",
    icon: RefreshCw
  },
  {
    title: "Plugin & Module Development",
    description: "Extend your CMS functionality with custom plugins, modules, and extensions. We build performant, secure add-ons that integrate seamlessly with your existing platform.",
    icon: Code2
  },
  {
    title: "CMS Maintenance & Support",
    description: "Keep your CMS secure and up-to-date with ongoing maintenance, security patches, performance optimization, and 24/7 technical support.",
    icon: Wrench
  }
]

const processSteps = [
  {
    title: "Discovery & Requirements",
    description: "We analyze your content workflows, user roles, and business requirements to recommend the best CMS solution for your needs.",
    icon: Search
  },
  {
    title: "Design & Architecture",
    description: "Creating intuitive admin interfaces and content models that make it easy for your team to manage and publish content effortlessly.",
    icon: PenTool
  },
  {
    title: "Development & Integration",
    description: "Building your CMS with clean code, custom features, third-party integrations, and thorough testing for reliability and performance.",
    icon: Code2
  },
  {
    title: "Launch & Training",
    description: "Deploying your CMS to production, providing team training, documentation, and ongoing support to ensure smooth operations.",
    icon: Rocket
  }
]

const stats = [
  { label: "Years of Experience", value: "9+", icon: History },
  { label: "Skilled IT Experts", value: "60+", icon: Users2 },
  { label: "Successful Projects", value: "500+", icon: Trophy },
]

const techStack = [
  {
    category: "CMS Platforms",
    icon: Layout,
    techs: ["WordPress", "Shopify", "Drupal", "Joomla", "Magento"]
  },
  {
    category: "Headless CMS",
    icon: Server,
    techs: ["Strapi", "Contentful", "Sanity", "Ghost"]
  },
  {
    category: "E-Commerce",
    icon: ShoppingBag,
    techs: ["WooCommerce", "Shopify Plus", "BigCommerce", "PrestaShop"]
  },
  {
    category: "Backend & DB",
    icon: Database,
    techs: ["PHP", "Node.js", "MySQL", "PostgreSQL", "MongoDB"]
  }
]

const portfolioProjects = [
  {
    title: "E-Commerce Platform",
    category: "Shopify Store",
    description: "High-converting multi-vendor ecommerce platform with custom theme, payment integration, and advanced analytics.",
    image: "/ecom-premium-mockup.png",
  },
  {
    title: "Enterprise Portal",
    category: "Custom CMS",
    description: "Tailored content management system with role-based access, multi-language support, and workflow automation.",
    image: "/Al-Randi.png",
  },
  {
    title: "Gaming Platform",
    category: "WordPress + Custom",
    description: "Interactive gaming portal with dynamic content, user profiles, and real-time leaderboard integration.",
    image: "/ludo-cash-mockup.png",
  }
]

export default function CMSDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* ====== HERO SECTION ====== */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 lg:pt-20 lg:pb-10 bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-orange-600/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[50%] left-[40%] w-[25%] h-[25%] bg-amber-600/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-orange-400 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2 mr-2 sm:mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  Content Management
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                  Powerful{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-600 animate-gradient-x">
                    CMS Solutions
                  </span>{" "}
                  Built to Scale
                </h1>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-blue-100/60 max-w-xl font-medium">
                  From WordPress to custom-built platforms, we create content management systems that empower your team to publish, manage, and scale content effortlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white border-0 shadow-[0_0_25px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] transition-all duration-500 h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg rounded-xl sm:rounded-2xl group font-bold w-full sm:w-auto">
                      Start Your CMS Project
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg rounded-xl sm:rounded-2xl w-full sm:w-auto">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* CMS Dashboard Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md">
                  <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] aspect-[4/3] bg-[#0f172a] rounded-2xl sm:rounded-3xl border-[5px] sm:border-[6px] border-[#1e293b] shadow-[0_0_60px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-8 bg-[#1e293b] flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      <div className="ml-3 text-[9px] text-slate-500 font-medium">CMS Dashboard</div>
                    </div>
                    <div className="pt-10 flex h-[calc(100%-2rem)]">
                      {/* Sidebar */}
                      <div className="w-12 sm:w-14 bg-white/5 border-r border-white/5 flex flex-col items-center py-3 gap-3">
                        <div className="w-6 h-6 rounded bg-orange-500/30 border border-white/10"></div>
                        <div className="w-6 h-6 rounded bg-white/10 border border-white/5"></div>
                        <div className="w-6 h-6 rounded bg-white/10 border border-white/5"></div>
                        <div className="w-6 h-6 rounded bg-white/10 border border-white/5"></div>
                      </div>
                      {/* Main content */}
                      <div className="flex-1 p-3 space-y-2.5">
                        <div className="h-5 w-24 bg-white/10 rounded"></div>
                        <div className="h-16 w-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg border border-white/5 animate-shimmer"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-14 bg-white/5 rounded-lg border border-white/5"></div>
                          <div className="h-14 bg-white/5 rounded-lg border border-white/5"></div>
                        </div>
                        <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-5 -right-2 sm:-right-6 p-3 sm:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl shadow-xl animate-bounce-slow hidden sm:block">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-orange-400">Content</div>
                        <div className="text-xs sm:text-sm font-bold text-white">Easy Manage</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -left-4 sm:-left-10 p-3 sm:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl shadow-xl animate-float hidden sm:block">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-blue-400">Security</div>
                        <div className="text-xs sm:text-sm font-bold text-white">Enterprise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== STATS ====== */}
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
                        <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground mb-1 tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground/60">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ====== SERVICES ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
                Complete <span className="text-primary italic">CMS Ecosystem</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-medium">
                From popular platforms to fully custom-built systems, we deliver CMS solutions that give your team total control over content.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {cmsServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="group relative bg-card border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/[0.03] rounded-full group-hover:bg-primary/[0.06] group-hover:scale-150 transition-all duration-500" />
                    <div className="relative flex-grow space-y-4 sm:space-y-5">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm font-medium">{service.description}</p>
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

        {/* ====== TECH STACK ====== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-card/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                CMS <span className="text-primary italic">Technologies</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                We work with the most trusted CMS platforms and technologies in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {techStack.map((group, index) => {
                const Icon = group.icon
                return (
                  <div key={index} className="group bg-background border border-border/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-500 space-y-4 sm:space-y-6">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground leading-tight">{group.category}</h3>
                      <ul className="space-y-1.5 sm:space-y-2.5">
                        {group.techs.map((tech, tid) => (
                          <li key={tid} className="flex items-center text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mr-2 sm:mr-3 group-hover:bg-primary transition-colors flex-shrink-0" />
                            {tech}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">Our CMS <span className="text-primary italic">Development Process</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">A streamlined process from discovery to deployment, ensuring your CMS is built right from day one.</p>
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
                          <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground/[0.04] group-hover:text-primary/[0.06] transition-all duration-500 select-none leading-none">0{index + 1}</div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-medium">{step.description}</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">CMS <span className="text-primary italic">Success Stories</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">Explore our CMS projects that empower businesses with seamless content management.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="group relative bg-background rounded-2xl sm:rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-xl flex flex-col">
                  <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                      <div className="px-3 sm:px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary">{project.category}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{project.title}</h3>
                      <p className="text-slate-300 line-clamp-2 text-xs sm:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-medium mb-3">{project.description}</p>
                      <Link href="/portfolio" className="inline-flex items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider border-b border-white/20 pb-1 w-fit">
                        Explore Project <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA ====== */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[20%] w-[40%] h-[60%] bg-orange-600/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-orange-400 backdrop-blur-xl mx-auto">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-2" />
              Content Empowerment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to take control of your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">content?</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100/50 max-w-2xl mx-auto font-medium leading-relaxed">
              Let us build a CMS that puts your team in the driver&apos;s seat. From WordPress to custom solutions, we&apos;ll deliver a platform that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 sm:pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-13 sm:h-16 px-8 sm:px-14 text-base sm:text-xl font-bold bg-white text-slate-950 hover:bg-orange-500 hover:text-white rounded-xl sm:rounded-2xl transition-all duration-500 shadow-xl hover:shadow-orange-500/30 w-full">Let&apos;s Connect</Button>
              </Link>
              <Link href="tel:+917096859504" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-13 sm:h-16 px-8 sm:px-14 text-base sm:text-xl font-bold border-white/20 text-black hover:bg-white/5 rounded-xl sm:rounded-2xl w-full">Call Expert</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
