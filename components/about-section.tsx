import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Award, Server, Users2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 transform transition-all duration-1000"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6 mx-auto">
            <img 
              src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-10 w-10"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tentang WGN</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Penyedia layanan internet terpercaya di Karawang yang berkomitmen memberikan koneksi internet berkualitas
            tinggi untuk rumah dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Profil Perusahaan</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              WGN (Wifian Global Nusantara) adalah penyedia layanan internet yang berfokus pada kualitas dan kepuasan pelanggan di wilayah
              Karawang. Dengan teknologi fiber optik terdepan, kami menghadirkan koneksi internet yang stabil dan cepat
              untuk mendukung aktivitas digital Anda sehari-hari.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kami menawarkan berbagai paket internet rumah (WGN Home) dengan kecepatan mulai dari 10 Mbps hingga 50 Mbps, 
              semua dengan bandwidth unlimited tanpa batas kecepatan. Selain itu, kami juga menyediakan program kemitraan 
              untuk pengembangan hotspot dan infrastruktur jaringan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-blue-500 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">5000+</h4>
                <p className="text-sm text-muted-foreground">Pelanggan Aktif</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-blue-500 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">99.9%</h4>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-blue-500 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">24/7</h4>
                <p className="text-sm text-muted-foreground">Support</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-blue-500 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">5 Tahun</h4>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 text-blue-500 mr-3 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <img src="https://wifianglobal.com/img/bg-img/welcome-img.png" alt="WGN Home" className="w-5 h-5" />
                </div>
                WGN Home
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Layanan internet rumah dengan kecepatan mulai dari 10 Mbps hingga 50 Mbps. 
                Semua paket dilengkapi dengan bandwidth unlimited tanpa batas kecepatan.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 text-blue-500 mr-3 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users2 className="w-5 h-5" />
                </div>
                Kemitraan WGN Hotspot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Program kemitraan untuk pengembangan hotspot dengan dedicated internet access 
                untuk menarik lebih banyak pelanggan.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg border-border/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-10 h-10 text-blue-500 mr-3 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                Kemitraan Server
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Program kemitraan untuk membangun infrastruktur jaringan dari nol 
                dengan manfaat pengembangan bisnis yang saling menguntungkan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
