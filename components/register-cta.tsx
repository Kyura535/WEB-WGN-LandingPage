import { Button } from "@/components/ui/button"
import { Megaphone, ArrowRight, Star, Shield } from "lucide-react"

export function RegisterCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-800 to-red-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-4xl mx-auto text-center transform transition-all duration-1000"
        >
          <div className="flex flex-col items-center justify-center mb-8">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <img 
                src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
                alt="WGN Logo" 
                className="h-12 w-12"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Limited Time Offer
            </h2>
            <p className="text-xl text-red-100 mb-2">
              REGISTER NOW
            </p>
            <p className="text-lg text-red-200 max-w-2xl">
              Get 3 months free on any plan + free installation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-white">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-300" />
              <span className="text-white">99.9% Uptime Guarantee</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-white text-red-800 hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-base"
              onClick={() => {
                // Add registration logic here
                console.log("Registration button clicked")
                // Scroll to contact section or open modal
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              DAFTAR SEKARANG
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-800 font-bold px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => {
                // Add view plans logic here
                console.log("View plans button clicked")
              }}
            >
              LIHAT PAKET
            </Button>
          </div>
          
          <p className="text-red-200 text-sm mt-6">
            Offer ends in 7 days. Limited to new customers only.
          </p>
        </div>
      </div>
    </section>
  )
}
