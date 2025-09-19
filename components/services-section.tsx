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
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 mb-8 mx-auto shadow-lg">
            <img 
              src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-12 w-12"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Product WGN</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Innovative internet solutions designed to meet all your connectivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-500 border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border-2"
            >
              <CardHeader className="pb-6">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 dark:from-emerald-500/25 dark:to-emerald-500/10 rounded-2xl w-fit group-hover:from-emerald-500/25 group-hover:to-emerald-500/15 dark:group-hover:from-emerald-500/35 dark:group-hover:to-emerald-500/20 transition-all duration-500 shadow-md">
                  <product.icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-slate-900 dark:text-white font-bold">{product.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 dark:bg-emerald-500/25 flex-shrink-0">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span className="text-base text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 hover:bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 dark:hover:from-emerald-500/20 dark:hover:to-emerald-500/10 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold py-4 text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                  onClick={() => handleLearnMoreClick(product.title)}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
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
