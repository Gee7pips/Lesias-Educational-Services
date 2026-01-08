import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Star, Trophy, Users, BookOpen, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-brand-gold" />,
      value: "Accredited",
      label: "ETDP-SETA & SAQA",
      sub: "Provider No. 1283"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-blue" />,
      value: "5,000+",
      label: "Graduates Placed",
      sub: "Since 2006"
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-600" />,
      value: "Level 1",
      label: "B-BBEE Contributor",
      sub: "100% Black Owned"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      value: "98%",
      label: "Pass Rate",
      sub: "Consistent Excellence"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 mb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative decorative gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-4 p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-navy mb-1">{stat.value}</h3>
                  <p className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-500 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustBar;