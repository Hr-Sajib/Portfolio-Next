import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Science in Computer Science and Engineering</h3>
          <p className="text-lg text-gray-600 mt-2">4th Year Student (Ongoing)</p>
          <p className="text-lg text-gray-600">Expected Graduation Year: 2025</p>
          
          <div className="mt-6">
            <h4 className="text-xl font-medium text-gray-800">Key Learnings</h4>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Data Structures and Algorithms: Mastered fundamental concepts like arrays, linked lists, trees, graphs, sorting, and searching algorithms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Object-Oriented Programming: Proficient in designing and implementing software using OOP principles in languages like Java and C++.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Database Systems: Learned to design and query relational databases using SQL and understand NoSQL databases.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Operating Systems: Gained knowledge of process management, memory management, and file systems.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Web Development: Developed skills in building modern web applications using HTML, CSS, JavaScript, and frameworks like React and Next.js.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Computer Networks: Studied network protocols, TCP/IP, and network security fundamentals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;