'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Project } from '@/app/types/types';

const ProjectsSection = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });

    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: Project[] = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const goToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-aos="zoom-in" className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden animate-pulse"
                style={{ height: '400px' }}
              >
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 mb-2" />
                  <div className="h-4 bg-gray-200 mb-4" />
                  <div className="h-4 bg-gray-200 mb-4" />
                  <div className="h-6 bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section id="projects" className="py-16 pt-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 lg:mb-10 mb-10 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                data-aos="zoom-in"
                key={index}
                role="link"
                tabIndex={0}
                onClick={() => goToProject(project.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') goToProject(project.slug);
                }}
                className="bg-gray-50 border border-gray-300 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={project.image[0]}
                  alt={`${project.name} screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  loading="lazy" // Optimize to reduce layout shift
                />
                <div className="p-6">
                  <div className="flex gap-3 items-center">
                    <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                    {project.underDevelopment && (
                      <p className="font-bold text-blue-500">(Ongoing Project)</p>
                    )}
                  </div>
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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-gray-700 hover:text-blue-500"
                      title="Backend Repository"
                    >
                      <FaGithub className="text-xl mr-2" />
                      Backend
                    </Link>
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-gray-700 hover:text-blue-500"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-xl mr-2" />
                        Live
                      </Link>
                    )}
                    <span
                      className="flex items-center text-gray-700 hover:text-blue-500 mt-0 lg:mt-4"
                      title="More Details"
                    >
                      More Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
