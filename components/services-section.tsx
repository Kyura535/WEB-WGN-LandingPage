import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Tv, Headphones } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Home Internet",
    description: "High-speed internet plans perfect for streaming, gaming, and working from home.",
    features: ["Up to 1 Gig speeds", "No data caps", "Free installation"],
  },
  {
    icon: Building,
    title: "Business Internet",
    description: "Reliable enterprise solutions with dedicated support for your business needs.",
    features: ["Dedicated bandwidth", "SLA guarantee", "Priority support"],
  },
  {
    icon: Tv,
    title: "TV & Entertainment",
    description: "Stream your favorite shows and movies with our entertainment packages.",
    features: ["200+ channels", "4K streaming", "Cloud DVR"],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock technical support to keep you connected when you need it most.",
    features: ["Live chat support", "Phone assistance", "Online troubleshooting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive internet solutions designed to meet all your connectivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
