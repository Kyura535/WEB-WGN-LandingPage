"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Users, Server, Check, ArrowRight } from "lucide-react"

const products = [
  {
    icon: Wifi,
    title: "WGN HOME",
    description: "Residential internet service with office-quality wifi at affordable prices.",
    features: ["Unlimited bandwidth", "No speed reduction", "24/7 support", "Easy installation"],
  },
  {
    icon: Users,
    title: "Kemitraan WGN Hotspot",
    description: "Partnership program for hotspot businesses with dedicated internet access.",
    features: ["Attract more customers", "Reliable connectivity", "Business support", "Revenue sharing"],
  },
  {
    icon: Server,
    title: "Kemitraan Server",
    description: "Partnership program for building networks from scratch with mutual benefits.",
    features: ["Network infrastructure", "Business development", "Technical support", "Scalable solutions"],
  },
]

export function ServicesSection() {
  const handleLearnMoreClick = (productTitle: string) => {
    // Implementasi logika untuk tombol Learn More
    console.log(`Learn more about ${productTitle}`);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-8 mx-auto shadow-lg border border-emerald-500/30">
            <img 
              src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-14 w-14"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Product WGN</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Innovative internet solutions designed to meet all your connectivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-500 border-slate-700 bg-slate-800/50 hover:border-emerald-500 group rounded-2xl overflow-hidden border-2 backdrop-blur-sm"
            >
              <CardHeader className="pb-6">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl w-fit group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-500 shadow-md border border-emerald-500/30">
                  <product.icon className="h-10 w-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-emerald-400 transition-colors text-white font-bold">{product.title}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 flex-shrink-0 border border-emerald-500/30">
                        <Check className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-base text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center transition-all duration-300 group"
                  onClick={() => handleLearnMoreClick(product.title)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
