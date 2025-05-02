'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationSection = () => {

    useEffect(() => {
      AOS.init({
        duration: 600,
        once: true,
        offset: 20,
      });
    }, []);
  
    
  return (
    <section id="education" className="py-16 bg-gray-100">
      <div data-aos='fade-down' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-15 text-center">Education</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className='flex items-center gap-5 mb-5'>
            <Image        
            // data-aos='zoom-in'
                          src='https://i.postimg.cc/0yyxLXR3/cse.png'
                          alt='cse icon'
                          width={80}
                          height={50}
                          className="lg:h-20 lg:w-20 h-15 w-15"
                        />
            <div data-aos='fade-right'>
              <h3 className="text-xl lg:text-2xl mt-2 font-semibold text-gray-800">Bachelor of Science in Computer Science and Engineering</h3>
              <a href='https://daffodilvarsity.edu.bd' className='text-base lg:text-xl mt-1 mb-5'>at <span className='text-blue-700'>Daffodil International University</span></a>
            </div>
          </div>
          
          <div className='flex items-center gap-1 lg:text-base text-sm'>
            <div>
              <p className='bg-gray-200 px-2 py-1 mb-1'>Current Level</p>
              <p className='bg-gray-200 px-2 py-1'>Graduation Year</p>
            </div>
            <div>
              <p className='bg-gray-200 px-2 py-1 mb-1'>Last Semester (4th yr)</p>
              <p className='bg-gray-200 px-2 py-1'>2025</p>
            </div>
          </div>

          <div className='flex mt-3 gap-1 text-xl font-semibold'>
            <p className='bg-blue-200 px-2 py-1 rounded-l-md'>Current Average CGPA</p>
            <p className='bg-blue-200 px-2 py-1 rounded-r-md font-bold'>~3.7</p>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-medium text-gray-800">Key Learnings</h4>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Data Structures and Algorithms:</b> Mastered fundamental concepts like arrays, linked lists, trees, graphs, sorting, and searching algorithms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Object-Oriented Programming:</b> Proficient in designing and implementing software using OOP principles in languages like Java and C++.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Database Systems:</b> Learned to design and query relational databases using SQL and understand NoSQL databases.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Operating Systems:</b> Gained knowledge of process management, memory management, and file systems.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Web Development:</b> Developed skills in building modern web applications using HTML, CSS, JavaScript, and frameworks like React and Next.js.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><b>Computer Networks:</b> Studied network protocols, TCP/IP, and network security fundamentals.</span>
              </li>
              <li className="flex items-start">
                <span><b className='text-gray-400 ml-4'>And many more</b></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;