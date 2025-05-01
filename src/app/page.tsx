import Image from "next/image";
import NavBar from "./components/Navbar"; // Import the NavBar component
import EducationSection from "./components/Education";
import ProjectsSection from "./components/Projects";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-start px-8 py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-white rounded-full opacity-50"></div>
        </div>

        {/* Navigation */}
        <NavBar />

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row  gap-10">
          {/* personal image */}
          <Image
            className="lg:w-[15vw] w-[25vw] lg:h-[15vw] h-[25vw] object-cover rounded-full z-20"
            src="https://i.postimg.cc/zfkkdHcS/20211001-233410.jpg"
            height={100}
            width={100}
            alt="My profile photo"
          />

          {/* hero texts */}
          <div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold tracking-tight leading-tight relative z-10">
              Harun Or Rashid Sajib
            </h1>
            <h2 className="text-xl font-extrabold">Full Stack Web Developer</h2>
            <p className="font-anybody text-lg md:text-xl font-normal mt-4 relative z-10">
              Hi, I’m Sajib — a progressive and detail-oriented <b>Developer </b>
              specialized in <b>Cutting edge web technologies</b> and I believe in the <b>speed</b> of development.
            </p>
            <button className="font-bonheur text-2xl mt-6 bg-gray-200 px-8 py-3 rounded-full flex items-center gap-2 relative z-10">
              View Projects <span>→</span>
            </button>
            <div className="flex gap-4 mt-6 relative z-10">
              <a href="#" className="font-anybody font-medium">
                LinkedIn
              </a>
              <span>/</span>
              <a href="#" className="font-anybody font-medium">
                GitHub
              </a>
              <span>/</span>
              <a href="#" className="font-anybody font-medium">
                Resume
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute right-6 bottom-6 flex flex-col items-center gap-10 z-10">
              <span className="font-anybody rotate-90">Scroll Down</span>
              <div className="w-px h-12 bg-gray-400"></div>
              <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      <ProjectsSection/>
      <EducationSection/>

    </>
  );
}
