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

]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 mb-8 mx-auto shadow-lg">
            <img 
              src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
              alt="WGN Logo" 
              className="h-12 w-12"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Apa Kata Pelanggan Kami</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Jangan hanya percaya kata kami - dengar langsung dari pelanggan yang puas di Karawang dan sekitarnya
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-slate-200/50 dark:border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-3xl border-2 overflow-hidden">
            <CardContent className="p-8 md:p-14">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-8 w-8 ${i < testimonials[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 mb-10 italic leading-relaxed text-center font-light">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-slate-900 dark:text-white text-xl">{testimonials[currentIndex].name}</p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced navigation */}
          <div className="flex justify-between items-center mt-12">
            <button 
              onClick={goToPrev}
              className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-500 group"
              aria-label="Previous testimonial"
              type="button"
            >
              <svg className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-emerald-500 w-8" : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"}`}
                  aria-label={`View testimonial ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-500 group"
              aria-label="Next testimonial"
              type="button"
            >
              <svg className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
