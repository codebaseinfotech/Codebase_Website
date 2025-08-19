export default function ContactMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find Us on the <span className="text-primary">Map</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Digital City, we're easily accessible and always ready to welcome you
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.942928462566!2d72.81297997508239!3d21.234517480459365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb5dd8b1b53%3A0xefbc098ecdf1e0db!2s201%2C%20Akshar%20Square%2C%20Opp.%20Cancer%20Hospital%2C%20Near%20Akshar%20Wadi%2C%20Dabholi%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1691788800000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Codebase Infotech Office Location"
          ></iframe>

          {/* Overlay with Contact Info */}
          {/* <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg border border-border shadow-lg max-w-sm">
            <h3 className="font-bold text-foreground mb-2">Codebase Infotech</h3>
            <p className="text-muted-foreground text-sm mb-3">
                
              <br />
              opp. Cancer Hospital, Dabholi, Surat, Gujarat
              <br />
              India
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-primary font-medium">+91 92652 42366</p>
              <p className="text-secondary font-medium">info@codebaseinfotech.com</p>
            </div>
          </div> */}
        </div>

        {/* Directions */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-semibold text-foreground mb-2">By Car</h4>
            <p className="text-muted-foreground text-sm">
              Free parking available on-site. From Surat city center, take Varachha Main Road toward Dabholi. Turn onto Aksharwadi Road and continue for 1 km. Akshar Square will be on your right, opposite Cancer Hospital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Public Transport</h4>
            <p className="text-muted-foreground text-sm">
              Take a Surat City Bus toward Dabholi and get down at Aksharwadi stop. Our office is a 2-minute walk from the bus stop, opposite Cancer Hospital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">By Air</h4>
            <p className="text-muted-foreground text-sm">
              Surat International Airport is about 30 minutes away. Taxi, auto-rickshaw, and rideshare services are readily available from the airport.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
