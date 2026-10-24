"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImgPath from "@/public/Path";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SkillCard from "@/components/TechStack/TechStack";
import Certificate from "@/app/Certificate/Certificate";

const projects = [
  {
    title: "Aura Vault",
    category: "Mobile App",
    description:
      "A calculator-style privacy vault for securely storing photos, videos and files.",
    image: ImgPath.auraVault,
    technologies: ["React Native", "Expo", "Firebase"],
    link: "https://github.com/kunalpal425",
  },
  {
    title: "Portfolio",
    category: "Web App",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS.",
    image: ImgPath.portfolio,
    technologies: ["Next.js", "React", "Tailwind"],
    link: "https://next-portfolio-wine-one.vercel.app/",
  },
  {
    title: "Event-Management",
    category: "Web App",
    description:
      "A clean and responsive event management application with a modern interface.",
    image: ImgPath.eventManagement,
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://event-manage-frontend-zeta.vercel.app/",
  },
];

export default function Projects() {
  const [activeMenu, setActiveMenu] = useState("Project");

  const menus = ["Project", "Certificate", "Tech Stack"];

  return (
    <div
      id="projects"
      className="mt-5 flex w-full flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-20"
    >
      {/* MENU */}
      <ul className="flex w-full max-w-[90vw] flex-wrap items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-[#ADADAD] p-2 text-xs text-black shadow-md sm:gap-3 sm:p-2.5 sm:text-sm md:gap-4 lg:max-w-fit lg:gap-6 lg:px-5 lg:py-2.5">
        {menus.map((menu) => (
          <li
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`cursor-pointer rounded-full px-3 py-2 text-center transition-all duration-300 sm:px-4 ${
              activeMenu === menu
                ? "border-2 border-white bg-[#808080]"
                : "hover:bg-[#999999]"
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>

      {/* ANIMATED CONTENT */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMenu}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            {activeMenu === "Project" && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}

            {activeMenu === "Certificate" && <Certificate />}

            {activeMenu === "Tech Stack" && <SkillCard />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
