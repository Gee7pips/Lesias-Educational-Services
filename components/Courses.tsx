import React, { useState, useEffect, useRef } from 'react';
import { Book, Check, X, Briefcase, Coins, ArrowRight, Star, ChevronDown, ChevronUp, HelpCircle, GraduationCap, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

interface CourseDetail {
  id: string;
  title: string;
  nqfLevel: string;
  saqaId: string;
  credits: string;
  themeColor: string;
  textColor: string;
  description: string;
  moneyAngle: string;
  syllabus: string[];
  careers: string[];
}

const courseData: Record<string, CourseDetail> = {
  level4: {
    id: 'level4',
    title: 'Further Education & Training Certificate: ECD',
    nqfLevel: 'Level 4',
    saqaId: '58761',
    credits: '140 Credits',
    themeColor: 'bg-brand-blue',
    textColor: 'text-brand-blue',
    description: 'The definitive foundation for an elite career in Early Childhood Development. This accredited certificate doesn\'t just teach you to "look after" children; it equips you with the pedagogical science to facilitate cognitive, social, and emotional growth. You will master the art of creating high-impact learning environments using locally sourced and recycled materials, ensuring you can provide world-class education in any South African setting. Upon completion, you transition from an informal practitioner to a recognized professional, ready to secure formal employment or unlock Department of Social Development (DSD) subsidies for your own center.',
    moneyAngle: 'Unlock Government Subsidies & Job Stability',
    syllabus: [
      'Facilitate Cognitive Literacy & Foundation Numeracy',
      'Advanced Child Health, Nutrition & Safety Standards',
      'Sustainable Resource Design (Creating from Recycling)',
      'Professional Community & Stakeholder Engagement',
      'Observation-Based Child Development Assessment'
    ],
    careers: [
      'Accredited Classroom Practitioner / Lead Teacher',
      'Registered Center Owner (DSD Subsidy Eligibility)',
      'Professional Au Pair & Private Educator',
      'Community Educational Support Officer'
    ]
  },
  level5: {
    id: 'level5',
    title: 'National Diploma: Early Childhood Development',
    nqfLevel: 'Level 5',
    saqaId: '23118',
    credits: '240 Credits',
    themeColor: 'bg-brand-gold',
    textColor: 'text-brand-gold',
    description: 'Designed for the educational visionaries and institutional leaders of the next generation. This National Diploma represents the pinnacle of ECD specialization in South Africa. You will move beyond basic facilitation to master the complex art of Curriculum Mediation for Grade R, ensuring children under your care are perfectly prepared for primary school. The program delves deep into strategic school management, financial risk assessment, and ethical leadership. As a graduate, you are eligible for SACE professional registration, enabling you to command higher salary scales, manage large-scale educational centers, or serve as a curriculum consultant to the broader education sector.',
    moneyAngle: 'Command Higher Salaries & Manage Centers',
    syllabus: [
      'Grade R Curriculum Mediation & Implementation',
      'Strategic Institutional Management & Governance',
      'Holistic Assessment & Diagnostic Reporting Science',
      'Financial Management & Risk Mitigation for Schools',
      'Advanced Pedagogical Leadership & Ethics'
    ],
    careers: [
      'SACE-Registered Grade R Specialist',
      'ECD Principal / Regional Center Manager',
      'Academic Curriculum Development Consultant',
      'Socio-Economic Development (SED) Coordinator'
    ]
  }
};

interface CoursesProps {
  onOpenRegistration: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onOpenRegistration }) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setOffset(top * 0.15);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Quiz State
  const [quizStep, setQuizStep] = useState(0); // 0 = hidden/start, 1 = Q1, 2 = Result
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  const handleOpenModal = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleApply = () => {
    handleCloseModal();
    onOpenRegistration();
  };

  const toggleCardExpand = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Quiz Logic
  const handleQuizAnswer = (hasLevel4: boolean) => {
    setQuizStep(2);
    setQuizResult(hasLevel4 ? 'level5' : 'level4');
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizResult(null);
  };

  const closeQuiz = () => {
     setQuizStep(0);
     setQuizResult(null);
  }

  return (
    <section 
      id="courses" 
      ref={sectionRef}
      className="py-24 bg-[#0B1B32] text-white relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div 
           className="absolute inset-0 w-full h-[150%] -top-[25%] bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"
           style={{ transform: `translateY(${offset}px)` }}
         ></div>
      </div>

      {/* Abstract Luxury Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Quiz Trigger */}
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3 block">Academic Excellence</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Core Programs</h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
                Our curriculum is meticulously designed to produce job-ready professionals who lead with science and compassion.
              </p>
            </div>
            
            {/* Interactive Quiz Component */}
            <div className="w-full md:w-auto">
               {quizStep === 0 ? (
                  <button 
                    onClick={() => setQuizStep(1)}
                    className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/20 p-6 rounded-2xl text-left transition-all duration-300 w-full md:w-80"
                  >
                    <div className="flex items-center gap-4 mb-2">
                       <div className="bg-brand-blue p-2 rounded-lg">
                          <HelpCircle size={20} className="text-white" />
                       </div>
                       <span className="font-bold">Not sure where to start?</span>
                    </div>
                    <p className="text-sm text-gray-400">Take our 10-second assessment to find your perfect course.</p>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
               ) : (
                 <div className="bg-brand-navy border border-brand-gold/50 p-6 rounded-2xl w-full md:w-96 shadow-2xl relative animate-scale-up">
                    <button onClick={closeQuiz} className="absolute top-2 right-2 text-gray-400 hover:text-white"><X size={16} /></button>
                    
                    {quizStep === 1 && (
                      <div className="animate-fade-in-up">
                        <h4 className="font-bold text-lg mb-4">Quick Question:</h4>
                        <p className="text-sm text-gray-300 mb-6">Have you already completed an ECD Level 4 Certificate?</p>
                        <div className="flex gap-3">
                           <button onClick={() => handleQuizAnswer(true)} className="flex-1 bg-white/10 hover:bg-brand-gold hover:text-brand-navy py-2 rounded-lg text-sm font-bold transition-colors">Yes</button>
                           <button onClick={() => handleQuizAnswer(false)} className="flex-1 bg-white/10 hover:bg-brand-blue hover:text-white py-2 rounded-lg text-sm font-bold transition-colors">No</button>
                        </div>
                      </div>
                    )}

                    {quizStep === 2 && quizResult && (
                      <div className="animate-fade-in-up text-center">
                         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Check size={24} />
                         </div>
                         <h4 className="font-bold text-lg mb-2">We Recommend:</h4>
                         <p className="text-brand-gold font-bold text-xl mb-4 font-serif">
                            {quizResult === 'level4' ? 'Level 4 Certificate' : 'Level 5 Diploma'}
                         </p>
                         <p className="text-xs text-gray-400 mb-4">
                           {quizResult === 'level4' 
                             ? 'Start your journey here. This builds the foundation.' 
                             : 'You are ready to advance to leadership & Grade R teaching.'}
                         </p>
                         <button onClick={resetQuiz} className="text-xs underline text-gray-500 hover:text-white">Start Over</button>
                      </div>
                    )}
                 </div>
               )}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Level 4 Card */}
          <Reveal>
            <div className={`group relative bg-white/5 backdrop-blur-sm border ${quizResult === 'level4' ? 'border-brand-blue ring-2 ring-brand-blue shadow-[0_0_50px_rgba(37,99,235,0.2)]' : 'border-white/10'} rounded-[2rem] p-8 lg:p-12 hover:bg-white/10 transition-all duration-500 h-full flex flex-col`}>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-24 h-24 rounded-full bg-brand-blue/30 blur-2xl"></div>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                 <div className="bg-brand-blue/20 p-4 rounded-2xl text-blue-300 ring-1 ring-blue-500/30">
                    <Book size={32} />
                 </div>
                 <div className="px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    NQF Level 4
                 </div>
              </div>

              <div className="mb-4 relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:text-blue-300 transition-colors">FET Certificate</h3>
                <p className="text-gray-400 text-sm tracking-wide">SAQA ID: 58761 • 140 Credits</p>
              </div>
              
              <div className="mb-8 text-gray-300 font-light relative z-10">
                  <p>The definitive foundation for an elite career in Early Childhood Development.</p>
              </div>

              {/* Interactive Syllabus Accordion */}
              <div className="mb-8 bg-black/20 rounded-xl overflow-hidden border border-white/5">
                <button 
                  onClick={(e) => toggleCardExpand(e, 'level4')}
                  className="w-full flex items-center justify-between p-4 text-sm font-medium hover:bg-white/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                   <span className="flex items-center gap-2"><GraduationCap size={16} /> Key Modules</span>
                   {expandedCard === 'level4' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedCard === 'level4' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <ul className="p-4 pt-0 space-y-2 text-sm text-gray-400 border-t border-white/5">
                      {courseData.level4.syllabus.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></div>
                           {item}
                        </li>
                      ))}
                      <li className="text-xs text-brand-blue pt-1 font-bold">+ More in full details</li>
                   </ul>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                    onClick={() => handleOpenModal('level4')}
                    className="w-full py-4 rounded-xl border border-white/20 hover:border-brand-blue hover:bg-brand-blue text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                    View Full Details
                    <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Level 5 Card */}
          <Reveal delay={200}>
            <div className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border ${quizResult === 'level5' ? 'border-brand-gold ring-2 ring-brand-gold shadow-[0_0_50px_rgba(217,119,6,0.2)]' : 'border-white/10'} rounded-[2rem] p-8 lg:p-12 hover:border-brand-gold/30 transition-all duration-500 h-full flex flex-col`}>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-24 h-24 rounded-full bg-brand-gold/30 blur-2xl"></div>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                 <div className="bg-brand-gold/20 p-4 rounded-2xl text-brand-gold ring-1 ring-brand-gold/30">
                    <Book size={32} />
                 </div>
                 <div className="px-4 py-1.5 rounded-full border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider">
                    NQF Level 5
                 </div>
              </div>

              <div className="mb-4 relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:text-brand-gold transition-colors">National Diploma</h3>
                <p className="text-gray-400 text-sm tracking-wide">SAQA ID: 23118 • 240 Credits</p>
              </div>
              
              <div className="mb-8 text-gray-300 font-light relative z-10">
                  <p>Advanced institutional leadership & Grade R specialization.</p>
              </div>

              {/* Interactive Syllabus Accordion */}
              <div className="mb-8 bg-black/20 rounded-xl overflow-hidden border border-white/5">
                <button 
                  onClick={(e) => toggleCardExpand(e, 'level5')}
                  className="w-full flex items-center justify-between p-4 text-sm font-medium hover:bg-white/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                   <span className="flex items-center gap-2"><GraduationCap size={16} /> Key Modules</span>
                   {expandedCard === 'level5' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedCard === 'level5' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <ul className="p-4 pt-0 space-y-2 text-sm text-gray-400 border-t border-white/5">
                      {courseData.level5.syllabus.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></div>
                           {item}
                        </li>
                      ))}
                      <li className="text-xs text-brand-gold pt-1 font-bold">+ More in full details</li>
                   </ul>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                    onClick={() => handleOpenModal('level5')}
                    className="w-full py-4 rounded-xl bg-brand-gold text-white font-bold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-gold/20 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                    View Full Details
                    <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Modal Overlay */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md transition-opacity"
            onClick={handleCloseModal}
          ></div>
          
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-scale-up z-10 flex flex-col">
            {/* Modal Header */}
            <div className={`p-8 ${courseData[selectedCourse].themeColor} text-white relative flex-shrink-0 overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <button 
                    onClick={handleCloseModal}
                    className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white z-20 outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <X size={20} />
                </button>
                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 backdrop-blur-sm uppercase tracking-wider border border-white/10">
                        {courseData[selectedCourse].nqfLevel}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                        {courseData[selectedCourse].title}
                    </h2>
                    <div className="flex gap-4 text-white/90 text-sm font-medium">
                        <span>SAQA ID: {courseData[selectedCourse].saqaId}</span>
                        <span className="opacity-50">•</span>
                        <span>{courseData[selectedCourse].credits}</span>
                    </div>
                </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-10 text-gray-800 overflow-y-auto">
                
                {/* Money Angle Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6 flex gap-5 items-start">
                    <div className="bg-white p-3 rounded-full text-green-600 shrink-0 shadow-sm">
                        <Coins size={24} aria-hidden="true" />
                    </div>
                    <div>
                        <h4 className="font-bold text-green-900 text-lg mb-2">Professional & Economic ROI</h4>
                        <p className="text-green-800/80 leading-relaxed text-sm">
                            {courseData[selectedCourse].moneyAngle}. Beyond personal growth, this qualification is the legal key to formalizing your employment status and unlocking institutional funding.
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className={`w-5 h-5 ${courseData[selectedCourse].textColor}`} fill="currentColor" aria-hidden="true" />
                        Persuasive Academic Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {courseData[selectedCourse].description}
                    </p>
                </div>

                {/* Two Columns: Syllabus & Careers */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Syllabus */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2 border-b pb-2">
                            <Book className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            Core Module Highlights
                        </h3>
                        <ul className="space-y-4">
                            {courseData[selectedCourse].syllabus.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm group">
                                    <div className={`mt-1 p-0.5 rounded-full ${courseData[selectedCourse].themeColor} bg-opacity-10 shrink-0`}>
                                        <Check className={`w-3 h-3 ${courseData[selectedCourse].textColor}`} aria-hidden="true" />
                                    </div>
                                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2 border-b pb-2">
                            <Briefcase className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            Career Outcomes & Benefits
                        </h3>
                         <ul className="space-y-4">
                            {courseData[selectedCourse].careers.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end items-center flex-shrink-0 gap-4">
                <button 
                    onClick={handleCloseModal}
                    className="text-gray-500 font-medium hover:text-gray-800 px-6 py-3 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-lg"
                >
                    Close
                </button>
                <button 
                    onClick={handleApply}
                    className={`${courseData[selectedCourse].themeColor} text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white`}
                >
                    Apply for 2026 Intake
                    <ArrowRight size={18} aria-hidden="true" />
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;