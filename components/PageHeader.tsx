import React from 'react';
import Reveal from './Reveal';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="relative pt-32 pb-20 bg-brand-navy overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
             <nav className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-8">
                <Home size={14} />
                <ChevronRight size={12} />
                <span className="text-brand-gold">{breadcrumb}</span>
             </nav>
             <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up leading-tight">
                {title}
             </h1>
             <p className="text-gray-400 text-xl max-w-2xl font-light leading-relaxed animate-fade-in-up animation-delay-200">
                {subtitle}
             </p>
          </Reveal>
       </div>
    </div>
  );
};

export default PageHeader;