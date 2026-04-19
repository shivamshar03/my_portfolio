'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { portfolioContext } from '@/data/portfolioContext';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const quickReplies = [
  'What services do you offer?',
  'Tell me about your projects',
  'How can I hire you?',
  'What is your tech stack?',
];

function generateBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes('service') || msg.includes('offer') || msg.includes('what do you do')) {
    return "Shivam offers: 🧠 AI & Machine Learning (LLMs, Vision, Predictive Models), 📊 ERP & CRM Solutions, 🌐 Web App Development (React, FastAPI), 📱 Android & iOS Solutions, 🖥️ Desktop Applications, and ☁️ Cloud & Deployment. Visit the Contact page to discuss your needs!";
  }

  if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work')) {
    return "Here are some featured projects:\n• **Anaya3** — Multimodal AI assistant with voice & facial emotion detection\n• **AutoFormX** — Smart form automation with fuzzy matching\n• **Face ID Attendance** — Real-time face recognition system\n• **Data Analysis Assistant** — Interactive Streamlit dashboard\n\nCheck out the Projects page for the full list!";
  }

  if (msg.includes('hire') || msg.includes('freelance') || msg.includes('work with')) {
    return "Great to hear you're interested! You can:\n1. 📧 Email: shivamsharma.py@gmail.com\n2. 📋 Submit a proposal on the **Hire Me** page\n3. 🤝 Use the **Collaborate** page for partnership inquiries\n\nShivam typically responds within 24 hours!";
  }

  if (msg.includes('tech') || msg.includes('stack') || msg.includes('skill') || msg.includes('language')) {
    return "**Languages:** Python (Advanced), SQL, JavaScript\n**Frameworks:** Flask, FastAPI, React, Streamlit\n**AI & Data:** Pandas, NumPy, OpenCV, LLMs, Scikit-learn, LangChain\n**Tools:** Git, Docker, Selenium, REST APIs";
  }

  if (msg.includes('experience') || msg.includes('intern') || msg.includes('job')) {
    return "Shivam's recent experience:\n• **Python Developer Intern** — Carina Softlabs (Jun–Sep 2025)\n• **AI Automation Intern** — VKAPS IT Solutions (Apr–May 2025)\n• **ML Intern** — Ardent Computech (Aug–Sep 2024)\n\nPlus leadership roles at NexHub and Abhyudaya Coding Club!";
  }

  if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
    return "📧 Email: shivamsharma.py@gmail.com\n📱 Phone: +91-6266061914\n📍 Location: Indore, India\n🐙 GitHub: shivamshar03\n💼 LinkedIn: shivam-sharma-ab489721b\n\nOr use the Contact page on this website!";
  }

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('hola')) {
    return "Hey there! 👋 I'm Shivam's AI assistant. I can help you learn about his skills, projects, and services. What would you like to know?";
  }

  if (msg.includes('education') || msg.includes('college') || msg.includes('degree')) {
    return "🎓 Shivam holds a B.Tech in Computer Science from Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021–2025), with a focus on AI, ML, and Software Development.";
  }

  if (msg.includes('about') || msg.includes('who')) {
    return "Shivam Sharma is an AI/ML Developer & Consultant based in Indore, India. He's the Community Lead at NexHub and Founder of Abhyudaya Coding Club. He builds intelligent solutions with Python, AI/ML, and modern web technologies. 🚀";
  }

  return "Thanks for your message! I can help with info about Shivam's **services**, **projects**, **skills**, **experience**, or **contact details**. What are you curious about? 😊";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! 👋 I'm Shivam's AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(text);
      setMessages((prev) => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating action button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-all duration-300"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #ef4444, #dc2626)'
            : 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
      >
        {isOpen ? (
          <FaTimes className="w-5 h-5 text-white" />
        ) : (
          <FaRobot className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Pulse ring when closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full animate-ping bg-cyan-500/20 pointer-events-none" />
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40"
            style={{ background: '#0d0d14' }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <FaRobot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">Shivam&apos;s AI Assistant</h3>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md'
                        : 'bg-white/[0.06] text-slate-300 border border-white/[0.06] rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] hover:bg-cyan-500/20 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/[0.06]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-40"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
