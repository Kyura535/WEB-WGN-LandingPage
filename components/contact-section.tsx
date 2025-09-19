"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Zap } from "lucide-react"

export function ContactSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+6289666666358"
    const message = "Halo WGNHOME, saya tertarik dengan layanan internet Anda. Mohon informasi lebih lanjut."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6 mx-auto">
            <img 
              src="/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-10 w-10"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Siap meningkatkan koneksi internet Anda? Hubungi kami hari ini untuk konsultasi gratis
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="transition-all duration-300 hover:shadow-xl bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Telepon Kami</h3>
                  <p className="text-slate-300">(0267) 6065308</p>
                  <p className="text-sm text-slate-400">Dukungan 24/7</p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-xl bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Email Kami</h3>
                  <p className="text-slate-300 text-center break-words hyphens-auto">
                    marketing.wifian@gmail.com
                  </p>
                  <p className="text-sm text-slate-400">Balas dalam 24 jam</p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-xl bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Alamat Kami</h3>
                  <p className="text-slate-300 text-sm">
                    Jl. Raya Syeh Quro, RT.01/RW.01, Cilewo, Kec. Talagasari
                    <br />
                    Karawang, Jawa Barat 41381
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-xl bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Chat via WhatsApp</h3>
                  <p className="text-slate-300">+62 896 6666 6358</p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="mt-3 rounded-full px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                  >
                    Chat Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card className="transition-all duration-300 hover:shadow-xl bg-slate-800 border-slate-700 hover:border-emerald-500/50">
              <CardContent className="p-0">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    title="maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.13003702938!2d107.41944352383746!3d-6.293032487389861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697763a1057311%3A0x3ae36018467e2ebe!2sPT%20Wifian%20Global%20Nusantara!5e0!3m2!1sid!2sid!4v1757241978588!5m2!1sid!2sid"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}