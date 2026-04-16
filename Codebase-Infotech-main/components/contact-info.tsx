import ReactCountryFlag from "react-country-flag"

export default function ContactInfo() {
  const locations = [
    {
      country: "INDIA",
      code: "IN",
      company: "CODEBASE INFOTECH",
      address: "201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004",
    },
    {
      country: "UAE",
      code: "AE",
      company: "ADDRESS",
      address: "Office 306 Arjumand Building-3rd Floor, Dubai Investment Park 1, Dubai UAE",
    },
    {
      country: "AUSTRALIA",
      code: "AU",
      company: "ADDRESS",
      address: "14 Wellington Ave, Parafield Gardens 5107, Australia",
    }
  ]

  return (
    <section className="py-24 bg-[#0a071c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Global Presence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {locations.map((loc, index) => (
            <div key={index} className="flex flex-col text-left">
              {/* Flag & Country Row */}
              <div className="flex items-center gap-5 mb-10">
                <ReactCountryFlag 
                  countryCode={loc.code} 
                  svg 
                  style={{ width: '56px', height: '40px', borderRadius: '3px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} 
                />
                <span className="text-2xl font-medium text-white tracking-wide">
                  {loc.country}
                </span>
              </div>
              
              {/* Company / Subheading Row */}
              <h4 className="text-[11px] font-bold text-white/80 uppercase tracking-widest mb-3 font-sans">
                {loc.company}
              </h4>
              
              {/* Address Row */}
              <p className="text-white/95 text-[15px] leading-relaxed max-w-[300px] font-medium">
                {loc.address}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
