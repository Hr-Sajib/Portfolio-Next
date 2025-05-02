'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);

  return (
    <nav className="fixed px-6 py-3 top-0 left-0 w-full flex justify-between items-center z-30 bg-gray-100">
      {/* Logo (Left Side) */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            alt="logo"
            src="https://i.postimg.cc/TwBMPsJP/image.png"
            className="w-16 z-30"
          />
        </div>
      </Link>
      {/* Hamburger Icon (Right Side, Visible on Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Image
            width={24}
            height={24}
            alt="menu"
            src="/favicon.ico"
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
      </div>

      {/* Nav Links (Hidden on Small Screens, Visible on Medium and Up) */}
      <div className="hidden md:flex gap-6">
        <Link
          href="#home"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </Link>
        <Link
          href="#projects"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </Link>
      </div>

      {/* Dropdown Menu (Visible on Small Screens When Open) */}
      {isOpen && (
        <div
          data-aos="fade-down"
          className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-4 py-4 md:hidden shadow-md"
        >
          <Link
            href="#home"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
        </Link>
        </div>
      )}
    </nav>
  );
}