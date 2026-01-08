import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Loader2, User, Phone, BookOpen, FileText } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    campus: 'Soshanguve',
    course: 'Level 4 Certificate (FET)',
    highestGrade: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.idNumber.trim()) newErrors.idNumber = 'ID/Passport number is required';
    }

    if (currentStep === 2) {
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!/^\d{10,}$/.test(formData.phone.replace(/[\s-]/g, ''))) newErrors.phone = 'Invalid phone number';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
    }

    if (currentStep === 3) {
      if (!formData.campus) newErrors.campus = 'Please select a campus';
      if (!formData.course) newErrors.course = 'Please select a course';
      if (!formData.highestGrade) newErrors.highestGrade = 'Highest grade passed is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setStep(4); // Success step
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
        firstName: '',
        lastName: '',
        idNumber: '',
        email: '',
        phone: '',
        altPhone: '',
        address: '',
        campus: 'Soshanguve',
        course: 'Level 4 Certificate (FET)',
        highestGrade: ''
    });
    setErrors({});
    onClose();
  };

  const steps = [
    { number: 1, title: 'Student Info', icon: <User size={18} /> },
    { number: 2, title: 'Contact', icon: <Phone size={18} /> },
    { number: 3, title: 'Academics', icon: <BookOpen size={18} /> },
  ];

  // Helper for consistent styles
  const getInputClass = (hasError: boolean) => 
    `w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200 ${
      hasError 
        ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
        : 'border-gray-300 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10'
    }`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative animate-scale-up overflow-hidden">
        
        {/* Header */}
        <div className="bg-brand-navy p-6 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-2xl font-serif font-bold">Online Application</h2>
            <p className="text-brand-purple text-sm">2026 Intake • Lesia's Educational Services</p>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/30">
            <X size={24} />
          </button>
        </div>

        {step < 4 && (
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 shrink-0">
            <div className="flex items-center justify-between max-w-sm mx-auto">
              {steps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= s.number ? 'bg-brand-blue text-white shadow-md' : 'bg-gray-200 text-gray-400'}`}>
                    {s.number < step ? <CheckCircle size={20} /> : s.icon}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${step >= s.number ? 'text-brand-blue' : 'text-gray-400'}`}>{s.title}</span>
                </div>
              ))}
              {/* Connecting Line */}
              <div className="absolute top-[6.5rem] left-0 w-full h-0.5 bg-gray-200 -z-0 hidden md:block" style={{ top: '108px', left: '50%', transform: 'translateX(-50%)', width: '60%' }}></div>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={getInputClass(!!errors.firstName)}
                    placeholder="Enter first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={getInputClass(!!errors.lastName)}
                    placeholder="Enter surname"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID / Passport Number *</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className={getInputClass(!!errors.idNumber)}
                  placeholder="Enter 13-digit ID number"
                />
                 {errors.idNumber && <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alternative Number</label>
                  <input
                    type="tel"
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleChange}
                    className={getInputClass(false)}
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass(!!errors.email)}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className={`${getInputClass(!!errors.address)} resize-none`}
                  placeholder="Enter your full street address"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Selection</h3>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Select Campus *</label>
                 <select
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    className={getInputClass(!!errors.campus)}
                 >
                    <option value="Soshanguve">Soshanguve Campus (Block K)</option>
                    <option value="Hammanskraal">Hammanskraal Campus</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Select Qualification *</label>
                 <div className="space-y-3">
                    <label className={`flex items-start p-4 border rounded-xl cursor-pointer transition-all ${formData.course.includes('Level 4') ? 'border-brand-blue bg-blue-50 ring-1 ring-brand-blue' : 'border-gray-200 hover:bg-gray-50'}`}>
                       <input 
                         type="radio" 
                         name="course" 
                         value="Level 4 Certificate (FET)" 
                         checked={formData.course === 'Level 4 Certificate (FET)'}
                         onChange={handleChange}
                         className="mt-1 w-4 h-4 text-brand-blue focus:ring-brand-blue focus:ring-offset-2 border-gray-300" 
                       />
                       <div className="ml-3">
                          <span className="block text-sm font-bold text-gray-900">Level 4 Certificate (FET)</span>
                          <span className="block text-xs text-gray-500 mt-1">For beginners / New entrants. 140 Credits.</span>
                       </div>
                    </label>

                    <label className={`flex items-start p-4 border rounded-xl cursor-pointer transition-all ${formData.course.includes('Level 5') ? 'border-brand-gold bg-yellow-50 ring-1 ring-brand-gold' : 'border-gray-200 hover:bg-gray-50'}`}>
                       <input 
                         type="radio" 
                         name="course" 
                         value="Level 5 Diploma" 
                         checked={formData.course === 'Level 5 Diploma'}
                         onChange={handleChange}
                         className="mt-1 w-4 h-4 text-brand-gold focus:ring-brand-gold focus:ring-offset-2 border-gray-300" 
                       />
                       <div className="ml-3">
                          <span className="block text-sm font-bold text-gray-900">Level 5 National Diploma</span>
                          <span className="block text-xs text-gray-500 mt-1">Advanced leadership & Grade R. 240 Credits.</span>
                       </div>
                    </label>
                 </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Grade Passed *</label>
                  <select
                    name="highestGrade"
                    value={formData.highestGrade}
                    onChange={handleChange}
                    className={getInputClass(!!errors.highestGrade)}
                 >
                    <option value="">Select Grade</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12 (Matric)">Grade 12 (Matric)</option>
                    <option value="Diploma/Degree">Diploma / Degree</option>
                 </select>
                 {errors.highestGrade && <p className="text-red-500 text-xs mt-1">{errors.highestGrade}</p>}
              </div>
            </div>
          )}

          {step === 4 && (
             <div className="text-center py-8 animate-scale-up">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-brand-navy mb-4">Application Received!</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
                    Thank you, <span className="font-bold text-gray-900">{formData.firstName}</span>. Your application for the <span className="text-brand-blue font-semibold">{formData.course}</span> has been submitted successfully.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl max-w-sm mx-auto mb-8 border border-blue-100 text-left">
                    <p className="text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">Next Steps:</p>
                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                        <li>Our admissions team will review your details.</li>
                        <li>You will receive an SMS/Email within 48 hours.</li>
                        <li>Prepare a copy of your ID for registration.</li>
                    </ol>
                </div>
                <button 
                  onClick={handleClose}
                  className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-navy/30"
                >
                  Return to Home
                </button>
             </div>
          )}
        </div>

        {/* Footer Actions */}
        {step < 4 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between shrink-0">
            {step > 1 ? (
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
              >
                <ChevronLeft size={20} />
                Back
              </button>
            ) : (
                <div></div> // Spacer
            )}
            
            {step < 3 ? (
                <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-brand-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-blue transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-brand-navy/30"
                >
                    Next Step
                    <ChevronRight size={20} />
                </button>
            ) : (
                <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-600/30"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit Application
                            <FileText size={20} />
                        </>
                    )}
                </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;