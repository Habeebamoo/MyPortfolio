"use client";

import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-165 mx-auto px-4 mt-12 pb-20">
      {/* Divider */}
      <hr className="border-none border-t border-[#E5E5E1]" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
        {/* Copyright */}
        <p className="text-[12px] text-[#B0B0AA]">
          © {year} Habeeb Amoo
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-[#9B9B9B]">
          <a 
            href="https://github.com/Habeebamoo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Habeeb Amoo GitHub profile"
            className="hover:text-[#0E0E0E] transition-colors duration-150"
          >
            <BsGithub size={16} />
          </a>

          <a 
            href="https://x.com/habebamoo08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Habeeb Amoo on X"
            className="hover:text-[#0E0E0E] transition-colors duration-150"
          >
            <BsTwitterX size={14} />
          </a>

          <a 
            href="https://linkedin.com/in/habeeb-amoo-2a5787380"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Habeeb Amoo on LinkedIn"
            className="hover:text-[#0E0E0E] transition-colors duration-150"
          >
            <BsLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;