import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactCardsOptimized() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon Kami",
      value: "(0267) 6065308",
      subtitle: "Dukungan 24/7",
      type: "phone"
    },
    {
      icon: Mail,
      title: "Email Kami",
      value: "office@wifianglobal.com",
      subtitle: "Balas dalam 24 jam",
      type: "email"
    },
    {
      icon: MapPin,
      title: "Alamat Kami",
      value: "Jl. Raya Syeh Quro, RT.01/RW.01, Cilewo, Kec. Talagasari, Karawang, Jawa Barat 41381",
      type: "address"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:office@wifianglobal.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+622676065308";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {contactInfo.map((item, index) => (
        <Card 
          key={index} 
          className="
            transition-all duration-300 hover:shadow-xl 
            bg-slate-800 border-slate-700 
            hover:border-emerald-500/50 hover:-translate-y-1 
            h-full overflow-hidden
          "
        >
          <CardContent className="p-6 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-900/30 rounded-lg flex items-center justify-center">
              {React.createElement(item.icon, { className: "h-6 w-6" })}
            </div>
            
            <h3 className="font-semibold mb-2 text-white break-words">
              {item.title}
            </h3>
            
            {/* Teks dengan penanganan khusus berdasarkan jenis */}
            {item.type === "email" ? (
              <button 
                onClick={handleEmailClick}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-center break-words underline-offset-2 hover:underline max-w-full"
              >
                <span className="line-clamp-2 break-all text-sm md:text-base">
                  {item.value}
                </span>
              </button>
            ) : item.type === "phone" ? (
              <button 
                onClick={handlePhoneClick}
                className="text-slate-300 hover:text-emerald-400 transition-colors text-center break-words underline-offset-2 hover:underline"
              >
                <span className="line-clamp-1 break-all">
                  {item.value}
                </span>
              </button>
            ) : item.type === "address" ? (
              <p className="text-slate-300 text-center break-words line-clamp-3 text-sm">
                {item.value}
              </p>
            ) : (
              <p className="text-slate-300 text-center break-words line-clamp-2">
                {item.value}
              </p>
            )}
            
            {item.subtitle && (
              <p className="text-sm text-slate-400 mt-1 line-clamp-1">
                {item.subtitle}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}