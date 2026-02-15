import { FaGolang } from "react-icons/fa6"
import { BiLogoJavascript, BiLogoPostgresql, } from "react-icons/bi"
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { LiaNodeJs } from "react-icons/lia"
import { BsSend } from "react-icons/bs"
import { RiNextjsFill } from "react-icons/ri"
import ProjectDisplay from "./ProjectDisplay"

const Main = () => {
  return (
    <>
      <section className="sm:w-100 mx-auto">
        {/* About me */}
        <div className="mt-40 px-2">
          <h1 className="font-inter text-2xl font-bold">About Me</h1>
          <p className="leading-6 text-gray-600 font-inter mt-6">
            I craft scalable web applications that helps businesses grow, streamline operations, and deliver real-world results. therefore building systems that are fast, scalable, and built to last.
          </p>
          <p className="leading-6 text-gray-600 font-inter mt-6">
            I am Habeeb Amoo, a software developer with over 2+ years of building high performance applications. with mastery of both frontend and backend development. I specialize in building robust applications, API design, and end-to-end product development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-30 px-2 md:w-200 mx-auto">
        <h1 className="font-inter font-bold text-xl text-center mb-10">Some Of My Projects.</h1>

        {/* display */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectDisplay 
            img="/maildrop-img1.png" 
            title="MailDrop" 
            description="An Email Marketing tool designed for managing audiences and sending bulk emails." 
            location="/project/maildrop"
          />
          <ProjectDisplay 
            img="/flash-img1.png" 
            title="FlashQuiz" 
            description="A Quiz website that allows users to take quizzess and shows progress." 
            location="/project/flashquiz"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-30 md:w-100 mx-auto">
        <h1 className="font-inter font-bold text-xl text-center mb-7">Technologies.</h1>   

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
            <div className="text-gray-500"><BiLogoPostgresql size={35} /></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 px-2 md:w-100 mx-auto">
        <h1 className="font-inter font-bold text-2xl text-center">Let's work together.</h1> 
        
        <p className="text-muted text-center font-inter text-sm mt-1">
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