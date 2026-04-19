'use client';

import { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ScrollReveal from '@/components/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  projectTitle: string;
  projectType: string;
  budget: string;
  deadline: string;
  description: string;
}

const projectTypes = [
  { value: 'ai-ml', label: 'AI / Machine Learning' },
  { value: 'web-development', label: 'Web App Development' },
  { value: 'erp-crm', label: 'ERP & CRM Solutions' },
  { value: 'mobile-app', label: 'Android & iOS App' },
  { value: 'desktop', label: 'Desktop Application' },
  { value: 'cloud', label: 'Cloud & Deployment' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'automation', label: 'Automation Script' },
  { value: 'other', label: 'Other' },
];

export default function ProjectProposalPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectTitle: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_PROPOSAL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_PROPOSAL_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_title: formData.projectTitle,
          project_type: formData.projectType,
          budget: formData.budget,
          deadline: formData.deadline,
          description: formData.description,
        },
        process.env.NEXT_PUBLIC_PROPOSAL_PUBLIC_KEY as string
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your project proposal has been received. I will contact you soon.',
      });

      setFormData({
        name: '',
        email: '',
        projectTitle: '',
        projectType: '',
        budget: '',
        deadline: '',
        description: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Oops! Something went wrong. Please try again or contact me directly.',
      });
      console.error('Error submitting proposal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedType = projectTypes.find((t) => t.value === formData.projectType);

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all';

  return (
    <div className="min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Hire Me</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-100">
                Submit a <span className="gradient-text">Project Proposal</span>
              </h1>
              <p className="text-slate-500 max-w-2xl">
                Have a project in mind? Fill out the form below and I&apos;ll get back to you with a free consultation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectTitle" className="block text-xs font-mono text-slate-500 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Custom Project Type Dropdown */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 mb-2">
                      Project Type *
                    </label>
                    <div ref={dropdownRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`${inputClasses} flex items-center justify-between text-left`}
                      >
                        <span className={selectedType ? 'text-slate-100' : 'text-slate-600'}>
                          {selectedType ? (
                            <span className="flex items-center gap-2">
                              {selectedType.label}
                            </span>
                          ) : (
                            'Select type'
                          )}
                        </span>
                        <svg
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 mt-2 w-full rounded-xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-black/40 overflow-hidden"
                          >
                            <div className="max-h-64 overflow-y-auto py-1">
                              {projectTypes.map((type) => (
                                <button
                                  key={type.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData((prev) => ({ ...prev, projectType: type.value }));
                                    setDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                                    formData.projectType === type.value
                                      ? 'bg-cyan-500/10 text-cyan-400'
                                      : 'text-slate-300 hover:bg-white/[0.06] hover:text-slate-100'
                                  }`}
                                >
                                  <span className="font-medium">{type.label}</span>
                                  {formData.projectType === type.value && (
                                    <svg
                                      className="w-4 h-4 ml-auto text-cyan-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-mono text-slate-500 mb-2">
                      Budget (USD) *
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      placeholder="e.g. $500-1000"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-xs font-mono text-slate-500 mb-2">
                      Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-mono text-slate-500 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Provide as much detail as possible about requirements, goals, and expectations."
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2">
                    Attach Files (Optional)
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        'https://docs.google.com/forms/d/1simUXUbH3jTiVGxjFr96paYYK7sV0OdD0wc9V7jLXSE/viewform',
                        '_blank'
                      )
                    }
                    className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm hover:bg-white/[0.08] transition-all"
                  >
                    Open Google Form ↗
                  </button>
                  <p className="text-[11px] text-slate-600 mt-2">
                    Max 5MB. Accepted: PDF, DOC, DOCX, JPG, PNG
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Proposal →'
                  )}
                </button>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl text-sm ${
                      submitStatus.success
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
