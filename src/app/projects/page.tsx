'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Dev', 'AI/ML', 'Hackathons', 'Open Source', 'Game Dev'];

  const filteredProjects = selectedCategory === 'All' || selectedCategory === null 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              (category === 'All' && selectedCategory === null) || category === selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
              {/* This would be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                {project.title} Image Placeholder
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-xs"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          layoutId={`project-${selectedProject.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                {selectedProject.title} Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-6">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded transition-colors"
                >
                  View on GitHub
                </a>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 