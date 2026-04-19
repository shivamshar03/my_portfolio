'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import ScrollReveal from '@/components/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Oops! Something went wrong. Please try again or contact me directly.',
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Contact</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-100">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-slate-500 max-w-lg">
                Have an idea to discuss? Want to collaborate or just say hi? I&apos;d love to hear from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Contact Info */}
              <ScrollReveal variant="fadeLeft">
                <div className="glass-card rounded-2xl p-6">
                  <h2 className="text-xl font-semibold text-slate-100 mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    {[
                      { icon: HiMail, label: 'Email', value: 'shivamsharma.py@gmail.com', href: 'mailto:shivamsharma.py@gmail.com' },
                      { icon: HiPhone, label: 'Phone', value: '+91 6266061914', href: 'tel:+916266061914' },
                      { icon: HiLocationMarker, label: 'Location', value: 'Indore, India', href: null },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4 group">
                        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-mono">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-slate-200 hover:text-cyan-400 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-slate-200">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/[0.04]">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">Connect</h3>
                    <div className="flex gap-2">
                      {[
                        { href: 'https://www.linkedin.com/in/shivam-sharma-ab489721b/', icon: FaLinkedin },
                        { href: 'https://github.com/shivamshar03', icon: FaGithub },
                        { href: 'https://x.com/ShivamShar03', icon: FaTwitter },
                      ].map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                        >
                          <s.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mentorship Card */}
              <ScrollReveal variant="fadeLeft" delay={0.2}>
                <div className="glass-card rounded-2xl p-6 border-purple-500/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Free 1:1 Mentorship</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Looking for guidance or stuck with something? I offer free 1:1 mentorship sessions.
                        Just mention <span className="text-purple-400 font-medium">&quot;Mentorship&quot;</span> in your message!
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <motion.div
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold text-slate-100 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="How can I help you?"
                    />
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
                        Sending...
                      </span>
                    ) : (
                      'Send Message →'
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
        </div>
      </section>
    </div>
  );
}