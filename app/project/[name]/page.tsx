"use client";

import { projects } from "@/data/projects";
import { useParams, useRouter } from "next/navigation"
import { BiLink } from "react-icons/bi";
import { BsArrowLeft, BsGithub } from "react-icons/bs";

const page = () => {
  const params = useParams()
  const projName = params.name;
  const router = useRouter()

  const project = projects.find(prj => prj.slug == projName);

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <div className="pt-10 mb-10 sm:flex-center">
        <button 
          onClick={() => router.push("/")} 
          className="py-2 px-4 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center gap-2"
          >
          <BsArrowLeft />
          <span>Back</span>
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl font-outfit sm:text-center">{project?.name}</h1>
      <p className="mt-2 sm:mt-3 text-muted font-inter sm:text-center">{project?.description}.</p>

      <div className="font-spaceG text-sm text-orange-700 flex-start sm:flex-center flex-wrap gap-2 mt-4">
        {project?.stack.map((stack, i) => {
          return (
            <div key={i} className="py-1 px-3 bg-orange-100 border border-orange-200 rounded-lg">
              {stack}
            </div>
          )
        })}
      </div>

      {/* About */}
      <h1 className="font-inter text-xl font-bold mt-10 sm:mt-20 sm:text-center">
        About the Project
      </h1>

      <p className="mt-2 sm:text-center sm:w-[80%] md:w-[50%] mx-auto text-muted font-inter">
        {project?.about}
      </p>

      {/* Links */}
      <div className="mt-5 sm:mt-15 flex-start sm:flex-center gap-3">
        <a 
          href={project?.url}
          target="_blank"
          className="py-3 px-5 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center gap-2"
        >
          <span>View Live</span>
          <BiLink />
        </a>

        <a 
          href={project?.repo}
          target="_blank"
          className="py-3 px-5 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-lg active:bg-transparent hover:bg-transparent hover:text-black active:text-black flex-center gap-2"
        >
          <span>View Code</span>
          <BsGithub />
        </a>
      </div>

      <div className="mt-10 sm:mt-20 mb-20 w-[90%] mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {project?.images.map((img, i) => {
          return (
            <div key={i} className="p-6 bg-white/30 backdrop-blur-md border border-mutedLg rounded-lg">
              <img src={img} className="rounded-md border border-mutedLg" />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default page