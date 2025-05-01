'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const  ProjectDetails = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 text-2xl"
              title="Close"
            >
              &times;
            </button>
          </div>
          <div className="relative mb-6">
            <Image
              src={project.image[currentImageIndex]}
              alt={`${project.name} screenshot ${currentImageIndex + 1}`}
              width={800}
              height={500}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            {project.image.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  title="Previous Image"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  title="Next Image"
                >
                  <FaArrowRight />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.image.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
                      }`}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
            <p className="text-gray-600 mt-2">{project.detailedDescription}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <p className='mb-4'>Project Done  <b>{project.projectDoneMonthsAgo} months</b> ago</p>
          <div className="flex space-x-4 justify-end">
            <a
              href={project.frontendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
              title="Frontend Repository"
            >
              <FaGithub className="text-xl mr-2" />
              Frontend
            </a>
            <a
              href={project.backendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
              title="Backend Repository"
            >
              <FaGithub className="text-xl mr-2" />
              Backend
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-500"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-xl mr-2" />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  ProjectDetails;