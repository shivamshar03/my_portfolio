'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaBrain, FaCode, FaDatabase, FaServer, FaRobot } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiFlask } from 'react-icons/si';
import { projects } from '@/data/projects';
import { useEffect, useState } from 'react';
import ParticleGrid from '@/components/ParticleGrid';
import TypeWriter from '@/components/TypeWriter';
import TiltCard from '@/components/TiltCard';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'Varnit Sharma',
    role: 'Software Developer, Ksolves India Ltd.',
    avatar: '/images/testimonials/varnit.jpeg',
    quote:
      'Working with Shivam was a fantastic experience. His attention to detail and innovative thinking brought our project to life!',
  },
  {
    name: 'Sanskar Choubey',
    role: 'Mentor, Abhyudaya Coding Club',
    avatar: '/images/testimonials/sanskar.png',
    quote:
      "Shivam's leadership at Abhyudaya inspired everyone. His ability to connect people and drive results is unmatched.",
  },
  {
    name: 'Trapti Sharma',
    role: 'Software Developer, Nitron',
    avatar: '/images/testimonials/trapti.png',
    quote:
      "Shivam's coding skills are exceptional. He consistently delivers high-quality work and is a great team player.",
  },
  {
    name: 'Tanay Nagde',
    role: 'Co-Founder, Abhyudaya Coding Club',
    avatar: '/images/testimonials/tanay.jpeg',
    quote:
      "Abhyudaya's success owes much to Shivam's dedication and vision. He truly makes a difference wherever he goes.",
  },
  {
    name: 'Vinay Borate',
    role: 'Software Engineer Intern',
    avatar: '/images/testimonials/vinay.png',
    quote:
      "Shivam's technical skills are top-notch. He consistently delivers high-quality work and is a pleasure to collaborate with.",
  },
];

const services = [
  { title: 'AI & Machine Learning', desc: 'LLMs, Vision, Predictive Models, NLP', emoji: '🧠' },
  { title: 'ERP & CRM Solutions', desc: 'Custom dashboards, ETL pipelines', emoji: '📊' },
  { title: 'Web App Development', desc: 'React, FastAPI, scalable architecture', emoji: '🌐' },
];

const techStack = [
  { name: 'Python', icon: FaPython, color: '#06b6d4' },
  { name: 'AI/ML', icon: FaBrain, color: '#a855f7' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ec4899' },
  { name: 'OpenCV', icon: SiOpencv, color: '#3b82f6' },
  { name: 'Flask', icon: SiFlask, color: '#06b6d4' },
  { name: 'Databases', icon: FaDatabase, color: '#a855f7' },
  { name: 'Backend', icon: FaServer, color: '#ec4899' },
  { name: 'Automation', icon: FaRobot, color: '#3b82f6' },
  { name: 'Dev Tools', icon: FaCode, color: '#06b6d4' },
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [startIdx, setStartIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col justify-center relative">
        {/* Animated background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0f]" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <ParticleGrid />
          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px] animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center order-1 lg:order-1"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse-glow" />
                {/* Rotating border */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow opacity-60" />
                {/* Image container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#0a0a0f]">
                  <Image
                    src="/images/shivam-new.png"
                    alt="Shivam Sharma"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Status badge */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-cyan-400 border border-cyan-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for work
                </div>
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Software Developer & AI Enthusiast
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-[1.1]">
                <span className="text-slate-100">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text text-glow-cyan">Shivam Sharma</span>
              </h1>

              <div className="text-xl sm:text-2xl text-slate-400 mb-6 h-8">
                <TypeWriter
                  texts={[
                    'Community Lead @ NexHub',
                    'Mentor @ Abhyudaya Coding Club',
                    'Building Anaya — Voice AI',
                    'AI/ML Enthusiast & Builder',
                  ]}
                />
              </div>

              <p className="text-base text-slate-500 mb-8 max-w-lg leading-relaxed">
                Passionate about creating elegant solutions through AI, automation, and community.
                Currently building voice AI assistants, mentoring developers, and leading tech communities.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/about"
                  className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Explore My Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-6 py-3 rounded-xl border border-purple-500/20 text-purple-400 font-medium text-sm hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  Resume ↗
                </a>
              </div>

              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/shivamshar03', icon: FaGithub },
                  { href: 'https://www.linkedin.com/in/shivam-sharma-ab489721b/', icon: FaLinkedin },
                  { href: 'https://x.com/ShivamShar03', icon: FaTwitter },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </div>
        </motion.div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">What I Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-100">
                Core Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center h-full group hover:border-cyan-500/30 transition-all">
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{service.emoji}</span>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
              >
                View All Services
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Tools & Technologies</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Tech Stack</h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 0.05} variant="scale">
                <div className="group flex items-center gap-3 px-5 py-3 rounded-xl glass-card hover:border-cyan-500/30 cursor-default transition-all duration-300">
                  <tech.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-slate-100">
                Featured Projects
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Showcasing innovative AI/ML solutions and community-driven projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <TiltCard className="h-full rounded-2xl">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group">
                    {/* Project Image Area */}
                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-dark-50 to-dark-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        {project.category.map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-medium border border-cyan-500/20 backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 text-[11px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <Link
                          href="/projects"
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Details →
                        </Link>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
              >
                View All Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-100">
                What People Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-lg mx-auto min-h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[startIdx].name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: paused ? 1.02 : 1,
                }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full cursor-pointer"
                onClick={() => setPaused((prev) => !prev)}
              >
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="relative mx-auto mb-6 w-20 h-20">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-sm" />
                    <Image
                      src={testimonials[startIdx].avatar}
                      alt={testimonials[startIdx].name}
                      width={80}
                      height={80}
                      className="relative w-20 h-20 rounded-full object-cover border-2 border-white/10"
                      priority
                    />
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">
                    &ldquo;{testimonials[startIdx].quote}&rdquo;
                  </p>
                  <div>
                    <span className="block font-semibold text-cyan-400 text-sm">
                      {testimonials[startIdx].name}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      {testimonials[startIdx].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setStartIdx(idx);
                    setPaused(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === startIdx
                      ? 'bg-cyan-400 w-6'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative">
          <ScrollReveal variant="scale">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
                Ready to <span className="gradient-text">build something</span> amazing?
              </h2>
              <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                Whether you need an AI/ML solution, web development, or want to collaborate on an
                exciting project — let&apos;s make it happen.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get in Touch
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/proposal"
                  className="px-8 py-3.5 rounded-xl border border-purple-500/20 text-purple-400 font-medium text-sm hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  Submit a Proposal
                </Link>
                <Link
                  href="/collaborate"
                  className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  Let&apos;s Collaborate
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
