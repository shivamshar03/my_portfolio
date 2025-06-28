'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use environment variables for EmailJS service, template, and public key
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

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          'Oops! Something went wrong. Please try again or contact me directly.',
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <HiMail className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                  <p className="font-medium">shivamshar0310@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <HiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                  <p className="font-medium">+91 6266061914</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <HiLocationMarker className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                  <p className="font-medium">Indore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shivam-sharma-ab489721b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                </a>
                <a
                  href="https://github.com/shivamshar03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
                </a>
                <a
                  href="https://x.com/ShivamShar03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaTwitter className="text-blue-500 text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
         <motion.div
  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-300">
    🚀 Free 1:1 Mentorship
  </h3>
  <p className="text-m text-gray-600 dark:text-white">
    Looking for guidance or stuck with something? I offer free 1:1 mentorship sessions.
    Just mention <strong>&quot;Mentorship&quot;</strong> in your message above — and I’ll reach out!
  </p>
</motion.div>

        </div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  submitStatus.success
                    ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
         
        </motion.div>
      </div>
      
    </div>
  );
}