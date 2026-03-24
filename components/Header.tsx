import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

const Header = () => {
  return (
    <header className="fixed z-20 top-0 left-0 right-0 p-8 flex-center">
      <nav className="flex-center gap-6 glass-header border border-gray-100 rounded-2xl py-4 px-6 text-[#444]">

        <a 
          href="https://github.com/Habeebamoo"
          target="_blank"
          rel="noopener noeferrer"
          aria-label="Habeeb Amoo GitHub profile"
        >
          <BsGithub size={26} />
        </a>

        <a 
          href="https://x.com/Habeeb_O_Amoo"
          target="_blank"
          rel="noopener noeferrer"
          aria-label="Habeeb Amoo on X"
        >
          <BsTwitterX size={25} />
        </a>

        <a 
          href="https://linkedin.com/in/habeeb-amoo-2a5787380"
          target="_blank"
          rel="noopener noeferrer"
          aria-label="Habeeb Amoo on LinkedIn"
        >
          <BsLinkedin size={25} />
        </a>

        <a
          href="https://myclivo.com/@habeebamoo08" 
          target="_blank"
          rel="noopener noeferrer"
          aria-label="Habeeb Amoo on Clivo"
          className="font-outfit bg-black py-2 px-5 rounded-lg cursor-pointer border active:bg-white hover:bg-white active:text-black hover:text-black text-white"
        >
          Blog
        </a>

      </nav>
    </header>
  )
}

export default Header