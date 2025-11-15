export default function ClientLogos() {
  const clients = [
    { name: "TechStart Inc.", logo: "/client-logo-techstart.png" },
    { name: "Shilu E-Commerce Plus", logo: "/client-logo-ecommerce.png" },
    { name: "Digital Marketing Pro", logo: "/client-logo-marketing.png" },
    { name: "Restaurant Chain Group", logo: "/client-logo-restaurant.png" },
    { name: "FitnessPro Studios", logo: "/client-logo-fitness.png" },
    { name: "Luxury Fashion Brand", logo: "/client-logo-fashion.png" },
  ]

  // return (
  //   <section className="py-20 bg-card">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       {/* Header */}
  //       <div className="text-center mb-16">
  //         <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
  //           Trusted by <span className="text-primary">Leading Companies</span>
  //         </h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //           We're proud to work with innovative companies across various industries
  //         </p>
  //       </div>

  //       {/* Client Logos Grid */}
  //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
  //         {clients.map((client, index) => (
  //           <div
  //             key={index}
  //             className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:shadow-md transition-all duration-300 group"
  //           >
  //             <img
  //               src={client.logo || "/placeholder.svg"}
  //               alt={client.name}
  //               className="max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-200"
  //             />
  //           </div>
  //         ))}
  //       </div>

  //       {/* Trust Indicators */}
  //       <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
  //         <div>
  //           <div className="text-3xl font-bold text-primary mb-2">90+</div>
  //           <div className="text-muted-foreground">Satisfied Clients</div>
  //         </div>
  //         <div>
  //           <div className="text-3xl font-bold text-primary mb-2">170+</div>
  //           <div className="text-muted-foreground">Projects Completed</div>
  //         </div>
  //         <div>
  //           <div className="text-3xl font-bold text-primary mb-2">99%</div>
  //           <div className="text-muted-foreground">Client Retention</div>
  //         </div>
  //         <div>
  //           <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
  //           <div className="text-muted-foreground">Average Rating</div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}
