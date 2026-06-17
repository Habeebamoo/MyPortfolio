import { BsTwitterX } from "react-icons/bs"
import { LuLinkedin } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 right-0 flex justify-center pt-10 px-4">
      <nav
        className="flex items-center gap-6 rounded-2xl py-4 px-6 border border-gray-200"
        style={{
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          fontWeight: 700,
          color: "#111",
        }}
      >
        <a 
          href="https://github.com/Habeebamoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Habeeb Amoo GitHub profile"
          className="hover:opacity-50 transition-opacity duration-200"
        >
          <RiGithubLine size={20} />
        </a>
        <a 
          href="https://x.com/Habeeb_O_Amoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Habeeb Amoo on X"
          className="hover:opacity-50 transition-opacity duration-200"
        >
          <BsTwitterX size={19} />
        </a>
        <a 
          href="https://linkedin.com/in/habeeb-amoo-2a5787380"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Habeeb Amoo on LinkedIn"
          className="hover:opacity-50 transition-opacity duration-200"
        >
          <LuLinkedin size={21} />
        </a>
        <a
          href="https://myclivo.com/@habeebamoo08" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Habeeb Amoo on Clivo"
          className="font-outfit font-bold bg-black py-2 px-6 rounded-lg cursor-pointer border border-black active:bg-transparent hover:bg-transparent active:text-black hover:text-black text-white transition-all duration-200"
        >
          Blog
        </a>
      </nav>
    </header>
  )
}

export default Header