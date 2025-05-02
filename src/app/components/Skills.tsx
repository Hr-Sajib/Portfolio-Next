'use client';
import React, { useEffect } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFire,
  FaCreditCard,
  FaNetworkWired,
  FaSignal,
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiInfluxdb, SiVercel, SiStripe } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'HTML',
        icon: <FaHtml5 className="text-3xl text-orange-600" />,
        description: 'Structured web content with semantic markup for accessibility.',
      },
      {
        name: 'CSS',
        icon: <FaCss3Alt className="text-3xl text-blue-600" />,
        description: 'Styled responsive, visually appealing interfaces with modern layouts.',
      },
      {
        name: 'JavaScript',
        icon: <FaJsSquare className="text-3xl text-yellow-500" />,
        description: 'Added interactivity and dynamic features to web applications.',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="text-3xl text-blue-700" />,
        description: 'Best for type-safe, scalable code in complex applications.',
      },
      {
        name: 'React',
        icon: <FaReact className="text-3xl text-cyan-500" />,
        description: 'Best for building fast, reusable UI components effortlessly.',
      },
      {
        name: 'Redux',
        icon: <SiRedux className="text-3xl text-purple-600" />,
        description: 'Best for predictable state management in large-scale apps.',
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-3xl text-black" />,
        description: 'Best for SEO-optimized, server-rendered React applications.',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-3xl text-teal-500" />,
        description: 'Best for rapid, customizable styling with utility-first CSS.',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: <FaNodeJs className="text-3xl text-green-600" />,
        description: 'Best for scalable, non-blocking backend services.',
      },
      {
        name: 'Express',
        icon: <SiExpress className="text-3xl text-black" />,
        description: 'Best for minimalist, flexible API development.',
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-3xl text-green-500" />,
        description: 'Best for flexible, JSON-like data storage in dynamic apps.',
      },
      {
        name: 'Mongoose',
        icon: <SiMongodb className="text-3xl text-green-500" />,
        description: 'Best for streamlined MongoDB schema validation and queries.',
      },
      {
        name: 'SQL',
        icon: <SiMysql className="text-3xl text-blue-600" />,
        description: 'Best for structured, relational data management.',
      },
      {
        name: 'InfluxDB',
        icon: <SiInfluxdb className="text-3xl text-red-500" />,
        description: 'Best for high-performance time-series data storage.',
      },
    ],
  },
  {
    category: 'Tools & Tech',
    items: [
      {
        name: 'Git',
        icon: <FaGitAlt className="text-3xl text-orange-500" />,
        description: 'Best for efficient version control and collaboration.',
      },
      {
        name: 'GitHub',
        icon: <FaGithub className="text-3xl text-black" />,
        description: 'Best for hosting and sharing code repositories seamlessly.',
      },
      {
        name: 'Vercel',
        icon: <SiVercel className="text-3xl text-black" />,
        description: 'Best for easy deployment of Next.js apps with CI/CD.',
      },
      {
        name: 'Firebase',
        icon: <FaFire className="text-3xl text-yellow-600" />,
        description: 'Best for rapid authentication and hosting solutions.',
      },
      {
        name: 'Stripe',
        icon: <SiStripe className="text-3xl text-purple-600" />,
        description: 'Best for secure, global payment processing in e-commerce.',
      },
      {
        name: 'SSLCOMMERZ',
        icon: <FaCreditCard className="text-3xl text-green-700" />,
        description: 'Best for localized payment gateways in regional markets.',
      },
    ],
  },
  {
    category: 'Others',
    items: [
      {
        name: 'WebSocket',
        icon: <FaNetworkWired className="text-3xl text-blue-600" />,
        description: 'Best for real-time, bidirectional app communication.',
      },
      {
        name: 'MQTT Protocol',
        icon: <FaSignal className="text-3xl text-purple-500" />,
        description: 'Best for lightweight, efficient IoT messaging.',
      },
    ],
  },
];

const SkillsSection = () => {



  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);


  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        <div className='flex gap-[13svw] bg-white p-2 rounded-lg mb-10'>
          <h3 className="text-2xl font-semibold text-gray-400">Technologies & Why I Choose</h3>
        </div>
        {skills.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.category}</h3>
            <div className="space-y-6">
              {category.items.map((skill, idx) => (
                <div
                data-aos="fade-up"
                  key={idx}
                  className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center md:w-1/3">
                    <div className="mr-4">{skill.icon}</div>
                    <span className="text-lg font-medium text-gray-800">{skill.name}</span>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;