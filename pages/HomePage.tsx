import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Reveal from '../components/Reveal';
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Users, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Calendar,
  ChevronRight,
  ShieldCheck,
  Quote,
  Zap,
  BookOpenCheck,
  HeartHandshake,
  TrendingUp,
  FileText,
  Briefcase,
  BrainCircuit,
  Flag,
  Wallet,
  Building,
  School,
  Lock,
  Search,
  BadgeCheck,
  ShieldAlert
} from 'lucide-react';
import { AppView } from '../App';

interface HomePageProps {
  onOpenRegistration: () => void;
  setView: (view: AppView) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenRegistration, setView }) => {
  const [activeCourseTab, setActiveCourseTab] = useState<'l4' | 'l5'>('l4');

  return (
    <div className="animate-fade-in pb-0">
      <Hero onOpenRegistration={onOpenRegistration} />
      <TrustBar />
      
      {/* 1. Director's Executive Welcome */}
      <section className="py-24 bg-brand-light/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="relative">
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="MB Kadiaka - Director" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-brand-navy text-white p-8 rounded-3xl shadow-2xl max-w-xs border-b-4 border-brand-gold">
                    <p className="font-serif italic text-lg mb-2">"We provide the wings; you provide the will."</p>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">MB Kadiaka, Director</p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Reveal delay={200}>
                <div className="space-y-8">
                  <div className="inline-block px-4 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-gold/20">
                    A Vision for the African Child
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy leading-[1.1]">
                    Welcome to the Future of <span className="text-brand-blue">ECD Excellence.</span>
                  </h2>
                  <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
                    <p>
                      Since founding Lesia’s Educational Services in 2006, my mission has remained unchanged: to elevate the standard of early childhood education by empowering the hands that hold our children’s futures.
                    </p>
                    <p>
                      We believe that a "Day Mother" in the heart of Soshanguve deserves the same world-class pedagogical training as a teacher in the world’s most elite cities. Excellence is not a luxury; it is a necessity for our nation’s growth.
                    </p>
                    <p className="font-medium text-brand-navy">
                      Join an institution that values your time, respects your ambition, and guarantees your professional growth. Your legacy begins here.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={() => setView('about')}
                      className="flex items-center gap-3 text-brand-navy font-bold hover:text-brand-gold transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4 focus-visible:ring-offset-brand-light rounded-lg p-1"
                    >
                      Read My Full Statement <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Three Pillars of Lesia’s</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Our methodology is designed to bridge the gap between academic theory and the daily realities of South African classrooms.</p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-brand-gold" />,
                title: "Practical Mastery",
                text: "We don't just study textbooks. Our students learn to create high-impact educational resources from recycled materials, ensuring high-quality learning even in resource-constrained environments."
              },
              {
                icon: <BookOpenCheck className="text-brand-blue" />,
                title: "Ethical Leadership",
                text: "Beyond teaching, we cultivate business ethics. We empower our graduates to manage their crèches as profitable, compliant, and transparent institutions that serve the community with dignity."
              },
              {
                icon: <HeartHandshake className="text-purple-600" />,
                title: "Ubuntu Pedagogy",
                text: "Our curriculum centers on the African child. We integrate communal values with modern cognitive development science to create a nurturing environment where every child feels seen."
              }
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="p-10 rounded-[3rem] bg-white border border-gray-100 hover:border-brand-gold transition-all hover:shadow-2xl hover:shadow-brand-navy/5 group">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-gold/10 transition-all">
                    {React.cloneElement(pillar.icon as React.ReactElement, { size: 32, "aria-hidden": "true" })}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Economic Engine (Professional Benefits) */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <Reveal className="lg:w-2/3">
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Strategic Advantage</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Unlock the <span className="text-brand-gold italic">Professional Economy.</span>
              </h2>
              <p className="text-gray-400 text-xl font-light mt-6 max-w-2xl">
                In South Africa, a qualification is more than a piece of paper—it is your entry into a regulated, funded, and high-growth sector.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <button 
                onClick={() => setView('courses')}
                className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center gap-3 outline-none focus-visible:ring-4 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                View Career Pathways <ArrowRight size={18} aria-hidden="true" />
              </button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-brand-gold mb-8" size={40} />,
                title: "DSD Subsidy Eligibility",
                text: "A registered Level 4 or 5 qualification is mandatory for South African Crèche owners to apply for Department of Social Development funding—unlocking per-child subsidies that ensure your center's financial sustainability."
              },
              {
                icon: <Briefcase className="text-brand-gold mb-8" size={40} />,
                title: "SACE Professionalism",
                text: "Our Level 5 Diploma prepares you for SACE (South African Council for Educators) registration, moving you from an informal \"babysitter\" to a recognized \"Professional Educator\" in the Grade R workspace."
              },
              {
                icon: <FileText className="text-brand-gold mb-8" size={40} />,
                title: "Compliance & Dignity",
                text: "Formalize your passion. Gain the legal standing to register with Municipal Health and Fire departments, transforming a home-based crèche into a compliant, prestigious, and high-standard institution."
              }
            ].map((card, idx) => (
              <Reveal key={idx} delay={(idx + 1) * 100}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] h-full group hover:bg-white/10 transition-all">
                  {React.cloneElement(card.icon as React.ReactElement, { "aria-hidden": "true" })}
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Course Catalog Showpiece */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Academic Pathways</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Accredited For Your <span className="text-brand-gold">Ascension.</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Choose your starting point and watch your professional worth grow. Our Saturday-only sessions are designed to fit your life while building your future.
              </p>
            </div>
          </Reveal>

          {/* Interactive Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-brand-navy/5 border border-gray-100 flex gap-2" role="tablist" aria-label="Course selection">
              <button 
                role="tab"
                aria-selected={activeCourseTab === 'l4'}
                onClick={() => setActiveCourseTab('l4')}
                className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${activeCourseTab === 'l4' ? 'bg-brand-blue text-white shadow-lg' : 'text-gray-400 hover:text-brand-navy'}`}
              >
                NQF Level 4
              </button>
              <button 
                role="tab"
                aria-selected={activeCourseTab === 'l5'}
                onClick={() => setActiveCourseTab('l5')}
                className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${activeCourseTab === 'l5' ? 'bg-brand-gold text-brand-navy shadow-lg' : 'text-gray-400 hover:text-brand-navy'}`}
              >
                NQF Level 5
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Course HUD */}
            <div className="lg:col-span-7">
               <Reveal key={activeCourseTab} className="h-full">
                  <div className={`bg-white rounded-[4rem] p-12 shadow-2xl border-t-[8px] transition-all h-full ${activeCourseTab === 'l4' ? 'border-brand-blue' : 'border-brand-gold'}`}>
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">
                             {activeCourseTab === 'l4' ? 'FET Certificate: ECD' : 'National Diploma: ECD'}
                          </h3>
                          <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mt-2">
                             SAQA ID: {activeCourseTab === 'l4' ? '58761' : '23118'} • {activeCourseTab === 'l4' ? '140 Credits' : '240 Credits'}
                          </p>
                        </div>
                        <div className={`px-6 py-3 rounded-2xl font-bold text-sm ${activeCourseTab === 'l4' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-gold/10 text-brand-gold'}`}>
                           {activeCourseTab === 'l4' ? 'Entry Level' : 'Advanced Level'}
                        </div>
                     </div>

                     <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
                        {activeCourseTab === 'l4' 
                          ? "The definitive foundation for an elite career in ECD. We transform your natural passion into professional pedagogical science, enabling you to facilitate cognitive and social growth in any South African classroom." 
                          : "For the educational visionaries of tomorrow. Master the complex science of Curriculum Mediation for Grade R and the robust financial governance required to lead high-standard educational institutions."
                        }
                     </p>

                     <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                           <h4 className="font-bold text-brand-navy uppercase tracking-widest text-[11px] border-b pb-2">Core Competencies</h4>
                           <ul className="space-y-4">
                              {(activeCourseTab === 'l4' ? [
                                "Cognitive Literacy Facilitation",
                                "Sustainable Resource Design",
                                "Preventative Health & Safety",
                                "Community Stakeholder Engagement"
                              ] : [
                                "Grade R Curriculum Mediation",
                                "Strategic Financial Governance",
                                "Advanced Diagnostic Assessment",
                                "Professional Academic Ethics"
                              ]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                   <CheckCircle2 className={activeCourseTab === 'l4' ? 'text-brand-blue' : 'text-brand-gold'} size={18} aria-hidden="true" />
                                   {item}
                                </li>
                              ))}
                           </ul>
                        </div>

                        <div className="space-y-6">
                           <h4 className="font-bold text-brand-navy uppercase tracking-widest text-[11px] border-b pb-2">Strategic Impact</h4>
                           <div className="space-y-4">
                              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                 <div className={activeCourseTab === 'l4' ? 'text-brand-blue' : 'text-brand-gold'}><Wallet size={20} aria-hidden="true" /></div>
                                 <p className="text-xs text-gray-500 leading-tight">
                                    <span className="font-bold text-gray-800 block mb-1">Subsidized Growth</span>
                                    {activeCourseTab === 'l4' ? "Full eligibility for per-child DSD subsidies." : "Master Grade R professional pay scales."}
                                 </p>
                              </div>
                              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                 <div className={activeCourseTab === 'l4' ? 'text-brand-blue' : 'text-brand-gold'}><Lock size={20} aria-hidden="true" /></div>
                                 <p className="text-xs text-gray-500 leading-tight">
                                    <span className="font-bold text-gray-800 block mb-1">Institutional Status</span>
                                    {activeCourseTab === 'l4' ? "Qualifies for Health & Fire compliance." : "Eligible for SACE professional status."}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                           onClick={onOpenRegistration}
                           className={`flex-1 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 outline-none focus-visible:ring-4 ${activeCourseTab === 'l4' ? 'bg-brand-navy text-white hover:bg-brand-blue focus-visible:ring-brand-blue' : 'bg-brand-gold text-brand-navy hover:bg-white focus-visible:ring-brand-gold'}`}
                        >
                           Start 2026 Application <ArrowRight size={16} aria-hidden="true" />
                        </button>
                        <button 
                           onClick={() => setView('courses')}
                           className="flex-1 py-5 rounded-2xl border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
                        >
                           Download Syllabus
                        </button>
                     </div>
                  </div>
               </Reveal>
            </div>

            {/* Right Column: Visual Journey Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
               <Reveal delay={200} className="h-full">
                  <div className="bg-brand-navy rounded-[4rem] p-12 text-white shadow-2xl h-full flex flex-col relative overflow-hidden group">
                     {/* Decorative */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/20 transition-all"></div>
                     
                     <h3 className="text-2xl font-serif font-bold mb-10 relative z-10">Professional Timeline</h3>
                     
                     <div className="space-y-12 relative z-10 flex-grow">
                        {[
                           { 
                              icon: <Users className="text-brand-gold" />, 
                              title: "Step 1: The Aspirant", 
                              desc: "Start Level 4. Move from volunteer or nanny to Accredited Practitioner.",
                              active: activeCourseTab === 'l4'
                           },
                           { 
                              icon: <School className="text-brand-blue" />, 
                              title: "Step 2: The Specialist", 
                              desc: "Complete Level 5. Lead Grade R classes and specialize in literacy.",
                              active: activeCourseTab === 'l5'
                           },
                           { 
                              icon: <Building className="text-purple-400" />, 
                              title: "Step 3: The Principal", 
                              desc: "Open your own center. Employ others and impact 50+ families.",
                              active: false
                           }
                        ].map((step, i) => (
                           <div key={i} className={`flex gap-6 relative ${i !== 2 ? "after:content-[''] after:absolute after:left-7 after:top-14 after:w-px after:h-12 after:bg-white/10" : ""}`}>
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all border ${step.active ? 'bg-white text-brand-navy border-brand-gold' : 'bg-white/5 border-white/10'}`}>
                                 {React.cloneElement(step.icon as React.ReactElement, { "aria-hidden": "true" })}
                              </div>
                              <div>
                                 <h4 className={`font-bold text-sm mb-1 ${step.active ? 'text-brand-gold' : 'text-white'}`}>{step.title}</h4>
                                 <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                        <div className="bg-brand-gold/10 p-6 rounded-3xl border border-brand-gold/20">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">Eligibility Check</p>
                           <p className="text-xs text-gray-300 font-light leading-relaxed">
                              {activeCourseTab === 'l4' 
                                ? "Requires Grade 10, 11, or 12. Non-matriculants with crèche experience qualify via RPL." 
                                : "Requires NQF Level 4 ECD Certificate or relevant Teaching Degree."
                              }
                           </p>
                        </div>
                     </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Mark of Quality (Understanding ETDP-SETA) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Institutional Guardianship</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy leading-tight mb-8">
                  The <span className="text-brand-blue italic underline decoration-brand-gold decoration-4 underline-offset-8">ETDP-SETA</span> Standard.
                </h2>
                <div className="space-y-8 text-gray-600 text-lg font-light leading-relaxed">
                  <p>
                    In South Africa, education quality is guarded by the **Education, Training and Development Practices Sector Education and Training Authority (ETDP-SETA)**.
                  </p>
                  <p>
                    Choosing an ETDP-SETA accredited provider like Lesia’s means your qualification is not just a certificate—it is a nationally recognized asset registered on the **National Qualifications Framework (NQF)**. 
                  </p>
                  <div className="bg-brand-navy text-white p-8 rounded-[2rem] border-l-8 border-brand-gold mt-10">
                    <p className="text-sm italic opacity-80 mb-4">"Without SETA accreditation, a certificate has no legal standing in the formal South African school system. We ensure your investment is safe."</p>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">— Admissions Oversight</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <BadgeCheck className="text-brand-blue" />,
                    title: "National Portability",
                    desc: "Your credits follow you. Work in any of South Africa's 9 provinces with full recognition."
                  },
                  {
                    icon: <Search className="text-brand-gold" />,
                    title: "SAQA Alignment",
                    desc: "Your name is registered on the National Learners' Records Database (NLRD) for life."
                  },
                  {
                    icon: <FileText className="text-purple-600" />,
                    title: "SACE Eligibility",
                    desc: "Meet the primary requirements to register as a professional with the Council for Educators."
                  },
                  {
                    icon: <ShieldAlert className="text-red-500" />,
                    title: "Audit Compliance",
                    desc: "Maintain the highest standards of assessment and moderation, ensuring your skills are elite."
                  }
                ].map((benefit, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand-gold transition-all group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      {React.cloneElement(benefit.icon as React.ReactElement, { size: 24, "aria-hidden": "true" })}
                    </div>
                    <h4 className="font-bold text-brand-navy mb-3">{benefit.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Legacy & Institutional Profile (About Summary) */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Our Unbroken Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-[1.1]">
                  18 Years of <span className="italic">Unyielding Excellence.</span>
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                  While other institutions come and go, Lesia's has remained a constant in Gauteng for nearly two decades. We have survived shifting policies and economic storms by staying true to one thing: the quality of our training.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <p className="text-gray-300 font-medium">Established in 2006 to solve the township training crisis.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <p className="text-gray-300 font-medium">Over 5,000 alumni currently working in SA schools.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <p className="text-gray-300 font-medium">SAQA and ETDP-SETA compliant since day one.</p>
                  </div>
                </div>

                <button 
                  onClick={() => setView('about')}
                  className="bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Explore Our History
                </button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="relative">
                <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Graduation" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-gold/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Final Institutional CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Your Transformation Awaits.</h2>
            <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto">
              Registration for the 2026 intake is strictly limited to maintain our high student-to-moderator ratio. Secure your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenRegistration}
                className="bg-brand-gold text-brand-navy px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20 flex items-center justify-center gap-3 outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Start Application <ChevronRight size={20} aria-hidden="true" />
              </button>
              <button 
                onClick={() => setView('contact')}
                className="bg-white/5 border border-white/20 text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all outline-none focus-visible:ring-4 focus-visible:ring-brand-gold"
              >
                Request Prospectus
              </button>
            </div>
          </Reveal>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default HomePage;