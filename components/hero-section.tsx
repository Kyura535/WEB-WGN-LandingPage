"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, CheckCircle } from "lucide-react";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const promoSection = document.getElementById("promo");
    if (promoSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const topPosition = promoSection.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    }
  };

  const handleViewPlansClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const topPosition = pricingSection.offsetTop - headerHeight;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        ></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <img 
                src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
                alt="WGN Logo" 
                className="h-5 w-5"
              />
              <span className="text-sm font-medium text-emerald-300">Ultra-Fast Fiber Internet</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Experience Lightning</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Fast Internet
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Premium fiber optic internet for your home and business. 
              Enjoy seamless streaming, gaming, and working with our 
              ultra-reliable 1Gbps connections.
            </p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">1Gbps Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">24/7 Support</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold py-4 text-base"
                onClick={handleGetStartedClick}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 font-bold py-4 text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleViewPlansClick}
              >
                View Plans
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className={`transform transition-all duration-1000 delay-300 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-slate-700/70">
                    <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">1Gbps</div>
                    <div className="text-xs text-slate-400">Speed</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-slate-700/70">
                    <Shield className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-xs text-slate-400">Uptime</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-slate-700/70">
                    <img 
                      src="https://wifianglobal.com/img/bg-img/welcome-img.png" 
                      alt="WGN Logo" 
                      className="h-8 w-8 mx-auto mb-2"
                    />
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-slate-400">Support</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Download Speed</span>
                    <span className="text-white font-medium">1000 Mbps</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Upload Speed</span>
                    <span className="text-white font-medium">1000 Mbps</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Latency</span>
                    <span className="text-white font-medium">1ms</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-11/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-700 ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        <span className="text-slate-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-8 h-12 rounded-full border-2 border-slate-600 flex justify-center p-1">
          <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}