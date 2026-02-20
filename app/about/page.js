"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

/* ===============================
   🚀 Dynamic Robot (BIG PERFORMANCE WIN)
================================ */
const Robot = dynamic(() => import("@/components/ui/Robot"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[420px] bg-white/5 animate-pulse rounded-2xl" />
  ),
});

/* ✅ lighter + faster hover */
const iconBase =
  "p-3 rounded-xl bg-white/5 border border-white/10 " +
  "hover:bg-cyan-400/20 hover:border-cyan-400 " +
  "hover:scale-110 active:scale-95 " +
  "transition-transform duration-300 will-change-transform";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0b0f19] text-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* ================= LEFT ================= */}
        <div className="pt-6 sm:pt-10 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
            A Bit About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
            I am a passionate and detail-oriented web developer who enjoys
            creating modern, responsive, and user-friendly web applications.
            With hands-on experience in technologies like Next.js, React, and
            Tailwind CSS,
          </p>

          <p className="text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
            I am constantly learning and improving my skills to stay updated
            with the latest trends in web development. Whether working on
            personal projects or client work, I aim to write clean code, solve
            problems efficiently, and create smooth user experiences. My goal
            is to contribute to impactful projects while continuing to grow as
            a developer.
          </p>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            
            <a
              href="https://github.com/kunalpal425?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/kunalpal6397"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="HackerRank"
            >
              <SiHackerrank size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:kunalpal6397@gmail.com"
              className={iconBase}
              aria-label="Email"
            >
              <MdEmail size={20} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT ROBOT ================= */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm sm:max-w-md h-[320px] sm:h-[420px] will-change-transform">
            <Robot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);