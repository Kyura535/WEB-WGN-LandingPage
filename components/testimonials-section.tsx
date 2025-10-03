"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Rosmayanti Diah",
    rating: 5,
    text: "Respon cepat, jarang gangguan, masalah cepat teratasi. Pelayanan sangat memuaskan!",
  },
  {
    name: "Ryzal HR",
    rating: 5,
    text: "bagus sih penanganan nya cepat klo lg kendala. Sejauh ini ok bgt wgn.",
  },
  {
    name: "Opik Maulana",
    rating: 5,
    text: "Cepat tanggap dan responsif. Semoga ke depannya tambah lancar segala nya.",
  },
  {
    name: "Agus Susanto",
    rating: 5,
    text: "Internet stabil, tidak pernah putus-putus. Speed sesuai dengan yang ditawarkan. Recommended!",
  },
  {
    name: "Siti Aminah",
    rating: 5,
    text: "Layanan pelanggan sangat ramah dan membantu. Teknisi juga cepat dalam pemasangan.",
  },
  {
    name: "Budi Santoso",
    rating: 5,
    text: "Akhirnya dapat internet cepat di daerah saya. Streaming tanpa buffering, kenceng bgt!",
  },
  {
    name: "Dewi Lestari",
    rating: 5,
    text: "Paket internetnya terjangkau tapi kualitasnya juara. Tidak menyesal berlangganan di sini.",
  },
  {
    name: "Ahmad Fauzi",
    rating: 5,
    text: "Dukungan teknis 24/7 sangat membantu. Setiap ada masalah langsung ditanggapi dengan cepat.",
  },
  {
    name: "Rina Kartika",
    rating: 5,
    text: "Koneksi stabil untuk work from home. Download dan upload speed seimbang, sangat cocok untuk pekerja online.",
  },
  {
    name: "Joko Prasetyo",
    rating: 5,
    text: "Customer service ramah dan profesional. Harga terjangkau dengan kualitas yang sangat bagus.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 300)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const goToPrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6 md:mb-8 mx-auto shadow-lg border border-emerald-500/30">
            <img 
              src="/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-10 w-10 md:h-14 md:w-14"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">Apa Kata Pelanggan Kami</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Jangan hanya percaya kata kami - dengar langsung dari pelanggan yang puas
          </p>
        </div>

        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <Card className="border-slate-700 shadow-xl transition-all duration-500 hover:shadow-2xl bg-slate-800/50 backdrop-blur-lg rounded-2xl md:rounded-3xl border-2 overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12 lg:p-14">
              {/* Rating stars */}
              <div className="flex justify-center mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 md:h-8 md:w-8 transition-all duration-300 ${i < testimonials[currentIndex].rating ? 'fill-emerald-400 text-emerald-400 transform scale-110' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              
              {/* Testimonial text with fade transition */}
              <blockquote 
                className={`text-base md:text-xl lg:text-2xl text-slate-200 mb-8 md:mb-10 italic leading-relaxed text-center font-light px-0 md:px-4 transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              {/* Author with fade transition */}
              <div 
                className={`text-center transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <p className="font-extrabold text-white text-lg md:text-xl lg:text-2xl">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced navigation */}
          <div className="flex justify-between items-center mt-8 md:mt-10 lg:mt-12">
            <button 
              onClick={goToPrev}
              className="p-3 md:p-4 rounded-full bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-500 group border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Previous testimonial"
              type="button"
            >
              <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-2 md:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsTransitioning(false)
                    }, 300)
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-emerald-500 w-8" : "bg-slate-600 hover:bg-slate-500"}`}
                  aria-label={`View testimonial ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="p-3 md:p-4 rounded-full bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-500 group border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Next testimonial"
              type="button"
            >
              <svg className="w-5 h-5 md:w-7 md:h-7 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}