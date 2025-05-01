'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';


const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <p className="text-center text-gray-600">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
              >
                <Image
                  src={project.image[0]} // Display the first image from the array
                  alt={`${project.name} screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  priority={index === 0} // Prioritize first image for faster loading
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-gray-700">Key Features:</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-wrap space-x-4">
                    <Link
                      href={project.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                      title="Frontend Repository"
                    >
                      <FaGithub className="text-xl mr-2" />
                      Frontend
                    </Link>
                    <Link
                      href={project.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                      title="Backend Repository"
                    >
                      <FaGithub className="text-xl mr-2" />
                      Backend
                    </Link>
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-500"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl mr-2" />
                      Live
                    </Link>
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center text-blue-700 hover:text-blue-500 mt-2 lg:mt-5"
                      title="More Details"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && selectedProject && (
        <ProjectDetails project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectsSection;