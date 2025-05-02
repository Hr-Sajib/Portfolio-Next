'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Use pathname from usePathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and scrolling with 100px offset
  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'projects' || sectionId === 'blogs') {
      router.push(`/${sectionId}`);
      setIsOpen(false);
      return;
    }

    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    } else {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 500);
    }
    setIsOpen(false);
  };

  // Handle home navigation (direct to root without scrolling)
  const handleHomeNavigation = () => {
    router.push('/');
    setIsOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);

  return (
    <nav className="fixed px-6 py-2 top-0 left-0 w-full flex justify-between items-center z-30 bg-gray-100 border-b-1 border-white">
      {/* Logo (Left Side) */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            width={100}
            height={100}
            alt="logo"
            src="https://i.postimg.cc/TwBMPsJP/image.png"
            className={`w-16 z-30`} // Fixed condition and null issue
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
          href="/"
          className={`font-anybody uppercase ${pathname == '/' ? "text-amber-600": null}`}
          onClick={(e) => {
            e.preventDefault();
            handleHomeNavigation();
          }}
        >
          Home
        </Link>
        <Link
          href="/"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('skills');
          }}
        >
          Skills
        </Link>
        <Link
          href="/"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('education');
          }}
        >
          Education
        </Link>
        <Link
          href="/projects"
          className={`font-anybody uppercase ${pathname == '/projects' ? "text-amber-600": null}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('projects');
          }}
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className={`font-anybody uppercase ${pathname == '/blogs' ? "text-amber-600": null}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('blogs');
          }}
        >
          Blogs
        </Link>
        <Link
          href="/"
          className="font-anybody font-medium uppercase"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('contact');
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
            href="/"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleHomeNavigation();
            }}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`font-anybody uppercase ${pathname == '/' ? "text-amber-600": null}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('skills');
            }}
          >
            Skills
          </Link>
          <Link
            href="/"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('education');
            }}
          >
            Education
          </Link>
          <Link
            href="/projects"
            className={`font-anybody uppercase ${pathname == '/projects' ? "text-amber-600": null}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('projects');
            }}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className={`font-anybody uppercase ${pathname == '/blogs' ? "text-amber-600": null}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('blogs');
            }}
          >
            Blogs
          </Link>
          <Link
            href="/"
            className="font-anybody font-medium uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('contact');
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}