"use client";

import { useRouter } from "next/navigation";
import { SlArrowRight } from "react-icons/sl"

interface Props {
  img: string,
  title: string,
  description: string
  location: string
}

const ProjectDisplay = ({ img, title, description, location }: Props) => {
  const router = useRouter();

  const toProject = () => {
    router.push(location)
  }

  const truncate = (text: string, maxLength: number) => {  
    if (text.length <= maxLength) {   
      return text;
    } else {
      return text.slice(0, maxLength) + '...';
    }
  };

  return (
    <div className="border border-mutedLg backdrop-blur-md p-6 rounded-2xl">
      <div className="rounded-xl overflow-hidden border border-gray-300">
        <img src={img} className="w-full h-full" />
      </div>
      <div className="pl-1 mb-2 mt-6">
        <h1 className="font-inter font-bold text-xl">{title}</h1>

        <p className="mt-2 font-roboto text-[15px] text-gray-700 mb-4">{truncate(description, 100)}</p>

        <button 
          onClick={toProject} 
          className="py-4 px-6 bg-gray-200 cursor-pointer text-sm font-jsans rounded-xl flex-center gap-2"
        >
          View Project
          <SlArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

export default ProjectDisplay