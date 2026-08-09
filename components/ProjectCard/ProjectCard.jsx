"use client";

import { motion } from "framer-motion";


export default function ProjectCard({ project }) {
    return (
        <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.7,
                delay: 0.1,
            }}
            className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

                {/* View Project */}
                <div className="absolute inset-0 flex translate-y-8 items-center justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        View Project →
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                        {project.title}
                    </h2>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {project.category}
                    </span>
                </div>

                <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-colors duration-300 group-hover:border-gray-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}