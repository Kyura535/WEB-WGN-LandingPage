"use client";

import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

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
                src="https://wifianglobal.com/img/bg-img/welcome-img.png"
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
              <div className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group">
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group">
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group">
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div className="p-3 rounded-full bg-slate-800 hover:bg-emerald-500 transition-all duration-300 cursor-pointer group">
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
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
                <span className="text-slate-300">wgn.operasional@gmail.com</span>
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