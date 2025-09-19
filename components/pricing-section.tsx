"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { PricingCards } from "@/components/pricing-cards"

export function PricingSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+6289666666358"
    const message = "Halo WGNHOME, saya ingin bertanya tentang layanan internet Anda."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-8 mx-auto shadow-lg border border-emerald-500/30">
            <img 
              src="/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-14 w-14"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Paket Internet WGNHOME</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pilih paket internet yang sesuai dengan kebutuhan Anda di Karawang dengan harga transparan
          </p>
        </div>

        <PricingCards />
        
        <div className="mt-20">
          <Card className="max-w-5xl mx-auto bg-slate-800/50 border-slate-700 rounded-3xl border-2 shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="font-extrabold text-white text-xl md:text-2xl mb-3">Keunggulan WGNHOME</h3>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                    Semua paket WGNHOME dilengkapi dengan unlimited bandwidth tanpa batas kecepatan, 
                    rasio upload:download 1:1, dan dukungan teknis 24/7.
                  </p>
                </div>
                <Button 
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-xl hover:shadow-2xl px-8 py-6 text-xl font-extrabold transform hover:-translate-y-1 transition-all duration-300 flex items-center group whitespace-nowrap"
                  onClick={handleWhatsAppClick}
                >
                  <Phone className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}