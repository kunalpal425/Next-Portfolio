import React from 'react'
import Robot from '@/components/ui/Robot';
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
    return (
        <section className="min-h-screen bg-[#0b0f19] text-white px-6 md:px-16 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        A Bit About <span className="text-cyan-400">Us</span>
                    </h1>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        I am a passionate and detail-oriented web developer who enjoys creating modern, responsive, and user-friendly web applications. With hands-on experience in technologies like Next.js, React, and Tailwind CSS, 
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-10">
                        I am constantly learning and improving my skills to stay updated with the latest trends in web development. Whether working on personal projects or client work, I aim to write clean code, solve problems efficiently, and create smooth user experiences. My goal is to contribute to impactful projects while continuing to grow as a developer.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/kunalpal425?tab=repositories"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 transition"
                        >
                            <abbr title="GitHub">
                                <FaGithub size={20} />
                            </abbr>
                            <span className="sr-only rounded-2xl opacity-60">GitHub</span>
                        </a>

                        <a
                            href="https://www.hackerrank.com/profile/kunalpal6397"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 transition"
                        >
                            <abbr title="HackerRank">
                                <SiHackerrank size={20} />
                            </abbr>
                            <span className="sr-only rounded-2xl opacity-60">HackerRank</span>
                        </a>

                        <a
                            href=""
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 transition"
                        >
                            <abbr title="LinkedIn">
                                <FaLinkedinIn size={20} />
                            </abbr>
                            <span className="sr-only rounded-2xl opacity-60">LinkedIn</span>

                        </a>

                        <a
                            href="mailto:kunalpal6397@gmail.com"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-400/20 hover:border-cyan-400 transition"
                        >
                            <abbr title="Email">
                                <MdEmail size={20} />
                            </abbr>
                            <span className="sr-only rounded-2xl opacity-60">Email</span>
                        </a>

                    </div>
                </div>

                {/* RIGHT ROBOT */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-md">
                        <Robot />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
