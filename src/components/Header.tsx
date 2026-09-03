"use client";

import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { RiGithubLine } from "react-icons/ri";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <header className="w-full max-w-165 mx-auto pt-9 px-5 flex items-center justify-between">
      {/* Name / Brand */}
      <span className="text-[13px] font-medium text-[#0E0E0E] tracking-[-0.01em]">
        <span className="hidden min-[380px]:inline">Habeeb Amoo</span>
        <span className="inline min-[380px]:hidden">HA</span>
      </span>

      {/* Navigation & Theme Toggle */}
      <nav className="flex items-center gap-4 min-[380px]:gap-5">
        <a 
          href="https://github.com/Habeebamoo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-[#3D3D3D] transition-colors duration-150"
        >
          <RiGithubLine size={16} />
        </a>
        <a 
          href="https://x.com/habeebamoo08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="text-[#3D3D3D] transition-colors duration-150"
        >
          <BsTwitterX size={14} />
        </a>
        <a 
          href="https://linkedin.com/in/habeeb-amoo-2a5787380"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-[#3D3D3D] transition-colors duration-150"
        >
          <LuLinkedin size={16} />
        </a>

        {/* Minimalist Vertical Divider */}
        <span className="h-3 w-px bg-[#E5E5E1] dark:bg-[#3D3D3D]" />

        <a
          href="https://myclivo.com/@habeebamoo08" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3D3D3D] text-sm transition-colors duration-150"
        >
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;