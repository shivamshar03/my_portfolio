'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  projectTitle: string;
  projectType: string;
  budget: string;
  deadline: string;
  description: string;
  files?: FileList | null;
}

export default function ProjectProposalPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectTitle: '',
    projectType: 'web-development',
    budget: '',
    deadline: '',
    description: '',
    files: null,
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setFormData((prev) => ({ ...prev, files }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the data for EmailJS
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
          // You can add more fields as needed
        },
        process.env.NEXT_PUBLIC_PROPOSAL_PUBLIC_KEY as string
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your project proposal has been received. I will contact you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectTitle: '',
        projectType: 'web-development',
        budget: '',
        deadline: '',
        description: '',
        files: null,
      });

      // Reset file input
      const fileInput = document.getElementById('files') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

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

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Submit a Project Proposal</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Have a project in mind? Fill out the form below and I'll get back to you as soon as possible with a free consultation.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
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
              <label
                htmlFor="projectTitle"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Project Title *
              </label>
              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="web-development">Web Development</option>
                  <option value="ai-ml">AI/ML Project</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Please provide as much detail as possible about your project requirements, goals, and expectations."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="files"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Attach Files (Optional)
              </label>

              <button                           
                type="button"                  
                onClick={() => window.open('https://docs.google.com/forms/d/1simUXUbH3jTiVGxjFr96paYYK7sV0OdD0wc9V7jLXSE/viewform', '_blank')}
                className="px-6 py-3 bg-gray-300 dark:bg-gray-900 hover:bg-gray-500 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md transition-colors"
              >
                Open Google Form
              </button>
          
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Max 5MB. Accepted formats: PDF, DOC, DOCX, JPG, PNG
              </p>
              
            </div>


            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-md ${submitStatus.success
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