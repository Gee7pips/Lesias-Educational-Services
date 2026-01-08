import React from 'react';
import { Building2, Handshake, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Partnership: React.FC = () => {
  return (
    <section 
      id="partners" 
      className="py-32 relative bg-brand-navy text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Invest in the Future. Achieve Your CSI Goals. <br/>
              Partnerships with Lesia’s Educational Services offer a unique opportunity for Corporate Social Investment.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal delay={200}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-colors text-left flex flex-col h-full backdrop-blur-md">
                  <div className="bg-brand-gold w-14 h-14 rounded-2xl flex items-center justify-center text-brand-navy mb-6 shadow-lg shadow-brand-gold/20">
                      <Building2 size={28} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Skills Development</h3>
                  <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                    Earn maximum points on your B-BBEE scorecard by sponsoring student training and development. We provide full administration and reporting.
                  </p>
                  <div className="flex items-center text-brand-gold font-bold text-sm uppercase tracking-wider">
                     Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-colors text-left flex flex-col h-full backdrop-blur-md">
                  <div className="bg-purple-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
                      <Handshake size={28} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Socio-Economic Development</h3>
                  <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                     Contribute to sustainable community growth through SED initiatives focused on education, directly impacting the quality of early learning.
                  </p>
                  <div className="flex items-center text-purple-400 font-bold text-sm uppercase tracking-wider">
                     Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
            </Reveal>
        </div>

        <Reveal delay={600}>
          <div className="mt-16">
              <a href="mailto:lesiastraining12@gmail.com" className="inline-flex items-center bg-white text-brand-navy font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform duration-300">
                  Contact Executive Director
              </a>
              <p className="mt-6 text-sm text-gray-400 font-medium">Att: MB Kadiaka</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Partnership;