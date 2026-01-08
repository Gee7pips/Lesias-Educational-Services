import React from 'react';
import PageHeader from '../components/PageHeader';
import Courses from '../components/Courses';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

interface CoursesPageProps {
  onOpenRegistration: () => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenRegistration }) => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Academic Programs" 
        subtitle="Accredited qualifications designed for real-world teaching impact and career growth."
        breadcrumb="Courses"
      />
      
      <div className="bg-brand-navy py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
               <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-gold"><Calendar size={24} /></div>
                  <div>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-50">Next Intake</p>
                     <p className="font-bold">January 2026</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-gold"><Clock size={24} /></div>
                  <div>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-50">Schedule</p>
                     <p className="font-bold">Saturdays Only</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-gold"><CheckCircle size={24} /></div>
                  <div>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-50">Status</p>
                     <p className="font-bold text-green-400">Registrations Open</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <Courses onOpenRegistration={onOpenRegistration} />

      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
               <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Financial Investment</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  We believe quality education should be accessible. Lesia's offers flexible monthly installment plans tailored to your budget. Contact our admissions office for the full fee structure of the 2026 academic year.
               </p>
               <button 
                  onClick={onOpenRegistration}
                  className="inline-block bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all"
               >
                  Inquire About Fees
               </button>
            </Reveal>
         </div>
      </section>

      <FAQ />
    </div>
  );
};

export default CoursesPage;