import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Are your qualifications accredited?",
      answer: "Yes. We are fully accredited by the ETDP-SETA (Provider No. 1283) and our courses are aligned with SAQA standards. Our Level 4 and Level 5 qualifications are recognized nationally, allowing you to work in schools or open your own registered ECD center."
    },
    {
      question: "What are the entry requirements?",
      answer: "For the NQF Level 4 Certificate, you generally need a Grade 10, 11, or 12 certificate. If you do not have a matric certificate but have experience working in a crèche, you may qualify through Recognition of Prior Learning (RPL). For Level 5, you typically need the Level 4 certificate or a Matric with ECD experience."
    },
    {
      question: "When are the classes held?",
      answer: "We understand our students often work during the week. Our classes are held on Saturdays at our campuses in Soshanguve and Hammanskraal. This allows you to study while keeping your current job or managing your own daycare."
    },
    {
      question: "How long does each course take?",
      answer: "Both the Level 4 Certificate and Level 5 Diploma are designed to be completed over 12 to 18 months, depending on your pace and the completion of your practical assignments and Portfolio of Evidence (PoE)."
    },
    {
      question: "Can I open my own crèche with this qualification?",
      answer: "Absolutely. One of the main benefits of our accredited training is that it empowers you to register your own ECD center with the Department of Social Development. Being registered makes you eligible for government subsidies per child."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we strive to make education accessible. We offer flexible monthly installment plans to help you manage your tuition fees. Please contact our office for the latest fee structure and payment options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-brand-blue rounded-full mb-4 shadow-sm">
             <HelpCircle size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
            Frequently Asked Questions
           </h2>
           <p className="text-gray-600">
            Everything you need to know about starting your journey with Lesia's Educational Services.
           </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-brand-blue shadow-md ring-1 ring-brand-blue/10' : 'border-gray-200 hover:border-blue-300'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-blue' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 bg-gray-50 p-1 rounded-full ${openIndex === index ? 'rotate-180 text-brand-blue bg-blue-50' : 'text-gray-400'}`}>
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;