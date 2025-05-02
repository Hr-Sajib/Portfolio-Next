'use client';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks: A Beginner's Guide",
    tags: ["React", "JavaScript", "Web Development"],
    blogText:
      "React Hooks revolutionized how we manage state and side effects in functional components. This guide covers useState, useEffect, and custom hooks with practical examples to help beginners build dynamic React applications efficiently.",
    date: "May 02, 2025",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    tags: ["Node.js", "Express", "API", "Backend"],
    blogText:
      "Learn how to create robust and scalable RESTful APIs using Node.js and Express. This post explores middleware, error handling, and MongoDB integration to build a production-ready backend for your MERN stack projects.",
    date: "April 15, 2025",
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Which",
    tags: ["CSS", "Web Design", "Frontend"],
    blogText:
      "CSS Grid and Flexbox are powerful layout tools, but each has its strengths. This article compares their use cases, with examples of creating responsive layouts for modern web applications, including tips for Tailwind CSS users.",
    date: "March 10, 2025",
  },
];

export default function BlogSection() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);

  // Truncate blog text to ~100 characters
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="max-w-7\). mx-auto px-4 sm:px-6 lg:px-8">
     
       <div className='flex gap-2 items-center mb-12 justify-center'>
          <Image className='h-10 w-10 -rotate-25' height='100' width='100' alt='blogIcon' src='https://i.postimg.cc/yY6VPz9Z/idea-9160364.png'></Image>
          <h3 className="text-3xl font-oswald font-bold text-gray-900  text-center" >My Blogs</h3>
       </div>
         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
              data-aos="zoom-in"
            >
              <h4 className="font-anybody text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
              <p className="font-anybody text-gray-600 mb-4 flex-grow">
                {truncateText(blog.blogText, 100)}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-amber-200 text-amber-800 text-xs font-anybody px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${blog.id}`}
                className="font-anybody text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}