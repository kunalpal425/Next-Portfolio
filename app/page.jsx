"use client";

import dynamic from "next/dynamic";
import { Geist } from "next/font/google";
import Link from "next/link";
import { memo } from "react";
import Button from "@/components/ui/button";

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
    <main className={`bg-[#0a0a0a] text-white overflow-x-hidden ${geist.className}`}>
      
      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center px-6 lg:px-24 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm a
              <span className="block text-cyan-400">
                Web Developer
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              I create modern, fast and scalable web applications with
              clean UI and smooth user experiences. Focused on building
              products that feel simple but powerful.
            </p>

            <div className="flex gap-6 pt-4">

              <Link href="/about">
                <Button text="My Skills" />
              </Link>

              <Link href="/contact">
                <Button text="Contact Me" />
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative w-full h-[420px] lg:h-[560px]">

            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full" />

            <EarthCanvas />

          </div>

        </div>
      </section>

      {/* FEATURE / ABOUT PREVIEW */}

      <section className="px-6 lg:px-24 py-24 border-t border-white/10">

        <div className="max-w-6xl mx-auto text-center space-y-12">

          <h2 className="text-4xl font-bold">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition">

              <h3 className="text-xl font-semibold mb-3">
                Frontend
              </h3>

              <p className="text-gray-400">
                Creating responsive and interactive UI using modern frameworks.
              </p>

            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition">

              <h3 className="text-xl font-semibold mb-3">
                Backend
              </h3>

              <p className="text-gray-400">
                Building scalable APIs and backend logic for powerful apps.
              </p>

            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition">

              <h3 className="text-xl font-semibold mb-3">
                Performance
              </h3>

              <p className="text-gray-400">
                Optimizing websites for speed, SEO and smooth experience.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default memo(Home);