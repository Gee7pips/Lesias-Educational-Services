import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Partnership from '../components/Partnership';
import Reveal from '../components/Reveal';
import { ShieldCheck, Award, Heart, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Our Story & Legacy" 
        subtitle="Discover the mission driving South Africa's leading community-based ECD training provider."
        breadcrumb="About Us"
      />
      
      <About />

      {/* Extended Management Message */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <Reveal>
                  <div className="relative">
                     <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Leadership" className="w-full h-full object-cover" />
                     </div>
                     <div className="absolute top-1/2 -right-8 bg-brand-gold p-6 rounded-2xl shadow-2xl text-brand-navy font-bold rotate-3">
                        MB Kadiaka, Director
                     </div>
                  </div>
               </Reveal>
               <Reveal delay={200}>
                  <div className="space-y-6">
                     <h2 className="text-3xl font-serif font-bold text-brand-navy">Message from Leadership</h2>
                     <p className="text-gray-600 text-lg font-light leading-relaxed">
                        "At Lesia's, we believe that the first five years of a child's life are the most critical. By empowering women with the right tools and accredited skills, we aren't just training teachers—we are fortifying the foundational pillars of our nation."
                     </p>
                     <p className="text-gray-600 leading-relaxed">
                        Since our founding in 2006, we have maintained a 98% pass rate and have seen thousands of our graduates transition from unemployed youth into proud business owners and professional educators.
                     </p>
                     <div className="flex gap-4 pt-4">
                        <div className="flex flex-col">
                           <ShieldCheck className="text-brand-blue mb-2" size={32} />
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted</span>
                        </div>
                        <div className="flex flex-col">
                           <Award className="text-brand-gold mb-2" size={32} />
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Accredited</span>
                        </div>
                        <div className="flex flex-col">
                           <Heart className="text-red-500 mb-2" size={32} />
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Dedicated</span>
                        </div>
                     </div>
                  </div>
               </Reveal>
            </div>
         </div>
      </section>

      <Partnership />
    </div>
  );
};

export default AboutPage;