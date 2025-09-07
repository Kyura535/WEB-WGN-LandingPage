import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "Rp 166.500",
    devices: "1-3 devices",
    features: [
      "100 Mbps download speed",
      "Stable connection",
      "No data caps",
      "Free modem rental",
      "Email support",
      "Coverage in Karawang",
    ],
    popular: false,
  },
  {
    name: "Standard",
    speed: "150 Mbps",
    price: "Rp 199.800",
    devices: "1-5 devices",
    features: [
      "150 Mbps download speed",
      "Enhanced stability",
      "No data caps",
      "Free modem & router",
      "Priority customer support",
      "Free installation",
      "Coverage in Karawang",
    ],
    popular: true,
  },
  {
    name: "Premium",
    speed: "200 Mbps",
    price: "Rp 255.300",
    devices: "1-10 devices",
    features: [
      "200 Mbps download speed",
      "Ultra-stable connection",
      "No data caps",
      "Premium equipment included",
      "24/7 priority support",
      "Free installation & setup",
      "Advanced security features",
      "Coverage in Karawang",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Paket Internet WGNHOME</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket internet yang sesuai dengan kebutuhan Anda di Karawang dengan harga transparan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Paling Populer</Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/bulan</span>
                </div>
                <CardDescription className="text-lg font-semibold text-foreground">{plan.speed}</CardDescription>
                <p className="text-sm text-muted-foreground">{plan.devices}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
