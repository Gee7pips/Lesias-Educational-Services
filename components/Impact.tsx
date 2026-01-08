import React from 'react';
import Reveal from './Reveal';
import { Trophy, Users, Star, ArrowRight } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-3 block">Real Results</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-navy mb-6">
              A Community Transformed
            </h2>
            <p className="text-gray-600 text-lg font-light">
               Our graduation ceremonies are more than just events; they are a celebration of community empowerment. 
               See the faces of the future educators we have trained.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          {/* Bento Grid Layout for Maximum Image Visibility */}
          <div className="grid lg:grid-cols-12 gap-6 mb-16 h-auto lg:h-[600px]">
             
             {/* Large Main Image (The Hall) */}
             <div className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-2xl h-96 lg:h-full">
                <img 
                   src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                   alt="Lesias Graduation Ceremony Hall" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8 text-white max-w-lg">
                   <div className="bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block rounded-md mb-2">Annual Ceremony</div>
                   <h3 className="text-3xl font-serif font-bold mb-2">Celebrating Excellence</h3>
                   <p className="text-white/80 text-sm">Our graduates fill the hall with pride, ready to serve schools across Gauteng.</p>
                </div>
             </div>

             {/* Right Column Stack */}
             <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                
                {/* Secondary Image (The Group) */}
                <div className="relative flex-grow group overflow-hidden rounded-3xl shadow-xl min-h-[300px]">
                   <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Graduates Group Photo" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors"></div>
                   
                   {/* Floating Badge */}
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-navy p-4 rounded-2xl shadow-lg border border-white/50 text-center">
                      <span className="block text-3xl font-bold font-serif text-brand-gold">98%</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide">Pass Rate</span>
                   </div>
                </div>

                {/* Stat Card */}
                <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Users size={100} />
                   </div>
                   <h4 className="text-4xl font-serif font-bold text-brand-gold mb-2">5,000+</h4>
                   <p className="font-medium text-lg mb-4">Lives Changed</p>
                   <p className="text-sm text-gray-400 mb-6">Since 2006, we have trained thousands of women to become independent educators.</p>
                   <button className="flex items-center text-sm font-bold text-brand-gold hover:text-white transition-colors">
                      Read Success Stories <ArrowRight size={16} className="ml-2" />
                   </button>
                </div>

             </div>
          </div>
        </Reveal>

        {/* Key Metrics / Features */}
        <Reveal delay={400}>
          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
             <div className="flex gap-5 items-start">
                <div className="p-3 bg-blue-50 text-brand-blue rounded-xl shrink-0">
                   <Users size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-lg text-brand-navy mb-2">Youth Employment</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     We actively combat youth unemployment by providing accredited skills that lead directly to jobs in schools and daycares.
                   </p>
                </div>
             </div>

             <div className="flex gap-5 items-start">
                <div className="p-3 bg-yellow-50 text-brand-gold rounded-xl shrink-0">
                   <Star size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-lg text-brand-navy mb-2">Women Empowerment</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Helping women transform home-based creches into compliant, profitable businesses that support their families.
                   </p>
                </div>
             </div>

             <div className="flex gap-5 items-start">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl shrink-0">
                   <Trophy size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-lg text-brand-navy mb-2">Quality Education</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Improving the foundational phase education for thousands of South African children through better teacher training.
                   </p>
                </div>
             </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Impact;