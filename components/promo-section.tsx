import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock } from "lucide-react"

export function PromoSection() {
  return (
    <section id="promo" className="py-20 bg-gradient-to-r from-primary/5 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">
            <Gift className="w-4 h-4 mr-2" />
            Promo Spesial
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Penawaran Terbatas!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dapatkan diskon khusus untuk pelanggan baru WGNHOME di Karawang
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Promo Card */}
          <Card className="border-primary shadow-lg">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-red-600 mr-2" />
                <Badge variant="destructive">Terbatas</Badge>
              </div>
              <CardTitle className="text-2xl text-primary">Gratis Instalasi + 1 Bulan Pertama</CardTitle>
              <CardDescription className="text-lg">Hemat hingga Rp 500.000 untuk pelanggan baru</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Gratis biaya instalasi (senilai Rp 300.000)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Gratis langganan bulan pertama</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Gratis modem dan router</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Berlaku untuk semua paket</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground text-center">
                *Syarat dan ketentuan berlaku. Promo terbatas hingga akhir bulan.
              </p>
            </CardContent>
          </Card>

          {/* Sign Up Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Daftar Sekarang</CardTitle>
              <CardDescription>Isi form di bawah untuk mendapatkan promo spesial</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Nama Lengkap" />
                </div>
                <div>
                  <Input placeholder="Nomor WhatsApp" type="tel" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" />
                </div>
                <div>
                  <Input placeholder="Alamat Lengkap di Karawang" />
                </div>
                <div>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option value="">Pilih Paket</option>
                    <option value="basic">Basic - 100 Mbps (Rp 166.500)</option>
                    <option value="standard">Standard - 150 Mbps (Rp 199.800)</option>
                    <option value="premium">Premium - 200 Mbps (Rp 255.300)</option>
                  </select>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Dapatkan Promo Sekarang</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
