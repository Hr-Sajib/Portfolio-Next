'use client'
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
            {projects.slice(0,3).map((project, index) => (
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
                  src={project.image[0]} // Display the first image from the array
                  alt={`${project.name} screenshot`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  priority={index === 0} // Prioritize first image for faster loading
                />
                <div className="p-6">
                  <div className='flex gap-3 items-center'>
                    <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                    {(project.underDevelopment) == true &&
                      <p className='font-bold text-blue-500'>(Ongoing Project)</p>
                    }
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
                  <div className="mt-6">
                    <div className='flex gap-10 text-amber-800 '>
                      <Link
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center hover:text-amber-600"
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
                        className="flex items-center hover:text-amber-600"
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
                          className="flex items-center hover:text-amber-600"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt className="text-xl mr-2" />
                          Live
                        </Link>
                      )}
                    </div>


                    <span
                        className="flex items-center text-blue-700 hover:text-blue-500 mt-5 "
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

     <div className='flex justify-center mb-15'>
        <Link
            href="/projects"
            className='font-anybody text-lg text-blue-600 bg-gray-100 p-2 rounded-md'
          >
            See More Projects
        </Link>
     </div>

    </>
  );
};

export default ProjectsSection;
