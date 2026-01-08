import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import CampusTour from '../components/CampusTour';
import Reveal from '../components/Reveal';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Get In Touch" 
        subtitle="Our admissions team is ready to assist you with your 2026 application."
        breadcrumb="Contact"
      />
      
      <div className="py-12 bg-gray-50 border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4"><Phone size={24} /></div>
                  <h4 className="font-bold text-brand-navy mb-1">Call Us</h4>
                  <p className="text-sm text-gray-500">083 658 5604</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4"><Mail size={24} /></div>
                  <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                  <p className="text-sm text-gray-500">lesiastraining12@gmail.com</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4"><MapPin size={24} /></div>
                  <h4 className="font-bold text-brand-navy mb-1">Main Campus</h4>
                  <p className="text-sm text-gray-500">Soshanguve, Block K</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4"><Globe size={24} /></div>
                  <h4 className="font-bold text-brand-navy mb-1">WhatsApp</h4>
                  <p className="text-sm text-gray-500">+27 60 550 6641</p>
               </div>
            </div>
         </div>
      </div>

      <Contact />
      <CampusTour />
    </div>
  );
};

export default ContactPage;