"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function PricingPromoBridge() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+6289666666358";
    const message = "Halo WGNHOME, saya ingin bertanya tentang penawaran paket internet.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Dapatkan Penawaran Terbaik Hari Ini
          </h2>
          <p className="text-lg md:text-xl text-emerald-50 mb-8">
            Jangan lewatkan kesempatan untuk mendapatkan paket internet dengan harga spesial. 
            Hubungi kami sekarang untuk konsultasi gratis!
          </p>
          <Button 
            className="rounded-full bg-white text-emerald-600 hover:bg-slate-100 shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-extrabold transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto group"
            onClick={handleWhatsAppClick}
          >
            <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Chat via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}