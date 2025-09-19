import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  speed: string;
  devices: string;
  features: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic Home",
    price: "Rp 166.500",
    speed: "100 Mbps",
    devices: "1-3 devices",
    features: [
      "100 Mbps download speed",
      "Stable connection",
      "No data caps",
      "Free modem rental",
      "Email support",
      "Coverage in Karawang",
    ],
  },
  {
    name: "Standard Family",
    price: "Rp 199.800",
    speed: "150 Mbps",
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
    name: "Premium Business",
    price: "Rp 255.300",
    speed: "200 Mbps",
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
  },
];

export function PricingCardsOptimized() {
  const handleWhatsAppClick = (planName: string) => {
    const phoneNumber = "+6289666666358";
    const message = `Halo WGNHOME, saya tertarik dengan paket ${planName}. Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <Card 
          key={index} 
          className={`
            relative overflow-hidden transition-all duration-500 hover:shadow-2xl 
            border-slate-700 bg-slate-800 
            rounded-2xl border-2 transform hover:-translate-y-2 flex flex-col
            ${plan.popular ? "border-emerald-500 shadow-xl ring-2 ring-emerald-500/20" : ""}
          `}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2 text-base font-semibold shadow-lg text-white whitespace-nowrap">
              Paling Populer
            </div>
          )}
          
          <CardHeader className="text-center pb-6 pt-8">
            {/* Judul dengan line clamp */}
            <CardTitle className="text-2xl mb-3 text-white font-bold break-words">
              {plan.name}
            </CardTitle>
            
            <div className="mb-3 flex items-baseline justify-center flex-wrap">
              <span className="text-3xl font-extrabold text-emerald-400">
                {plan.price}
              </span>
              <span className="text-slate-400 text-base ml-1">/bulan</span>
            </div>
            
            {/* Kecepatan dengan truncate */}
            <CardDescription className="text-lg font-bold text-white truncate">
              {plan.speed}
            </CardDescription>
            
            {/* Perangkat dengan line clamp */}
            <p className="text-base text-slate-300 mt-2 line-clamp-1">
              {plan.devices}
            </p>
          </CardHeader>
          
          <CardContent className="flex flex-col flex-grow">
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/25 flex-shrink-0">
                    <Check className="h-3 w-3 text-emerald-400" />
                  </div>
                  {/* Fitur dengan line clamp dan break words */}
                  <span className="text-sm text-slate-300 line-clamp-2 break-words">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-4">
              <Button
                className={`
                  w-full rounded-full transition-all duration-300 font-semibold py-3 text-base 
                  shadow-md hover:shadow-lg transform hover:-translate-y-1
                  ${plan.popular 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" 
                    : "border-2 border-slate-600 hover:border-emerald-500 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400"
                  }
                `}
                onClick={() => handleWhatsAppClick(plan.name)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Pilih Paket
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}