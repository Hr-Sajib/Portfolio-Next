'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 mt-[70vh] lg:mt-36">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div data-aos="fade-up" className="flex flex-col items-center md:items-start lg:mr-10">
            <Link href="/">
              <Image
                width={100}
                height={100}
                alt="logo"
                src="https://i.postimg.cc/Y0Wq12YK/Screenshot-2025-05-01-at-1-01-48-PM-removebg-preview.png"
                className="w-16 mb-4"
              />
            </Link>
            <p className="font-anybody text-sm text-gray-300 text-center md:text-left">
            <b className='text-amber-200'>Harun Or Rashid Sajib,</b> a passionate* Full Stack Web Developer specializing in MERN stack, <b className='text-amber-200'>eyeing to build</b> amazing scalable and modern web applications with a <b className='text-amber-200'>cool & forward thinking</b> company.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" className="flex flex-col items-center md:items-start">
            <h3 className="font-oswald text-xl font-bold text-gray-200 mb-4">Quick Links</h3>
            <ul className="font-anybody space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" className="flex flex-col items-center md:items-start">
            <h3 className="font-oswald text-xl font-bold text-gray-200 mb-4">Contact Info</h3>
            <ul className="font-anybody space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-amber-600" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-amber-600" />
                <div>
                  <a href="tel:+8801734797889" className="hover:text-amber-600">+880 1734797889</a>
                  <br />
                  <a href="tel:+8801905889771" className="hover:text-amber-600">+880 1905889771</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <IoMdMail className="text-amber-600" />
                <a href="mailto:hrsajib001@gmail.com" className="hover:text-amber-600">hrsajib001@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div data-aos="fade-up" className="flex flex-col items-center md:items-start">
            <h3 className="font-oswald text-xl font-bold text-gray-200 mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl text-gray-400 hover:text-amber-600 transition-colors duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/hr-sajib" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-2xl text-gray-400 hover:text-amber-600 transition-colors duration-300" />
              </Link>
              <Link href="https://github.com/Hr-Sajib" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-300 hover:text-amber-600 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="font-anybody text-sm text-gray-400">
            © {new Date().getFullYear()} Harun Or Rashid Sajib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}