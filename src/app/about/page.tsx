'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { FaInstagram, FaDiscord, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

const skills = [
  { name: 'Python', level: 92, category: 'Languages' },
  { name: 'Machine Learning', level: 82, category: 'AI/ML' },
  { name: 'Artificial Intelligence', level: 78, category: 'AI/ML' },
  { name: 'LLMs & LangChain', level: 75, category: 'AI/ML' },
  { name: 'Computer Vision (OpenCV)', level: 72, category: 'AI/ML' },
  { name: 'Pandas & NumPy', level: 88, category: 'Data' },
  { name: 'Scikit-learn', level: 78, category: 'AI/ML' },
  { name: 'Flask & FastAPI', level: 85, category: 'Backend' },
  { name: 'SQL & Databases', level: 78, category: 'Backend' },
  { name: 'React / Next.js / Vite', level: 68, category: 'Frontend' },
  { name: 'Docker & CI/CD', level: 60, category: 'DevOps' },
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'Selenium & Automation', level: 75, category: 'Tools' },
  { name: 'REST APIs', level: 85, category: 'Backend' },
  { name: 'Streamlit', level: 80, category: 'Frontend' },
];

const learning = [
  'Multi‑Modal LLMs',
  'Gen AI Agents',
  'Whisper',
  'Kotlin',
  'Deep Reinforcement Learning',
  'AR/VR Technologies',
  'AWS Cloud',
];

const qualifications = [
  {
    title: 'B.Tech in Computer Science',
    time: 'SVVV, 2021 – 2025',
    desc: 'Focus on AI, ML, and Software Development. Led coding communities and participated in national hackathons.',
    color: 'cyan',
  },
  {
    title: 'Artificial Intelligence Certification',
    time: 'IBM, 2025',
    desc: 'Advanced AI certification with hands-on ML and deep learning projects.',
    color: 'purple',
  },
  {
    title: '5 Star — Python Programming',
    time: 'HackerRank, 2024',
    desc: 'Achieved 5-star rating demonstrating advanced problem-solving and coding skills.',
    color: 'pink',
  },
];

const experience = [
  {
    title: 'Python Developer Intern — Carina Softlabs Inc.',
    time: 'June 2025 – Sept 2025',
    desc: 'Optimized backend performance and scaled algorithms for production workloads. Improved system throughput by 30%.',
  },
  {
    title: 'AI Automation Intern — VKAPS IT Solutions Pvt. Ltd.',
    time: 'April 2025 – May 2025',
    desc: 'Developed Python-based automation workflow scripts, reducing manual processes by 60%.',
  },
  {
    title: 'Machine Learning Intern — Ardent Computech Pvt. Ltd.',
    time: 'Aug 2024 – Sept 2024',
    desc: 'Implemented brain tumor detection system using deep learning and CNNs. Worked on computer vision and data processing.',
  },
  {
    title: 'Chairperson — NexHub Community',
    time: '2023 – Present',
    desc: 'Heading NexHub community, organizing tech meetups, mentorship sessions, and career-building events.',
  },
  {
    title: 'Founder & Mentor — Abhyudaya Coding Club',
    time: '2022 – Present',
    desc: 'Guiding students through coding workshops, hackathons, and technical events at SVVV.',
  },
  {
    title: 'Campus Ambassador — Technex, IIT BHU',
    time: '2023',
    desc: "Promoted India's premier tech fest, boosting campus participation by 25%.",
  },
];

const services = [
  { title: 'AI & Machine Learning', desc: 'LLMs, Vision, Predictive Models, NLP', emoji: '🧠' },
  { title: 'ERP & CRM Solutions', desc: 'Custom dashboards, ETL pipelines', emoji: '📊' },
  { title: 'Web App Development', desc: 'React, FastAPI, scalable architecture', emoji: '🌐' },
  { title: 'Android & iOS Solutions', desc: 'Cross-platform mobile applications', emoji: '📱' },
  { title: 'Desktop Applications', desc: 'Python-based desktop tools', emoji: '🖥️' },
  { title: 'Cloud & Deployment', desc: 'Docker, CI/CD, AWS', emoji: '☁️' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">About Me</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-100">
                Know <span className="gradient-text">who I am</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-cyan-500/30">
                  <Image
                    src="/images/shivam-new.png"
                    alt="Shivam Sharma"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-100 mb-3">AI/ML Developer & Consultant</h2>
                <p className="text-slate-400 leading-relaxed mb-3">
                  Passionate software developer creating elegant solutions. Continuous learner, code craftsman,
                  and open source enthusiast. Building tomorrow&apos;s technology today.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  As Community Lead at NexHub and Founder & President of Abhyudaya Coding Club, I bridge the 
                  gap between learning and real-world tech — mentoring developers and building AI solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">What I Offer</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05} variant="scale">
                <div className="glass-card rounded-xl p-6 text-center group hover:border-cyan-500/30 transition-all h-full">
                  <span className="text-3xl mb-3 block">{service.emoji}</span>
                  <h3 className="text-sm font-semibold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Expertise</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Technical Skills</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.04}>
                <div className="glass-card rounded-xl p-5 group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono mt-2 block">{skill.category}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Currently Learning */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-slate-100 mb-6">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {learning.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== QUALIFICATIONS ===== */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Education</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Qualifications</h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

            <div className="space-y-8">
              {qualifications.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.15} variant="fadeLeft">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          item.color === 'cyan'
                            ? 'border-cyan-500/30 bg-cyan-500/10 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20'
                            : item.color === 'purple'
                            ? 'border-purple-500/30 bg-purple-500/10 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/20'
                            : 'border-pink-500/30 bg-pink-500/10 group-hover:border-pink-400 group-hover:shadow-lg group-hover:shadow-pink-500/20'
                        }`}
                      >
                        <span className="text-lg">
                          {i === 0 ? '🎓' : i === 1 ? '🤖' : '⭐'}
                        </span>
                      </div>
                    </div>
                    <div className="glass-card rounded-xl p-5 flex-1">
                      <h3 className="text-lg font-semibold text-slate-100 mb-1">{item.title}</h3>
                      <span className="text-xs font-mono text-slate-500 block mb-2">{item.time}</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK EXPERIENCE ===== */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Journey</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Experience Timeline</h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

            <div className="space-y-6">
              {experience.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1} variant="fadeLeft">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10 transition-all">
                        <span className="text-xs font-mono text-cyan-400">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="glass-card rounded-xl p-5 flex-1 group-hover:border-cyan-500/20">
                      <h4 className="text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 block mb-2">{item.time}</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">Leadership</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Community Contributions</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Abhyudaya */}
            <ScrollReveal variant="fadeLeft">
              <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center group hover:border-sky-500/30">
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-sky-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="/images/Logo/abhyudaya.jpeg"
                    alt="Abhyudaya Logo"
                    width={72}
                    height={72}
                    className="relative w-18 h-18 rounded-full border-2 border-sky-500/30 object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">Abhyudaya Coding Club</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Official student-led coding and innovation club at SVVV. As founding president, I initiated a
                  platform encouraging learning through real-world projects, expert workshops, and collaborative events.
                </p>
                <a
                  href="https://abhyudaya-svvv.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all"
                >
                  Visit Website →
                </a>
              </div>
            </ScrollReveal>

            {/* NexHub */}
            <ScrollReveal variant="fadeRight">
              <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center group hover:border-indigo-500/30">
                <div className="relative mb-4">
                  <div className="absolute -inset-2 rounded-full bg-indigo-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="/images/Logo/nexhub.jpeg"
                    alt="NexHub Logo"
                    width={72}
                    height={72}
                    className="relative w-18 h-18 rounded-full border-2 border-indigo-500/30 object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">NexHub Community</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Fast-growing tech community for emerging technologies like AI, ML, automation, and developer growth.
                  As Chairperson, I facilitate technical discussions, peer learning, and weekly events.
                </p>
                <a
                  href="https://nexhubcommunity.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-all"
                >
                  Know More →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CONNECT ===== */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Social</span>
              <h2 className="text-3xl font-bold mt-2 text-slate-100">Connect With Me</h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {[
              { name: 'Instagram', href: 'https://instagram.com/shivamsharma.py', gradient: 'from-pink-500 to-orange-400', icon: FaInstagram },
              { name: 'Discord', href: 'https://discord.com/users/1042284338982682634', gradient: 'from-indigo-500 to-purple-500', icon: FaDiscord },
              { name: 'WhatsApp', href: 'https://wa.me/916266061914', gradient: 'from-green-500 to-emerald-400', icon: FaWhatsapp },
              { name: 'Kaggle', href: 'https://www.kaggle.com/shivamsharmapy', gradient: 'from-blue-500 to-cyan-400', icon: SiKaggle },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/shivam-sharma-ab489721b/', gradient: 'from-blue-600 to-blue-400', icon: FaLinkedin },
              { name: 'GitHub', href: 'https://github.com/shivamshar03', gradient: 'from-gray-600 to-gray-400', icon: FaGithub },
              { name: 'X (Twitter)', href: 'https://x.com/ShivamShar03', gradient: 'from-slate-600 to-slate-400', icon: FaTwitter },
            ].map((social, i) => (
              <ScrollReveal key={social.name} delay={i * 0.05} variant="scale">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl glass-card hover:border-cyan-500/30 transition-all"
                >
                  <social.icon className={`w-5 h-5 bg-gradient-to-br ${social.gradient} text-transparent bg-clip-text`} />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {social.name}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}