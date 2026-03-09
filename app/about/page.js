"use client";

import React, { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

/* ===============================
   🚀 Dynamic Robot
================================ */
const Robot = dynamic(() => import("@/components/ui/Robot"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 sm:h-105 bg-white/5 animate-pulse rounded-2xl" />
  ),
});

/* ===============================
   🎬 Animation Variants
================================ */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ===============================
   ICON STYLE
================================ */

const iconBase =
  "p-3 rounded-xl bg-white/5 border border-white/10 " +
  "hover:bg-cyan-400/20 hover:border-cyan-400 " +
  "hover:scale-110 active:scale-95 " +
  "transition-transform duration-300 will-change-transform";

const About = () => {
  const controls = useAnimation();

  /* ===============================
     Run animation AFTER page transition
  ================================ */
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("show");
    }, 1200); // delay must match your page transition

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="sm:pt-10 md:pt-25"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight"
          >
            A Little <span className="text-cyan-400">More About</span> Me
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            variants={fadeUp}
            className="text-gray-300 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base"
          >
            I am a passionate and detail-oriented web developer who enjoys
            creating modern, responsive, and user-friendly web applications.
            With hands-on experience in technologies like Html, Css, Gsap,
            ShadCN, Next.js, React, and Tailwind CSS.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base"
          >
            I am constantly learning and improving my skills to stay updated
            with the latest trends in web development. My goal is to contribute
            to impactful projects while continuing to grow as a developer.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 sm:gap-4 flex-wrap"
          >
            <a
              href="https://github.com/kunalpal425?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/kunalpal6397"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
            >
              <SiHackerrank size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-pal-4aa48134b/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:kunalpal6397@gmail.com"
              className={iconBase}
            >
              <MdEmail size={20} />
            </a>
          </motion.div>

        </motion.div>

        {/* ================= RIGHT ROBOT ================= */}
        <div className="flex justify-center md:justify-end">
          <div className="hidden lg:block w-full max-w-sm sm:max-w-md h-80 sm:h-105 will-change-transform">
            <Robot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);