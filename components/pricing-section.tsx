import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "$39.99",
    devices: "Up to 5 devices",
    features: [
      "100 Mbps download speed",
      "10 Mbps upload speed",
      "No data caps",
      "Free modem rental",
      "Basic email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "$59.99",
    devices: "Up to 15 devices",
    features: [
      "500 Mbps download speed",
      "50 Mbps upload speed",
      "No data caps",
      "Free modem & router",
      "Priority customer support",
      "Free installation",
    ],
    popular: true,
  },
  {
    name: "Ultra",
    speed: "1 Gig",
    price: "$79.99",
    devices: "Unlimited devices",
    features: [
      "1 Gig download speed",
      "100 Mbps upload speed",
      "No data caps",
      "Premium equipment included",
      "24/7 priority support",
      "Free installation & setup",
      "Advanced security features",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect internet plan for your needs with transparent pricing and no hidden fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
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
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
