import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const iconStyle =
    "p-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300";

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-11 py-6 bg-transparent backdrop-blur-sm border-t border-white/10">
      
      {/* Logo / Name */}
      <h3 className="text-xl font-bold">Kunal</h3>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/kunalpal425?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.hackerrank.com/profile/kunalpal6397"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
          aria-label="HackerRank"
        >
          <SiHackerrank size={20} />
        </a>

        <a
          href="https://www.linkedin.com/" // 🔥 replace with your profile
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="mailto:kunalpal6397@gmail.com"
          className={iconStyle}
          aria-label="Email"
        >
          <MdEmail size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center md:text-right">
        © {new Date().getFullYear()} Kunal. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
