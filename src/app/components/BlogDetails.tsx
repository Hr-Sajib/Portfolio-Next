'use client';
import { FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Define the Blog type based on the blog data structure
interface Blog {
  id: number;
  title: string;
  tags: string[];
  blogText: string;
  date: string;
}

interface BlogDetailsProps {
  blog: Blog;
  onClose: () => void;
}

const BlogDetails = ({ blog, onClose }: BlogDetailsProps) => {


        useEffect(() => {
          AOS.init({
            duration: 600,
            once: true,
            offset: 20,
          });
        }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex justify-center items-center z-50">
      <div data-aos="zoom-in" className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Blog Content */}
        <h2 className="font-oswald text-3xl font-bold text-gray-900 mb-4">{blog.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
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
        <p className="font-anybody text-gray-600 leading-relaxed">{blog.blogText}</p>
      </div>
    </div>
  );
};

export default BlogDetails;