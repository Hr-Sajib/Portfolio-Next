'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import EducationSection from '../components/Education';
import ProjectsSection from '../components/Projects';
import SkillsSection from '../components/Skills';
import NavBar from '../components/Navbar';
import Contacts from '../components/Contacts';
import BlogSection from '../components/Blogs';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

export default function HomePage() {
  // Handle smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-start px-8 py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-white rounded-full opacity-50"></div>
        </div>

        {/* Navigation */}
        <NavBar />

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10" data-aos="fade-up">
          {/* Personal Image */}
          <Image
            data-aos="zoom-in"
            className="w-40 h-40 lg:w-64 lg:h-64 object-cover rounded-full"
            src="https://i.postimg.cc/zfkkdHcS/20211001-233410.jpg"
            height={300}
            width={300}
            alt="My profile photo"
          />

          {/* Hero Texts */}
          <div>
            <h1 className="font-anybody text-5xl md:text-6xl mb-2 font-bold tracking-tight leading-tight">
              Harun Or Rashid <span className="bg-gray-200 px-2">Sajib</span>
            </h1>
            <h2 className="text-xl font-extrabold">Full Stack Web Developer</h2>
            <h2 className="text-xl text-amber-600 font-extrabold">MERN</h2>
            <p className="font-anybody text-lg md:text-xl font-normal mt-4">
              Hi, I’m Sajib — a progressive and detail-oriented <b>Developer</b> specialized in <b>cutting-edge web technologies</b> and I believe in the <b>speed</b> of development.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-bonheur text-2xl mt-6 bg-gray-200 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-orange-200 transition transition-color duration-500 ease-in-out border-orange-900"
            >
              View Projects <span>→</span>
            </button>
            <div className="flex gap-4 mt-6 items-center">
              <Link href="https://www.linkedin.com/in/hr-sajib" target="_blank" rel="noopener noreferrer" className="font-anybody font-medium hover:text-amber-600">
                LinkedIn
              </Link>
              <span>/</span>
              <Link href="https://github.com/Hr-Sajib" target="_blank" rel="noopener noreferrer" className="font-anybody font-medium hover:text-amber-600">
                GitHub
              </Link>
              <span>/</span>
              <div className="flex items-center gap-2">
                <Link href="https://drive.google.com/file/d/1dpB4-T-xs10OohhVjedbrdDFXktGO0Et/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-anybody font-medium hover:text-amber-600">
                  Resume
                </Link>
                <button>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1dpB4-T-xs10OohhVjedbrdDFXktGO0Et"
                    download
                    className="font-anybody font-medium hover:text-amber-600 flex items-center"
                  >
                    <FaDownload className="text-lg" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute lg:right-6 right-0 bottom-6 flex flex-col items-center gap-10 z-10 animate-bounce">
          <span className="font-anybody rotate-90 text-gray-600">Scroll Down</span>
          <div className="w-px h-12 bg-gray-400"></div>
          <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45"></div>
        </div>
      </section>


      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />
      
      {/* Contacts Section  */}
      <Contacts/>

      <div className="h-full w-full bg-black text-white lg:hidden flex-col flex  py-10">
          {/* Phone and Address */}
          <div className="ml-10">
            <div className="flex gap-5 items-center">
              <FaLocationDot className="text-3xl" />
              <div data-aos="fade-right">
                <p>Dhaka</p>
                <p>Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <FaPhoneAlt className="text-2xl" />
              <div data-aos="fade-right">
                <p>+880 1734797889</p>
                <p>+880 1905889771</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <IoMdMail className="text-2xl" />
              <div>
                <p data-aos="fade-right">hrsajib001@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div data-aos="zoom-in" className="flex gap-7 mt-20 ml-10">
            <Link href="https://www.facebook.com/HR.Sajib001" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-3xl text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hr-sajib" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-4xl text-white" />
            </Link>
          </div>
        </div>
      

      {/* Blogs Section  */}
      <BlogSection/>

    </>
  );
}