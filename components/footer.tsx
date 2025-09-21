"use client";

import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+6289666666358"
    const message = "Halo WGNHOME, saya ingin bertanya tentang layanan internet Anda."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo & Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/img/bg-img/welcome-img.png"
                alt="WGN Logo"
                className="h-12 w-auto"
              />
              <span className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                WGNHome
              </span>
            </div>
            <p className="text-slate-300 mb-6 text-lg max-w-md leading-relaxed">
              Connecting communities with fast, reliable internet solutions. Your trusted partner for home and business
              connectivity in Karawang and surrounding areas.
            </p>
            <div className="flex space-x-5">
              <div 
                className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open('https://www.facebook.com/share/1B5RmCE9hv/', '_blank')}
              >
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div 
                className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open('https://www.tiktok.com/@pt.wgn?_t=ZS-8zrMXFoNC8e&_r=1', '_blank')}
              >
                <svg className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <div 
                className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open('https://www.instagram.com/wifianglobalnusantara?igsh=Ymw0eG40bDMwdHRt&utm_source=qr', '_blank')}
              >
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div 
                className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group"
                onClick={() => window.open('https://youtube.com/@wifianglobalnusantara?si=kdMlDba6dOOPs4-e', '_blank')}
              >
                <Youtube className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-1 block text-left w-full"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-1 block text-left w-full"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-1 block text-left w-full"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-1 block text-left w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">(0267) 6065308</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">office@wifianglobal.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">
                  Jl. Raya Syeh Quro, RT.01/RW.01, Cilewo, Kec. Talagasari
                  <br />
                  Karawang, Jawa Barat 41381
                </span>
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full rounded-full py-3 text-base font-medium transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 flex items-center justify-center"
                  type="button"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-lg">
            © 2025 PT Wifian Global Nusantara. All rights reserved. | Connecting you to what matters most.
          </p>
        </div>
      </div>
    </footer>
  )
}