import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Level 4 Certificate (FET)'
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9+\-\s]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', interest: 'Level 4 Certificate (FET)' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Helper class for consistent input styling
  const getInputClass = (hasError: boolean) => 
    `w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 ${
      hasError 
        ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
        : 'border-gray-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10'
    }`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-sm border border-blue-100">
             
             <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">
                      Registration for 2026 is Now Open.
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Don't wait to start your career. Contact us today to secure your spot for the next intake. Spaces are limited for our Saturday classes.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Call Us</p>
                                <p className="font-medium text-lg text-brand-navy">083 658 5604 / 012 797 4502</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 shadow-sm">
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">WhatsApp</p>
                                <p className="font-medium text-lg text-brand-navy">+27 60 550 6641</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Email</p>
                                <p className="font-medium text-lg text-brand-navy">lesiastraining12@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Visit Campus</p>
                                <p className="font-medium text-gray-900">Khutso Primary School, Block K, Soshanguve</p>
                                <p className="text-sm text-gray-500">(Next to Mashigo Funeral Parlour)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Call Back</h3>
                    
                    {isSuccess ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                          <CheckCircle size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                        <p className="text-gray-600">Thank you for your interest. An admissions officer will contact you shortly.</p>
                        <button 
                          onClick={() => setIsSuccess(false)}
                          className="mt-6 text-brand-blue font-medium hover:underline"
                        >
                          Send another request
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                              <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={getInputClass(!!errors.name)}
                                placeholder="Enter your name" 
                              />
                              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                              <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={getInputClass(!!errors.phone)}
                                placeholder="e.g. 082 123 4567" 
                              />
                              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                              <select 
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className={getInputClass(false)}
                              >
                                  <option>Level 4 Certificate (FET)</option>
                                  <option>Level 5 Diploma</option>
                                  <option>General Enquiry</option>
                              </select>
                          </div>
                          <button 
                            disabled={isSubmitting}
                            className="w-full bg-brand-navy text-white font-bold py-3 rounded-lg hover:bg-brand-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:ring-4 focus:ring-brand-blue/20 outline-none"
                          >
                              {isSubmitting ? (
                                <>
                                  <Loader2 size={20} className="animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                'Send Request'
                              )}
                          </button>
                          <p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. Your info is safe with us.</p>
                      </form>
                    )}
                </div>
             </div>

             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
             <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;