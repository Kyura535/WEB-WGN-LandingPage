import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tentang WGNHOME</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Penyedia layanan internet terpercaya di Karawang yang berkomitmen memberikan koneksi internet berkualitas
            tinggi untuk rumah dan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Profil Perusahaan</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              WGNHOME adalah penyedia layanan internet yang berfokus pada kualitas dan kepuasan pelanggan di wilayah
              Karawang. Dengan teknologi fiber optik terdepan, kami menghadirkan koneksi internet yang stabil dan cepat
              untuk mendukung aktivitas digital Anda sehari-hari.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sejak berdiri, kami telah melayani ribuan pelanggan dengan tingkat kepuasan yang tinggi. Tim teknisi
              berpengalaman kami siap memberikan layanan terbaik 24/7 untuk memastikan koneksi internet Anda selalu
              optimal.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">5000+</h4>
                <p className="text-sm text-muted-foreground">Pelanggan Aktif</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">99.9%</h4>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">24/7</h4>
                <p className="text-sm text-muted-foreground">Support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">5 Tahun</h4>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 text-primary mr-2" />
                Visi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Menjadi penyedia layanan internet terdepan di Karawang yang menghadirkan koneksi berkualitas tinggi,
                stabil, dan terjangkau untuk mendukung transformasi digital masyarakat dan dunia usaha.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-6 h-6 text-primary mr-2" />
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Memberikan layanan internet fiber optik berkualitas tinggi dengan dukungan teknis terbaik, harga
                kompetitif, dan inovasi berkelanjutan untuk meningkatkan kualitas hidup digital pelanggan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
