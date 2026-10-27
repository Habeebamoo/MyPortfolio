"use client";

import { heroText } from "@/src/utils/animation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const toResume = () => {
    router.push("https://drive.google.com/file/d/1o1yfgYKkL7fFPDMYojvezTfhr5BJzTQk/view?usp=sharing");
  };

  return (
    <section className="w-full max-w-165 mx-auto pt-30 pb-16 px-5">
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroText}
        className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8"
      >
        {/* Circular Avatar Image */}
        <div className="w-25 h-25 md:w-30 md:h-30 rounded-full overflow-hidden shrink-0 border border-[#E5E5E1]">
          <img 
            src="/avatar.jpg" 
            alt="Habeeb Amoo" 
            className="w-full h-full object-cover object-[25%_99%]"
          />
        </div>

        {/* Content Right Section */}
        <div className="flex-1">
          {/* Title matching fluid sizing and structure */}
          <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-semibold text-[#0E0E0E] leading-[1.1] tracking-[-0.035em] mb-7">
            Software<br />
            Engineer
          </h1>

          {/* About Paragraphs */}
          <p className="text-[15px] text-[#3D3D3D] leading-[1.8] max-w-140">
            I design and build reliable software systems, backend services, APIs, and infrastructure — with a focus on performance, scalability, and efficient architecture.
          </p>
          
          <p className="text-[15px] text-[#3D3D3D] leading-[1.8] max-w-140 mt-4 mb-7">
            From building the system to preparing it for real-world scale, I focus on engineering solutions that work reliably without unnecessary complexity or infrastructure cost.
          </p>

          {/* Underlined CV Link nested inside content flow */}
          <div className="text-[15px] text-[#3D3D3D] leading-[1.8]">
            <button
              onClick={toResume}
              className="underline underline-offset-[3px] text-[#3D3D3D] hover:text-[#0E0E0E] transition-colors duration-150 cursor-pointer"
            >
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;