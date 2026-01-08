import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { Quote, History, Target, Heart, Award, ChevronRight, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'accreditation'>('story');
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setOffset(top * 0.2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calc
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'story', label: 'Our Story', icon: <History size={18} /> },
    { id: 'values', label: 'Mission & Values', icon: <Target size={18} /> },
    { id: 'accreditation', label: 'Accreditation', icon: <Award size={18} /> },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Background Texture"
          className="absolute w-full h-[150%] object-cover opacity-[0.03] top-[-25%]"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gray-50/50 -z-0 clip-path-slant"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">
              A Legacy of <span className="italic text-brand-blue">Excellence.</span>
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Founded in 2006, Lesia's Educational Services has grown from a humble community initiative into one of Gauteng's most respected ECD training providers.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px] flex flex-col md:flex-row relative z-10">
            
            {/* Sidebar Navigation */}
            <div className="md:w-1/4 bg-brand-navy p-6 md:p-8 text-white flex flex-col justify-center relative overflow-hidden">
              {/* Subtle texture in sidebar */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <h3 className="text-xl font-serif font-bold mb-8 hidden md:block relative z-10">Discover Lesia's</h3>
              <div className="space-y-2 relative z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 text-left ${
                      activeTab === tab.id 
                        ? 'bg-brand-gold text-white shadow-lg translate-x-2' 
                        : 'text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                    {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto pt-8 hidden md:block relative z-10">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <Quote className="text-brand-gold w-6 h-6 mb-2 opacity-80" />
                  <p className="text-xs text-gray-300 italic leading-relaxed">
                    "We don't just train teachers; we build the foundation of our nation's future."
                  </p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:w-3/4 p-8 md:p-12 bg-white relative">
              
              {/* Tab: Story */}
              {activeTab === 'story' && (
                <div className="animate-fade-in-up space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-6">
                      <h3 className="text-3xl font-serif font-bold text-gray-900">18+ Years of Impact</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Lesia's Educational Services was established in 2006 in response to the critical shortage of qualified Early Childhood Development practitioners in the Soshanguve and Hammanskraal areas.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        What started as a small workshop for local day mothers has evolved into a fully accredited Further Education and Training (FET) provider. We saw that many women were running creches with passion but lacked formal training. We bridged that gap.
                      </p>
                      <div className="flex gap-12 pt-4">
                        <div>
                          <span className="block text-4xl font-bold text-brand-blue mb-1">2006</span>
                          <span className="text-sm text-gray-500 uppercase tracking-wider">Established</span>
                        </div>
                        <div>
                          <span className="block text-4xl font-bold text-brand-blue mb-1">2</span>
                          <span className="text-sm text-gray-500 uppercase tracking-wider">Campuses</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Our Graduates" 
                        className="rounded-2xl shadow-lg object-cover h-64 w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Values */}
              {activeTab === 'values' && (
                <div className="animate-fade-in-up h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission & Values</h3>
                    <p className="text-gray-600 max-w-2xl">
                      To provide accessible, high-quality, and accredited training that empowers individuals to become professional educators and entrepreneurs.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                        <Heart size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-brand-navy mb-2">Passion for Children</h4>
                      <p className="text-sm text-gray-500">We believe every child deserves a qualified, caring, and knowledgeable teacher.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-brand-navy mb-2">Community First</h4>
                      <p className="text-sm text-gray-500">We operate where we are needed most, bringing tertiary education to the township economy.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                        <Lightbulb size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-brand-navy mb-2">Innovation</h4>
                      <p className="text-sm text-gray-500">Adapting modern teaching methodologies to resource-constrained environments.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group border border-gray-100">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                        <Award size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-brand-navy mb-2">Excellence</h4>
                      <p className="text-sm text-gray-500">Uncompromising standards in assessment, moderation, and certification.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Accreditation */}
              {activeTab === 'accreditation' && (
                <div className="animate-fade-in-up">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Fully Accredited</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Lesia's Educational Services is a registered legal entity and an accredited training provider. Your qualification is recognized nationally by the South African Qualifications Authority (SAQA).
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-brand-blue transition-colors bg-gray-50">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                         <Award className="text-brand-blue w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy">ETDP-SETA</h4>
                        <p className="text-sm text-gray-500">Accreditation Number: 1283</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-brand-blue transition-colors bg-gray-50">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                         <Target className="text-brand-gold w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy">QCTO (Quality Council for Trades & Occupations)</h4>
                        <p className="text-sm text-gray-500">Aligned curriculum standards.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-brand-blue transition-colors bg-gray-50">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                         <Users className="text-green-600 w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy">SACE (South African Council for Educators)</h4>
                        <p className="text-sm text-gray-500">Our graduates are eligible for SACE registration (Grade R).</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;