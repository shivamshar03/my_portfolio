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
      console.error('Error submitting form:', error); // ✅ Now error is used
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

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Let&apos;s Collaborate</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          I&apos;m always excited to collaborate with fellow developers, designers, and creative minds. 
          Whether you have a project idea or just want to join forces on something amazing, let&apos;s connect!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Send a Collaboration Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
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
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleSkillsChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={`skill-${skill}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectIdea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Idea (if any)
                </label>
                <input
                  type="text"
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Brief description of your idea"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
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
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Portfolio/GitHub URL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="Tell me more about what you're looking for in a collaboration partner and any specific ideas you have."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formData.skills.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50"
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
