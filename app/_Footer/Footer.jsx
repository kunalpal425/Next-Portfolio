import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const iconStyle =
    "group relative p-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300";

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-11 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Kunal
          </h3>
          <span className="text-xs text-gray-500 mt-1">
            MERN Stack Developer
          </span>
        </div>

        {/* 🚀 Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kunalpal425?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.hackerrank.com/profile/kunalpal6397"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
            aria-label="HackerRank"
          >
            <SiHackerrank size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:kunalpal6397@gmail.com"
            className={iconStyle}
            aria-label="Email"
          >
            <MdEmail size={18} />
          </a>
        </div>


        <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Kunal. Crafted with ❤️ in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;