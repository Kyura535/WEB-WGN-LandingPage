"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone } from "lucide-react";

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
];

export function PricingCards() {
  const handleWhatsAppClick = (planName: string) => {
    const phoneNumber = "+6289666666358";
    const message = `Halo WGNHOME, saya tertarik dengan paket ${planName} (${plans.find(p => p.name === planName)?.speed}) seharga ${plans.find(p => p.name === planName)?.price}/bulan. Mohon informasi lebih lanjut.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <Card 
          key={index} 
          className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl border-2 transform hover:-translate-y-2 flex flex-col ${
            plan.popular 
              ? "border-emerald-500 shadow-xl ring-2 ring-emerald-500/20" 
              : "hover:border-emerald-400 dark:hover:border-emerald-500"
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2 text-base font-semibold shadow-lg">
              Paling Populer
            </Badge>
          )}
          <CardHeader className="text-center pb-6 pt-8">
            <CardTitle className="text-2xl mb-3 text-slate-900 dark:text-white font-bold">{plan.name}</CardTitle>
            <div className="mb-3 flex items-baseline justify-center flex-wrap">
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {plan.price}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-base ml-1">/bulan</span>
            </div>
            <CardDescription className="text-lg font-bold text-slate-900 dark:text-white">{plan.speed}</CardDescription>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2">{plan.devices}</p>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 dark:bg-emerald-500/25 flex-shrink-0">
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <Button
                className={`w-full rounded-full transition-all duration-300 font-semibold py-3 text-base shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600" 
                    : "border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
                variant={plan.popular ? "default" : "outline"}
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