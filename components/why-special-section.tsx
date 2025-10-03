import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Wifi, Upload } from "lucide-react"

export function WhySpecialSection() {
  const features = [
    {
      icon: Clock,
      title: "Layanan Pelanggan",
      description: "24/7",
    },
    {
      icon: Wifi,
      title: "Kualitas",
      description: "Unlimited Free WIFI",
    },
    {
      icon: Upload,
      title: "UPLOAD : DOWNLOAD",
      description: "1:1",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Is It Special</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {React.createElement(feature.icon, { className: "h-12 w-12 text-primary mx-auto mb-4" })}
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
