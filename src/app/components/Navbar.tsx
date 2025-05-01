"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 20,
    });
  }, []);

  return (
    <nav data-aos="fade-down" className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-30 bg-gray-100">
      {/* Logo (Left Side) */}
      <div className="flex items-center gap-2">
        <Image
          width={100}
          height={100}
          alt="logo"
          src="https://i.postimg.cc/TwBMPsJP/image.png"
          className="w-16 z-30"
        />
      </div>

      {/* Hamburger Icon (Right Side, Visible on Small Screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Image
            width={24}
            height={24}
            alt="menu"
            src="/favicon.ico" // Replace with your hamburger icon or logo
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Nav Links (Hidden on Small Screens, Visible on Medium and Up) */}
      <div  className="hidden md:flex gap-6 ">
        <Link href="#" className="font-anybody font-medium uppercase">
          Home
        </Link>
        <Link href="#" className="font-anybody font-medium uppercase">
          About
        </Link>
        <Link href="#" className="font-anybody font-medium uppercase">
          Works
        </Link>
        <Link href="#" className="font-anybody font-medium uppercase">
          Contact
        </Link>
      </div>

      {/* Dropdown Menu (Visible on Small Screens When Open) */}
      {isOpen && (
        <div data-aos="fade-down" className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-4 py-4 md:hidden shadow-md">
          <Link
            href="#"
            className="font-anybody font-medium uppercase"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-anybody font-medium uppercase"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="font-anybody font-medium uppercase"
            onClick={() => setIsOpen(false)}
          >
            Works
          </Link>
          <Link
            href="#"
            className="font-anybody font-medium uppercase"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}