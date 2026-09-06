import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { Project } from '@/app/types/types';
import DetailBulletSection from '@/app/components/DetailBulletSection';

const getProjects = (): Project[] => {
  const filePath = path.join(process.cwd(), 'public', 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
};

const getProjectBySlug = (slug: string): Project | undefined => {
  return getProjects().find((project) => project.slug === slug);
};

export const generateStaticParams = () => {
  return getProjects().map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.name,
    description: project.whatItIs || project.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-100 py-16 pt-28 -mb-10 lg:-mb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-blue-500 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>

        <div className="space-y-10">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {project.name}
              </h1>
              {project.underDevelopment && (
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Ongoing Project
                </span>
              )}
            </div>
            <p className="text-lg text-gray-600 mt-3">{project.whatItIs}</p>
            <p className="text-sm text-gray-500 mt-2">
              Project done <b>{project.projectDoneMonthsAgo} months</b> ago
            </p>
          </div>

          {/* Visuals: walkthrough video */}
          {project.walkthroughVideo && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                🎬 Visuals
              </h2>
              <video
                controls
                className="w-full rounded-lg bg-black"
                poster={project.image[0]}
              >
                <source src={project.walkthroughVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🔗 Links
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition-colors"
              >
                <FaGithub />
                Client Repo
              </Link>
              <Link
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition-colors"
              >
                <FaGithub />
                Server Repo
              </Link>
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </Link>
              )}
            </div>
          </div>

          {/* Description sections */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              📝 Project Breakdown
            </h2>

            <DetailBulletSection
              title="🎯 Project Motive"
              items={project.motive ?? []}
            />

            <DetailBulletSection
              title="✨ Feature Highlights"
              items={project.keyFeatures.map((f) => `▹ ${f}`)}
            />

            <DetailBulletSection
              title="🏗️ Architecture"
              items={project.architecture ?? []}
            />

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🛠️ Tech Used
              </h3>
              <div className="flex flex-wrap gap-2">
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

            <DetailBulletSection
              title="🐞 Problems Faced & Tackled"
              items={project.problemsSolved ?? []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
