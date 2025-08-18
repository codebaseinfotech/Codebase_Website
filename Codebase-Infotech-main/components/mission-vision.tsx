import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-card-foreground mb-4">
            Mission & <span className="text-primary">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our guiding principles that drive everything we do
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Mission */}
          <Card className="border-border bg-background">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success.
                We are committed to delivering exceptional value through cutting-edge development, creative design, and
                strategic digital marketing.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-border bg-background">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading technology partner that transforms ideas into reality, helping businesses thrive in
                the digital age. We envision a future where technology seamlessly integrates with business goals to
                create meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <Card className="border-border bg-background">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                <p className="text-muted-foreground">
                  We embrace new technologies and creative solutions to solve complex challenges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Quality</h4>
                <p className="text-muted-foreground">We maintain the highest standards in every project we deliver.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Partnership</h4>
                <p className="text-muted-foreground">
                  We build lasting relationships based on trust, transparency, and mutual success.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
