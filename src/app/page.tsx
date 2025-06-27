'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer, TechCorp",
    avatar: "/images/avatar1.jpg",
    quote:
      "Working with Shivam was a fantastic experience. His attention to detail and innovative thinking brought our project to life!",
  },
  {
    name: "Priya Sharma",
    role: "Community Lead, NexHub",
    avatar: "/images/avatar2.jpg",
    quote:
      "Shivam's leadership at NexHub inspired everyone. His ability to connect people and drive results is unmatched.",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Abhyudaya",
    avatar: "/images/avatar3.jpg",
    quote:
      "Abhyudaya's success owes much to Shivam's dedication and vision. He truly makes a difference wherever he goes.",
  },
  {
    name: "Sneha Kapoor",
    role: "Product Designer, Creatix",
    avatar: "/images/avatar4.jpg",
    quote:
      "Shivam's creativity and technical skills are top-notch. He brings fresh ideas and energy to every project.",
  },
  {
    name: "Vikram Singh",
    role: "Mentor, Open Source",
    avatar: "/images/avatar5.jpg",
    quote:
      "A pleasure to mentor Shivam. His passion for open source and learning is inspiring.",
  },
];

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  // Testimonial carousel state
  const [startIdx, setStartIdx] = useState(0);
  const [paused, setPaused] = useState(false); // NEW

  useEffect(() => {
    if (paused) return; // Stop animation if paused
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [paused]);

  // Number of testimonials to show at once
  const visibleCount = 3;

  // Get 3 testimonials, wrapping around if needed
  const getVisibleTestimonials = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(testimonials[(startIdx + i) % testimonials.length]);
    }
    return arr;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"></div>

          {/* Abstract Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-40 w-80 h-80 bg-pink-400 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative h-80 w-80 md:h-96 md:w-96">
                {/* This would be replaced with an actual profile image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img src="/images/shivam.jpg" alt="Shivam Sharma" className="rounded-full w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Shivam Sharma
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                AI/ML Developer | Community Lead @ NexHub | Mentor @ Abhyudaya Coding Club
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Passionate software developer creating elegant solutions. Continuous learner, code craftsman, and open source enthusiast.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md transition-colors"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/shivamshar03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-sharma-ab489721b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/ShivamShar03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                
              </div>
            </motion.div>


          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Check out some of my recent work. These projects showcase my skills and passion for creating innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {project.title} Image
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/projects"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Details
                    </Link>
                    <div className="flex gap-2">
                      {project.category.map(cat => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md inline-block transition-colors shadow-md hover:shadow-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
            What People Say
          </h2>
          <div className="relative flex justify-center items-center min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[startIdx].name}
                initial={{ opacity: 0, x: 80, scale: 1 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: paused ? 1.1 : 1, // Zoom in if paused
                  transition: { duration: 0.5, type: "spring" }
                }}
                exit={{ opacity: 0, x: -80, scale: 1 }}
                className="w-full max-w-md mx-auto"
                onClick={() => setPaused(prev => !prev)} // Toggle pause/resume on click
                style={{ cursor: "pointer" }}
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center border border-transparent transition-all duration-300 min-h-[340px]"
                >
                  <img
                    src={testimonials[startIdx].avatar}
                    alt={testimonials[startIdx].name}
                    className="w-20 h-20 rounded-full border-4 border-blue-200 dark:border-blue-700 shadow mb-4 object-cover"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4 italic">
                    “{testimonials[startIdx].quote}”
                  </p>
                  <div className="text-center">
                    <span className="block font-bold text-blue-700 dark:text-blue-400">{testimonials[startIdx].name}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">{testimonials[startIdx].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Dots navigation */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setStartIdx(idx);
                    setPaused(false); // Resume animation if dot is clicked
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${idx === startIdx
                      ? "bg-blue-600 border-blue-600"
                      : "bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-700"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to work together?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Whether you need a website, AI/ML solution, or want to collaborate on an exciting project, I'd love to hear from you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-4 bg-white text-blue-600 rounded-md transition-colors shadow-md hover:shadow-lg hover:bg-gray-100"
            >
              Contact Me
            </Link>
            <Link
              href="/proposal"
              className="px-9 py-1 border border-white text-white hover:bg-white/10 rounded-md transition-colors"
            >
              Submit a Project Proposal
             <form action="https://formspree.io/f/yourformid" method="POST">
              {/* ...your form fields... */}
              <button type="submit">Send</button>
            </form>           </Link>
            <Link
              href="/collaborate"
              className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-md transition-colors"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
