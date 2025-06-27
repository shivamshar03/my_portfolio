'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  skills: string[];
  projectIdea: string;
  availability: string;
  portfolio: string;
  message: string;
}

// Available skills options
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
      if (checked) {
        return { ...prev, skills: [...prev.skills, value] };
      } else {
        return { ...prev, skills: prev.skills.filter((skill) => skill !== value) };
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send collaboration request via EmailJS
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

      // Reset form
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
      setSubmitStatus({
        success: false,
        message: 'Oops! Something went wrong. Please try again or contact me directly.',
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Let's Collaborate</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          I'm always excited to collaborate with fellow developers, designers, and creative minds. 
          Whether you have a project idea or just want to join forces on something amazing, let's connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Side Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Have an interesting side project idea? Let's build it together and create something awesome!
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate about open source? I'd love to collaborate on projects that benefit the community.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Startups & MVPs</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Looking to validate an idea or build an MVP? Let's join forces and bring it to life quickly.
            </p>
          </motion.div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Send a Collaboration Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Skills *
              </span>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {skillOptions.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`skill-${skill}`}
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleSkillsChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`skill-${skill}`}
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="projectIdea"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Idea (if any)
                </label>
                <input
                  type="text"
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Brief description of your idea"
                />
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select your availability</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time (10-20 hrs/week)</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Portfolio/GitHub URL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="https://"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Additional Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Tell me more about what you're looking for in a collaboration partner and any specific ideas you have."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.skills.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Collaboration Request'}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  submitStatus.success
                    ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}