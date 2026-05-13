"use client";

import { heroText } from "@/utils/animation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()

  const toCv = () => {
    router.push("https://drive.google.com/file/d/1WR548ukwwPpgbrW4S1meLXjHdiHHZWs9/view?usp=sharing")
  };

  return (
    <section className="sm:w-100 md:w-140 mx-auto pt-50">
      <div className="h-30 w-30 rounded-full overflow-hidden shadow-lg border-3 border-white">
        <img src="/anime.jpg" className="h-full w-full object-cover" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={heroText}
      >
        <h1 className="font-roboto text-orange-600 mt-6 md:text-lg" data-aos="zoom-in">
          Hey, I'm Habeeb Amoo.
        </h1>

        <h1 className="text-3xl md:text-5xl font-outfit mt-2">Software Engineer.</h1>

        <p className="mt-2 md:mt-4 text-gray-500 mb-6 w-[90%] font-roboto md:w-[70%]">
          I craft premium digital experiences, creating fast, secure and reliable solutions.
        </p>
      </motion.div>

      <div>
        <button
          onClick={toCv} 
          className="py-3 px-5 bg-black border cursor-pointer border-black text-white text-sm font-jsans rounded-xl active:bg-transparent hover:bg-transparent hover:text-black active:text-black"
        >
          Download CV
        </button>
      </div>
    </section>
  )
}

export default Hero