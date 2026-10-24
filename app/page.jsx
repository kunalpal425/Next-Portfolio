"use client";

import dynamic from "next/dynamic";
import { Geist } from "next/font/google";
import Link from "next/link";
import { memo } from "react";
import Button from "@/components/ui/button";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Blog from "@/app/blog/page";
import TimelineEffect from '@/app/_TimelineEffect/timeline';
import Projects from "@/app/projects/page";
import { videoPath } from "@/public/Path.js";


const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const EarthCanvas = dynamic(() => import("@/components/ui/EarthCanvas"), {
  ssr: false,
});

function Home() {
  return (
    <main className={`bg-[#000000] text-white overflow-x-hidden ${geist.className}`}>

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center px-6 lg:px-24 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            <h4 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="inline text-cyan-400">KUNAL</span>
              <br />
              <span className="inline flex">Web Developer</span>
            </h4>

            <p className="text-gray-400 text-lg sm:max-w-l max-w-xl leading-relaxed">
              I create modern, fast and scalable web applications with
              clean UI and smooth user experiences. Focused on building
              products that feel simple but powerful.
            </p>

            <div className="flex gap-6 ">
              <Link href="#projects">
                <Button text="My Skills" />
              </Link>

              <Link href="/contact">
                <Button text="Contact Me" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className=" w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <video
              src={videoPath.earth}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
              />
          </div>
        </div> 

      </section>

      {/* FEATURE / ABOUT PREVIEW */}
      <section className="w-full mx-auto ">
        <TimelineEffect />
      </section>


      {/* About Page*/}
      <section className="block sm:hidden sm:mt-12">
        <About />
      </section>

      {/* Contact Page*/}
      <section className="block sm:hidden">
        <Contact />
      </section>

      {/* Blog Page*/}
      <section className="block sm:hidden">
        <Blog />
      </section>

      {/* Projects Page */}
      <section className="">
        <Projects />
      </section>

    </main>
  );
}

export default memo(Home);