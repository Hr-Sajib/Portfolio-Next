"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetails from "./BlogDetails";
import Link from "next/link";

// Define the Blog type
interface Blog {
  id: number;
  title: string;
  tags: string[];
  blogText: string;
  date: string;
}

const blogs: Blog[] = [
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
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);

  // Add this useEffect after the AOS useEffect
useEffect(() => {
  if (isModalOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  // Cleanup on component unmount
  return () => {
    document.body.classList.remove('overflow-hidden');
  };
}, [isModalOpen]);

  // Function to open the modal with the selected blog
  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  // Truncate blog text to ~100 characters
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <section id="blog" className="pt-16 bg-gray-100 lg:mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="zoom-in"
            className="flex gap-2 items-center mb-12 justify-center"
          >
            <Image
              className="h-10 w-10 -rotate-25"
              height={100}
              width={100}
              alt="blogIcon"
              src="https://i.postimg.cc/yY6VPz9Z/idea-9160364.png"
            />
            <h3 className="text-3xl font-oswald font-bold text-gray-900 text-center">
              My Blogs
            </h3>
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
                <button
                  onClick={() => openModal(blog)}
                  className="font-anybody text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300 text-left"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-15">
        <Link
          href="/projects"
          className="font-anybody text-lg text-blue-600 bg-white my-10 p-2 rounded-md"
        >
          See More Blogs
        </Link>
      </div>
      </section>

      {/* Render BlogDetails Modal */}
      {isModalOpen && selectedBlog && (
        <BlogDetails blog={selectedBlog} onClose={closeModal} />
      )}

      
    </>
  );
}
