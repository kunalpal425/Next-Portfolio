"use client";

import React, { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";

/* ===== Dynamic Robot ===== */
const Robot = dynamic(() => import("@/components/ui/Robot"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[420px] bg-white/5 animate-pulse rounded-2xl" />
  ),
});

/* ===== Animation Variants ===== */
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

/* ===== Icon Styles ===== */
const iconBase =
  "p-3 rounded-xl bg-white/5 border border-white/10 " +
  "hover:bg-cyan-400/20 hover:border-cyan-400 " +
  "hover:scale-110 active:scale-95 " +
  "transition-all duration-300";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("show");
    }, 1200);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white py-16 md:py-20 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ===== Robot ===== */}
        <div className="hidden sm:flex justify-center">
  <div className="w-full h-64 md:w-80 md:h-80">
    <Robot />
  </div>
</div>

        {/* ===== Content ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            A Little{" "}
            <span className="text-cyan-400">More About</span> Me
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-base md:text-lg leading-8 mb-6"
          >
            I am a passionate and detail-oriented web developer who enjoys
            creating modern, responsive, and user-friendly web applications.
            With hands-on experience in HTML, CSS, GSAP, ShadCN, Next.js,
            React, and Tailwind CSS.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-base md:text-lg leading-8 mb-10"
          >
            I am constantly learning and improving my skills to stay updated
            with the latest trends in web development. My goal is to contribute
            to impactful projects while continuing to grow as a developer.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start items-center gap-4 flex-wrap"
          >
            <a
              href="https://github.com/kunalpal425?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/kunalpal6397"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="HackerRank"
            >
              <SiHackerrank size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-pal-4aa48134b/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBase}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="mailto:kunalpal6397@gmail.com"
              className={iconBase}
              aria-label="Email"
            >
              <MdEmail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);