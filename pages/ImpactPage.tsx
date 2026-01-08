import React from 'react';
import PageHeader from '../components/PageHeader';
import Impact from '../components/Impact';
import Reveal from '../components/Reveal';
import { Trophy, Users, Star, ArrowRight } from 'lucide-react';

const ImpactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Impact & Community" 
        subtitle="See how our graduates are transforming Early Childhood Development across Gauteng."
        breadcrumb="Impact"
      />
      
      <Impact />

      {/* Success Gallery Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Faces of Success</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">Every graduate represents a classroom of children receiving better education.</p>
               </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[1,2,3,4,5,6,7,8].map(i => (
                 <Reveal key={i} delay={i * 50}>
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                       <img 
                          src={`https://picsum.photos/600/600?random=${i + 100}`} 
                          alt="Graduate" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                       />
                    </div>
                 </Reveal>
               ))}
            </div>
            
            <Reveal delay={400}>
               <div className="mt-16 bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                     <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Empowering Female Entrepreneurs</h3>
                     <p className="text-gray-600 leading-relaxed mb-6">
                        More than 40% of our graduates have gone on to register their own ECD centers, creating jobs and providing safe, subsidized environments for children in their own townships.
                     </p>
                     <div className="flex gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-2xl flex-1">
                           <p className="text-2xl font-bold text-brand-blue">400+</p>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Centers Opened</p>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 rounded-2xl flex-1">
                           <p className="text-2xl font-bold text-brand-gold">15k+</p>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Children Impacted</p>
                        </div>
                     </div>
                  </div>
                  <div className="md:w-1/2">
                     <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="rounded-3xl shadow-2xl" alt="Community" />
                  </div>
               </div>
            </Reveal>
         </div>
      </section>
    </div>
  );
};

export default ImpactPage;