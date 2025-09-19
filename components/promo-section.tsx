"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Phone } from "lucide-react"

// Package data - Optimized for responsive grid display
const packages = [
  {
    name: "Hemat",
    speed: "100 Mbps",
    price: "Rp 166.500",
    devices: "1-3 devices",
    popular: false,
  },
  {
    name: "Mantap",
    speed: "150 Mbps",
    price: "Rp 199.800",
    devices: "1-5 devices",
    popular: false,
  },
  {
    name: "Puas",
    speed: "200 Mbps",
    price: "Rp 255.300",
    devices: "1-10 devices",
    popular: true,
  },
]

/**
 * PromoSection Component
 * Displays special offers and package selection for WGN Home internet services
 */
export function PromoSection() {
  // Handle package selection and redirect to WhatsApp
  const handlePackageSelect = (packageName: string, packageSpeed: string, packagePrice: string) => {
    const phoneNumber = "+6289666666358";
    const message = `Halo WGNHOME, saya tertarik dengan paket ${packageName} (${packageSpeed}) seharga ${packagePrice}/bulan. Mohon informasi lebih lanjut.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section 
      id="promo" 
      className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background pattern */
}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibGltZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2.5 text-lg font-semibold hover:opacity-90 shadow-lg">
            <Gift className="w-5 h-5 mr-2" />
            Penawaran Spesial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Paket Internet WGN Home
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nikmati koneksi internet cepat dan stabil dengan paket yang sesuai kebutuhan Anda
          </p>
        </div>

        {/* Main content grid - Responsive for all devices */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Promo Card - Left Column */}
          <Card className="border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-2xl bg-slate-800/50 backdrop-blur-xl rounded-3xl border-2 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            
            <CardHeader className="text-center pb-8 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                {/* Logo container */}
                <div className="w-20 h-20 text-emerald-400 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center shadow-lg border border-emerald-500/30">
                  <img 
                    src="/img/bg-img/welcome-img.png" 
                    alt="WGN Logo" 
                    className="h-12 w-12"
                  />
                </div>
                
                {/* Promo badge and title */}
                <div className="flex flex-col items-center sm:items-start">
                  <Badge className="rounded-full px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-lg font-bold shadow-lg mb-2">
                    <Gift className="w-5 h-5 mr-2" />
                    Hemat 20%
                  </Badge>
                  <CardTitle className="text-3xl font-extrabold text-white text-center sm:text-left">
                    Paket Hemat untuk Keluarga
                  </CardTitle>
                </div>
              </div>
              
              <CardDescription className="text-xl mt-3 text-slate-300">
                Dapatkan kecepatan tinggi dengan harga terjangkau
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {/* Features list */}
              <ul className="space-y-5 mb-8">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                  <span className="text-slate-300 text-lg leading-relaxed">
                    Unlimited bandwidth tanpa batas kecepatan
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                  <span className="text-slate-300 text-lg leading-relaxed">
                    Rasio upload:download 1:1
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                  <span className="text-slate-300 text-lg leading-relaxed">
                    Gratis instalasi dan perangkat
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                  <span className="text-slate-300 text-lg leading-relaxed">
                    Dukungan teknis 24/7
                  </span>
                </li>
              </ul>
              
              {/* Terms and conditions */}
              <div className="bg-emerald-500/10 rounded-2xl p-5 border border-emerald-500/30 mt-auto">
                <p className="text-base text-emerald-400 text-center font-medium">
                  *Syarat dan ketentuan berlaku. Harga sudah termasuk PPN.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Package Selection - Right Column */}
          <Card className="transition-all duration-500 hover:shadow-2xl border-slate-700/50 bg-slate-800/50 backdrop-blur-xl rounded-3xl border-2 overflow-hidden h-full flex flex-col">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            
            <CardHeader className="pb-6 pt-8">
              <CardTitle className="text-3xl flex items-center font-extrabold text-white">
                {/* Logo container */}
                <div className="w-12 h-12 text-emerald-400 mr-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center shadow-md border border-emerald-500/30">
                  <img 
                    src="/img/bg-img/welcome-img.png" 
                    alt="WGN Logo" 
                    className="h-7 w-7"
                  />
                </div>
                Pilih Paket Anda
              </CardTitle>
              <CardDescription className="text-lg mt-2 text-slate-300">
                Pilih paket internet yang sesuai dengan kebutuhan Anda
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow flex flex-col">
              {/* Package grid - Responsive for all devices */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-grow">
                {packages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-1 flex flex-col ${
                      pkg.popular 
                        ? "border-emerald-500 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 shadow-lg" 
                        : "border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/5"
                    }`}
                    onClick={() => handlePackageSelect(pkg.name, pkg.speed, pkg.price)}
                  >
                    {/* Popular badge */}
                    {pkg.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-4 py-2 text-base font-bold shadow-md self-start">
                        <Clock className="w-4 h-4 mr-2" />
                        Populer
                      </Badge>
                    )}
                    
                    {/* Package details */}
                    <div className="flex-grow">
                      <h3 className="font-extrabold text-white text-xl mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-base text-slate-300 mb-3">
                        {pkg.speed}
                      </p>
                      <div className="mb-1 flex items-baseline flex-wrap">
                        <span className="text-2xl font-extrabold text-emerald-400">
                          {pkg.price}
                        </span>
                        <span className="text-sm font-normal text-slate-400 ml-1">
                          /bulan
                        </span>
                      </div>
                    </div>
                    
                    {/* Devices info - always at bottom */}
                    <p className="text-sm text-slate-400 mt-4 pt-3 border-t border-slate-700">
                      {pkg.devices}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* WhatsApp CTA Section */}
              <div className="mt-8 border-t border-slate-700 pt-8">
                <h4 className="font-extrabold text-white text-2xl mb-6 text-center">
                  Hubungi Kami via WhatsApp
                </h4>
                <p className="text-sm text-slate-400 text-center mt-4">
                  Klik pada paket di atas untuk langsung menghubungi kami via WhatsApp
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}