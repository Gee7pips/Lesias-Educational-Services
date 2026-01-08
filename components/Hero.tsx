import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, Star, GraduationCap, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenRegistration: () => void;
}

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Graduation Ceremony Hall"
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Graduates Group Photo"
  },
  {
    url: "https://images.unsplash.com/photo-1577896334699-2d16d30452ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Teacher helping students"
  }
];

const Hero: React.FC<HeroProps> = ({ onOpenRegistration }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy">
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-brand-gold font-bold text-[10px] tracking-[0.2em] uppercase animate-fade-in-up mb-10 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              2026 Academic Year Applications are Open
            </div>
            
            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.95] mb-10 animate-fade-in-up animation-delay-200 tracking-tight">
              Lead the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-white italic">
                Educational Revolution.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl animate-fade-in-up animation-delay-300">
              Transform your passion for children into a nationally accredited career. South Africa's leading Saturday-only ECD academy, designed for working professionals.
            </p>
            
            {/* Premium Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-400 mb-16">
              <button 
                onClick={onOpenRegistration}
                className="group relative overflow-hidden bg-brand-gold text-brand-navy px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(217,119,6,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Application
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20"></div>
              </button>
              
              <button className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm flex items-center gap-3 group">
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Academic Prospectus
              </button>
            </div>

            {/* Success Ticker */}
            <div className="flex flex-wrap items-center gap-10 animate-fade-in-up animation-delay-500 border-t border-white/10 pt-10">
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-navy bg-gray-200 overflow-hidden shadow-xl ring-2 ring-white/10">
                           <img src={`https://picsum.photos/100/100?random=${i + 40}`} alt="Graduate" />
                        </div>
                     ))}
                  </div>
                  <div className="flex flex-col">
                     <span className="text-white font-bold text-lg leading-none">5,000+</span>
                     <span className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Alumni Empowered</span>
                  </div>
               </div>
               
               <div className="h-10 w-px bg-white/10"></div>
               
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                     <GraduationCap size={24} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-white font-bold text-lg leading-none">98.4%</span>
                     <span className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Employment Rate</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Side floating card */}
          <div className="lg:col-span-4 hidden lg:block animate-fade-in-up animation-delay-600">
             <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-brand-gold opacity-10 group-hover:opacity-30 transition-opacity">
                   <Star size={100} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 relative z-10">Institutional Benefits</h3>
                <ul className="space-y-6 relative z-10">
                   {[
                     "Saturday Contact Sessions",
                     "Nationally Accredited (SAQA)",
                     "Gauteng Campus Network",
                     "Flexible Payment Plans"
                   ].map((text, i) => (
                     <li key={i} className="flex items-center gap-4 text-gray-300 font-medium group/item">
                        <div className="bg-green-500/20 text-green-500 p-1.5 rounded-full group-hover/item:scale-125 transition-transform">
                           <CheckCircle size={14} />
                        </div>
                        <span className="text-sm tracking-wide">{text}</span>
                     </li>
                   ))}
                </ul>
                <div className="mt-10 pt-10 border-t border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="h-10 px-4 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-[9px] uppercase tracking-widest border border-white/5">
                         ETDP-SETA 1283
                      </div>
                      <div className="h-10 px-4 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-[9px] uppercase tracking-widest border border-white/5">
                         EST. 2006
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-[8px] uppercase tracking-[0.6em] text-white/40 font-bold">Discover More</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-gold to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;