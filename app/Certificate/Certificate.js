import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const projects = null;

const Certificate = () => {
  return projects != null ? (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-2xl font-bold text-center mt-10">
        No Certificates Available
      </h1>
      <p className="text-center mt-4">Please check back later for updates.</p>
    </div>
  );
};

export default Certificate;
