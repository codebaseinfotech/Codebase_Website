import { MapPin, PhoneCall, Waypoints, FileText, Terminal } from "lucide-react"

export default function ContactMap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <MapPin className="w-4 h-4 mr-2" />
             Location Matrix
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Find Us on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Map</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Located in the absolute heart of the Digital City, we're easily accessible and permanently ready to welcome you.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 bg-white">
           {/* Fallback styling for the embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.942928462566!2d72.81297997508239!3d21.234517480459365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb5dd8b1b53%3A0xefbc098ecdf1e0db!2s201%2C%20Akshar%20Square%2C%20Opp.%20Cancer%20Hospital%2C%20Near%20Akshar%20Wadi%2C%20Dabholi%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1691788800000!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Codebase Infotech HQ Matrix Location"
          ></iframe>
        </div>

        {/* What Comes Next Section */}
        <div className="mt-28 mb-10">
          <h3 className="text-3xl md:text-[2.5rem] font-bold text-center text-slate-900 mb-14 tracking-tight">
            What Comes Next <span className="text-blue-600">After You Reach Us?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-blue-50/80 rounded-[1.5rem] p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] group">
              <div className="text-blue-600 mb-6">
                <PhoneCall className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-4 text-lg leading-snug">Business Discovery & Insight Gathering</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We dive deep into your business goals, target audience, and challenges to gain clear insights. This helps us define the right strategy and set a strong foundation for your project.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white border border-blue-50/80 rounded-[1.5rem] p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] group">
              <div className="text-blue-600 mb-6">
                <Waypoints className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-4 text-lg leading-snug">Solution Architecture & Product Roadmap</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our team designs a scalable and future-ready solution while outlining a structured product roadmap. This ensures clarity on features, timelines, and development phases.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white border border-blue-50/80 rounded-[1.5rem] p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] group">
              <div className="text-blue-600 mb-6">
                <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-4 text-lg leading-snug">Engagement Alignment & Proposal Structuring</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We finalize the scope, timelines, and pricing with complete transparency. This step ensures both sides are aligned on expectations, deliverables, and collaboration model.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white border border-blue-50/80 rounded-[1.5rem] p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] group">
              <div className="text-blue-600 mb-6 flex items-center justify-start">
                {/* SVG for Terminal to exactly match the image */}
                <Terminal className="w-8 h-8 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-4 text-lg leading-snug">Launching Development Sprint</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We initiate the development process using agile methodologies, ensuring faster iterations, continuous feedback, and a smooth path to launching your product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
