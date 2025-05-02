'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogDetails from '../../components/BlogDetails';

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
      "React Hooks have completely transformed the way developers manage state and side effects in functional components, offering a more intuitive and streamlined approach compared to class-based components. Introduced in React 16.8, Hooks like useState and useEffect have become essential tools for building modern React applications. This comprehensive guide is tailored for beginners, walking you through the fundamentals of useState for state management, useEffect for handling side effects like API calls or DOM updates, and even how to create your own custom hooks for reusable logic. With practical examples, such as building a counter, fetching data from an API, and creating a reusable form validation hook, you’ll gain hands-on experience to confidently integrate Hooks into your projects. We’ll also discuss common pitfalls, such as avoiding infinite loops in useEffect, and best practices for organizing your Hooks to keep your code clean and maintainable. By the end of this guide, you’ll be equipped to build dynamic, efficient React applications with confidence.",
    date: "May 02, 2025",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    tags: ["Node.js", "Express", "API", "Backend"],
    blogText:
      "Creating scalable RESTful APIs is a critical skill for backend developers, and Node.js paired with Express provides a powerful, lightweight framework to achieve this. In this in-depth tutorial, you’ll learn how to design and build robust APIs that can handle high traffic and complex requirements for your MERN stack applications. We’ll start by setting up an Express server, defining routes, and implementing controllers to keep your code modular. You’ll explore the role of middleware in Express, including how to use built-in middleware for parsing JSON and custom middleware for authentication and logging. Error handling is a key focus, with strategies to gracefully handle errors using try-catch blocks and custom error middleware, ensuring your API remains reliable. We’ll also integrate MongoDB using Mongoose for data persistence, covering schema design, CRUD operations, and optimizing queries for performance. Additional topics include securing your API with JWT authentication, rate limiting to prevent abuse, and structuring your project for scalability with a clear separation of concerns. By the end, you’ll have a production-ready backend that’s ready to support a full-stack application.",
    date: "April 15, 2025",
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Which",
    tags: ["CSS", "Web Design", "Frontend"],
    blogText:
      "CSS Grid and Flexbox are two of the most powerful tools in a frontend developer’s toolkit for creating responsive layouts, but understanding their strengths and differences is crucial for effective web design. This article provides a detailed comparison of CSS Grid and Flexbox, helping you decide when to use each based on your project’s needs. Flexbox excels in one-dimensional layouts, making it ideal for aligning items in a row or column, such as navigation bars, card layouts, or centering content both vertically and horizontally. CSS Grid, on the other hand, is designed for two-dimensional layouts, allowing you to control both rows and columns simultaneously, which makes it perfect for complex page layouts like dashboards or magazine-style designs. Through practical examples, we’ll build a responsive navbar with Flexbox and a photo gallery with CSS Grid, highlighting the strengths of each approach. We’ll also cover how to combine Grid and Flexbox for more advanced layouts, such as nesting Flexbox inside Grid cells. For Tailwind CSS users, I’ll share tips on leveraging Tailwind’s utility classes to replicate Grid and Flexbox layouts efficiently, including responsive design breakpoints and custom configurations. This guide will leave you with a clear understanding of how to choose the right layout tool for any project.",
    date: "March 10, 2025",
  },
  {
    id: 4,
    title: "A Deep Dive into TypeScript: Why It’s a Game Changer",
    tags: ["TypeScript", "JavaScript", "Frontend"],
    blogText:
      "TypeScript has become a cornerstone for modern JavaScript development, offering static typing and advanced tooling that significantly improve code quality and maintainability. In this deep dive, we’ll explore why TypeScript is considered a game changer for developers working on both small and large-scale projects. You’ll learn the basics of TypeScript, including how to set up a TypeScript project with Node.js or in a React application, and understand key concepts like interfaces, types, and enums. We’ll walk through practical examples, such as defining strongly-typed props in a React component, creating reusable utility types, and using TypeScript with APIs to ensure type safety for fetched data. The post also covers advanced features like generics, which allow you to write flexible, reusable code, and how to use TypeScript’s narrowing techniques to handle union types effectively. Additionally, we’ll discuss how TypeScript integrates with tools like VS Code for better autocompletion and error detection, and how it can prevent runtime errors by catching issues at compile time. By the end, you’ll understand why TypeScript is worth adopting and how to start using it in your projects to write safer, more maintainable code.",
    date: "February 20, 2025",
  },
  {
    id: 5,
    title: "Optimizing Web Performance: Techniques and Tools",
    tags: ["Performance", "Web Development", "Frontend"],
    blogText:
      "Web performance is a critical factor in user experience, SEO, and overall application success, yet it’s often overlooked during development. In this comprehensive guide, we’ll explore proven techniques and tools to optimize the performance of your web applications, ensuring faster load times and smoother interactions. We’ll start with frontend optimization strategies, such as lazy loading images with the `loading='lazy'` attribute, minimizing CSS and JavaScript bundles with tools like Webpack or Vite, and leveraging browser caching with proper HTTP headers. On the backend, we’ll cover techniques like compressing responses with Gzip, optimizing database queries with indexing, and using a CDN to reduce latency for global users. We’ll also dive into performance monitoring tools like Lighthouse and Web Vitals, explaining how to interpret metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Through a case study, we’ll optimize a sample React application, reducing its initial load time by 40% by implementing code splitting, lazy loading components, and optimizing images. Finally, we’ll discuss how to set up performance budgets and automate testing with CI/CD pipelines to ensure your app stays fast as it grows. This guide will equip you with the knowledge to build high-performing web applications that delight your users.",
    date: "January 25, 2025",
  },
  {
    id: 6,
    title: "Introduction to GraphQL: Simplifying Data Fetching",
    tags: ["GraphQL", "API", "Backend"],
    blogText:
      "GraphQL has emerged as a powerful alternative to REST for building APIs, offering a more flexible and efficient way to fetch data in modern applications. This introductory guide will walk you through the fundamentals of GraphQL and demonstrate why it’s simplifying data fetching for developers. We’ll start by explaining the core concepts of GraphQL, including schemas, queries, mutations, and resolvers, and how they differ from REST’s endpoint-based approach. You’ll learn how to set up a GraphQL server using Apollo Server with Node.js, defining a schema for a blog application with types for posts, users, and comments. We’ll write queries to fetch exactly the data you need—no more, no less—avoiding the over-fetching and under-fetching issues common in REST APIs. Through examples, we’ll also cover mutations for creating and updating data, and how to handle authentication in GraphQL with context. On the frontend, we’ll integrate GraphQL with a React app using Apollo Client, showing how to fetch data with useQuery and update the UI with real-time subscriptions via WebSocket. We’ll also discuss GraphQL’s benefits, like strong typing and introspection, and potential challenges, such as caching and error handling. By the end, you’ll have a solid foundation to start using GraphQL in your projects and understand how it can streamline your API development.",
    date: "December 10, 2024",
  },
  {
    id: 7,
    title: "Understanding Redux: State Management in React",
    tags: ["React", "Redux", "State Management"],
    blogText:
      "State management is a critical aspect of building scalable React applications, and Redux has long been a popular choice for managing complex state across components. In this detailed guide, we’ll explore how Redux works and how to use it effectively in your React projects. We’ll start with the basics of Redux, including the concepts of actions, reducers, and the store, and how they work together to create a predictable state container. You’ll learn how to set up Redux in a React app using Redux Toolkit, which simplifies the setup with utilities like `configureStore` and `createSlice`. Through a practical example, we’ll build a todo list application, demonstrating how to dispatch actions to add, remove, and toggle todos, and how to use selectors to access state efficiently. We’ll also cover Redux middleware, such as Redux Thunk for handling asynchronous actions like API calls, and how to debug your state with Redux DevTools. Additionally, we’ll discuss modern alternatives like Redux Toolkit Query for data fetching and Zustand for lighter state management, comparing their use cases with Redux. The post will also address common pitfalls, such as overusing Redux for simple state or mutating state directly, and provide best practices for structuring your Redux code to keep it maintainable. By the end, you’ll have a clear understanding of when and how to use Redux in your React applications.",
    date: "November 15, 2024",
  },
  {
    id: 8,
    title: "Deploying a MERN Stack App: A Step-by-Step Guide",
    tags: ["MERN", "Deployment", "Full Stack"],
    blogText:
      "Deploying a full-stack application can be daunting, but with the right steps, you can get your MERN (MongoDB, Express, React, Node.js) app live with confidence. This step-by-step guide walks you through the entire process of deploying a MERN stack application, from development to production. We’ll start by preparing your app for deployment, including setting up environment variables for sensitive data like MongoDB URIs and API keys, and ensuring your React app is built for production with `npm run build`. On the backend, we’ll configure Express to serve the React build files as static assets, enabling a single server to handle both the API and frontend. We’ll then choose a hosting platform—focusing on Heroku for simplicity—and walk through the deployment process, including setting up a Heroku app, adding a MongoDB Atlas database, and configuring Heroku’s environment variables. We’ll also cover how to set up a custom domain and enable HTTPS with Heroku’s free SSL. For scalability, we’ll discuss deploying the frontend separately on Netlify and the backend on Render, using environment variables to connect the two. Additional topics include setting up CI/CD with GitHub Actions for automated deployments, monitoring your app with Heroku logs, and optimizing performance with gzip compression and caching. By the end of this guide, you’ll have a fully deployed MERN app accessible to users worldwide, with the knowledge to troubleshoot common deployment issues and scale your application as needed.",
    date: "October 05, 2024",
  },
];




export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);
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
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <section id="blog" className="py-16 bg-gray-100 mt-12 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 items-center mb-10 justify-center">
            <Image
              className="h-10 w-10 -rotate-25"
              height={100}
              width={100}
              alt="blogIcon"
              src="https://i.postimg.cc/yY6VPz9Z/idea-9160364.png"
            />
            <h3 className="text-3xl font-oswald font-bold text-gray-900 text-center">My Blogs</h3>
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
                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(blog)}
                    className="font-anybody text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render BlogDetails Modal */}
      {isModalOpen && selectedBlog && (
        <BlogDetails blog={selectedBlog} onClose={closeModal} />
      )}
    </>
  );
}