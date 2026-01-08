import React, { useState } from 'react';
import Reveal from './Reveal';
import { MapPin, Navigation, Phone, ExternalLink, School } from 'lucide-react';

const campuses = [
  {
    name: "Soshanguve Campus",
    address: "Khutso Primary School, Block K, Soshanguve",
    desc: "Our primary hub located next to Mashigo Funeral Parlour. Serving the Soshanguve community since 2006.",
    lat: -25.5348,
    lng: 28.1062,
    phone: "083 658 5604"
  },
  {
    name: "Hammanskraal Campus",
    address: "Hammanskraal, Gauteng",
    desc: "Dedicated center providing accessible ECD training for students in the northern regions of Pretoria.",
    lat: -25.4053,
    lng: 28.2778,
    phone: "012 797 4502"
  }
];

const CampusTour: React.FC = () => {
  const [activeCampus, setActiveCampus] = useState(0);

  const getGoogleMapsUrl = (campus: typeof campuses[0]) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`;
  };

  return (
    <section id="campuses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">Visit Us</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-navy mb-4 leading-tight">
                Find Your Nearest <br /><span className="text-brand-blue">Campus.</span>
              </h2>
              <p className="text-gray-600 font-light text-lg">
                We bring quality education directly into our communities across Gauteng.
              </p>
            </div>
            <div className="flex gap-4">
               {campuses.map((_, i) => (
                 <button 
                  key={i}
                  onClick={() => setActiveCampus(i)}
                  className={`w-12 h-1.5 rounded-full transition-all duration-500 ${activeCampus === i ? 'bg-brand-blue w-20' : 'bg-gray-200'}`}
                 />
               ))}
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Interactive Content */}
           <div className="space-y-8 order-2 lg:order-1">
              {campuses.map((campus, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div 
                    onClick={() => setActiveCampus(i)}
                    className={`p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer group ${
                      activeCampus === i 
                      ? 'bg-brand-navy text-white shadow-2xl border-brand-navy' 
                      : 'bg-gray-50 text-gray-800 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                       <div className={`p-4 rounded-2xl transition-colors ${activeCampus === i ? 'bg-white/10 text-brand-gold' : 'bg-white text-brand-blue shadow-sm'}`}>
                          <School size={28} />
                       </div>
                       <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${activeCampus === i ? 'bg-brand-gold text-brand-navy' : 'bg-gray-200 text-gray-500'}`}>
                          Gauteng Campus
                       </div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{campus.name}</h3>
                    <p className={`text-sm mb-6 font-light leading-relaxed ${activeCampus === i ? 'text-gray-300' : 'text-gray-500'}`}>
                      {campus.desc}
                    </p>
                    
                    <div className="space-y-4 pt-6 border-t border-current/10">
                       <div className="flex items-center gap-4 text-sm font-medium">
                          <MapPin size={18} className="text-brand-gold" />
                          {campus.address}
                       </div>
                       <div className="flex items-center gap-4 text-sm font-medium">
                          <Phone size={18} className="text-brand-gold" />
                          {campus.phone}
                       </div>
                    </div>

                    {activeCampus === i && (
                      <div className="mt-8 pt-8 border-t border-white/10 flex gap-4 animate-fade-in-up">
                         <a 
                           href={getGoogleMapsUrl(campus)} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex-1 bg-brand-gold text-brand-navy py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-white transition-all"
                         >
                            <Navigation size={14} /> Get Directions
                         </a>
                         <button className="flex-1 border border-white/20 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                            <ExternalLink size={14} /> Campus Info
                         </button>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
           </div>

           {/* Visual Map Interface */}
           <div className="order-1 lg:order-2 relative group">
              <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group-hover:shadow-brand-blue/10 transition-all duration-700">
                 {/* This would be the interactive map container */}
                 <img 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Campus Map Placeholder" 
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-brand-navy/20"></div>
                 
                 {/* Interactive Pins */}
                 {campuses.map((campus, i) => (
                    <div 
                      key={i}
                      className={`absolute transition-all duration-700 transform ${activeCampus === i ? 'scale-125 z-20' : 'scale-100 z-10 opacity-70'}`}
                      style={{ 
                        top: `${40 + (i * 15)}%`, 
                        left: `${30 + (i * 25)}%` 
                      }}
                    >
                       <div className="relative cursor-pointer" onClick={() => setActiveCampus(i)}>
                          <div className={`absolute inset-0 rounded-full animate-ping opacity-25 ${activeCampus === i ? 'bg-brand-gold' : 'bg-brand-blue'}`}></div>
                          <div className={`relative p-3 rounded-full shadow-2xl transform hover:rotate-12 transition-all ${activeCampus === i ? 'bg-brand-gold text-brand-navy scale-110' : 'bg-brand-blue text-white'}`}>
                             <MapPin size={24} />
                          </div>
                          {activeCampus === i && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 min-w-[150px] animate-fade-in-up">
                               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Current Focus</p>
                               <p className="text-sm font-bold text-brand-navy leading-none">{campus.name}</p>
                            </div>
                          )}
                       </div>
                    </div>
                 ))}

                 <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white shadow-2xl">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 text-brand-gold">Global Recognition</p>
                    <p className="text-sm opacity-80 leading-relaxed font-light">Our campuses are integrated with local schools, ensuring students get real-world teaching experience during their training.</p>
                 </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10 animate-blob"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTour;