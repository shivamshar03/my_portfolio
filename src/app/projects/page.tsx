'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, Project } from '@/data/projects';
import TiltCard from '@/components/TiltCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'Web Dev', 'Hackathons', 'Open Source', 'Game Dev'];

  const filteredProjects =
    selectedCategory === 'All' || selectedCategory === null
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  const categoryEmojis: Record<string, string> = {
    'AI/ML': '🧠',
    'Web Dev': '🌐',
    Hackathons: '🏆',
    'Open Source': '📖',
    'Game Dev': '🎮',
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Portfolio</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-slate-100">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-slate-500 max-w-lg">
                A collection of innovative solutions spanning AI/ML, web development, and community-driven initiatives.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    (category === 'All' && selectedCategory === null) || category === selectedCategory
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.04] text-slate-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <TiltCard className="h-full rounded-2xl cursor-pointer" tiltIntensity={8}>
                    <div
                      className="glass-card rounded-2xl overflow-hidden h-full flex flex-col group"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Project Image */}
                      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-dark-50 to-dark-200">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
                        {/* Category badges */}
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
                        {project.featured && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-medium border border-amber-500/20 backdrop-blur-sm">
                            ⭐ Featured
                          </span>
                        )}
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
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 text-[11px] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-white/[0.04]">
                          <span className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            View Details →
                          </span>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/[0.08]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="h-48 bg-gradient-to-br from-dark-50 to-dark-200 relative flex items-center justify-center">
                <span className="text-8xl opacity-15">
                  {selectedProject.category[0] && categoryEmojis[selectedProject.category[0]]
                    ? categoryEmojis[selectedProject.category[0]]
                    : '💡'}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-slate-100 mb-3">{selectedProject.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{selectedProject.description}</p>

                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] text-slate-200 text-sm font-medium hover:bg-white/[0.1] transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                  </a>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}