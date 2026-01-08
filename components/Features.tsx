import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Clock, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Saturday Classes",
      description: "Designed specifically for working professionals. Study without quitting your job."
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-blue" />,
      title: "Local Excellence",
      description: "Accessible campuses in Soshanguve (Block K) and Hammanskraal."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-brand-gold" />,
      title: "Job-Ready Skills",
      description: "Focus on practical, ethical, and professional classroom management."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      title: "Full Support",
      description: "Complete guidance, mentoring, and study resources from enrollment to graduation."
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">
              Education That Fits Your Life.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              We understand the challenges of adult education. We've structured our programs to be accessible, convenient, and supportive.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 h-full border border-gray-100 group">
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;