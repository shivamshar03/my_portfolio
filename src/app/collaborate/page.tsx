'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ScrollReveal from '@/components/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  skills: string[];
  projectIdea: string;
  availability: string;
  portfolio: string;
  message: string;
}

export default function CollaboratePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    skills: [],
    projectIdea: '',
    availability: '',
    portfolio: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedSkills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value);
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_COLLABORATION_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_COLLABORATION_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          skills: formData.skills.join(', '),
          project_idea: formData.projectIdea,
          availability: formData.availability,
          portfolio: formData.portfolio,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_COLLABORATION_PUBLIC_KEY as string
      );

      setSubmitStatus({
        success: true,
        message: 'Thanks for reaching out! I look forward to potentially working together.',
      });

      setFormData({
        name: '',
        email: '',
        skills: [],
        projectIdea: '',
        availability: '',
        portfolio: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Oops! Something went wrong. Please try again or contact me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skillOptions = [
    'Frontend Development',
    'Backend Development',
    'UI/UX Design',
    'Mobile Development',
    'AI/ML',
    'Data Science',
    'DevOps',
    'Game Development',
    'Blockchain',
    'AR/VR',
  ];

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all';

  return (
    <div className="min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto mb-12">
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Collaborate</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-100">
                Let&apos;s <span className="gradient-text">Collaborate</span>
              </h1>
              <p className="text-slate-500 max-w-2xl">
                I&apos;m always excited to collaborate with fellow developers, designers, and creative minds.
                Whether you have a project idea or just want to join forces — let&apos;s connect!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-xl font-semibold text-slate-100 mb-6">Send a Collaboration Request</h2>
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
                  <span className="block text-xs font-mono text-slate-500 mb-3">Your Skills *</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {skillOptions.map((skill) => (
                      <label
                        key={skill}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-xs transition-all ${
                          formData.skills.includes(skill)
                            ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                            : 'bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:bg-white/[0.08]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={skill}
                          checked={formData.skills.includes(skill)}
                          onChange={handleSkillsChange}
                          className="sr-only"
                        />
                        {skill}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectIdea" className="block text-xs font-mono text-slate-500 mb-2">
                      Project Idea
                    </label>
                    <input
                      type="text"
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Brief description of your idea"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-xs font-mono text-slate-500 mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    >
                      <option value="">Select availability</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time (10-20 hrs/week)</option>
                      <option value="weekends">Weekends only</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-xs font-mono text-slate-500 mb-2">
                    Portfolio / GitHub URL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about what you're looking for in a collaboration partner..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.skills.length === 0}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Collaboration Request →'}
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
