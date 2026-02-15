import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 pb-40 w-[90%] sm:w-100 mx-auto">
      <hr className="text-mutedLg" />

      <p className="mt-6 text-center font-inter text-sm text-muted">
        Copywright &copy; {year} Habeeb Amoo.
      </p>

      <div className="flex-center gap-6 text-muted mt-6">
        <a 
          href="https://github.com/Habeebamoo"
          target="_blank"
          rel="noopener noeferrer"
        >
          <BsGithub size={20} />
        </a>

        <a 
          href="https://x.com/Habeeb_O_Amoo"
          target="_blank"
          rel="noopener noeferrer"
        >
          <BsTwitterX size={19} />
        </a>

        <a 
          href="https://linkedin.com/in/habeeb-amoo-2a5787380"
          target="_blank"
          rel="noopener noeferrer"
        >
          <BsLinkedin size={19} />
        </a>
      </div>

    </footer>
  )
}

export default Footer