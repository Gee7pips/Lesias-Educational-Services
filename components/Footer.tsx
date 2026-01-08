import React from 'react';
import { BookOpen, MapPin, Phone, Mail, MessageCircle, ArrowRight, ShieldCheck, Award, GraduationCap, Facebook, Instagram, Linkedin } from 'lucide-react';
import { AppView } from '../App';

interface FooterProps {
  setView: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const links: { name: string; view: AppView }[] = [
    { name: 'Home', view: 'home' },
    { name: 'About Us', view: 'about' },
    { name: 'Courses', view: 'courses' },
    { name: 'Impact & Community', view: 'impact' },
    { name: 'Contact Admissions', view: 'contact' },
    { name: 'Student Portal', view: 'student-hub' },
  ];

  const campusLocations = [
    { name: "Soshanguve Main", addr: "Block K, Pretoria" },
    { name: "Hammanskraal", addr: "North Hub, Gauteng" },
    { name: "Winterveld", addr: "Enquiry Center" }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => setView('home')}>
              <div className="bg-brand-gold text-brand-navy p-2.5 rounded-xl shadow-lg group-hover:rotate-12 transition-transform">
                <BookOpen size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight leading-none">Lesia's</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mt-1">Educational Services</span>
              </div>
            </div>
            <p className="text-gray-400 mb-10 max-w-sm leading-relaxed text-sm lg:text-base">
              Founded in 2006, we are Gauteng's leading provider of accredited Early Childhood Development training, dedicated to empowering community educators through excellence and passion.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: <Facebook size={20} />, href: "#", color: "hover:bg-blue-600" },
                 { icon: <Instagram size={20} />, href: "#", color: "hover:bg-pink-600" },
                 { icon: <Linkedin size={20} />, href: "#", color: "hover:bg-blue-700" },
                 { icon: <MessageCircle size={20} />, href: "https://wa.me/27605506641", color: "hover:bg-green-500" }
               ].map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.href} 
                   className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center transition-all group ${social.color}`}
                 >
                   <span className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all">
                     {social.icon}
                   </span>
                 </a>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-brand-gold">Institution</h4>
            <ul className="space-y-4">
              {links.map(link => (
                <li key={link.view}>
                   <button 
                    onClick={() => setView(link.view)}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm font-semibold flex items-center gap-2 group"
                   >
                    <span className="w-1.5 h-px bg-white/20 group-hover:w-3 group-hover:bg-brand-gold transition-all"></span>
                    {link.name}
                   </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-brand-gold">Admissions Office</h4>
            <ul className="space-y-6">
               <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm">
                     <p className="font-bold text-gray-200">Call Support</p>
                     <p className="text-gray-500">083 658 5604 / 012 797 4502</p>
                  </div>
               </li>
               <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="text-sm">
                     <p className="font-bold text-gray-200">Email Address</p>
                     <p className="text-gray-500">lesiastraining12@gmail.com</p>
                  </div>
               </li>
               <li className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-sm">
                     <p className="font-bold text-gray-200">Campus Visit</p>
                     <p className="text-gray-500">Khutso School, Block K, Soshanguve</p>
                  </div>
               </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="lg:col-span-3">
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/20 transition-all"></div>
                <h4 className="font-bold text-lg mb-4 text-white">Stay Informed</h4>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  Join our newsletter for enrollment dates, graduation updates, and ECD teaching tips.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                   <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand-gold transition-all"
                   />
                   <button className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all">
                     Subscribe <ArrowRight size={14} />
                   </button>
                </form>
             </div>
          </div>
        </div>

        {/* Accreditation Badges Section */}
        <div className="py-12 border-y border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
           {[
             { icon: <Award className="text-brand-gold" size={24} />, title: "ETDP SETA", sub: "Provider #1283" },
             { icon: <ShieldCheck className="text-brand-blue" size={24} />, title: "Fully Accredited", sub: "Nationally Recognized" },
             { icon: <GraduationCap className="text-purple-400" size={24} />, title: "SAQA Aligned", sub: "NQF Levels 4 & 5" },
             { icon: <ShieldCheck className="text-green-500" size={24} />, title: "B-BBEE Level 1", sub: "100% Black Owned" }
           ].map((badge, i) => (
             <div key={i} className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all">
                   {badge.icon}
                </div>
                <div>
                   <p className="font-bold text-xs text-white uppercase tracking-wider">{badge.title}</p>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">{badge.sub}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] gap-6">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Lesia's Educational Services (Pty) Ltd. Reg No: 2006/037094/23.</p>
            <p className="mt-1 opacity-50">Providing South African communities with quality education since 2006.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
             <a href="#" className="hover:text-brand-gold transition-colors">Accreditation Info</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Cookie Settings</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Term & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;