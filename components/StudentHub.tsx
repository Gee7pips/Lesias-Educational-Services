import React from 'react';
import { Bell, Calendar, FileText, GraduationCap, Video, Users, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import Reveal from './Reveal';

const StudentHub: React.FC = () => {
  const notices = [
    { 
      title: "Level 4 PoE Submission", 
      date: "Oct 15, 2025", 
      type: "Deadline", 
      color: "text-red-600 bg-red-50",
      content: "Final Portfolio of Evidence (PoE) for the first semester is due at Soshanguve Campus."
    },
    { 
      title: "Saturday Class Update", 
      date: "Ongoing", 
      type: "Schedule", 
      color: "text-brand-blue bg-blue-50",
      content: "All Saturday classes will start at 08:30 AM sharp. Please be on time for assessments."
    },
    { 
      title: "2024 Graduation Ceremony", 
      date: "Dec 06, 2025", 
      type: "Event", 
      color: "text-brand-gold bg-yellow-50",
      content: "Graduation ceremony photos will be available for download here next week!"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Current Students</span>
            <h1 className="text-4xl font-serif font-bold text-brand-navy">Student Hub</h1>
            <p className="text-gray-500 mt-2">Welcome back to Lesia's Educational Services student portal.</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
             <div className="bg-brand-navy text-white p-2 rounded-xl">
                <Bell size={20} />
             </div>
             <div>
                <p className="text-xs font-bold uppercase text-gray-400">Next Assessment</p>
                <p className="text-sm font-bold text-brand-navy">Mathematics L4 - 12 Oct</p>
             </div>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: Updates & Notice Board */}
        <div className="lg:col-span-8 space-y-8">
          
          <Reveal delay={200}>
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
               <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                  <MessageSquare className="text-brand-gold" />
                  Notice Board
               </h2>
               <div className="space-y-6">
                  {notices.map((notice, i) => (
                    <div key={i} className="group p-6 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 relative">
                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                          <div className="flex items-center gap-3">
                             <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${notice.color}`}>
                                {notice.type}
                             </span>
                             <h3 className="font-bold text-lg text-brand-navy">{notice.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                             <Clock size={14} />
                             {notice.date}
                          </div>
                       </div>
                       <p className="text-gray-500 text-sm leading-relaxed mb-4">{notice.content}</p>
                       <button className="text-brand-blue text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More <ArrowRight size={14} />
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          </Reveal>

          {/* Quick Learning Links */}
          <div className="grid md:grid-cols-2 gap-6">
             <Reveal delay={300}>
                <div className="bg-brand-navy text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                   <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <Video className="text-brand-gold" size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Video Resources</h3>
                      <p className="text-gray-400 text-sm mb-6">Access recorded lectures and practical demonstrations for classroom management.</p>
                      <button className="bg-white text-brand-navy px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
                         Open Library
                      </button>
                   </div>
                </div>
             </Reveal>

             <Reveal delay={400}>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between group">
                   <div>
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <FileText className="text-brand-blue" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy mb-2">PoE Templates</h3>
                      <p className="text-gray-500 text-sm mb-6">Download official Portfolio of Evidence templates and guidelines for Level 4 & 5.</p>
                   </div>
                   <button className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all">
                      Download Forms
                   </button>
                </div>
             </Reveal>
          </div>
        </div>

        {/* Right Column: Profile & Stats */}
        <div className="lg:col-span-4 space-y-8">
           
           <Reveal delay={500}>
             <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-brand-navy/5"></div>
                <div className="relative pt-8">
                   <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mx-auto mb-4 relative z-10">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Student" className="w-full h-full object-cover" />
                   </div>
                   <h3 className="text-xl font-bold text-brand-navy">Student Account</h3>
                   <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1">NQF Level 5 Diploma</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 border-t border-gray-50 pt-8">
                   <div className="text-center">
                      <p className="text-2xl font-serif font-bold text-brand-blue">14/20</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Credits Logged</p>
                   </div>
                   <div className="text-center">
                      <p className="text-2xl font-serif font-bold text-green-600">Active</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Registration</p>
                   </div>
                </div>

                <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg">
                   Log Out
                </button>
             </div>
           </Reveal>

           {/* Campus Events */}
           <Reveal delay={600}>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                 <h3 className="text-lg font-bold text-brand-navy mb-6 flex items-center gap-2">
                    <Calendar className="text-brand-gold" size={18} />
                    Upcoming Events
                 </h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-xl h-fit text-center min-w-[50px]">
                          <span className="block font-bold text-lg">12</span>
                          <span className="block text-[8px] uppercase font-bold">Oct</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-sm text-brand-navy">Maths Workshop</h4>
                          <p className="text-xs text-gray-500">Block K, Soshanguve</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-brand-gold/10 text-brand-gold p-3 rounded-xl h-fit text-center min-w-[50px]">
                          <span className="block font-bold text-lg">06</span>
                          <span className="block text-[8px] uppercase font-bold">Dec</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-sm text-brand-navy">Annual Graduation</h4>
                          <p className="text-xs text-gray-500">Main Hall, Pretoria</p>
                       </div>
                    </div>
                 </div>
              </div>
           </Reveal>

           {/* Help Card */}
           <Reveal delay={700}>
             <div className="bg-brand-blue text-white p-8 rounded-[2rem] shadow-2xl relative group overflow-hidden">
                <Users className="absolute -bottom-4 -right-4 text-white/5" size={140} />
                <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                <p className="text-blue-100/80 text-sm mb-6">Contact our student support coordinators for guidance.</p>
                <a href="mailto:lesiastraining12@gmail.com" className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                   Contact Support <ArrowRight size={14} />
                </a>
             </div>
           </Reveal>

        </div>
      </div>
    </div>
  );
};

export default StudentHub;