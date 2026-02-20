"use client";

import dynamic from "next/dynamic";
import { Geist } from "next/font/google";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useId, memo } from "react";

import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Blog from "@/app/blog/page";

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const EarthCanvas = dynamic(
  () => import("@/components/ui/EarthCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[260px] sm:h-[360px] lg:h-[500px] animate-pulse bg-white/5 rounded-2xl" />
    ),
  }
);

function Home() {
  const maskId = useId();

  return (
    <main className="scroll-smooth overflow-x-hidden bg-[#0a0a0a] text-white">
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-24 py-10">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-10 lg:space-y-12 z-10">
            {/* 🔥 HERO TEXT */}
            <div className="relative w-full h-[260px] sm:h-[600px] lg:h-[480px] xl:h-[520px]">

              {/* glow */}
              <div className="absolute -inset-10 sm:-inset-14 bg-purple-600/25 blur-3xl sm:blur-[90px] rounded-full pointer-events-none" />

              <svg
                className="relative tracking-widest w-full h-full"
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <mask id={maskId}>
                    <rect width="100%" height="100%" fill="black" />

                    {/* ✅ MUCH better scaling */}
                    <text
                      x="50%"
                      y="42%"
                      textAnchor="middle"
                      fontSize="clamp(60px, 10vw, 140px)"
                      fontWeight="800"
                      fontFamily="Arial, Helvetica, sans-serif"
                      fill="white"
                      letterSpacing="4"
                    >
                      WEB
                    </text>

                    <text
                      x="50%"
                      y="66%"
                      textAnchor="middle"
                      fontSize="clamp(60px, 10vw, 140px)"
                      fontWeight="900"
                      fontFamily="Arial, Helvetica, sans-serif"
                      fill="white"
                      letterSpacing="4"
                    >
                      DEVELOPER
                    </text>
                  </mask>
                </defs>

                <foreignObject width="100%" height="100%" mask={`url(#${maskId})`}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </foreignObject>
              </svg>
            </div>

            {/* 🧊 Description */}
            <div className="border rounded-2xl -mt-10 sm:-mt-16 lg:-mt-30  sm:p-7 shadow-lg text-center w-full max-w-4xl bg-gray-800/50 backdrop-blur-sm border-cyan-500/20 mx-auto">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed ">
                Crafting fast, modern and scalable web experiences. I build
                high-performance full-stack applications with clean UI and smooth
                interactions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
                <Link href="/about">
                  <Button text="Skills" />
                </Link>
                <Link href="/contact">
                  <Button text="Contact Me" />
                </Link>
              </div>
            </div>
          </div>

          {/* 🌍 RIGHT SIDE */}
          <div className="w-full h-[280px] sm:h-[380px] lg:h-[500px] xl:h-[580px] -mt-10 sm:-mt-16 lg:-mt-20">
            <EarthCanvas />
          </div>
        </div>
      </section>

      {/* 📱 MOBILE STACKED ROUTES ONLY */}
      <section id="about" className="md:hidden scroll-mt-24">
        <About />
      </section>

      <section id="contact" className="md:hidden scroll-mt-24">
        <Contact />
      </section>

      <section id="blog" className="md:hidden scroll-mt-24">
        <Blog />
      </section>
    </main>
  );
}

export default memo(Home);