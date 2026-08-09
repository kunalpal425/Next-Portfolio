"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SkillCard from "@/components/TechStack/TechStack";

const projects = [
  {
    title: "Aura Vault",
    category: "Mobile App",
    description:
      "A calculator-style privacy vault for securely storing photos, videos and files.",
    image: "/projects/aura-vault.png",
    technologies: ["React Native", "Expo", "Firebase"],
    link: "#",
  },
  {
    title: "Portfolio",
    category: "Web App",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind"],
    link: "#",
  },
  {
    title: "Calculator",
    category: "Web App",
    description:
      "A clean and responsive calculator application with a modern interface.",
    image: "/projects/calculator.png",
    technologies: ["React", "JavaScript", "CSS"],
    link: "#",
  },
];

export default function Projects() {
  const [activeMenu, setActiveMenu] = useState("Project");

  const menus = ["Project", "Certificate", "Tech Stack"];

  return (
    <div className="flex flex-col items-center justify-center mt-5 p-20">
      <ul className="flex gap-15 text-sm border-2 border-gray-300 text-black bg-[#ADADAD] rounded-full shadow-md pt-2 pb-2 pl-4 pr-4">
        {menus.map((menu) => (
          <li
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`cursor-pointer px-4 py-2 rounded-full ${
              activeMenu === menu ? "border-2 bg-[#808080]" : ""
            }`}
          >
            {menu}
          </li>
        ))}
      </ul>
      {activeMenu === "Project" ? (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </>
      ) : activeMenu === "Certificate" ? (
        <ProjectCard />
      ) : activeMenu === "Tech Stack" ? (
        <SkillCard/>
      ) : null}
    </div>
  );
}
