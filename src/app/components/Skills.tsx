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
  FaDocker,
  FaAws,
  FaFigma,
  FaUpload,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiInfluxdb,
  SiVercel,
  SiStripe,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiZod,
  SiNginx,
  SiPostman,
  SiCaddy,
  SiTailscale,
} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-3xl text-orange-600" />, description: 'Structured web content with semantic markup for accessibility.' },
      { name: 'CSS', icon: <FaCss3Alt className="text-3xl text-blue-600" />, description: 'Styled responsive, visually appealing interfaces with modern layouts.' },
      { name: 'JavaScript', icon: <FaJsSquare className="text-3xl text-yellow-500" />, description: 'Added interactivity and dynamic features to web applications.' },
      { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-700" />, description: 'Type-safe, scalable code for complex applications.' },
      { name: 'React', icon: <FaReact className="text-3xl text-cyan-500" />, description: 'Fast, reusable UI components.' },
      { name: 'Redux', icon: <SiRedux className="text-3xl text-purple-600" />, description: 'Predictable state management in large-scale apps.' },
      { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-black" />, description: 'SEO-optimized, server-rendered React applications.' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl text-teal-500" />, description: 'Rapid, customizable styling with utility-first CSS.' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-3xl text-green-600" />, description: 'Scalable, non-blocking backend services.' },
      { name: 'Express', icon: <SiExpress className="text-3xl text-black" />, description: 'Minimalist, flexible API development.' },
      { name: 'REST APIs', icon: <FaNetworkWired className="text-3xl text-blue-600" />, description: 'Designing clean, resource-oriented HTTP APIs.' },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-3xl text-pink-600" />, description: 'Stateless, secure authentication & authorization.' },
      { name: 'Zod', icon: <SiZod className="text-3xl text-blue-500" />, description: 'Runtime schema validation with static type inference.' },
      { name: 'Multer', icon: <FaUpload className="text-3xl text-gray-700" />, description: 'Handling multipart/form-data file uploads.' },
    ],
  },
  {
    category: 'Databases & ORMs',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-500" />, description: 'Flexible, JSON-like data storage in dynamic apps.' },
      { name: 'Mongoose', icon: <SiMongodb className="text-3xl text-green-500" />, description: 'Streamlined MongoDB schema validation and queries.' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-3xl text-blue-700" />, description: 'Reliable, relational data management at scale.' },
      { name: 'MySQL', icon: <SiMysql className="text-3xl text-blue-600" />, description: 'Structured, relational data management.' },
      { name: 'Prisma', icon: <SiPrisma className="text-3xl text-black" />, description: 'Type-safe ORM and database migrations.' },
      { name: 'InfluxDB', icon: <SiInfluxdb className="text-3xl text-red-500" />, description: 'High-performance time-series data storage.' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: <FaDocker className="text-3xl text-blue-500" />, description: 'Containerized, reproducible app deployments.' },
      { name: 'Nginx', icon: <SiNginx className="text-3xl text-green-600" />, description: 'Reverse proxy, load balancing & serving static assets.' },
      { name: 'Caddy', icon: <SiCaddy className="text-3xl text-green-500" />, description: 'Automatic HTTPS web server for simple deployments.' },
      { name: 'AWS', icon: <FaAws className="text-3xl text-orange-500" />, description: 'Cloud hosting & infrastructure basics.' },
      { name: 'Vercel', icon: <SiVercel className="text-3xl text-black" />, description: 'Easy deployment of Next.js apps with CI/CD.' },
      { name: 'Firebase', icon: <FaFire className="text-3xl text-yellow-600" />, description: 'Rapid authentication and hosting solutions.' },
      { name: 'Tailscale', icon: <SiTailscale className="text-3xl text-gray-800" />, description: 'Secure, zero-config VPN mesh for private networking between servers.' },
    ],
  },
  {
    category: 'Tools & Design',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-500" />, description: 'Efficient version control and collaboration.' },
      { name: 'GitHub', icon: <FaGithub className="text-3xl text-black" />, description: 'Hosting and sharing code repositories seamlessly.' },
      { name: 'Postman', icon: <SiPostman className="text-3xl text-orange-600" />, description: 'Designing, testing & documenting APIs.' },
      { name: 'Figma', icon: <FaFigma className="text-3xl text-purple-500" />, description: 'Reading designs & prototyping UI before building.' },
    ],
  },
  {
    category: 'Payments & Real-time',
    items: [
      { name: 'Stripe', icon: <SiStripe className="text-3xl text-purple-600" />, description: 'Secure, global payment processing in e-commerce.' },
      { name: 'SSLCOMMERZ', icon: <FaCreditCard className="text-3xl text-green-700" />, description: 'Localized payment gateways in regional markets.' },
      { name: 'WebSocket', icon: <FaNetworkWired className="text-3xl text-blue-600" />, description: 'Real-time, bidirectional app communication.' },
      { name: 'MQTT', icon: <FaSignal className="text-3xl text-purple-500" />, description: 'Lightweight, efficient IoT messaging.' },
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
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Skills</h2>
        <p className="text-gray-500 text-center mb-10">Hover a skill to see where it fits in.</p>

        {skills.map((category, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill, idx) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 30}
                  key={idx}
                  title={skill.description}
                  className="flex flex-col items-center justify-center gap-2 w-24 sm:w-28 py-4 px-2 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-default"
                >
                  {skill.icon}
                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight">
                    {skill.name}
                  </span>
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
