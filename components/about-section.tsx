import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Award, Server, Users2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 transform transition-all duration-1000"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6 mx-auto shadow-lg border border-emerald-500/30">
            <img 
              src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-12 w-12"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Tentang WGN</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Penyedia layanan internet terpercaya di Karawang yang berkomitmen memberikan koneksi internet berkualitas
            tinggi untuk rumah dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-6">Profil Perusahaan</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              WGN (Wifian Global Nusantara) adalah penyedia layanan internet yang berfokus pada kualitas dan kepuasan pelanggan di wilayah
              Karawang. Dengan teknologi fiber optik terdepan, kami menghadirkan koneksi internet yang stabil dan cepat
              untuk mendukung aktivitas digital Anda sehari-hari.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Kami menawarkan berbagai paket internet rumah (WGN Home) dengan kecepatan mulai dari 10 Mbps hingga 50 Mbps, 
              semua dengan bandwidth unlimited tanpa batas kecepatan. Selain itu, kami juga menyediakan program kemitraan 
              untuk pengembangan hotspot dan infrastruktur jaringan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">5000+</h4>
                <p className="text-sm text-slate-300">Pelanggan Aktif</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">99.9%</h4>
                <p className="text-sm text-slate-300">Uptime</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">24/7</h4>
                <p className="text-sm text-slate-300">Support</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 text-emerald-400 mx-auto mb-4 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">5 Tahun</h4>
                <p className="text-sm text-slate-300">Pengalaman</p>
              </CardContent>
            </Card>
          </div>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="transition-all duration-300 hover:shadow-xl border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <CardHeader className="pt-6">
              <CardTitle className="flex items-center">
                <div className="w-12 h-12 text-emerald-400 mr-4 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shadow-md">
                  <img src="https://wifianglobal.com/img/bg-img/welcome-img.png" alt="WGN Home" className="w-6 h-6" />
                </div>
                <span className="text-white text-xl font-extrabold">WGN Home</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Layanan internet rumah dengan kecepatan mulai dari 100 Mbps hingga 1 Gbps. 
                Semua paket dilengkapi dengan bandwidth unlimited tanpa batas kecepatan.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-xl border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <CardHeader className="pt-6">
              <CardTitle className="flex items-center">
                <div className="w-12 h-12 text-emerald-400 mr-4 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shadow-md">
                  <Users2 className="w-6 h-6" />
                </div>
                <span className="text-white text-xl font-extrabold">Kemitraan WGN Hotspot</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Program kemitraan untuk pengembangan hotspot dengan dedicated internet access 
                untuk menarik lebih banyak pelanggan.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-xl border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            <CardHeader className="pt-6">
              <CardTitle className="flex items-center">
                <div className="w-12 h-12 text-emerald-400 mr-4 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 shadow-md">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-white text-xl font-extrabold">Kemitraan Server</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Program kemitraan untuk membangun infrastruktur jaringan dari nol 
                dengan manfaat pengembangan bisnis yang saling menguntungkan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Photo Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-extrabold text-white mb-6 text-center">Tim Kami</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/1.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/2.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/3.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/4.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/foto tim wgn.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl aspect-video">
              <img 
                src="/img/wgn-team/1.png" 
                alt="Tim WGN" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
            </div>
          </div>
          <p className="text-slate-300 text-center mt-6 max-w-3xl mx-auto">
            Tim profesional kami berkomitmen untuk memberikan layanan terbaik dan solusi internet berkualitas tinggi untuk Anda.
          </p>
        </div>
      </div>
    </section>
  )
}
