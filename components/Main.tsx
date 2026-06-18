import { FaDocker, FaGitAlt, FaGolang } from "react-icons/fa6"
import { BiLogoJavascript, BiLogoPostgresql, } from "react-icons/bi"
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { BsSend } from "react-icons/bs"
import { RiNextjsFill } from "react-icons/ri"
import { DiRedis } from "react-icons/di"
import ProjectDisplay from "./ProjectDisplay"
import { projects } from "@/data/projects"

const Main = () => {
  return (
    <>
      <section className="sm:w-100 md:w-140 mx-auto">
        {/* About me */}
        <div className="mt-40 px-2">
          <h1 className="font-inter text-2xl md:text-3xl font-bold">About Me</h1>
          <p className="leading-6 text-gray-700 font-roboto mt-6">
            I craft scalable web applications that helps businesses grow, streamline operations, and deliver real-world results. therefore building systems that are fast, scalable, and built to last.
          </p>
          <p className="leading-6 text-gray-700 font-roboto mt-6">
            I am Habeeb Amoo, a software developer with over 2+ years of experience building high performance applications. with mastery of both frontend and backend development. I specialize in building robust applications, API design, and end-to-end product development.
          </p>
        </div>
      </section>

      <div className="flex-center mt-20">
        <img src="/picture.jpg" className="h-60 md:h-80" />
      </div>

      {/* Projects */}
      <section className="mt-30 px-2 md:max-w-200 mx-auto">
        <h1 className="font-inter font-bold text-xl md:text-2xl text-center mb-10">Some Of My Projects.</h1>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((prj, i) => {
            return (
              <ProjectDisplay
                key={i}
                title={prj.name}
                img={prj.images[0]} 
                description={prj.about}
                location={prj.location}
              />
            )
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-30 md:w-100 mx-auto">
        <h1 className="font-inter font-bold text-xl md:text-2xl text-center mb-7">Technologies.</h1>   

        <div className="relative overflow-hidden w-75 mx-auto dimmed p-5">
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-0 z-10"></div>

          {/* content */}
          <div className="flex-center gap-3 absolute top-0 bottom-0 animate-scroll">
            <div className="text-gray-500"><FaGolang size={50} /></div>
            <div className="text-gray-500"><BiLogoJavascript size={40} /></div>
            <div className="text-gray-500"><SiTypescript size={30} /></div>
            <div className="text-gray-500"><FaReact size={30} /></div>
            <div className="text-gray-500"><RiNextjsFill size={36} /></div>
            <div className="text-gray-500"><LiaNodeJs size={40} /></div>
            <div className="text-gray-500"><SiExpress size={35} /></div>
            <div className="text-gray-500"><BiLogoPostgresql size={35} /></div>
            <div className="text-gray-500"><DiRedis size={37} /></div>
            <div className="text-gray-500"><SiMongodb size={35} /></div>
            <div className="text-gray-500"><FaGitAlt size={35} /></div>
            <div className="text-gray-500"><FaDocker size={35} /></div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-t border-b border-gray-200 py-10 mt-30 md:w-150 mx-auto">
        <h1 className="font-inter font-bold text-lg md:text-xl">Work Experience</h1>

        <div className="md:flex-between mt-10">
          <p className="font-inter text-[12px] text-gray-500">Dec 2025 - Present</p>
          <p className="font-inter max-md:mt-3">
            Software Engineer at 
            <span className="bg-blue-100/60 border border-blue-100 text-blue-600 text-sm rounded-lg ml-3 font-inter py-1 px-3">Orbitrixng</span>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-30 px-2 sm:w-100 md:w-120 mx-auto">
        <h1 className="font-inter font-bold text-2xl md:text-3xl text-center">Let's work together.</h1> 
        
        <p className="text-muted text-center font-inter text-sm mt-2">
          I'm always interested in hearing about new projects and oppurtunities
        </p>

        <form action="https://formspree.io/f/xwpwgvvp" method="POST" className="mt-6">
          <div>
            <label htmlFor="name" className="font-inter">Name</label>
            <input 
              type="text" 
              name="Name"
              className="contact-input" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-inter">Email</label>
            <input 
              type="email" 
              name="Email"
              className="contact-input" 
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="font-inter">Message</label>
            <textarea 
              rows={4} 
              name="Message"
              className="contact-input"
              required
            ></textarea>
          </div>

          <button className="py-3 px-5 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-md active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center w-full gap-2 mt-4">
            <span>Send Message</span>
            <BsSend />
          </button>

        </form>      
      </section>
    </>
  )
}

export default Main