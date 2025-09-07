import { Button } from "@/components/ui/button"
import { Megaphone } from "lucide-react"

export function RegisterCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Megaphone className="h-16 w-16 text-white mr-4" />
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">REGISTER</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-white">NOW</h2>
          </div>
        </div>
        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3">
          DAFTAR SEKARANG
        </Button>
      </div>
    </section>
  )
}
